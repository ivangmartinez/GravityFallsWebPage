// Si en el futuro querés agregar modal/lightbox, lo haríamos acá
console.log("Galería cargada correctamente");
// Selecciona elementos


document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.card-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.lightbox .close');

  images.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener('click', function() {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
      caption.textContent = this.alt;
    });
  });

  closeBtn.addEventListener('click', function() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    caption.textContent = "";
  });

  // Cerrar lightbox al hacer click fuera de la imagen
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      caption.textContent = "";
    }
  });
});
