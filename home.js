/*
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}



function scrollSlides(direction) {
    const container = document.querySelector(".slides-container");
    const scrollAmount = direction * container.offsetWidth;
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
}

function changeSlide(n) {
    // You might need this function for scrolling if you decide to keep it
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // You can remove this function since it's not needed for your current requirement
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

*/




/*

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function scrollSlides(direction) {
    const container = document.querySelector(".slides-container");
    const scrollAmount = direction * 200; // Adjust this value as needed
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
}

document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1);
    scrollSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1);
    scrollSlides(1);
});


/*

/*
// Remove the showSlides function since it's not needed
let slideIndex = 1;

// Remove the showSlides function call
// showSlides(slideIndex);

// Remove the duplicate changeSlide function, keep only one
function changeSlide(n) {
    slideIndex += n; // Increment the slideIndex
}

function scrollSlides(direction) {
    const container = document.querySelector(".slides-container");
    const scrollAmount = direction * container.offsetWidth;
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
}

// Call the changeSlide function with the desired index
changeSlide(i); // Ensures all i

*/

/*
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function scrollSlides(direction) {
    const container = document.querySelector(".slides-container");
    const scrollAmount = direction * container.offsetWidth;
    container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth"
    });
}

// Call the changeSlide function when buttons are clicked
document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1);
    scrollSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1);
    scrollSlides(1);
});

*/

/*
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function scrollSlides(direction) {
    const container = document.querySelector(".slides-container");
    const scrollAmount = direction * container.offsetWidth;
    container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
}

// Attach event listeners to the buttons
document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1);
    scrollSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1);
    scrollSlides(1);
});

// Hide scrollbar
document.querySelector(".slides-container").style.overflowX = "hidden";

*/