function toggleMenu(displayState){
  const nav = document.getElementById('header_navigation');
  const closeIcon = document.getElementById('close-icon');

  nav.style.display = displayState;
  closeIcon.style.display = displayState;
}