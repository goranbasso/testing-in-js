import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from "@testing-library/user-event";

/**
 * Dette testsettet er ment å demonstrere hvordan man kan bruke mocking for å teste komponenter, uten å måtte
 * ha en ekstern kjørende tjeneste å koble seg opp mot for å utveksle data.
 * 
 * Å benytte mocket data er veldig nyttig når man tester komponenter og applikasjoner som gjør nettverkskall,
 * da man alltid kan få det samme kallet, og ikke trenger å kjøre testene sine mot tjenester som potensielt kan være ustabile.
 * Enhetstester (og komponenttester) burde være deterministiske, og alltid ha det samme utfallet.
 * 
 * Ta en titt i /mocks/-mappen, der ligger det en fil som heter handlers.js, hvor vi definerer hvilken respons
 * forskjellige endepunkter skal returnere.
 * Gjør vi et kall mot /users, gjennom fetch-APIet (getAllUsers()-funksjonen i App.jsx), vil vi få en respons
 * med HTTP-statuskode 200 OK, og en body som består av en liste av bruker-objekter.
 * 
 * Applikasjonen vår gjør dette kallet, og bruker innholdet av responsen.
 *
 * Kjør følgende kommando i din terminal for å starte:
 * npm run test:watch oppgave3
 */

/**
  * Litt om mocking av nettverkskall for de interesserte:
  * 
  * Det er vanlig å mocke selve funksjonen som gjør nettverkskall, for eksempel fetch()-metoden,
  * eller en funksjon som selv kaller fetch().
  * Dette gjør man ved å instruere testrammeverket til å gjøre noe spesifikt dersom en spesifisert metode blir kalt:
  * 
  *  global.fetch = jest.fn(() =>
  *    Promise.resolve({
  *      json: () => Promise.resolve({ some: 'value' }),
  *    })
  *  );
  * Her setter vi global.fetch til å være en jest-mock. global.fetch er vanligvis selve fetch-implementasjonen,
  * men den overskrives i testen. Har man kode som kaller fetch().json(), så returneres { some: 'value' }.
  * Ingen annen funksjonalitet i fetch() fungerer, så sant man ikke mocker dette også.
  * Man må altså koble fra en del av funksjonaliteten til applikasjonen for å kunne teste koden skikkelig.
  * Og testkoden får en relativt sterk knytning til implementasjonen av koden vår,
  * som kan bety at vi må bruke en del tid på å endre tester hvis vi endrer koden vår.
  * 
  * I denne applikasjonen mocker vi på en annen måte. Vi bruker en mock server fra biblioteket MSW.
  * Den kjører opp en faktisk server som lytter på alle nettverkskall som blir gjort i det isolerte kjøremiljøet til testene.
  * Man definerer opp hvilke stier man vil at serveren skal svare på, alt annet går ut til internett.
  * Vi slipper altså å begrense hva vår egen applikasjon gjør når vi skal teste nettverkskall.
  * Vi sender ut alle kall, og passer på å avskjære de og returnere en respons som vi kan bruke i testingen.
  * Hvis vi da bestemmer oss for å endre vår implementasjon av datautveksling så trenger vi ikke endre på mock-oppsettet vårt.
  * (MSW kan også brukes med en service worker, med det samme oppsettet, til å bruke mocket data ved kjøring av applikasjonen.
  * Dersom en ekstern tjeneste vi er avhengige av er utilgjengelig kan vi da bare slå på service workeren vår, og få mocket data til bruk i applikasjonen.)
  * 
  * 
  * Merk at det også finnes tester som gjør kall mot eksterne tjenester, og sjekker at responsen fra de er riktig,
  * og blir behandlet riktig av en applikasjon.
  * Dette er gjerne del av integrajsonstester, eller ende-til-ende-tester, men det er utenfor scopen til denne workshoppen.
  *
  */

/**
 * Først en test for å sjekke at applikasjonen vår faktisk kjører.
 */
