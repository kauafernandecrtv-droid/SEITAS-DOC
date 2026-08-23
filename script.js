document.addEventListener("DOMContentLoaded", () => {
  // Aula 1
  console.log("JavaScript conectado!");
  console.log("Document");

  const titulo = document.querySelector("header h1");
  const cargo = document.querySelector(".cargo");
  const secaoPrincipal = document.querySelector("main .container");

  console.log(titulo);

  if (titulo) {
    titulo.textContent = "Seitas.DOC | Alerta e prevenção";
  }

  if (cargo) {
    cargo.textContent = "Entendendo os sinais e como se proteger";
  }

  if (secaoPrincipal) {
    secaoPrincipal.id = "hero";
    secaoPrincipal.style.backgroundColor = "#f3f6ff";
    secaoPrincipal.style.borderRadius = "16px";
    secaoPrincipal.style.padding = "1.5rem";

    const apresentacao = secaoPrincipal.querySelector("p");

    if (apresentacao) {
      apresentacao.textContent =
        "Seitas são grupos que podem exercer forte influência sobre seus membros, manipulando crenças e comportamentos.";
    }
  }

  const secaoHabilidades = document.getElementById("caracteristicas");
  if (secaoHabilidades) {
    secaoHabilidades.id = "habilidades";
  }

  // Aula 2
  const botaoSobre = document.querySelector("nav a[href='hero']");
  const sobre = document.getElementById("caracteristicas");

  if (botaoSobre && sobre) {
    botaoSobre.addEventListener("click", function (event) {
      event.preventDefault();
      titulo.textContent = "Conheça os sinais de uma seita";
      sobre.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const linksNavegacao = document.querySelectorAll("nav a");

  linksNavegacao.forEach((link) => {
    link.addEventListener("click", function (event) {
      const alvo = link.getAttribute("href");
      const secaoAlvo = document.querySelector(`#${alvo}`);

      if (secaoAlvo) {
        event.preventDefault();
        secaoAlvo.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (titulo) {
    titulo.addEventListener("mouseover", function () {
      console.log("Mouse sobre o título!");
    });
  }

  const historias = document.querySelectorAll(".historia-card");

  historias.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.style.transform = "translateY(-4px)";
      card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("mouseout", function () {
      card.style.transform = "translateY(0)";
    });
  });
});
