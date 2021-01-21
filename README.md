# testing-in-js
JavaScript test workshop


## Oppsett
- https://blog.jakoblind.no/react-parcel/
- https://jestjs.io/docs/en/tutorial-react

## Veiledning
Kjør testene til oppgavene med kommandoen `test:watch` som er nærmere beskrevet nedenfor.
Med denne kommandoen vil testene kjøres på nytt ved endringer i enten applikasjonskoden eller testkoden.

## Bruk
- For å følge tester under utvikling:  
>`npm run test:watch {navn-på-mappe-eller-test}`  
>`npm run test:watch oppgave0`
- For å kjøre alle tester:  
>`npm run test`
- For å kjøre applikasjon i nettleser:  
>`npm run start {relativ-sti-til-index.html}`  
>`npm run start oppgave1/index.html`

## Nyttig jest-funksjonalitet
- For å kjøre en enkelt test:  
>`it.only()`
- For å hoppe over en test:  
>`it.skip()`

## Testing Library React
``