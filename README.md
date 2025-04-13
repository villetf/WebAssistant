# WebAssistant

WebAssistant är ett verktyg som används för att effektivisera supportfunktionernas arbete i en organisations IT-verktyg.

Nuvarande version är 0.0.2.

## Sanering

Koden i detta repo skrevs för användning hos en tidigare arbetsgivare. Av denna anledning har all information som skulle kunna vara känslig helt och hållet rensats bort. Exempel på detta är servernamn, URL:er, känslig logik, detaljer om organisationen och systemnamn. Systemnamn har ersatts av ett ord som förklarar vad det är för typ av system för att ge ett sammanhang. 

Repot kan eller ska alltså inte användas till något i sin nuvarande form utan fungerar bara som ett exempel på vad jag har skrivit tidigare. 

## Systembeskrivning

WebAssistant körs med hjälp av webbläsarpluginet [Custom JavaScript for Websites 2](https://microsoftedge.microsoft.com/addons/detail/custom-javascript-for-web/koccodmekleicmjpnelamemnhkpbkibc), som är godkänt för användning i Microsoft Edge och Google Chrome inom Organisationen. Med hjälp av pluginet körs skriptet basskript.js när man är på en sida som ligger på orgnisationens domän. Detta skript kontrollerar om man befinner sig på någon av adresserna för Behörighetssytem eller Ärendehanteringssystem, och kör i så fall ett specifikt skript för den sidan. Skripten ligger på en webbserver på servern serverY, vilket gör att de är tillgängliga från var som helst på orgnisationens nätverk. Detta möjliggör också att skripten kan uppdateras kontinuerligt utan någon interaktion från användaren.


## Installation

Installationsinstruktioner finns [här.](https://servicedesk.domain.se/AddSolution?solutionID=3423)