// servicedesk.js
// Denna kod är del av WebAssistant.
//
// Mer info finns på https://codeplatform.domain.se/team/web-assistant.



// Sätter cookie med ens namn för att använda i Log4CjS
setTimeout(() => {
   const searchDate = new Date();
   searchDate.setTime(searchDate.getTime() + (2592000000));
   const searchExpires = '; expires=' + searchDate.toUTCString();
   document.cookie = 'servicedeskUsername=' + parent.servicedesk_user.USERNAME + searchExpires + '; path=/; domain=.domain.se';
}, 1000);