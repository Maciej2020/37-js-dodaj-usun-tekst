let dodaj = document.querySelector('#dodaj');
let usun = document.querySelector('#usun');

dodaj.addEventListener('click',function(){
   document.querySelector('#tekst').textContent = "Akademia 108";
})
usun.addEventListener('click',function(){
   document.querySelector('#tekst').textContent = "";
})