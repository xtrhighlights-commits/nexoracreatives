const current = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{
if(link.getAttribute("href")===current){
link.classList.add("active");
}
});
