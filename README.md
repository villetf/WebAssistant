# WebAssistant

WebAssistant är ett verktyg som används för att effektivisera supportfunktionernas arbete i Region Kalmar Läns IT-verktyg.

Nuvarande version är 0.0.2.

## Systembeskrivning

WebAssistant körs med hjälp av webbläsarpluginet [Custom JavaScript for Websites 2](https://microsoftedge.microsoft.com/addons/detail/custom-javascript-for-web/koccodmekleicmjpnelamemnhkpbkibc), som är godkänt för användning i Microsoft Edge och Google Chrome inom Region Kalmar Län. Med hjälp av pluginet körs skriptet basskript.js när man är på en sida som ligger på regionens domän. Detta skript kontrollerar om man befinner sig på någon av adresserna för Behörighetsportalen eller Servicedesk Plus, och kör i så fall ett specifikt skript för den sidan. Skripten ligger på en webbserver på servern LKL9649, vilket gör att de är tillgängliga från var som helst på regionens nätverk. Detta möjliggör också att skripten kan uppdateras kontinuerligt utan någon interaktion från användaren.


## Installation

Installationsinstruktioner finns [här.](https://servicedesk.ltkalmar.se/AddSolution.do?submitaction=viewsolution&fromListView=true&solutionID=1502)