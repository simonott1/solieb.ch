let i = 0; // current slide
let j = 5; // total slides

const images = document.querySelectorAll(".image-container img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}


 document.onkeydown = function(event) {
         switch (event.keyCode) {
            case 37:
               prev();
            break;
            case 39:
               next()
            break;
         }
      };