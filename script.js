
const Burgericon = document.querySelector('.burger_icon');
if (Burgericon){

    const menubody = document.querySelector('.menu_body');
    Burgericon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        Burgericon.classList.toggle('_active');
        menubody.classList.toggle('_active');
    });
    
} 