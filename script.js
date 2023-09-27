console.log("hellooo")

// input var

var NavButton = document.querySelector('header > button')
var Nav = document.querySelector('header > nav')
var NavRest = document.querySelector('header > a')
// fix je selectorren geen classes!!

NavButton.onclick = toggleMenu;

function toggleMenu(){
    Nav.classList.toggle("open");
    NavButton.classList.toggle("closeButton");
    console.log("het werkt")
  }


// van open een class maken, en gooi alles naar rechts


//ES6
// var Nee
// let = variabele dat gaat veranderen
// const = variabele die zelfde waarde houdt