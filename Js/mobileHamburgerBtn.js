const hamburger = document.getElementById('hamburger-btn');
const topbarlink = document.getElementById('topBar-links');


hamburger.addEventListener('click',() =>{
   topbarlink.classList.toggle('show');
});