function addTask(){

let input = document.getElementById('taskInput');
let list = document.getElementById('taskList');

if(input.value === ''){
    alert('Please enter a task');
    return;
}

let li = document.createElement('li');
li.className = 'task-item';
li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">Delete</button>`;

list.appendChild(li);
input.value='';

}
let time = 1500;
let timer;

function updateTimer(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

if(seconds < 10){
    seconds = '0' + seconds;
}

document.getElementById('time').innerHTML = minutes + ':' + seconds;

}
function startTimer(){

clearInterval(timer);

timer = setInterval(()=>{

if(time > 0){
    time--;
    updateTimer();
}

},1000);

}
function pauseTimer(){
    clearInterval(timer);
}

function resetTimer(){
    clearInterval(timer);
    time = 1500;
    updateTimer();
}