const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{
if(link.getAttribute("href")===currentPage){
link.classList.add("active");
}
});
