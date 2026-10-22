document.addEventListener('DOMContentLoaded', function() {
  const tipoUsuario = localStorage.getItem('usuario_tipo') || 'player';

  const userBadge = document.getElementById('user-badge');
  const avatar = document.getElementById('avatar');

  const nomeUsuario = tipoUsuario === 'admin' ? 'Derick Portela' : 'Anderson Ruan';
  if (userBadge) userBadge.textContent = nomeUsuario;
  if (avatar) avatar.style.transform = 'rotate(0deg)';

  const adminPanel = document.getElementById('admin-panel');
  const btnRefresh = document.getElementById('btn-refresh');
  if (tipoUsuario !== 'admin') {
    adminPanel?.classList.add('hidden');
    btnRefresh?.classList.add('hidden');
  } else {
    adminPanel?.classList.remove('hidden');
    btnRefresh?.classList.remove('hidden');
  }

  const produtos = [
    {"nome":"The Witcher 3: Wild Hunt","categoria":"rpg","preco":19.9,"descricao":"RPG premiado de mundo aberto, com narrativa épica, mutáveis escolhas e muito conteúdo.","img":"img/witcher3.jpg"},
    {"nome":"Cyberpunk 2077","categoria":"ação","preco":79.9,"descricao":"Aventura futurista em mundo aberto, com missões intensas e ambientação distópica.","img":"img/cyberpunk2077.jpg"},
    {"nome":"Hades","categoria":"indie","preco":29.59,"descricao":"Rogue-lite aclamado, combate dinâmico e narrativa emergente.","img":"img/hades.jpg"},
    {"nome":"Stardew Valley","categoria":"indie","preco":14.99,"descricao":"Simulação de fazenda com crafting, relacionamento e relaxamento.","img":"img/stardew.jpg"},
    {"nome":"Elden Ring","categoria":"rpg","preco":164.7,"descricao":"RPG de ação expansivo e desafiador com mundo aberto sombrio.","img":"img/eldenring.jpg"},
    {"nome":"Red Dead Redemption 2","categoria":"ação","preco":74.97,"descricao":"Aventura épica no Velho Oeste com história profunda e exploração.","img":"img/rdr2.jpg"},
    {"nome":"Hollow Knight","categoria":"indie","preco":23.49,"descricao":"Metroidvania atmosférico com belos visuais e exploração rica.","img":"img/hollowknight.jpg"},
    {"nome":"Dead Cells","categoria":"ação","preco":23.74,"descricao":"Rogue-vania rápido e fluído, ideal para ação constante.","img":"img/deadcells.jpg"},
    {"nome":"Cuphead","categoria":"indie","preco":25.89,"descricao":"Run-and-gun com arte desenhada à mão e chefes desafiadores.","img":"img/cuphead.jpg"},
    {"nome":"Ori and the Blind Forest","categoria":"indie","preco":19.8,"descricao":"Plataforma emocional com visual e trilha sonora envolventes.","img":"img/ori.jpg"},
    {"nome":"Mass Effect Legendary Edition","categoria":"rpg","preco":29.9,"descricao":"Trilogia remasterizada de RPG espacial com decisões impactantes.","img":"img/masseffect.jpg"},
    {"nome":"Divinity: Original Sin 2","categoria":"rpg","preco":27.29,"descricao":"RPG tático com grande liberdade e combate por turnos.","img":"img/divinity2.jpg"},
    {"nome":"Sekiro: Shadows Die Twice","categoria":"ação","preco":129.9,"descricao":"Ação desafiadora com combate preciso e mundo baseado em mitologia.","img":"img/sekiro.jpg"},
    {"nome":"God of War (2018)","categoria":"ação","preco":149.9,"descricao":"Aventura cinematográfica com narrativa madura e combate visceral.","img":"img/godofwar.jpg"},
    {"nome":"Resident Evil 4 Remake","categoria":"terror","preco":69.5,"descricao":"Remake do clássico survival horror com gameplay moderno.","img":"img/re4.jpg"},
    {"nome":"The Last of Us Part I","categoria":"ação","preco":139.0,"descricao":"Aventura narrativa intensa com temas emocionais profundos.","img":"img/tlou.jpg"},
    {"nome":"Far Cry 6","categoria":"ação","preco":119.9,"descricao":"FPS mundo aberto com ação, veículos e narrativa política.","img":"img/farcry6.jpg"},
    {"nome":"Assassin's Creed Valhalla","categoria":"rpg","preco":159.9,"descricao":"Ação/RPG ambientado na era Viking com muitas missões.","img":"img/acvalhalla.jpg"},
    {"nome":"Monster Hunter: World","categoria":"rpg","preco":89.99,"descricao":"Caça a monstros em ambientes detalhados com progressão por equipamentos.","img":"img/mhworld.jpg"},
    {"nome":"Doom Eternal","categoria":"ação","preco":59.9,"descricao":"FPS frenético com ritmo acelerado e combate visceral.","img":"img/doometernal.jpg"},
    {"nome":"Dark Souls III","categoria":"rpg","preco":149.9,"descricao":"RPG desafiador com mundo sombrio e combate tático.","img":"img/darksouls3.jpg"},
    {"nome":"Control","categoria":"ação","preco":99.9,"descricao":"Ação sobrenatural em um mundo cheio de mistério e poderes.","img":"img/control.jpg"},
    {"nome":"Metro Exodus","categoria":"ação","preco":79.9,"descricao":"Survival/FPS com narrativa e exploração em ambiente pós-apocalíptico.","img":"img/metroexodus.jpg"},
    {"nome":"Dying Light 2","categoria":"ação","preco":129.9,"descricao":"Parkour e zumbis com decisões que afetam o mundo do jogo.","img":"img/dyinglight2.jpg"},
    {"nome":"Subnautica","categoria":"sobrevivência","preco":49.9,"descricao":"Exploração submarina e sobrevivência em planeta alienígena.","img":"img/subnautica.jpg"},
    {"nome":"Celeste","categoria":"indie","preco":19.9,"descricao":"Plataforma desafiadora com história emocional e gameplay preciso.","img":"img/celeste.jpg"},
    {"nome":"Hollow Knight: Silksong","categoria":"indie","preco":69.9,"descricao":"Sequência aguardada do metroidvania Hollow Knight.","img":"img/silksong.jpg"},
    {"nome":"Terraria","categoria":"indie","preco":9.9,"descricao":"Sandbox 2D com crafting, exploração e construção infinita.","img":"img/terraria.jpg"},
    {"nome":"Rocket League","categoria":"ação","preco":49.9,"descricao":"Futebol com carros — multiplayer competitivo e divertido.","img":"img/rocketleague.jpg"},
    {"nome":"Among Us","categoria":"indie","preco":5.99,"descricao":"Multiplayer social de dedução e intriga entre tripulantes.","img":"img/amongus.jpg"}
  ];

  const wrap = document.getElementById('products');
  const search = document.getElementById('search');
  const filter = document.getElementById('filter');
  const detalhesSec = document.getElementById('detalhes');
  const detalhesContent = document.getElementById('detalhes-content');
  const btnVoltar = document.getElementById('btn-voltar-lista');
  const formAdd = document.getElementById('form-add');
  const btnSair = document.getElementById('logout');

  function criarCard(p) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nome}">
      <div class="card-body">
        <div class="card-title">${p.nome}</div>
        <div class="card-desc"><strong>Gênero:</strong> ${p.categoria} — ${p.descricao}</div>
        <div class="card-footer">
          <div class="price">R$ ${Number(p.preco).toFixed(2)}</div>
          <div class="actions"></div>
        </div>
      </div>
    `;
    const actions = card.querySelector('.actions');

    const det = document.createElement('button');
    det.className = 'btn small';
    det.textContent = 'Detalhes';
    det.onclick = () => mostrarDetalhes(p);
    actions.appendChild(det);

    if (tipoUsuario === 'admin') {
      const del = document.createElement('button');
      del.className = 'btn small';
      del.style.background = '#6b7280';
      del.textContent = 'Excluir';
      del.onclick = () => excluir(p.nome);
      actions.appendChild(del);
    } else {
      const buy = document.createElement('button');
      buy.className = 'btn small';
      buy.textContent = 'Comprar';
      buy.onclick = () => comprar(p.nome);
      actions.appendChild(buy);
    }

    return card;
  }

  function renderizar() {
    wrap.innerHTML = '';
    const q = (search?.value || '').toLowerCase();
    const cat = (filter?.value || 'all');

    const filtrados = produtos.filter(p => {
      const okName = p.nome.toLowerCase().includes(q);
      const okCat = cat === 'all' || p.categoria === cat;
      return okName && okCat;
    });

    if (filtrados.length === 0) {
      wrap.innerHTML = '<p>Nenhum jogo encontrado</p>';
      return;
    }
    filtrados.forEach(p => wrap.appendChild(criarCard(p)));
  }

  function mostrarDetalhes(p) {
    detalhesContent.innerHTML = `
      <h2>${p.nome}</h2>
      <p><strong>Gênero:</strong> ${p.categoria}</p>
      <p><strong>Preço:</strong> R$ ${Number(p.preco).toFixed(2)}</p>
      <p>${p.descricao}</p>
    `;
    document.querySelector('.content')?.classList.add('hidden');
    detalhesSec.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'smooth'});
  }

  btnVoltar?.addEventListener('click', () => {
    detalhesSec.classList.add('hidden');
    document.querySelector('.content')?.classList.remove('hidden');
  });

  function excluir(nome) {
    if (tipoUsuario !== 'admin') return alert('Somente admin.');
    if (!confirm('Confirmar exclusão de ' + nome + '?')) return;
    const idx = produtos.findIndex(x => x.nome === nome);
    if (idx >= 0) produtos.splice(idx,1);
    renderizar();
  }

  function comprar(nome) {
    alert('Compra simulada: ' + nome);
  }

  formAdd?.addEventListener('submit', function(e){
    e.preventDefault();
    if (tipoUsuario !== 'admin') return alert('Somente admin pode adicionar.');
    const fd = new FormData(formAdd);
    const novo = {
      nome: fd.get('nome'),
      categoria: fd.get('categoria'),
      preco: parseFloat(fd.get('preco'))||0,
      descricao: fd.get('descricao')||'',
      img: fd.get('img')||'img/placeholder.jpg'
    };
    produtos.unshift(novo);
    renderizar();
    formAdd.reset();
  });

  search?.addEventListener('input', renderizar);
  filter?.addEventListener('change', renderizar);

// Barra lateral
document.getElementById('sf-github')?.setAttribute('href','https://github.com/DerickxP');
document.getElementById('sf-linkedin')?.setAttribute('href','https://www.linkedin.com/in/derickportela/');
document.getElementById('sf-instagram')?.setAttribute('href','https://www.instagram.com/derickportela_/');

// Rodapé
document.getElementById('link-github')?.setAttribute('href','https://github.com/andersnruann');
document.getElementById('link-linkedin')?.setAttribute('href','https://www.linkedin.com/in/andersnruann/');
document.getElementById('link-instagram')?.setAttribute('href','https://www.instagram.com');

  btnSair?.addEventListener('click', () => {
    localStorage.removeItem('usuario_tipo');
    window.location.href = 'login.html';
  });

  renderizar();
});
