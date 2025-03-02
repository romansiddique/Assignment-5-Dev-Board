// Sunday, 2 March 2025
function weekDateMonthYear(today){
  const day = today.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const month = monthNames[today.getMonth()];
  const weekDay = weekNames[today.getDay()];
  const year = today.getFullYear();
  return `${weekDay}, ${day} ${month} ${year}`;
}

// hour:minute:second am/pm
function hourMinuteSecond(today){
  let hours = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minute}:${second} ${ampm}`
}

// Event for complete button
const btnComplete = document.getElementsByClassName('btn-complete');
for (const button of btnComplete){
  button.addEventListener('click', function(){
    alert('Board updated successfully');

    // navbar count
    const navCompleteTask = parseInt(document.getElementById('nav-complete-task').innerText);
    const decreaseNavCompleteTask = navCompleteTask + 1;
    document.getElementById('nav-complete-task').innerText = decreaseNavCompleteTask;

    // main section task assigned
    const taskAssigned = parseInt(document.getElementById('task-assigned').innerText);
    const decreaseTaskAssigned = taskAssigned - 1;
    document.getElementById('task-assigned').innerText = decreaseTaskAssigned;

    // find nearest title for add in activity history
    const card = this.closest('.card'); 
    const title = card.querySelector('.card-title').innerText; 

    // activity log
    const activityLogHistory = document.getElementById('activity-log-history');
    const createElement = document.createElement('p')
    createElement.innerText = `you have completed the task ${title} at ${hourMinuteSecond(new Date())}`;
    createElement.style.backgroundColor = '#F4F7FF';
    createElement.style.padding = '8px';
    createElement.style.margin = '10px'
    createElement.style.borderRadius = '8px'
    activityLogHistory.appendChild(createElement);

    // button disabled
    button.setAttribute('disabled' , true)

  // last alert
  if(taskAssigned-1 === 0 ){
    alert('congratulation!!! You have completed all the task');
  }
  })
}
// beside of discover card date
document.getElementById('main-section-date').innerText = weekDateMonthYear(new Date());

// clear activity
document.getElementById('clear-history').addEventListener('click', function(){
  const activityLogHistory = document.getElementById('activity-log-history');
  activityLogHistory.style.display = 'none';
});

// going to discover page
document.getElementById('discover-today').addEventListener('click', function(){
  window.location.href = 'discover.html'
})

// create random color for body background
document.getElementById('btn-theme').addEventListener('click' , function(){
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)
  let rgbColor = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = rgbColor;
})