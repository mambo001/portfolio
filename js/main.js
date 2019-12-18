let colorArray = ["#051e3e","#251e3e","#451e3e","#651e3e",
                "#851e3e","#ffffff","#d0e1f9","#4d648d",
                "#283655","#1e1f26","#6e7f80","#536872",
                "#708090","#536878","#36454f","#4b3832",
                "#854442","#fff4e6","#3c2f2f","#be9b7b"];

const mobileBtn = document.querySelector('.mobile-menu-btn');


mobileBtn.addEventListener('click', () => {
    document.querySelector('#mobile-nav').classList.toggle('show');
    console.log('yey');
});
          

Array.from(document.querySelectorAll('.project')).forEach((project) => {
    // let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
    project.style.background = `${randomColor}`;
});



