// webassistant.js
// Denna kod är del av WebAssistant.
//
// Mer info finns på https://codeplatform.domain.se/team/web-assistant.



const domain = 'https://serverx.domain.se/wass';

const wassCss = document.createElement('link');
wassCss.rel = 'stylesheet';
wassCss.href = `${domain}/styles.css`;

const wassScript = document.createElement('script');
const wassHead = document.querySelector('head');
wassHead.appendChild(wassCss);

if (window.location.href.startsWith('https://gkhweb.domain.se/bhs')) {
   wassScript.src = `${domain}/bhs.js`;
}

if (window.location.href.startsWith('https://servicedesk.domain.se/')) {
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
