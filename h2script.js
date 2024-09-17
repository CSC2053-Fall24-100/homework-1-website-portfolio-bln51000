const button = document.getElementById('toggle-schedule');
const div = document.getElementById('schedule-container');
const addNameButton = document.getElementById('toggle-name');

/*
button.addEventListener('click', function() {
    if(button = document.getElementById('toggle-schedule'))
        button.style.display == "none";
    else
        button.style.display == "block";
   });
*/
   button.addEventListener('click', function() {
    if(div.style.display == 'none')
    {
        div.style.display = 'block';
        button.textContent = 'Hide Schedule';
    }
    else
    {
        div.style.display = 'none';
        button.textContent = 'Show Schedule';
    }
    
   });

   addNameButton.addEventListener('click', function() {
    // Prompt the user to input their name
    const name = prompt('Please enter your name:');
    
    addNameButton.textContent = name;
   });