/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const toDefault = () => {
   document.querySelector("body").classList.remove("desert");
   document.querySelector("body").classList.remove("ocean");
   document.querySelector("body").classList.remove("high-contrast");
};
const toDesert = () => {
   document.querySelector("body").classList.add('desert');
};
const toOcean = () => {
   document.querySelector("body").classList.add('ocean');
};
const toHighContrast = () => {
   document.querySelector("body").classList.add('high-contrast');
};

document.getElementById("default").addEventListener('click', toDefault);
document.getElementById("desert").addEventListener('click', toDesert);
document.getElementById("ocean").addEventListener('click', toOcean);
document.getElementById("high-contrast").addEventListener('click', toHighContrast);
