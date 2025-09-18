// Modalda tıklanan resmi büyüt
document.addEventListener('click', function (e) {
  const img = e.target.closest('.gallery-img');
  if (!img) return;
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const src = img.getAttribute('data-src') || img.src;
  modalImage.src = src;
  modalTitle.textContent = img.alt || 'Önizleme';
});
