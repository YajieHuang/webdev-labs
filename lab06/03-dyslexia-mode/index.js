/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const addDyslexia = () => {
  if(dyslexiaOn){
    dyslexiaOn = false
    document.querySelector("body").classList.remove('dyslexia-mode')
  }
  else{
    dyslexiaOn = true
    document.querySelector("body").classList.add('dyslexia-mode')
  }
  
};
var dyslexiaOn = false
document.getElementById("dyslexia-toggle").addEventListener('click', addDyslexia)