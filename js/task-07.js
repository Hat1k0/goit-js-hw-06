const input=document.querySelector('#font-size-control')
const minValue=input.getAttribute('min')
const maxValue=input.getAttribute('max')
const text=document.querySelector('#text')
input.addEventListener('input',()=>{
    const value=input.value
  text.style.fontSize=value+'px';
})
