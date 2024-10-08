﻿// webassistant.js
// Denna kod är del av WebAssistant.
//
// Mer info finns på https://gitlab.ltkalmar.se/oc/web-assistant.



const domain = 'https://serverx.ltkalmar.se/wass';

const wassCss = document.createElement('link');
wassCss.rel = 'stylesheet';
wassCss.href = `${domain}/styles.css`;

const wassScript = document.createElement('script');
const wassHead = document.querySelector('head');
wassHead.appendChild(wassCss);

if (window.location.href.startsWith('https://hsaweb.ltkalmar.se/bhp')) {
   wassScript.src = `${domain}/bhp.js`;
}

if (window.location.href.startsWith('https://servicedesk.ltkalmar.se/')) {
   wassScript.src = `${domain}/servicedesk.js`;
}

let wassBody;
const wassBodyInterval = setInterval(() => {
   if (document.querySelector('body')) {
      clearInterval(wassBodyInterval);
      wassBody = document.querySelector('body');
      wassBody.appendChild(wassScript);
   }
}, 10);
