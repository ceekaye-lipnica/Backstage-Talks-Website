var section = document.getElementsByTagName('section')[0];

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 500) {
        section.style.backgroundColor = '#FF608C';

    } else if (scroll >= 500 && scroll <= 1150) {
        section.style.backgroundColor = '#fff';

    } else if (scroll >= 1150 && scroll <= 1690) {
        section.style.backgroundColor = '#00c1b5';

    } else if (scroll >= 1690 && scroll <= 2390) {
        section.style.backgroundColor = '#ff651a';

    } else if (scroll >= 2390 && scroll <= 3050) {
        section.style.backgroundColor = '#ffbe00'
        
    } else if (scroll >= 3050 && scroll <= 3770) {
        section.style.backgroundColor = '#1d3fbb';

    }  else if (scroll >= 3770 && scroll <= 4200)  {
        section.style.backgroundColor = '#e30512';
    } 
    
}

