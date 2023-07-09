
const listaDePersonagens = document.querySelectorAll('.lista-de-personagens li');
const personagemGrande = document.querySelector('.personagem-grande');


listaDePersonagens.forEach((personagem) => {
  // Adiciona um evento de clique a cada elemento da lista
  personagem.addEventListener('mouseover', () => {

    function animateIn() {
      personagemGrande.classList.add('animate-in');
    }


    listaDePersonagens.forEach((item) => {
      item.classList.remove('selecionado');
    });

    personagem.classList.add('selecionado');

    // Obtém o ID do elemento clicado
    const idPersonagem = personagem.id;

    const personagemGrande = document.querySelector('.personagem-grande');
    const nome = document.querySelector('.nome-personagem');

    const descricaoPersonagem = document.querySelector('.descricao-personagem');

    switch (idPersonagem) {
      case 'tomura':
        nome.textContent = 'Tomura Shigaraki';
        personagemGrande.src = `./src/imagens/Tomura.png`;
        descricaoPersonagem.textContent = 'Possui um poder peculiar conhecido como Decay (Decadência), que lhe confere habilidades extremamente perigosas e destrutivas.';
        personagemGrande.classList.remove('animate-in');
        break;
      case 'spinner':
        nome.textContent = 'Spinner'
        personagemGrande.src = `./src/imagens/Spinner.png`;
        descricaoPersonagem.textContent = 'E habilidoso em combate corpo a corpo e usa suas lâminas como arma principal. ';
        personagemGrande.classList.remove('animate-in');

        break;
      case 'twice':
        nome.textContent = 'Twice'
        personagemGrande.src = `./src/imagens/Twice.png`;
        descricaoPersonagem.textContent = 'Ele tem a habilidade de criar clones perfeitos de si mesmo. No entanto, a instabilidade emocional de Twice o leva a questionar sua própria identidade.';
        personagemGrande.classList.remove('animate-in');

        break;
      case 'toga':
        nome.textContent = 'Himiko Toga'
        personagemGrande.src = `./src/imagens/Toga.png`;
        descricaoPersonagem.textContent = 'Possui a habilidade de se transformar em outras pessoas após ingerir seu sangue.';
        personagemGrande.classList.remove('animate-in');
        break;
      case 'atsuhiro':
        nome.textContent = 'Atsuhiro Sako'
        personagemGrande.src = `./src/imagens/Atsuhiro.png`;
        descricaoPersonagem.textContent = 'Ele possui uma personalidade teatral e é conhecido por sua habilidade peculiar, que lhe permite comprimir objetos e pessoas em pequenas esferas. ';
        personagemGrande.classList.remove('animate-in');
        break;
      case 'dabi':
        nome.textContent = 'Dabi'
        personagemGrande.src = `./src/imagens/Dabi.png`;
        descricaoPersonagem.textContent = 'Possui habilidades relacionadas ao fogo e pode liberar chamas azuis intensas. ';
        personagemGrande.classList.remove('animate-in');
        break;
      case 'kurogiri':
        nome.textContent = 'Kurogiri'
        personagemGrande.src = `./src/imagens/Kurogiri.png`;
        descricaoPersonagem.textContent = 'Possui a habilidade de criar e manipular portais, permitindo que ele se teletransporte e transporte outras pessoas.';
        personagemGrande.classList.remove('animate-in');
        break;
    
    } setTimeout(() => {
      personagemGrande.classList.add('animate-in');
    }, 1);
  });
});
