# Hej allihopa

## Testing i JavaScript
I denne workshopen skal dere gå gjennom et sett med oppgaver som har som mål å gi dere noen praktiske verktøy dere kan bruke for å skrive tester i JavaScript.  
Vi bruker både "vanilla" JavaScript og React i denne workshopen, men prinsippene og verktøyene kan benyttes til de fleste andre populære JavaScript-rammeverk.

Vi vil ikke gå nøye gjennom testmetodikk, men vi tar en kjapp oppfrisker på hva testdrevet utvikling er for noe.

### TDD (Test Driven Development)
Testdrevet utvikling er en utviklingsprosess der man skriver testene før man implementerer funksjonaliteten.  

For å kunne skrive en test før man implementerer funksjonalitet må man ha en god forståelse for hva man faktisk skal implementere. Det tvinger oss til å sette oss inn i problemstillinger og tenke ut løsninger før man begynner å skrive kode. Det gir oss en god måte å definere og dokumentere funksjonalitet basert på testkriterier.

Man starter med å skrive en test som naturlig nok vil feile, da det ikke eksisterer en implementasjon som oppfyller testkriteriet.  
Så skriver man akkurat nok kode til å få testen til å bli godkjent. Man skal ikke skrive mer enn kun det som er nødvendig for å få testen til å bli godkjent.  

Denne første testen er kanskje ikke dekkende for alle testkriteriene man har definert.  
Man starter da prosessen på nytt, med en ny test som feiler og ny kode.  
Nå har man allerede en test som passer på at det første kriteriet fortsatt er oppfylt.  

Slik fortsetter man for hvert kriterie som er definert.  
Det vil bli behov for å refaktorere koden etter hvert som man legger til tester, og funksjonaliteten vokser og blir mer komplisert. De første implementasjonene er ofte altfor enkle, gjerne så enkle at man allerede da vet at koden ikke vil leve lenge. Dette er greit, fordi målet er å bygge videre og refaktorere ved behov, og steg for steg oppnå full testdekning og da funksjonalitet som løser problemene som forventet.  
Hvis man har god testdekning kan man være trygg på at refaktoreringen ikke vil ødelegge funksjonaliteten.  

## Jest
I denne workshopen bruker vi Jest for å kjøre testene. Jest er et veldig populært verktøy, og er svært enkelt å bruke.  
Vi bruker Jest til å teste både rene JavaScript-funksjoner og generert HTML fra for eksempel en React-applikasjon.

En Jest-test består vanligvis av en beskrivelse og en eller flere sjekker.
```js
it('Jeg forventer at resultatet av å kalle minFunksjon med input 123 er likt "abc"', () => {
  expect(minFunksjon(123)).toEqual('abc')
})
```
Det finnes mange forskjellige sjekker vi kan bruke, og dere skal lære om de viktigste i denne workshopen.

## Testing Library + T.L. React
I tillegg til Jest bruker vi flere biblioteker fra Testing Library.  
**Testing Library DOM** inneholder utvidelser til Jest, som hjelper oss å teste kode som genererer HTML, slik som for eksempel React gjør.  
**Testing Library React** inneholder funksjoner som hjelper oss å rendre React-komponenter på en måte som er så lik som mulig reell kjøring av en React-applikasjon.

### JSDOM
Jest-testene våre kjører i et kjøremiljø som kalles JSDOM.  
Dette er en emulering av hvordan en nettleser fungerer. Det vil si at vi kan få generert HTML-kode akkurat slik som en React-applikasjon gjør, eller en hvilken som helst annen JavaScript-basert måte å generere HTML på.  
Vi ser ikke denne HTML-koden selv uten videre, men vi kan anta at den eksisterer i JSDOM, og vi kan da lage tester som sjekker om den HTML-koden som er generert oppfyller de kravene vi har til den. Vi kan se HTML-koden ved å kalle `screen.debug()`, og vi får se den automatisk når testene våre feiler.

Vi kommer til å bruke `render()` og `screen` mye.  
**`render()`** bruker vi for å rendre vår React-komponent.  
Ved å kalle denne funksjonen med en React-komponent som input, blir komponenten rendret, altså blir det generert HTML-kode i JSDOM basert på hva komponenten rendrer. Denne HTML-koden kan vi da sjekke.  
**`screen`** er et objekt som inneholder flere funksjoner som hjelper oss å hente ut elementer fra den genererte HTML-koden som ligger i JSDOM.  

Vi rendrer altså React-komponenten med `render()`, bruker `screen` til å hente ut elementer og bruker Jest sine sjekker for å teste om elementene oppfyller testkriteriene.


```jsx
it('MinKomponent har en knapp og en tekst', () => {
  // Rendre MinKomponent
  render(<MinKomponent />)

  // Hent et element med rollen 'button' fra screen, og sjekk at den ligger i DOM-en
  expect(screen.getByRole('button')).toBeInTheDocument()

  // Hent et element som har teksten 'Hei Verden'
  expect(screen.getByText(/Hei Verden/)).toBeInTheDocument()
})
```

## Oppgavene
Oppgavesettene består hovedsaklig av:
- Et fungerende testeksempel
- En komplett test som feiler, der implementasjonen av funksjonaliteten må utbedres
- En oppgave der dere må lage både test og funksjonalitet basert på gitte kriterier

Noen oppgaver består av React-applikasjoner som skal testes, andre er kun ren JavaScript.  
Det er mulig å kjøre React-applikasjonene i nettleseren, men det er ikke meningen at det er behov for dette.  
Det er derfor ikke lagt til noe styling, og ser ikke presentabelt ut!
Vi er kun interessert i HTML-koden som blir generert, ikke CSS.

Kjør testene til oppgavene med kommandoen `test:watch` som er nærmere beskrevet nedenfor.
Med denne kommandoen vil testene kjøres på nytt ved endringer i enten applikasjonskoden eller testkoden.  
Ha et terminalvindu oppe, kjør kommandoen der, og følg med på statusen på testene i oppgaven mens du jobber med den.  
NB: Du skal aldri modifisere filene `index.js` eller `index.html`

## Bruk
- For å følge tester under utvikling:  
>`npm run test:watch {navn-på-mappe-eller-test}`  
>`npm run test:watch 0-warmup`
- For å kjøre alle tester én gang:  
>`npm run test`
- For å kjøre alle tester i én oppgave én gang
>`npm run test 0-warmup`
- For å kjøre applikasjon i nettleser (for React-oppgaver):  
>`npm run start {relativ-sti-til-index.html}`  
>`npm run start 1-queries/index.html`

## Nyttig jest-funksjonalitet
Hvis tilbakemeldingene fra jest blir rotete i terminalvinduet kan det være lurt å bruke kommandoene under for å rydde opp litt.  
Husk å fjerne dette når du er ferdig slik at alle testene kjører!
- For å kjøre en enkelt test:  
>`it.only()`
- For å hoppe over en test:  
>`it.skip()`  
