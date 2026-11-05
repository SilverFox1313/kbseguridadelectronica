const services = [
  {
    img: "img/electricity.png",
    title: "Cercos Eléctricos",
    desc: "Protege tu propiedad con tecnología de disuasión activa. Nuestros cercos eléctricos ofrecen una barrera perimetral segura y confiable, diseñada para prevenir intrusiones antes de que ocurran. Instalamos sistemas con pulsos controlados, señalización visible y respaldo energético, garantizando protección continua sin comprometer la estética del entorno.",
  },
  {
    img: "img/engine.png",
    title: "Motores Para Portones Corredizos",
    desc: "Automatiza tu acceso con comodidad y seguridad. Instalamos motores de alta calidad para portones corredizos, ideales para residencias, condominios y negocios. Nuestros sistemas incluyen control remoto, sensores de seguridad y opciones de apertura rápida, todo con instalación profesional y soporte técnico garantizado.",
  },
  {
    img: "img/phone.png",
    title: "Alarmas Residenciales",
    desc: "Tu tranquilidad comienza en casa. Ofrecemos sistemas de alarma personalizados que detectan intrusiones, movimientos y aperturas no autorizadas. Integración con sensores de puerta, movimiento, sirenas y notificaciones móviles para que siempre estés informado, estés donde estés. Instalación rápida, configuración intuitiva y monitoreo opcional.",
  },
  {
    img: "img/repair.png",
    title: "Electricidad Residencial",
    desc: "Soluciones eléctricas seguras y eficientes para tu hogar. Realizamos instalaciones, mantenimientos y mejoras eléctricas con enfoque en calidad, cumplimiento normativo y estética. Desde iluminación LED hasta tableros eléctricos y tomas inteligentes, nuestro equipo garantiza funcionalidad, seguridad y ahorro energético.",
  },
];

const social = [
  {
    img: "img/whatsapp.png",
    link: "https://wa.me/18098501333",
  },
  {
    img: "img/facebook.png",
    link: "https://www.facebook.com/share/1CVtV6c51z/",
  },
  {
    img: "img/instagram.png",
    link: "https://www.instagram.com/kbseguridadelectronica?utm_source=qr&igsh=Y2JuaTl4c3p0dWt6",
  },
  {
    img: "img/youtube.png",
    link: "https://youtube.com/@kbseguridadelectronica1?si=FVwfoi7IdvIp0Obf",
  },
  {
    img: "img/tiktok.png",
    link: "https://www.tiktok.com/@kbseguridadelectronica?_t=ZS-8yVs2KGTQZD&_r=1",
  },
];

// map of services
const servicesContainer = document.querySelector(".services");

services.forEach((service) => {
  const card = document.createElement("div");
  card.className = "relative group bg-white border-2 border-gray-900 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm mx-4 sm:mx-0";

  card.innerHTML = `
      <div class="absolute -top-3 -right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded border-2 border-gray-900 uppercase tracking-tighter shadow-sm">
        Nuevo
      </div>

      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-14 h-14 border-2 border-gray-900 rounded-lg bg-orange-400 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-orange-300 transition-colors">
          <img src="${service.img}" alt="${service.title}" class="h-8 w-8 object-contain">
        </div>

        <div class="flex flex-col">
          <h3 class="sm:text-sm text-xl font-black text-gray-900 leading-tight mb-1 sm:mt-2 mt-0 uppercase italic">
            ${service.title}
          </h3>
          <div class="h-1 w-12 bg-orange-500 mb-3 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      <p class="mt-4 text-gray-700 sm:text-sm text-lg font-medium leading-snug">
        ${service.desc}
      </p>

      <div class="mt-6 flex items-center gap-2">
        <div class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Disponible ahora</span>
      </div>
    `;

  servicesContainer.appendChild(card);
});

// map of social media
const ul = document.querySelector("footer ul");
social.forEach(({ img, link }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const image = document.createElement("img");
  image.src = img;
  image.alt = "social icon";
  image.className = "w-12 h-12 hover:scale-110 transition-transform";

  a.appendChild(image);
  li.appendChild(a);
  ul.appendChild(li);
});

