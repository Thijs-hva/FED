console.log("hellooo")

// input var

var NavButton = document.querySelector('.menu-button')
var Nav = document.querySelector('.menu-lijst')
var NavRest = document.querySelector('header > a')


NavButton.onclick = toggleMenu;

function toggleMenu(){
    console.log("het werkt")
    Nav.classList.toggle("open");
  }


// van open een class maken, en gooi alles naar rechts
