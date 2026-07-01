
document.addEventListener("DOMContentLoaded", function () {
    
    const elements = document.querySelectorAll(".workdetailsleft , .workdetailsright");
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach((el) => observer.observe(el));
});


// Bottom div fadeup animation

document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".Exchangedetails");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }

    });

  }, {
    threshold: 0.2
  });

  elements.forEach((el) => observer.observe(el));

});



// Mobilemenu Responsive

function mobilemenu(){ 
var x = document.getElementById("menu");
if(x.style.display === "block"){
  x.style.display = "none";
}else{
  x.style.display = "block";
}
}
window.addEventListener("resize", function () {
    var x = document.getElementById("menu");

    if (window.innerWidth > 768) {
        x.style.display = "";
    }
});

