// navbar
// const menuBtn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");
// const iconHamburger = document.getElementById("icon-hamburger");
// const iconClose = document.getElementById("icon-close");
// menuBtn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
//   iconHamburger.classList.toggle("hidden");
//   iconClose.classList.toggle("hidden");
// });
function initMobileMenu(menuBtnId, menuId, iconHamburgerId, iconCloseId) {
  const menuBtn = document.getElementById(menuBtnId);
  const menu = document.getElementById(menuId);
  const iconHamburger = document.getElementById(iconHamburgerId);
  const iconClose = document.getElementById(iconCloseId);

  // Abrir/cerrar con el botón
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
    iconHamburger.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  // Cerrar al hacer clic en un enlace
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      iconHamburger.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });

  // Cerrar al hacer clic fuera
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnButton = menuBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menu.classList.add("hidden");
      iconHamburger.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  });
}
initMobileMenu("menu-btn", "menu", "icon-hamburger", "icon-close");

// carrusel
let currentIndex = 0;
const carousel = document.getElementById("carousel");
const totalSlides = carousel.children.length;

function getSlideWidth() {
  return carousel.parentElement.getBoundingClientRect().width;
}

function updateCarousel() {
  const slideWidth = carousel.children[0].offsetWidth + 16;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

let touchStartX = null;
let touchStartY = 0;
let suppressCarouselClickUntil = 0;

carousel.addEventListener(
  "touchstart",
  (event) => {
    if (event.touches.length !== 1) {
      touchStartX = null;
      return;
    }

    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  },
  { passive: true },
);

carousel.addEventListener(
  "touchend",
  (event) => {
    if (touchStartX === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    touchStartX = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    suppressCarouselClickUntil = Date.now() + 500;
    if (deltaX > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  },
  { passive: true },
);

carousel.addEventListener("touchcancel", () => {
  touchStartX = null;
});

carousel.addEventListener(
  "click",
  (event) => {
    if (
      Date.now() < suppressCarouselClickUntil &&
      event.target.closest("img, video")
    ) {
      event.preventDefault();
      event.stopPropagation();
      suppressCarouselClickUntil = 0;
    }
  },
  true,
);

// Modal que soporta imagen y video
let modalIndex = -1;
let modalTouchStartX = null;
let modalTouchStartY = 0;
const imageModal = document.getElementById("imageModal");

function showModalSlide(index) {
  const slides = Array.from(carousel.children);
  if (index < 0 || index >= slides.length) return;

  modalIndex = index;
  const slide = slides[modalIndex];
  const src = slide.currentSrc || slide.src;
  const isVideo = slide.tagName === "VIDEO";
  const content = document.getElementById("modalImage");
  const modalContent = document.createElement(isVideo ? "video" : "img");

  if (content.tagName === "VIDEO") content.pause();

  modalContent.id = "modalImage";
  modalContent.src = src;
  modalContent.className = "max-w-full max-h-full rounded shadow-lg";

  if (isVideo) {
    modalContent.controls = true;
    modalContent.autoplay = true;
    modalContent.playsInline = true;
  } else {
    modalContent.alt = slide.alt;
  }

  content.replaceWith(modalContent);
}

function openModal(src) {
  const slides = Array.from(carousel.children);
  const index = slides.findIndex((slide) => (slide.currentSrc || slide.src) === src);
  if (index === -1) return;

  showModalSlide(index);
  imageModal.classList.remove("hidden");
}

function closeModal() {
  imageModal.classList.add("hidden");
}

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeModal();
});

imageModal.addEventListener(
  "touchstart",
  (event) => {
    if (event.touches.length !== 1) {
      modalTouchStartX = null;
      return;
    }

    modalTouchStartX = event.touches[0].clientX;
    modalTouchStartY = event.touches[0].clientY;
  },
  { passive: true },
);

imageModal.addEventListener(
  "touchend",
  (event) => {
    if (modalTouchStartX === null) return;

    const deltaX = event.changedTouches[0].clientX - modalTouchStartX;
    const deltaY = event.changedTouches[0].clientY - modalTouchStartY;
    modalTouchStartX = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    showModalSlide(modalIndex + (deltaX < 0 ? 1 : -1));
  },
  { passive: true },
);

imageModal.addEventListener("touchcancel", () => {
  modalTouchStartX = null;
});

window.addEventListener("resize", updateCarousel);
updateCarousel();