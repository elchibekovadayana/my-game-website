// ========== МОДАЛЬНОЕ ОКНО ==========
var modal = document.getElementById('modal');
var overlay = document.getElementById('modalOverlay');
var closeBtn = document.getElementById('modalClose');

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// ========== ВСЕ КНОПКИ С КЛАССОМ .btn ==========
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
});

// ========== ВАЛИДАЦИЯ ФОРМЫ ==========
var form = document.getElementById('modalForm');
var nameInput = document.getElementById('modalName');
var phoneInput = document.getElementById('modalPhone');
var agreeCheckbox = document.getElementById('modalAgree');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var isValid = true;
    
    if (nameInput.value.trim().length < 2) {
        alert('Пожалуйста, введите ваше имя');
        nameInput.style.borderColor = '#c44';
        isValid = false;
    } else {
        nameInput.style.borderColor = '#E8E2D5';
    }
    
    var phoneRegex = /^[\d\+][\d\(\)\-\s]{10,18}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        alert('Пожалуйста, введите корректный номер телефона');
        phoneInput.style.borderColor = '#c44';
        isValid = false;
    } else {
        phoneInput.style.borderColor = '#E8E2D5';
    }
    
    if (!agreeCheckbox.checked) {
        alert('Пожалуйста, согласитесь на обработку персональных данных');
        isValid = false;
    }
    
    if (isValid) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        form.reset();
        closeModal();
    }
});

// Слайдер отзывов
const track = document.getElementById('reviewsTrack');
const slides = document.querySelectorAll('.reviews__slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
const totalSlides = slides.length;

// Создаём точки
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('reviews__dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.reviews__dot');

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

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