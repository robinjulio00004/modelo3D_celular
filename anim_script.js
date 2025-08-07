let btn1= document.querySelector('#button1');
let btn2= document.querySelector('#button2');

btn1.addEventListener('mousemove',e=>{
  let rect=e.target.getBoundingClientRect();
  let x =e.clientX*3-rect.left;
  btn1.style.setProperty('--x',x+'deg');
})

btn2.addEventListener('mousemove',e=>{
  let rect=e.target.getBoundingClientRect();
  let x =e.clientX*3-rect.left;
  btn2.style.setProperty('--x',x+'deg');
})