const modalOverlay = document.querySelector('.modal_overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (const card of cards) {
  card.addEventListener('click', () => {
    const contentId = card.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector(
      'iframe'
    ).src = `https://rocketseat.com.br/${contentId}`
  })
}

document.querySelector('#close').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ''
})

document.querySelector('#max').addEventListener('click', () => {
  modal.classList.add('maximize')
})

document.querySelector('#min').addEventListener('click', () => {
  modal.classList.remove('maximize')
})
