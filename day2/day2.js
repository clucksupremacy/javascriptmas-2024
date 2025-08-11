// Create calendar object
const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  number.classList.add('number');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  description.classList.add('description');
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}

// Change state for each day/box on click
const listItems = calendarContainer.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        const surprise = document.createElement('p');
        surprise.classList.add('description');
        // For single message:
        // surprise.textContent = "Surprise!";
        
        // Alternatively, for more message variety: 
        const messages = ['Surprise!', 
                          'Hurray!', 
                          'Yeehaw!',
                          'Congrats!', 
                          'Lovely!', 
                          'Yay!', 
                          'Glorious!',
                          'Are you not afraid?', 
                          'Devious!', 
                          'FRANKY'
                          ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        surprise.textContent = messages[randomIndex];
        
        // To try later:
        // const gif = document.createElement('img');
        // gif.src = 
        //   'https://preview.redd.it/gbpu4l8mujr21.gif?width=120&format=mp4&s=ced8e678ede4fb857a36b4bd02e9063aefe1f46b';
        
        item.innerHTML = "";
        item.classList.add('center-vertically');
        item.appendChild(surprise);
    }, { once: true });
});