
/** Menu **/
document.addEventListener('DOMContentLoaded', function () {
    const openMenuBtn = document.querySelector('.open-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const menu = document.querySelector('.menu');

    openMenuBtn.addEventListener('click', function () {
        menu.classList.add('open');
    });

    closeMenuBtn.addEventListener('click', function () {
        menu.classList.remove('open');
    });

    // Toggle sub-menu visibility in mobile mode
    const dropdownItems = document.querySelectorAll('.dropdown');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            if (menu.classList.contains('open')) {
                event.preventDefault();
                const subMenu = item.querySelector('.sub-menu');
                if (subMenu) {
                    subMenu.classList.toggle('active');
                }
            }
        });
    });
});




/** countdown **/

document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.countdown-circle');
  const endDate = new Date('2024-03-07T13:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      // If time is up, set all values to 0
      circles.forEach((circle) => {
        const countdownTime = circle.querySelector('.countdown-time');
        countdownTime.textContent = '0';
      });
      return; // Stop updating the countdown
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days > 31) {
      days = 31; // Limit days to 31
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const times = [days, hours, minutes, seconds];

    circles.forEach((circle, index) => {
      const countdownTime = circle.querySelector('.countdown-time');
      const countdownProgress = circle.querySelector('.countdown-progress');
      countdownTime.textContent = times[index];
      const ratio = times[index] / (index === 0 ? 31 : 60); // Days limited to 31
      const circumference = 280; // 2 * π * r
      const dashoffset = circumference * (1 - ratio);
      countdownProgress.style.strokeDashoffset = dashoffset;
    });
  }


  // Update countdown every second
  setInterval(updateCountdown, 1000);

  // Initial update
  updateCountdown();
});

