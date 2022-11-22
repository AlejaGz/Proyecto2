const signo1 = document.getElementById('signo1');
const signo2 = document.getElementById('signo2');
const signo3 = document.getElementById('signo3');

const ele1 = document.getElementById('ele1');
const ele2 = document.getElementById('ele2');
const ele3 = document.getElementById('ele3');

const meses1 = document.getElementById('meses1');
const meses2 = document.getElementById('meses2');
const meses3 = document.getElementById('meses3');


signo1.addEventListener('click', function () {
  const ansSigno1 = prompt(signo1);
  signo1.innerText = 'Signo: ' + ansSigno1;
})
signo2.addEventListener('click', function () {
  const ansSigno2 = prompt(signo2);
  signo2.innerText = 'Signo: ' + ansSigno2;
})
signo3.addEventListener('click', function () {
  const ansSigno3 = prompt(signo3);
  signo3.innerText = 'Signo: ' + ansSigno3;
})

///////////////////////////////////////////////

ele1.addEventListener('click', function () {
  const ansEle1 = prompt(ele1);
  ele1.innerText = 'Elemento: ' + ansEle1;
})
ele2.addEventListener('click', function () {
  const ansEle2 = prompt(ele2);
  ele2.innerText = 'Elemento: ' + ansEle2;
})
ele3.addEventListener('click', function () {
  const ansEle3 = prompt(ele3);
  ele3.innerText = 'Elemento: ' + ansEle3;
})

///////////////////////////////////////////////

meses1.addEventListener('click', function () {
  const ansMeses1 = prompt(meses1);
  meses1.innerText = 'Elemento: ' + ansMeses1;
})
meses2.addEventListener('click', function () {
  const ansMeses2 = prompt(meses2);
  meses2.innerText = 'Elemento: ' + ansMeses2;
})
meses3.addEventListener('click', function () {
  const ansMeses3 = prompt(meses3);
  meses3.innerText = 'Elemento: ' + ansMeses3;
})

let user = document.getElementById('user')

if (localStorage.getItem('userName')) {
  const dataSaved = localStorage.getItem('userName')
  user.innerText = dataSaved
}
user.addEventListener('click', function () {
  let answerUser = prompt('Ingrese su usuario')
  user.innerText = answerUser
  localStorage.setItem('userName', answerUser)
})


let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  user.innerText = 'Usuario'
  localStorage.clear()
})
