// МОДАЛЬНЫЕ ОКНА ДЛЯ ПРЕПОДАВАТЕЛЕЙ
console.log('Скрипт teachers.js загружен');

var allLinks = document.querySelectorAll('.teacher-card__link');
console.log('Найдено ссылок "Подробнее":', allLinks.length);

document.querySelectorAll('.teacher-card__link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var modalId = this.getAttribute('data-modal');
        console.log('Клик по ссылке, data-modal:', modalId);
        var modal = document.getElementById(modalId);
        console.log('Найдено окно с ID ' + modalId + ':', modal);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Окно открыто');
        } else {
            console.log('ОШИБКА: окно с ID ' + modalId + ' не найдено');
        }
    });
});

document.querySelectorAll('.teacher-modal__close').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var modal = this.closest('.teacher-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        console.log('Окно закрыто');
    });
});

document.querySelectorAll('.teacher-modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Окно закрыто по затемнению');
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.teacher-modal.active').forEach(function(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Окно закрыто по Escape');
        });
    }
});

// БУРГЕР-МЕНЮ
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav__link').forEach(function(link) {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
