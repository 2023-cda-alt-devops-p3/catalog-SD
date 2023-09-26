let toggle= document.querySelector('.toggle');
let body= document.querySelector('body');

toggle.addEventListener('click', () => {
    App.toggleMenu();
} );

let App= {
    toggleMenu:() => {
        body.classList.toggle('open');
    },
    listenMenu:() => {
        let menuItems= document.getElementsByClassName('menu')[0].querySelectorAll('li');
        console.log('item', menuItems);
        menuItems.forEach((item, i)=> {
            item.addEventListener('click', () => {
                console.log('click');
                App.toggleMenu();
            } );
        })
    }
};

App.listenMenu();
