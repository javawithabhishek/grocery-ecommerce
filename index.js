document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.btn');
  
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default <a> behavior
  
      // Trigger slide-out animation
      button.classList.add('hide');
        setTimeout(() => {
        button.classList.remove('hide');
        button.classList.add('return');
        caretIcon.classList.remove('rotate');
      }, 500); // Match the duration of the slide-out animation
  
      // Clean up classes after the slide-back animation
      setTimeout(() => {
        button.classList.remove('return');
      }, 1000); // Total duration: slide-out (500ms) + slide-back (500ms)
    });
  });


  // Select all heart icons

const dil = document.querySelectorAll('.heart i');

dil.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('fa-solid'); 
    {
      heart.style.color = 'red'; 
   
    }
  });
});

// add cart fruits 

const addCartButtons = document.querySelectorAll('#add-cart');

addCartButtons.forEach(button => {
  button.addEventListener('click', function () {
    alert("this fruit added to cart");
  });
});

// add cart vegetables

const addButton = document.querySelectorAll('.vegetables');

addButton.forEach(btn =>{
  btn.addEventListener('click' , function ()  {
    alert("this vegetables added in cart");
  });
});

// toglle bar 

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#menu-icon');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle the 'active' class
  });
});

const head = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener("scroll", ()=>{
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollTop> lastScrollTop){
    head.style.transform = "translateY(-100%)";
  }else{
    head.style.transform = "translateY(0)";
  }
  

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
})
