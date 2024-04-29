var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){var e=parseInt(t.textContent.replace(/,/g,""));n+=e});var r=n/10;e.textContent=n.toLocaleString("en-US"),o.textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.fe1cc315.js.map
