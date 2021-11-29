const burgerbutton = document.querySelector('.header__hamburger'),
      burgermenu   = document.querySelector('.hamburger-menu'),
      darkarea     = document.querySelector('.darken');

function menuShow() {
    burgerbutton.addEventListener('click', ()=> {
        burgermenu.classList.toggle('hamburger-menu__active'),
        darkarea.classList.toggle('darken_active');
    });
}

menuShow();

let app = new Vue({
    el: '#search',
    data: {
        search: '',
    },
});

const buttons = document.querySelectorAll('[data-button]'),
      loadbuttons = document.querySelectorAll('.buffering');
      checkedbuttons = document.querySelectorAll('.checked');
let timeoutID;

buttons.forEach((button, id) => {
    button.addEventListener('click', ()=> {
        localStorage.setItem('buttonid', id);
        loadbuttons.forEach((loadbutton, lbid) => {
            if (lbid == id) {
                button.classList.toggle('disabled');
                loadbutton.classList.toggle('disabled');
                timeoutID = window.setTimeout(buffer, 2000);
                function buffer() {
                    loadbutton.classList.toggle('disabled');
                    checkedbuttons.forEach((checkedbutton, cbid) => {
                        if (cbid == id) {
                            checkedbutton.classList.toggle('disabled');
                        }
                    });

                }
            }
        });
    });
});
buttons.forEach((button, id) => {
    if (localStorage.getItem('buttonid') == id) {
        checkedbuttons.forEach((checkedbutton, cbid) => {
            if (cbid == id) {
                button.classList.toggle('disabled');
                checkedbutton.classList.toggle('disabled');
            };
        });
    }
});

const modallink = document.querySelector('[data-cardmodal-1]'),
      modalwindow = document.querySelector('.modal-1'),
      modalclose = modalwindow.querySelector('.window-header__close');

modallink.addEventListener('click', ()=> {
        console.log('dadada');
        modalwindow.classList.remove('modal_disabled');
    });
modalclose.addEventListener('click', ()=> {
    modalwindow.classList.add('modal_disabled');
});


const modallink2 = document.querySelector('[data-cardmodal-2]'),
      modalwindow2 = document.querySelector('.modal-2'),
      modalclose2 = modalwindow2.querySelector('.window-header__close');

modallink2.addEventListener('click', ()=> {
        console.log('dadada');
        modalwindow2.classList.remove('modal_disabled');
    });
modalclose2.addEventListener('click', ()=> {
    modalwindow2.classList.add('modal_disabled');
});


const modallink3 = document.querySelector('[data-cardmodal-3]'),
      modalwindow3 = document.querySelector('.modal-3'),
      modalclose3 = modalwindow3.querySelector('.window-header__close');

modallink3.addEventListener('click', ()=> {
        console.log('dadada');
        modalwindow3.classList.remove('modal_disabled');
    });
modalclose3.addEventListener('click', ()=> {
    modalwindow3.classList.add('modal_disabled');
});


const modallink4 = document.querySelector('[data-cardmodal-4]'),
      modalwindow4 = document.querySelector('.modal-4'),
      modalclose4 = modalwindow4.querySelector('.window-header__close');

modallink4.addEventListener('click', ()=> {
        console.log('dadada');
        modalwindow4.classList.remove('modal_disabled');
    });
modalclose4.addEventListener('click', ()=> {
    modalwindow4.classList.add('modal_disabled');
});