const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  // ADICIONE CAO NÃO TENHA E REMOVA QUANDO TIVER A CLASSE
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
// PARA MELHORAR A ACESSIBILIDADE NO RESPONSIVO, TOUCHSTART
btnMobile.addEventListener("touchstart", toggleMenu);
