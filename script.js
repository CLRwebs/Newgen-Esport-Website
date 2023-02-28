const menuButton = document.getElementById('check');
const menuElement = document.querySelector('.header-links-sm');

menuButton.onchange = () => {
  console.log('CHANGE');
  menuElement.classList.toggle('open');
};

function checkMediaQuery() {
  if (window.innerWidth > 1200) {
    menuElement.classList.remove('open');
    menuButton.checked = false;
  }
}
window.addEventListener('resize', checkMediaQuery);
