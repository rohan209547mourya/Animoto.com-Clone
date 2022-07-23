let count = 2;
// let btn = document.getElementById('inside-faqs');
let btn = document.querySelector('.inside-faqs');

btn.addEventListener('click', () => {
  // let box = document.getElementById('box');
  document.querySelector('.inside-faqs').innerText =
    'HOW DO YOU COVERT IMAGES TO VIDEOS  ?  x';

  let box = document.querySelector('.details-faqs');

  if (count % 2 == 0) {
    box.classList.remove('details-faqs');
    box.classList.add('dis_block');
    count++;
  } else if (count % 2 == 1) {
    box.classList.add('dis_block');
    box.classList.remove('details-faqs');
    count++;
  }
});

let coun = 2;
// let btn = document.getElementById('inside-faqs');
let bt = document.querySelector('.inside-faqs-2');

bt.addEventListener('click', () => {
  // let box = document.getElementById('box');
  document.querySelector('.inside-faqs-2').innerText =
    'CAN YOU TURN ANY IMAGES TO VIDEO WITH MUSIC ?  x';
  let box = document.querySelector('.details-faqs-2');

  if (coun % 2 == 0) {
    box.classList.remove('details-faqs-2');
    box.classList.add('dis_block-2');
    count++;
  } else if (coun % 2 == 1) {
    box.classList.add('dis_block-2');
    box.classList.remove('details-faqs-2');
    count++;
  }
});

let cou = 2;
// let btn = document.getElementById('inside-faqs');
let b = document.querySelector('.inside-faqs-3');

b.addEventListener('click', () => {
  // let box = document.getElementById('box');
  document.querySelector('.inside-faqs-3').innerText =
    'CAN I MAKE SLIDESHOW VIDEO WITH ANIMOTO ?  x';
  let box = document.querySelector('.details-faqs-3');

  if (coun % 2 == 0) {
    box.classList.remove('details-faqs-3');
    box.classList.add('dis_block-3');
    count++;
  } else if (coun % 2 == 1) {
    box.classList.add('dis_block-3');
    box.classList.remove('details-faqs-3');
    count++;
  }
});

let btn1 = document.getElementById('btn');

btn1.addEventListener('click', () => {
  btn1.innerText = 'EXPLORE X ';
  let mybox = document.querySelector('.hide');

  if (mybox.style.display == 'none') {
    btn1.innerText = 'EXPLORE X ';
    mybox.style.display = 'block';
  } else {
    btn1.innerText = 'EXPLORE + ';
    mybox.style.display = 'none';
  }
});

function redirect() {
  // console.log("hello");

  let singinArr = JSON.parse(localStorage.getItem('custmerData')) || [];

  if (singinArr.cEmail == singinObj.cEmail) {
    window.location.href = '../html/templates.htmlt';
  } else {
    window.location.href = '../html/signup.html';
  }
}
