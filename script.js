
let header = document.querySelector("header");
let footer = document.querySelector("footer");
  
if (window.pageYOffset > 0) {
      header.classList.add("sticky");
      footer.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      footer.classList.remove("sticky");
    }