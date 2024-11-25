window.onload = function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate');
  };

  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('fade-in');
      }
    });
  });

  // Кнопканы басканда иштеши үчүн JavaScript кодун колдонобуз
const button = document.getElementById('animatedBtn');

button.addEventListener('click', () => {
  button.classList.add('active');  // Кнопка басылганда кирүү анимациясын баштайбыз

  // 1 секунддун ичинде анимация аяктагандан кийин артка чыгууну кошобуз
  setTimeout(() => {
    button.classList.add('out');  // Кнопка артка чыгууну баштайт
  }, 500);  // 500мс - кирүү анимациясынын убактысы

  // 1.5 секунддан кийин бүтөт
  setTimeout(() => {
    button.classList.remove('active', 'out');  // Анимация аяктагандан кийин класстарды тазалайбыз
  }, 1500);
});

const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    products.forEach((product) => {
      if (category === 'all' || product.getAttribute('data-category') === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  darkModeBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Күндүзгү режим'
    : 'Түнкү режим';
});
const productsToLoad = document.querySelectorAll('.product');

const loadProducts = () => {
  productsToLoad.forEach((product) => {
    if (product.getBoundingClientRect().top < window.innerHeight) {
      product.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', loadProducts);
window.addEventListener('load', loadProducts);