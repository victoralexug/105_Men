const countdown = document.querySelector('.countdown');

// set launch date
const launchDate = new Date('jan 1, 2023 23:00:00').getTime();

// update every second

const intvl = setInterval(() => {
    // get todays date
    const now = new Date().getTime();
    // get distance
    const distance = launchDate - now;
    
    //time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display variables
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;
     
    //if launch date is passed

    if (distance < 0){
      clearInterval();
      countdown.style.color = '#17a2b8'
      countdown.innerHTML = 'launched!'  
    };
}, 1000)