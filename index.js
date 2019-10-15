const subjects = [
  {title: "What is HTML", duration: 0.5},
  {title: "What We'll Build", duration: 1.0},
  {title: "Code Editor", duration: 1.5},
  {title: "Tags", duration: 4.0},
  {title: "Code", duration: 3.0},
];

// create HTML elements
let main = document.querySelector('main')
subjects.forEach( (subject, idx) => {
  let div = document.createElement('div');
  div.innerHTML = subject.title;
  main.appendChild(div);
  document.querySelector('main').appendChild(div);
})
document.querySelector('div').classList.add('active');

// get handle on all HTML elements
let subjectEls = Array.from(document.querySelectorAll('div'));

// Remove active class from all HTML elements
function removeAllActive() {
  subjectEls.forEach( subject => {subject.classList.remove('active')})
}

// displayDuration
function displayDuration(index) {
  subjectEls[index].innerHTML += '<span class="countdown">' + subjects[index].duration * 60;
}

// set up the timeout for cascading active elements
let setActive = i => {
  if (i < subjectEls.length) {
    removeAllActive();
    subjectEls[i].classList.add('active');
    displayDuration(i);
    setTimeout(setActive, subjects[i].duration *1000*60, i+1)
  }
}

// count down from 12 minutes
let startAt = new Date('Jan 1, 2020 00:12:')
let countDownClock = document.querySelector('#countdown-clock');

function tickDown() {
  let newTime = new Date(startAt - 1000);
  startAt = newTime;
  return newTime;
} 

// set up a countdown clock
function countDown() {
  let myInterval = setInterval(function() {
    let timeToDisplay = tickDown();
    countDownClock.innerHTML = String(timeToDisplay.getMinutes()).padStart(2,0) + ':' + String(timeToDisplay.getSeconds()).padStart(2,0);
    if (countDownClock.innerHTML == "00:00") {clearInterval(myInterval)}
  }, 1000);
}

setActive(0)
countDown();


