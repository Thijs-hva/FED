console.log("hellooo")

// input var

var NavButton = document.querySelector('header > button')
var Nav = document.querySelector('header > nav')
var NavRest = document.querySelector('header > a')
var Section1 = document.querySelector('main > section:nth-of-type(1)') 
var Section2 = document.querySelector('main > section:nth-of-type(2)') 
var mainSection = document.querySelector('main')

NavButton.onclick = toggleMenu;

function toggleMenu(){
    Nav.classList.toggle("open");
    NavButton.classList.toggle("closeButton");
    console.log("het werkt")
  }


// mainSection.addEventListener('scroll', () => {
//     // Calculate the scroll position
//     var scrollY = mainSection.scrollLeft;
//     console.log(scrollY);
//     // Calculate the threshold at which you want to change the background color
//     var startpunt = Section1.offsetWidth;

//     // Check if the scroll position has passed the threshold
//     if (scrollY >= startpunt) {
//         // Change the background color when the scroll position passes the threshold
//         document.body.style.backgroundColor = 'blue'; // Verander dit naar classes!!
//     } else {
//         // Reset the background color when the scroll position is before the threshold
//         document.body.style.backgroundColor = 'white'; // Verander dit naar classes!!
//     }
// });

// van open een class maken, en gooi alles naar rechts

//ES6
// var Nee
// let = variabele dat gaat veranderen
// const = variabele die zelfde waarde houdt