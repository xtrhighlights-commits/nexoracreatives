// smooth load animation
document.body.style.opacity = 0;

window.addEventListener("load",()=>{
  document.body.style.transition="1s";
  document.body.style.opacity=1;
});
