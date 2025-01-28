burger = document.querySelector('.burger')
navBar = document.querySelector('.nav-bar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger .addEventListener('click', ()=>{
    rightnav.classList.toggle('v-nav-resp');
    navList.classList.toggle('v-nav-resp');
    navBar.classList.toggle('h-nav-resp');
});
