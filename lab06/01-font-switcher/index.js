const makeBigger = () => {
   // alert('make bigger!');
   var content=document.querySelector(".content")
   var oldContentSize = parseInt(window.getComputedStyle(content).fontSize)
   document.querySelector(".content").style.fontSize = oldContentSize + 1 + 'px';
   var header=document.querySelector("header")
   var oldHeaderSize = parseInt(window.getComputedStyle(header).fontSize)
   document.querySelector("header").style.fontSize = oldHeaderSize + 1 + 'px';
};

const makeSmaller = () => {
   // alert('make smaller!');
   var content=document.querySelector(".content")
   var oldContentSize = parseInt(window.getComputedStyle(content).fontSize)
   document.querySelector(".content").style.fontSize = oldContentSize - 1 + 'px';
   var header=document.querySelector("header")
   var oldHeaderSize = parseInt(window.getComputedStyle(header).fontSize)
   document.querySelector("header").style.fontSize = oldHeaderSize - 1 + 'px';
};


document.getElementById("a1").addEventListener('click', makeBigger);
document.getElementById("a2").addEventListener('click', makeSmaller);

