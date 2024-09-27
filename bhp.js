// bhp.js
// Denna kod är del av WebAssistant.
//
// Mer info finns på https://gitlab.ltkalmar.se/oc/web-assistant.



// Callbackfunktion som med hjälp av observern körs varje gång sidan ändras
const callback = () => {
   if (document.getElementsByClassName('copyButtons')[0] || !(document.querySelectorAll('[onclick="cybFieldClick(\'Namn\',\'\');"]')[0])) {
      return;
   }
   addCopyButton('Namn', 'Namn\',\'', 20);
   addCopyButton('Personnummer', 'Personnummer\',\'Personnummer på format ÅÅÅÅMMDDXXXX.', 21);
   addCopyButton('Användarnamn', 'Användarnamn\',\'Användarnamn, LKL-konto.', 22);
   addCopyButton('HSA-id', 'HSA-id\',\'Obligatorisk, unik identifierare för personer, enheter, funktioner, uppdrag och organisationer i HSA.', 23);
   addCopyButton('E-post', 'E-post\',\'Personens e-postadress hämtad från HSA.', 24);
   if ((document.querySelectorAll('[onclick="cybFieldClick(\'Titel\',\'Personens yrkestitel i fritext.\');"]')[0]).parentElement.parentElement.getElementsByClassName('gwt-HTML')[0].innerText !== 'Värde saknas') {
      addCopyButton('Titel', 'Titel\',\'Personens yrkestitel i fritext.', 25);
   }
   if ((document.querySelectorAll('[onclick="cybFieldClick(\'Leg yrkesgrupp\',\'Klartext för legitimerad yrkesgrupp, enligt Socialstyrelsens förteckning, som personen tillhör.\');"]')[0]).parentElement.parentElement.getElementsByClassName('gwt-HTML')[0].innerText !== 'Värde saknas') {
      addCopyButton('Leg yrkesgrupp', 'Leg yrkesgrupp\',\'Klartext för legitimerad yrkesgrupp, enligt Socialstyrelsens förteckning, som personen tillhör.', 26);
   }
};

const observer = new MutationObserver(callback);
observer.observe(document, { childList: true, subtree: true });


// Funktion för att lägga till kopiera-knapp
function addCopyButton(property, longProperty, logNum) {
   if (!(document.querySelectorAll(`[onclick="cybFieldClick('${longProperty}');"]`)[0])) {
      console.error(`Knappen för ${property} kunde inte läggas till på grund av att radens element inte kunde hittas.`);
      return;
   }

   let widthRow;
   let isolatedRow;
   let data;
   let dataElement;
   try {
      isolatedRow = (document.querySelectorAll(`[onclick="cybFieldClick('${longProperty}');"]`)[0]).parentElement.parentElement;
      data = isolatedRow.getElementsByClassName('gwt-HTML')[0].innerText;
      dataElement = isolatedRow.getElementsByClassName('gwt-HTML')[0].parentElement;
      widthRow = isolatedRow.getElementsByClassName('EG4JLRD-qb-b')[0];
   } catch (error) {
      console.error('Ett element som krävs kunde inte hittas.');
      console.error(error);
      return;
   }
   widthRow.classList.add('widthElements');
   widthRow.firstChild.classList.add('widthElements');
   widthRow.firstChild.firstChild.classList.add('widthElements');

   const copyButton = document.createElement('button');
   copyButton.id = `${property}CopyButton`;
   copyButton.className = 'copyButtons';
   copyButton.innerText = `Kopiera ${property}`;
   copyButton.onclick = () => {
      try {
         navigator.clipboard.writeText(data);
      } catch (error) {
         alert('Kopieringen misslyckades. Kontakta OC om problemet kvarstår.');
         console.error(error);
         return;
      }
      copyButton.innerText = `${property} kopierat!`;
      sendLog(logNum);
   };

   dataElement.prepend(copyButton);
}



// Funktion för att skicka logg till Log4CjS
function sendLog(buttonID, currentObject) {
   if (getCookie('logsDisabled')) {
      return;
   }

   let username;
   if (getCookie('SDPUsername')) {
      username = getCookie('SDPUsername');
   } else {
      username = 'Okänd användare';
   }

   let data;
   if (currentObject) {
      data = { token: 'xxxxxxxxxxxxxxxxxxxxxxxxxx', user: username, button: buttonID, object: currentObject};
   } else {
      data = { token: 'xxxxxxxxxxxxxxxxxxxxxxxxxx', user: username, button: buttonID};
   }

   fetch('https://serverx.ltkalmar.se/api/wass/log', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })
      .then(response => {
         if (!response.ok) {
            console.error('Loggningsfel i Log4CjS inträffade:', response.status);
         }
      })
      .catch(error => {
         console.error('Anslutningsfel till Log4CjS inträffade:', error);
      });
}


// Funktion för att hämta specifik cookie
function getCookie(cname) {
   const name = cname + '=';
   const decodedCookie = document.cookie;
   const ca = decodedCookie.split(';');
   for (let i = 0; i < ca.length; i++) {
      let cookie = ca[i];
      while (cookie.charAt(0) === ' ') {
         cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
         return cookie.substring(name.length, cookie.length);
      }
   }
   return '';
}