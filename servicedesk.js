// servicedesk.js
// Denna kod är del av WebAssistant.
//
// Mer info finns på https://gitlab.lkl.ltkalmar.se/oc/web-assistant.



// Sätter cookie med ens namn för att använda i Log4CjS
setTimeout(() => {
   const searchDate = new Date();
   searchDate.setTime(searchDate.getTime() + (2592000000));
   const searchExpires = '; expires=' + searchDate.toUTCString();
   document.cookie = 'SDPUsername=' + parent.sdp_user.USERNAME + searchExpires + '; path=/; domain=.ltkalmar.se';
}, 1000);