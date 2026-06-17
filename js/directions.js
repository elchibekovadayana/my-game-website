// ========== МОДАЛЬНЫЕ ОКНА ДЛЯ НАПРАВЛЕНИЙ ==========
document.querySelectorAll('.direction-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
        if (e.target.classList.contains('direction-card__link')) return;
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

document.querySelectorAll('.direction-card__link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var card = this.closest('.direction-card');
        var modalId = card.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

document.querySelectorAll('.direction-modal__close').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var modal = this.closest('.direction-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.querySelectorAll('.direction-modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.direction-modal.active').forEach(function(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// ========== БУРГЕР-МЕНЮ ==========
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие при клике на ссылку
    document.querySelectorAll('.nav__link').forEach(function(link) {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}