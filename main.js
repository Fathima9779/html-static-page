
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

function mobilemenu() {
    document.getElementById("menu").classList.toggle("active");
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        document.getElementById("menu").classList.remove("active");
    }
});































