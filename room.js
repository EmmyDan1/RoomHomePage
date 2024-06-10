
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const closeIcon = document.getElementById('closeIcon');
const overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  closeIcon.classList.toggle('active');
  menuIcon.style.display = 'none';
  overlay.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  closeIcon.classList.toggle('active');
  menuIcon.style.display = 'block';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.style.display = 'none';
})

 const backgrounds = [
    'url("./images/desktop-image-hero-1.jpg")',
    'url("./images/desktop-image-hero-2.jpg")',
    'url("./images/desktop-image-hero-3.jpg")',
  ];

  


  const texts = [
    {
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection .'
    },
    {
      title: 'About Our Furniture',
      text: 'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.'
    },
    {
      title: 'Shop Now',
      text: 'Find the perfect pieces for your home. Our shop offers a variety of furniture that combines style and comfort. Transform your space with our curated selection and make your home truly yours. Shop now and discover what makes our collection unique.'
    },
  
  ];

  

  let currentIndex = 0;

  const background = document.getElementById('background');
  const textContent = document.getElementById('textContent');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function updateContent(index) {
    background.style.backgroundImage = backgrounds[index];
    textContent.innerHTML = `
      <h1>${texts[index].title}</h1>
      <p>${texts[index].text}</p>
    `;
  }
//   function updateContent(index) {
//     background.style.backgroundImage = backgrounds[index];
//     const content = texts[index];
//     textContent.innerHTML = `
//         <h1>${content.title}</h1>
//         <div class="Ptexts">
//             ${content.text.split('. ').map(sentence => `<p>${sentence}</p>`).join('')}
//         </div>
//     `;
// }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : texts.length - 1;
    updateContent(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < texts.length - 1) ? currentIndex + 1 : 0;
    updateContent(currentIndex);
  });

  updateContent(currentIndex);












// document.addEventListener('DOMContentLoaded', () => {
//     const slides = document.querySelectorAll('.slide');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
//     const slideText = document.getElementById('slide-text');
//     let currentSlide = 0;

//     const updateSlide = () => {
//         slides.forEach((slide, index) => {
//             slide.style.opacity = index === currentSlide ? 1 : 0;
//         });
//         const activeSlide = slides[currentSlide];
//         document.body.style.backgroundImage = `url(${activeSlide.dataset.bg})`;
//         slideText.textContent = activeSlide.dataset.text;
//     };

//     const nextSlide = () => {
//         currentSlide = (currentSlide + 1) % slides.length;
//         updateSlide();
//     };

//     const prevSlide = () => {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         updateSlide();
//     };

//     nextButton.addEventListener('click', nextSlide);
//     prevButton.addEventListener('click', prevSlide);

//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'ArrowRight') {
//             nextSlide();
//         } else if (e.key === 'ArrowLeft') {
//             prevSlide();
//         }
//     });

//     updateSlide();
// });