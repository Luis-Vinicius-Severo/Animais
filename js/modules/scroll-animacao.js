export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const windowMetade = window.innerHeight * 0.6

  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionVisible = sectionTop - windowMetade < 0

      if (sectionVisible) section.classList.add('ativo')
      else section.classList.remove('ativo')
    })
  }

  animaScroll()
  window.addEventListener('scroll', animaScroll)
}
