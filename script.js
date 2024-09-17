let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};
let scroll = document.querySelector(".gallery");
        let nextbtn = document.querySelector("#nextbtn");
        let backbtn = document.querySelector("#backbtn");

        scroll.addEventListener("wheel", (evt) =>{
            evt.preventDefaut();
            scroll.style.scrollBehaviour = "smooth";
            scroll.scrollLeft += evt.detlaY;
        })

        nextbtn.addEventListener("click", ()=>{
            scroll.style.scrollBehavior = "smooth";
            scroll.scrollLeft += 600;
        })
        backbtn.addEventListener("click", ()=>{
            scroll.style.scrollBehavior = "smooth";
            scroll.scrollLeft -= 600;
        })