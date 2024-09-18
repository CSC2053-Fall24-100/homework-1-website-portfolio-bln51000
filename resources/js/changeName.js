const changeNameButton = document.getElementById('heading-title');
const addNameButton = document.getElementById('toggle-name');
addNameButton.addEventListener('click', function() {
    // Prompt the user to input their name
    const name = prompt('Please enter your name:');
    
    changeNameButton.textContent = name;
   });