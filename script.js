const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Navigation slide control function
const navSlide = function (direction1, direction2) {
  navItems.forEach((item, index) =>
    item.classList.replace(
      `slide-${direction1}-${index + 1}`,
      `slide-${direction2}-${index + 1}`
    )
  );
};

const toggleNav = function () {
  // Hamburger menu animation transform to X
  menuBars.classList.toggle('change');
  // Sliding in the overlay
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Nav items animation slide in
    navSlide('out', 'in');
  } else {
    // Sliding out the overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Nav items animation slide out
    navSlide('in', 'out');
  }
};

// Event handlers
menuBars.addEventListener('click', toggleNav);
navItems.forEach(item => item.addEventListener('click', toggleNav));
