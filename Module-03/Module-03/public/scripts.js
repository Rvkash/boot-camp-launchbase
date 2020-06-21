const cards = document.querySelectorAll('.card')

for (const card of cards) {
  card.addEventListener('click', function () {
    const idValue = card.getAttribute('id')
    window.location.href = `/courses/${idValue}`
  })
}