it('Contains the correct heading', () => {
  render(<App />)
  expect(screen.getByText('Our fantastic users:')).toBeInTheDocument()
})

/**
 * En test for å sjekke at vi lister ut mockete brukere riktig.
 */
it('Lists the users Anders and Gøran', async () => {
  render(<App />)

  expect(await screen.findByText(/Gøran/)).toBeInTheDocument()
  expect(await screen.findByText(/Anders/)).toBeInTheDocument()
})

/**
 * En test som sjekker at det finnes ytterligere brukere i mocket data.
 * 
 * Her må dere gjøre endringer i den mockete dataen i handlers.js.
 */
it('Lists the users Sigve and Frode', async () => {
  render(<App />)

  expect(await screen.findByText(/Sigve/)).toBeInTheDocument()
  expect(await screen.findByText(/Frode/)).toBeInTheDocument()
})

/**
 * Det er behov for å utvide bruker-APIet, slik at brukere også har et brukernavn.
 * Skriv en test som bekrefter at vi viser navn og brukernavn for hver bruker, og utvidt applikasjonen slik at testen passerer.
 */
it('Lists the names and usernames of the users', async () => {
  render(<App />)

  expect(await screen.findByText(/Anders - andbre/)).toBeInTheDocument()
  expect(await screen.findByText(/Anders - andbre/)).toBeInTheDocument()
  expect(await screen.findByText(/Anders - andbre/)).toBeInTheDocument()
  expect(await screen.findByText(/Anders - andbre/)).toBeInTheDocument()
})

/**
 * Brukerne våre er utviklere, som har jobbet på en rekke applikasjoner sammen.
 * Uthenting av utviklede applikasjoner er et nytt endepunkt i den eksterne tjenesten, og responsen skal listes opp under brukerne.
 * 
 * Her må applikasjonen utvides til å gjøre et ekstra fetch-kall mot et nytt endepunkt (/apps),
 * som skal returnere en liste av applikasjonsnavn som vises i applikasjonen.
 */
it('Lists the applications developed by the users', async () => {
  render(<App />)

  expect(screen.getByText('Our amazing apps:')).toBeInTheDocument()
  expect(await screen.findByText('Bildeleringen')).toBeInTheDocument()
  expect(await screen.findByText('SAGA')).toBeInTheDocument()
  expect(await screen.findByText('MinSide')).toBeInTheDocument()
  expect(await screen.findByText('SpareBank1 Kredittkort')).toBeInTheDocument()
})


/**
 * NB: Denne oppgaven krever kunnskap som man får i oppgaven "function" for å skrive riktige tester.
 * Det kan være lurt å vente med denne til senere, så sant man ikke allerede har kjennskap til hvordan man kan teste interaksjon med elementer.
 * 
 * Vi har lyst til å kunne legge til nye brukere.
 * For å gjøre dette må vi sende inn brukernavn og navn til baksystemet vårt.
 * Baksystemet vil returnere http-kode 400 hvis navn eller brukernavn mangler eller er tomme strenger.
 * 
 * Skriv en test basert på spesifikasjonene:
 * Utvid applikasjonen med mulighet til å legge til en ny bruker med et spesifisert navn.
 * Ved vellykket innsending skal det vises en beskjed til brukeren om at innsendingen var vellykket.
 * 
 * Tips: For å sende inn data må vi bruke POST som metode i fetch.
 * 
 * Tips: https://upmostly.com/tutorials/react-onchange-events-with-examples#storing-input-value-state
 * Tips: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#body
 * 
 */
it('Can add a new user', async () => {
  render(<App />)

  const nameInput = screen.getByLabelText(/Name/)
  const usernameInput = screen.getByLabelText(/Username/)

  expect(nameInput).toBeInTheDocument()
  expect(usernameInput).toBeInTheDocument()

  userEvent.type(nameInput, 'Viktor')
  userEvent.type(usernameInput, 'vikhan')
  userEvent.click(screen.getByRole('button'))

  expect(await screen.findByText(/Viktor - vikhan/)).toBeInTheDocument()
})
