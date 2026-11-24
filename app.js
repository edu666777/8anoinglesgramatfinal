/* =========================================================
   APP — navegação, exercícios, ilustrações e relatório
   ========================================================= */
const WHATSAPP = '5585992621003';           // (85) 99262-1003
const LS_KEY = CONFIG.lsKey;
const LETRAS = ['A', 'B', 'C', 'D'];
const MODS = Object.keys(MODULOS);

/* ---------- estado salvo no aparelho do aluno ---------- */
let S = (() => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; } })();
S.aluno = S.aluno || { nome: '', turma: '' };
S.r = S.r || {}; S.pos = S.pos || {};
MODS.forEach(m => { S.r[m] = S.r[m] || {}; S.pos[m] = S.pos[m] || 0; });
const save = () => localStorage.setItem(LS_KEY, JSON.stringify(S));

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const strip = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent; };

/* =========================================================
   ILUSTRAÇÕES DA TEORIA
   ========================================================= */
function exemplo(t, q, r) {
  return `<div class="exemplo"><span class="tag">✏️ ${t}</span><p>${q}</p><details><summary>Ver resposta comentada</summary><div class="resp">${r}</div></details></div>`;
}

function arvorePeriodo() {
  return `<div class="arvore">
    <div class="no raiz">PERÍODO COMPOSTO</div>
    <div class="ramos">
      <div class="ramo r-co"><div class="no">Coordenação<small>orações independentes</small></div>
        <div class="folhas"><span>Assindética<small>sem conjunção</small></span><span>Sindética<small>adit. · advers. · altern. · concl. · explic.</small></span></div></div>
      <div class="ramo r-su"><div class="no">Subordinação<small>depende da oração principal</small></div>
        <div class="folhas"><span>Substantiva<small>troca por ISSO</small></span><span>Adjetiva<small>pronome relativo</small></span><span>Adverbial<small>circunstância</small></span></div></div>
    </div>
    <div class="nota-virg">✍️ Vírgula nas adjetivas: <b>sem vírgula = restritiva</b> (limita) · <b>com vírgula = explicativa</b> (generaliza)</div>
  </div>`;
}

function fluxoRelativos() {
  return `<div class="fluxo">
    <div class="no raiz">O que o pronome retoma?</div>
    <div class="ramos tres-r">
      <div class="ramo"><div class="ic">🧑‍🤝‍🧑</div><b>Pessoas</b><span class="res who">WHO ou THAT</span></div>
      <div class="ramo"><div class="ic">📱🐶</div><b>Coisas / Animais</b><span class="res which">WHICH ou THAT</span></div>
      <div class="ramo"><div class="ic">🔑</div><b>Posse</b><span class="res whose">WHOSE + substantivo</span></div>
    </div></div>`;
}

/* quiz genérico dos mini-jogos */
function miniQuiz(el, titulo, itens, botoes, fim = '') {
  let i = 0, ok = 0;
  const draw = (msg = '') => {
    if (i >= itens.length) {
      el.innerHTML = `<div class="jogo"><span class="tag">${titulo}</span><p class="placarj">🎉 Você acertou <b>${ok} de ${itens.length}</b>!</p>${fim}<div class="row"><button class="btn sm" id="jr">Jogar de novo</button></div></div>`;
      $('#jr', el).onclick = () => { i = 0; ok = 0; draw(); }; return;
    }
    const [txt, cert] = itens[i];
    el.innerHTML = `<div class="jogo"><span class="tag">${titulo} (${i + 1}/${itens.length})</span>
      <div class="var">${txt}</div>
      <div class="row">${botoes.map((b, k) => `<button class="btn sm opj" data-v="${k}">${b}</button>`).join('')}</div><p class="msg">${msg}</p></div>`;
    $$('[data-v]', el).forEach(b => b.onclick = () => {
      const k = +b.dataset.v, certos = [].concat(cert), acertou = certos.includes(k);
      if (acertou) ok++;
      const exp = itens[i][2] ? ` ${itens[i][2]}` : '';
      const m = acertou ? `✅ Isso!${exp}` : `❌ Resposta: <b>${certos.map(c => botoes[c]).join(' ou ')}</b>.${exp}`;
      i++; draw(m);
    });
  };
  draw();
}

/* =========================================================
   WIDGETS INTERATIVOS
   ========================================================= */
const WIDGETS = {
  conjuncoes(el) {
    miniQuiz(el, '🎮 Que tipo de coordenada?', [
      ['Estudei muito, <b>mas</b> não passei.', 1], ['Ele não estuda <b>nem</b> trabalha.', 0], ['<b>Ou</b> você sai, <b>ou</b> eu saio.', 2],
      ['Choveu muito; <b>portanto</b>, o jogo foi adiado.', 3], ['Leve o guarda-chuva, <b>porque</b> vai chover.', 4], ['Treinou bastante, <b>contudo</b> perdeu.', 1],
      ['Estudou; passará, <b>pois</b>, na prova.', 3, '(pois depois do verbo = portanto)'], ['Corra, <b>pois</b> o ônibus vai sair.', 4, '(pois antes do verbo = porque)'],
      ['<b>Ora</b> ri, <b>ora</b> chora.', 2], ['Comprei pão <b>e</b> leite.', 0]
    ], ['➕ Aditiva', '⚔️ Adversativa', '🔀 Alternativa', '🏁 Conclusiva', '💬 Explicativa']);
  },
  requerimento(el) {
    const partes = [
      ['Exmo. Sr. Diretor da Escola Promover,', 'Endereçamento / vocativo', 'Dirige o texto a uma autoridade, com tratamento formal.'],
      ['João Silva, aluno do 8º ano A, matrícula nº 1234,', 'Identificação do requerente', 'Quem está pedindo: nome e qualificação.'],
      ['vem respeitosamente <b>requerer</b> a emissão da segunda via de seu histórico escolar, por ter extraviado o original.', 'Exposição do pedido', 'Pedido objetivo, em <b>3ª pessoa</b>, com o verbo <i>requer</i>.'],
      ['Nestes termos, pede deferimento.', 'Fecho protocolar', 'Fórmula padrão de encerramento ("deferimento" = aprovação).'],
      ['Fortaleza, 24 de novembro de 2026.', 'Local e data', ''], ['<span class="ass">João Silva</span>', 'Assinatura', '']
    ];
    el.innerHTML = `<div class="req"><div class="doc">${partes.map((p, i) => `<p data-i="${i}" class="pt"><span class="n">${i + 1}</span>${p[0]}</p>`).join('')}</div>
      <div class="explica" id="rqx"><b>👆 Toque em uma parte do documento</b><p>Cada parte do requerimento tem uma função.</p></div></div>`;
    $$('.pt', el).forEach(p => p.onclick = () => {
      $$('.pt', el).forEach(x => x.classList.remove('on')); p.classList.add('on');
      const d = partes[+p.dataset.i]; $('#rqx', el).innerHTML = `<b>${+p.dataset.i + 1}. ${d[1]}</b><p>${d[2] || 'Elemento obrigatório no final do documento.'}</p>`;
    });
  },
  isso(el) {
    const fr = [
      ['Todos desejam ', 'que a paz prevaleça', '.', 1], ['O professor perguntou ', 'se a turma entendeu', '.', 1],
      ['É importante ', 'que você descanse', '.', 1], ['O livro ', 'que comprei', ' é ótimo.', 0], ['Saí ', 'quando a chuva parou', '.', 0]
    ];
    let i = 0;
    const draw = (trocado = false) => {
      const f = fr[i];
      el.innerHTML = `<div class="jogo"><span class="tag">🔁 Teste do ISSO (${i + 1}/${fr.length})</span>
        <div class="var frase">${f[0]}<span class="troca ${trocado ? 'off' : ''}">${trocado ? '<b class="isso">ISSO</b>' : f[1]}</span>${f[2]}</div>
        <div class="row">${trocado ? `<button class="btn sm" id="iy">Próxima →</button>` : `<button class="btn sm" id="it">Trocar por ISSO</button>`}</div>
        <p class="msg">${trocado ? (f[3] ? '✅ Funcionou! É <b>subordinada substantiva</b>.' : '❌ Ficou estranho, então <b>não</b> é substantiva (' + (i === 3 ? 'é adjetiva: qualifica "livro"' : 'é adverbial de tempo') + ').') : ''}</p></div>`;
      $('#it', el) && ($('#it', el).onclick = () => draw(true));
      $('#iy', el) && ($('#iy', el).onclick = () => { i = (i + 1) % fr.length; draw(); });
    };
    draw();
  },
  virgula(el) {
    const tem = [1, 0, 1, 1, 0, 1, 0, 0];
    const draw = virg => {
      const pess = tem.map((t, k) => { const faz = virg ? true : t; return `<div class="pess ${faz ? 'faz' : ''}"><span>${virg || t ? '📄' : ''}</span>🧑‍🎓</div>`; }).join('');
      el.innerHTML = `<div class="jogo"><div class="row"><button class="btn sm ${virg ? '' : 'on'}" data-v="0">Sem vírgula</button><button class="btn sm ${virg ? 'on' : ''}" data-v="1">Com vírgulas</button></div>
        <p class="var frase">${virg ? 'Os candidatos<b class="vg">,</b> que entregaram o requerimento<b class="vg">,</b> farão a prova.' : 'Os candidatos que entregaram o requerimento farão a prova.'}</p>
        <div class="pessoas">${pess}</div>
        <p class="msg">${virg ? '<b>Explicativa</b>: <u>todos</u> entregaram o requerimento e <u>todos</u> farão a prova.' : '<b>Restritiva</b>: <u>só</u> os que entregaram (com 📄) farão a prova. Os outros não.'}</p></div>`;
      $$('[data-v]', el).forEach(b => b.onclick = () => draw(b.dataset.v === '1'));
    };
    draw(false);
  },
  adverbiais(el) {
    miniQuiz(el, '⏰ Qual é a circunstância?', [
      ['<b>Embora</b> estivesse cansado, terminou a tarefa.', 3], ['Faltou à aula <b>porque</b> estava doente.', 0], ['<b>Se</b> você estudar, irá bem.', 2],
      ['<b>Quando</b> o sinal tocar, saiam em fila.', 4], ['Explicou devagar <b>para que</b> todos entendessem.', 5], ['Correu <b>tanto que</b> ficou sem fôlego.', 1],
      ['<b>Já que</b> choveu, o passeio foi cancelado.', 0], ['<b>Ainda que</b> chova, haverá aula.', 3]
    ], ['Causa', 'Consequência', 'Condição', 'Concessão', 'Tempo', 'Finalidade']);
  },
  coordsub(el) {
    miniQuiz(el, '🧩 Coordenação ou subordinação?', [
      ['O debate foi intenso, mas chegaram a um acordo.', 0], ['Espero que todos compreendam.', 1, '(espero ISSO → substantiva)'], ['Cheguei, sentei, comecei a prova.', 0],
      ['Os alunos que participaram receberam certificado.', 1, '(adjetiva restritiva)'], ['Quando a chuva cessou, iniciaram a coleta.', 1, '(adverbial temporal)'], ['Estude ou ficará de recuperação.', 0]
    ], ['🔗 Coordenação', '⛓️ Subordinação']);
  },
  checklist(el) {
    const itens = [['Pesquisei em fontes confiáveis', 1], ['Vou interromper os colegas para falar primeiro', 0], ['Preparei um roteiro e controlei o tempo', 1], ['Vou ler o texto inteiro sem olhar para a turma', 0],
      ['Usei linguagem formal e dicção clara', 1], ['Respeitei os turnos de fala e o moderador', 1], ['Vou usar só gírias e abreviações de WhatsApp', 0], ['Mantive postura e contato visual', 1]];
    el.innerHTML = `<div class="jogo"><span class="tag">🎤 Checklist do seminário: toque no que DEVE fazer</span><div class="check">${itens.map((t, i) => `<button class="ck" data-i="${i}">${t[0]}</button>`).join('')}</div><p class="msg" id="ckm">Selecione as atitudes corretas.</p></div>`;
    $$('.ck', el).forEach(b => b.onclick = () => {
      const t = itens[+b.dataset.i]; b.classList.add(t[1] ? 'bom' : 'ruim'); b.disabled = true;
      const bons = $$('.ck.bom', el).length, ruins = $$('.ck.ruim', el).length;
      $('#ckm', el).innerHTML = t[1] ? `✅ Correto! (${bons}/5)` : `❌ Isso <b>não</b> se faz num gênero oral formal!`;
      if (bons === 5) $('#ckm', el).innerHTML = `🏆 Você achou as 5 atitudes certas${ruins ? ` (com ${ruins} escolha(s) errada(s))` : ' sem errar'}!`;
    });
  },
  willBuilder(el) {
    const subs = ['I', 'You', 'He', 'She', 'It', 'We', 'They'], verbs = [['travel', 'viajar'], ['study', 'estudar'], ['help', 'ajudar'], ['win', 'vencer'], ['visit', 'visitar']];
    const st = { s: 'She', v: 0, f: 'af', c: false };
    const draw = () => {
      const v = verbs[st.v][0], comp = { travel: 'to Recife', study: 'for the test', help: 'my friends', win: 'the match', visit: 'my grandparents' }[v];
      let frase, curta = '';
      if (st.f === 'af') frase = st.c ? `${st.s}<b class="w">’ll</b> <u>${v}</u> ${comp} tomorrow.` : `${st.s} <b class="w">will</b> <u>${v}</u> ${comp} tomorrow.`;
      else if (st.f === 'ng') frase = `${st.s} <b class="w">${st.c ? 'won’t' : 'will not'}</b> <u>${v}</u> ${comp} tomorrow.`;
      else { const sj = st.s === 'I' ? 'I' : st.s.toLowerCase(), r = st.s === 'I' ? 'you' : st.s === 'You' ? 'I' : sj; frase = `<b class="w">Will</b> ${sj} <u>${v}</u> ${comp} tomorrow?`; curta = `Yes, ${r} <b>will</b>. / No, ${r} <b>won’t</b>.`; }
      el.innerHTML = `<div class="jogo"><span class="tag">🛠️ Monte sua frase com WILL</span>
        <div class="row">${subs.map(s => `<button class="btn sm ${st.s === s ? 'on' : ''}" data-s="${s}">${s}</button>`).join('')}</div>
        <div class="row">${verbs.map((x, i) => `<button class="btn sm ghost ${st.v === i ? 'on' : ''}" data-v="${i}">${x[0]} <small>(${x[1]})</small></button>`).join('')}</div>
        <div class="row"><button class="btn sm ${st.f === 'af' ? 'on' : ''}" data-f="af">✅ Afirmativa</button><button class="btn sm ${st.f === 'ng' ? 'on' : ''}" data-f="ng">❌ Negativa</button><button class="btn sm ${st.f === 'in' ? 'on' : ''}" data-f="in">❓ Interrogativa</button>
        ${st.f !== 'in' ? `<label class="tg"><input type="checkbox" id="wc" ${st.c ? 'checked' : ''}> forma contraída</label>` : ''}</div>
        <div class="frasebox">${frase}${curta ? `<small>${curta}</small>` : ''}</div>
        <p class="msg">Repare: com <b>${st.s}</b> o verbo continua <u>${v}</u> — sem -s e sem <i>to</i>.</p></div>`;
      $$('[data-s]', el).forEach(b => b.onclick = () => { st.s = b.dataset.s; draw(); });
      $$('[data-v]', el).forEach(b => b.onclick = () => { st.v = +b.dataset.v; draw(); });
      $$('[data-f]', el).forEach(b => b.onclick = () => { st.f = b.dataset.f; draw(); });
      $('#wc', el) && ($('#wc', el).onchange = e => { st.c = e.target.checked; draw(); });
    };
    draw();
  },
  willErro(el) {
    miniQuiz(el, '🕵️ Certo ou errado?', [
      ['She <b>wills</b> travel tomorrow.', 1, 'Will nunca ganha -s.'], ['They <b>won’t</b> stay here.', 0], ['He will <b>to study</b> tonight.', 1, 'Depois de will não vem "to".'],
      ['<b>Will</b> you open the door, please?', 0], ['We <b>don’t will</b> go.', 1, 'Negativa é won’t / will not.'], ['I think it <b>will rain</b> soon.', 0], ['My mom will <b>cooking</b> dinner.', 1, 'Nada de -ing: will cook.']
    ], ['✅ Certo', '❌ Errado']);
  },
  relGame(el) {
    miniQuiz(el, '🎯 Who, which ou whose?', [
      ['The teacher ____ lives in London speaks three languages.', [0, 3], 'Pessoa → who (ou that).'], ['The book ____ you lent me is amazing.', [1, 3], 'Coisa → which (ou that).'],
      ['The girl ____ brother is a pilot lives in Canada.', 2, 'Posse (o irmão dela) → whose.'], ['The dog ____ barked all night is my neighbor’s.', [1, 3], 'Animal → which (ou that).'],
      ['I found a cat ____ fur is completely white.', 2, 'Posse (o pelo do gato) → whose.'], ['Students ____ study every day achieve great results.', [0, 3], 'Pessoas → who (ou that).'],
      ['The bicycle ____ is parked outside is Pedro’s.', [1, 3], 'Objeto → which (ou that), nunca who.'], ['That is the writer ____ books inspired the movie.', 2, 'Posse (os livros dele) → whose.']
    ], ['WHO', 'WHICH', 'WHOSE', 'THAT']);
  },
  unir(el) {
    const ex = [
      ['I met a boy.', 'His', ' father is an astronaut.', 'whose', 'I met a boy <b>whose</b> father is an astronaut.', '"His" = posse → <b>whose</b>'],
      ['I lost the notebook.', 'It', ' had all my notes.', 'which', 'I lost the notebook <b>which</b> had all my notes.', '"It" = coisa → <b>which</b>'],
      ['The architect won an award.', 'He', ' designed this museum.', 'who', 'The architect <b>who</b> designed this museum won an award.', '"He" = pessoa → <b>who</b>'],
      ['I adopted a puppy.', 'It', ' was very sick.', 'which', 'I adopted a puppy <b>which</b> was very sick.', '"It" = animal → <b>which</b>']
    ];
    let i = 0, passo = 0;
    const draw = () => {
      const e = ex[i];
      el.innerHTML = `<div class="jogo"><span class="tag">🧷 Unindo frases (${i + 1}/${ex.length})</span>
        <div class="unir"><span class="f1">${e[0]}</span><span class="f2"><mark class="d">${e[1]}</mark>${e[2]}</span></div>
        ${passo >= 1 ? `<p class="msg">1️⃣ Quem é <b>${e[1]}</b>? ${e[5]}</p>` : ''}
        ${passo >= 2 ? `<div class="frasebox">${e[4]}</div>` : ''}
        <div class="row">${passo < 2 ? `<button class="btn sm" id="un">${passo ? 'Ver a frase unida' : 'Qual pronome usar?'}</button>` : `<button class="btn sm" id="ux">Próximo exemplo →</button>`}</div></div>`;
      $('#un', el) && ($('#un', el).onclick = () => { passo++; draw(); });
      $('#ux', el) && ($('#ux', el).onclick = () => { i = (i + 1) % ex.length; passo = 0; draw(); });
    };
    draw();
  }
};
function initWidgets(root) { $$('[data-w]', root).forEach(el => WIDGETS[el.dataset.w] && WIDGETS[el.dataset.w](el)); }

/* =========================================================
   ESTATÍSTICAS
   ========================================================= */
function stats(m) {
  const qs = MODULOS[m].questoes, porTopico = MODULOS[m].topicos.map(() => ({ ok: 0, n: 0 }));
  let resp = 0, acertos = 0; const erros = [];
  qs.forEach((q, i) => {
    const r = S.r[m][i];
    if (r && r.p !== undefined) {
      resp++; porTopico[q.t].n++;
      if (r.p === q.c) { acertos++; porTopico[q.t].ok++; } else erros.push(i);
    }
  });
  return { total: qs.length, resp, acertos, erros, porTopico, pct: resp ? Math.round(acertos / resp * 100) : 0 };
}

/* =========================================================
   TELAS
   ========================================================= */
const app = () => $('#app');

function header(extra = '') {
  return `<header class="top"><a href="#" class="logo"><span class="selo">${CONFIG.serie}</span><span><b>Mentoria Educacional Promover</b><small>Revisão de ${CONFIG.area} · ${CONFIG.serieLonga}</small></span></a>${extra}</header>`;
}

function renderHome() {
  const cards = MODS.map(m => {
    const mod = MODULOS[m], s = stats(m), prog = Math.round(s.resp / s.total * 100);
    return `<article class="mod ${m}">
      <div class="mod-top"><span class="emoji">${mod.emoji}</span><div class="anel" style="--p:${prog}"><span>${s.resp}/${s.total}</span></div></div>
      <h2>${mod.titulo}</h2><p class="sub">${mod.sub}</p>
      <ul class="tops">${mod.topicos.map((t, i) => `<li><a href="#${m}/t/${i}">${i + 1}. ${t}</a></li>`).join('')}</ul>
      <div class="row"><a class="btn" href="#${m}/t">📖 Estudar a teoria</a><a class="btn alt" href="#${m}/q">✍️ Fazer as ${s.total} questões</a></div>
      ${s.resp ? `<p class="mini-score">Acertos na 1ª tentativa: <b>${s.acertos}/${s.resp}</b></p>` : ''}
    </article>`;
  }).join('');
  app().innerHTML = header() + `
    <section class="hero">
      <div><p class="kicker">${CONFIG.serieLonga} · Ensino Fundamental II</p>
      <h1>Hora de <mark>revisar</mark> Português e Inglês!</h1>
      <p>Leia a teoria ilustrada, jogue os mini-games de cada tópico, faça as questões e <b>envie seu relatório de erros</b> para o professor pelo WhatsApp.</p></div>
      <form class="aluno" onsubmit="return false">
        <span class="fita"></span><b>Quem está estudando?</b>
        <label>Seu nome<input id="nome" value="${esc(S.aluno.nome)}" placeholder="Digite seu nome completo" autocomplete="name"></label>
        <label>Turma<input id="turma" value="${esc(S.aluno.turma)}" placeholder="Ex.: ${CONFIG.serie} A"></label>
        <small>Fica salvo só neste aparelho.</small>
      </form>
    </section>
    <section class="passos"><span>1 📖 Estude</span><span>2 🎮 Jogue</span><span>3 ✍️ Responda</span><span>4 💬 Envie no WhatsApp</span></section>
    <section class="mods">${cards}</section>
    <a class="btn relat" href="#relatorio">📋 Ver meu relatório de erros</a>`;
  $('#nome').oninput = e => { S.aluno.nome = e.target.value; save(); };
  $('#turma').oninput = e => { S.aluno.turma = e.target.value; save(); };
}

function renderModulo(m, tab, arg) {
  const mod = MODULOS[m];
  app().innerHTML = header(`<a href="#relatorio" class="btn sm ghost">📋 Relatório</a>`) + `
    <div class="mhead ${m}"><a href="#" class="voltar">← Início</a><h1>${mod.emoji} ${mod.titulo}<small>${mod.sub}</small></h1>
      <nav class="tabs"><a href="#${m}/t" class="${tab === 't' ? 'on' : ''}">📖 Teoria</a><a href="#${m}/q" class="${tab === 'q' ? 'on' : ''}">✍️ Questões</a></nav></div>
    <main id="main" class="${m}"></main>`;
  if (tab === 'q') { if (arg !== undefined && !isNaN(+arg)) { S.pos[m] = +arg; save(); } renderQuestao(m); }
  else renderTeoria(m, arg);
}

function renderTeoria(m, foco) {
  const mod = MODULOS[m], main = $('#main');
  main.innerHTML = `<nav class="indice">${mod.topicos.map((t, i) => `<a href="#${m}/t/${i}">${i + 1}. ${t}</a>`).join('')}</nav>` +
    TEORIA[m].map((fn, i) => {
      const primeira = mod.questoes.findIndex(q => q.t === i), qtd = mod.questoes.filter(q => q.t === i).length;
      return `<section class="topico" id="top-${i}"><span class="num">${i + 1}</span><h2>${mod.topicos[i]}</h2>${fn()}
        <a class="btn alt pratica" href="#${m}/q/${primeira}">✍️ Praticar este tópico (${qtd} questões) →</a></section>`;
    }).join('');
  initWidgets(main);
  if (foco !== undefined) setTimeout(() => { const t = $('#top-' + foco); t && t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
}

function renderQuestao(m) {
  const mod = MODULOS[m], i = Math.min(S.pos[m] || 0, mod.questoes.length - 1), q = mod.questoes[i];
  const r = S.r[m][i] || {}, feito = r.u !== undefined, s = stats(m);
  const dotsNav = mod.questoes.map((qq, k) => {
    const rr = S.r[m][k]; let c = '';
    if (rr && rr.u !== undefined) c = rr.u === qq.c ? (rr.p === qq.c ? 'ok' : 'fix') : 'err';
    else if (rr && rr.p !== undefined) c = 'err';
    return `<button class="qd ${c} ${k === i ? 'cur' : ''}" data-k="${k}" aria-label="Questão ${k + 1}">${k + 1}</button>`;
  }).join('');
  const ops = q.ops.map((o, k) => {
    let c = '';
    if (feito) { if (k === q.c) c = 'certa'; else if (k === r.u) c = 'errada'; else c = 'apagada'; }
    return `<button class="op ${c}" data-o="${k}" ${feito ? 'disabled' : ''}><span class="let">${LETRAS[k]}</span><span>${o}</span></button>`;
  }).join('');
  const acertou = feito && r.u === q.c;
  const fb = !feito ? '' : `<div class="fb ${acertou ? 'sim' : 'nao'}">
      <b>${acertou ? (r.p === q.c ? '🎉 Acertou de primeira!' : '💪 Agora sim! (conta como erro no relatório, mas você aprendeu)') : `😕 Não foi dessa vez. A resposta certa é a <span class="let">${LETRAS[q.c]}</span>.`}</b>
      <div class="exp"><span class="tag">🧑‍🏫 Resolução comentada</span><p>${q.exp}</p></div>
      ${acertou ? '' : `<a class="link" href="#${m}/t/${q.t}">📖 Rever a teoria: ${mod.topicos[q.t]}</a>`}
    </div>`;
  const todas = s.resp === s.total;
  const temErradas = mod.questoes.some((qq, k) => S.r[m][k] && S.r[m][k].u !== undefined && S.r[m][k].u !== qq.c);
  $('#main').innerHTML = `
    <div class="qnav">${dotsNav}</div>
    <p class="legenda"><i class="ok"></i>acertou <i class="fix"></i>corrigiu <i class="err"></i>errou</p>
    <article class="qcard">
      <div class="qmeta"><span class="qn">Questão ${i + 1}<small>/${mod.questoes.length}</small></span><span class="pill">${mod.topicos[q.t]}</span></div>
      <p class="enun">${q.txt}</p>
      ${!feito ? `<details class="dica"><summary>💡 Preciso de uma dica</summary><p>${q.dica}</p></details>` : ''}
      <div class="ops">${ops}</div>
      ${fb}
      <div class="row nav">
        <button class="btn ghost" id="ant" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
        ${i < mod.questoes.length - 1 ? `<button class="btn" id="prox">Próxima →</button>` : `<a class="btn" href="#relatorio">📋 Ver relatório</a>`}
      </div>
    </article>
    ${todas ? `<div class="fim"><b>🏁 Você respondeu todas as questões de ${mod.titulo}!</b><p>Acertos na 1ª tentativa: <b>${s.acertos}/${s.total}</b> (${s.pct}%).</p>
      <div class="row">${temErradas ? `<button class="btn alt" id="refazer">🔁 Refazer só as que errei</button>` : ''}<a class="btn" href="#relatorio">📋 Ver e enviar relatório</a></div></div>` : ''}
    <p class="reset"><button class="linkbtn" id="zerar">Apagar respostas deste módulo e recomeçar</button></p>`;

  $$('.qd').forEach(b => b.onclick = () => { S.pos[m] = +b.dataset.k; save(); renderQuestao(m); scrollTo({ top: 0, behavior: 'smooth' }); });
  $$('.op:not([disabled])').forEach(b => b.onclick = () => {
    const k = +b.dataset.o, rr = S.r[m][i] || {};
    if (rr.p === undefined) rr.p = k;
    rr.u = k; rr.n = (rr.n || 0) + 1; S.r[m][i] = rr; save();
    renderQuestao(m);
    const f = $('.fb'); f && f.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (k === q.c) estrelas();
  });
  const go = d => { S.pos[m] = i + d; save(); renderQuestao(m); scrollTo({ top: 0, behavior: 'smooth' }); };
  $('#ant') && ($('#ant').onclick = () => go(-1));
  $('#prox') && ($('#prox').onclick = () => go(1));
  $('#refazer') && ($('#refazer').onclick = () => {
    let primeira = null;
    mod.questoes.forEach((qq, k) => { const rr = S.r[m][k]; if (rr && rr.u !== qq.c) { delete rr.u; if (primeira === null) primeira = k; } });
    S.pos[m] = primeira || 0; save(); renderQuestao(m); scrollTo({ top: 0 });
  });
  $('#zerar').onclick = () => { if (confirm('Apagar todas as respostas de ' + mod.titulo + '?')) { S.r[m] = {}; S.pos[m] = 0; save(); renderQuestao(m); } };
}

function estrelas() {
  const box = document.createElement('div'); box.className = 'estrelas';
  box.innerHTML = Array.from({ length: 14 }, (_, k) => `<i style="--x:${Math.cos(k / 14 * 6.28) * 140}px;--y:${Math.sin(k / 14 * 6.28) * 140}px">${['⭐', '✨', '🌟'][k % 3]}</i>`).join('');
  document.body.appendChild(box); setTimeout(() => box.remove(), 1000);
}

/* ---------------- RELATÓRIO ---------------- */
function textoRelatorio() {
  const d = new Date().toLocaleDateString('pt-BR');
  let t = `*RELATÓRIO DE ESTUDO – ${CONFIG.serieLonga.toUpperCase()}*\nMentoria Educacional Promover · ${CONFIG.area}\n\n👤 Aluno(a): ${S.aluno.nome || '(sem nome)'}\n🏫 Turma: ${S.aluno.turma || '-'}\n📅 Data: ${d}\n`;
  const revisar = [];
  MODS.forEach(m => {
    const mod = MODULOS[m], s = stats(m);
    t += `\n*${mod.titulo} – ${mod.sub}*\n`;
    if (!s.resp) { t += 'Ainda não respondeu.\n'; return; }
    t += `Respondidas: ${s.resp}/${s.total}\n✅ Acertos de 1ª: ${s.acertos}/${s.resp} (${s.pct}%)\n`;
    if (s.erros.length) {
      t += `❌ Erros (${s.erros.length}):\n`;
      s.erros.forEach(i => {
        const q = mod.questoes[i], r = S.r[m][i];
        t += `• Q${i + 1} (${mod.topicos[q.t]}): marcou ${LETRAS[r.p]}, certa ${LETRAS[q.c]}${r.u === q.c ? ' – corrigiu depois' : ''}\n`;
      });
    } else t += '🎉 Nenhum erro!\n';
    s.porTopico.forEach((p, k) => { if (p.n && p.ok / p.n < 0.7) revisar.push(`${mod.titulo}: ${mod.topicos[k]}`); });
  });
  if (revisar.length) t += `\n📌 *Preciso revisar:*\n${revisar.map(x => '• ' + x).join('\n')}\n`;
  return t;
}

function renderRelatorio() {
  const total = MODS.reduce((a, m) => { const s = stats(m); a.r += s.resp; a.a += s.acertos; a.t += s.total; return a; }, { r: 0, a: 0, t: 0 });
  const bloco = m => {
    const mod = MODULOS[m], s = stats(m);
    if (!s.resp) return `<section class="rbloco ${m}"><h2>${mod.emoji} ${mod.titulo}<small>${mod.sub}</small></h2><p class="vazio">Você ainda não respondeu nenhuma questão. <a href="#${m}/q">Começar agora →</a></p></section>`;
    return `<section class="rbloco ${m}">
      <h2>${mod.emoji} ${mod.titulo}<small>${mod.sub}</small></h2>
      <div class="placar"><div class="nota"><b>${s.acertos}</b><span>de ${s.resp} respondidas</span></div><div class="nota"><b>${s.pct}%</b><span>acertos de 1ª</span></div><div class="nota"><b>${s.total - s.resp}</b><span>sem responder</span></div></div>
      <div class="barras">${mod.topicos.map((t, k) => { const p = s.porTopico[k], pc = p.n ? Math.round(p.ok / p.n * 100) : 0; return `<div class="bt"><span>${t}</span><div class="trilho"><div style="width:${pc}%;background:${!p.n ? '#ccc' : pc >= 70 ? '#2bb673' : pc >= 40 ? '#ffb000' : '#e5484d'}"></div></div><em>${p.n ? `${p.ok}/${p.n}` : '–'}</em>${p.n && pc < 70 ? `<a href="#${m}/t/${k}" class="rev no-print">revisar</a>` : ''}</div>`; }).join('')}</div>
      ${s.erros.length ? `<h3>❌ Questões que errei</h3><ol class="erros">${s.erros.map(i => {
        const q = mod.questoes[i], r = S.r[m][i];
        return `<li><div class="eh"><b>Questão ${i + 1}</b><span class="pill">${mod.topicos[q.t]}</span>${r.u === q.c ? '<span class="pill verde">corrigi depois ✔</span>' : ''}</div>
          <p class="eq">${strip(q.txt).slice(0, 170)}${strip(q.txt).length > 170 ? '…' : ''}</p>
          <p class="cmp"><span class="m">Marquei: <b>${LETRAS[r.p]}</b> ${q.ops[r.p]}</span><span class="c">Certa: <b>${LETRAS[q.c]}</b> ${q.ops[q.c]}</span></p>
          <details><summary>Ver resolução</summary><p>${q.exp}</p></details></li>`;
      }).join('')}</ol>` : '<p class="parabens">🎉 Nenhum erro nas questões respondidas!</p>'}
    </section>`;
  };
  const txt = textoRelatorio();
  app().innerHTML = header(`<a href="#" class="btn sm ghost">← Início</a>`) + `
    <section class="rel-capa">
      <p class="kicker">Relatório de erros · ${CONFIG.serieLonga}</p>
      <h1>${S.aluno.nome ? esc(S.aluno.nome) : 'Aluno(a) sem nome'}</h1>
      <p>${S.aluno.turma ? 'Turma ' + esc(S.aluno.turma) + ' · ' : ''}${new Date().toLocaleDateString('pt-BR')} · ${total.r}/${total.t} questões respondidas · ${total.a} acertos de 1ª</p>
      <div class="aluno inline no-print"><label>Nome<input id="nome" value="${esc(S.aluno.nome)}" placeholder="Seu nome"></label><label>Turma<input id="turma" value="${esc(S.aluno.turma)}" placeholder="${CONFIG.serie} A"></label></div>
    </section>
    ${MODS.map(bloco).join('')}
    <section class="enviar no-print">
      <h2>💬 Enviar para o professor</h2>
      <p>O WhatsApp vai abrir com a mensagem pronta para <b>(85) 99262-1003</b>. É só tocar em enviar.</p>
      <pre class="previa">${esc(txt)}</pre>
      <div class="row"><a class="btn whats" id="wpp" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}" target="_blank" rel="noopener">📲 Enviar pelo WhatsApp</a>
      <button class="btn ghost" id="copiar">📋 Copiar texto</button><button class="btn ghost" onclick="print()">🖨️ Imprimir / PDF</button></div>
      <p class="msg" id="cmsg"></p>
    </section>`;
  const upd = () => {
    save();
    const t = textoRelatorio();
    $('.previa').textContent = t;
    $('#wpp').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
    $('.rel-capa h1').textContent = S.aluno.nome || 'Aluno(a) sem nome';
  };
  $('#nome').oninput = e => { S.aluno.nome = e.target.value; upd(); };
  $('#turma').oninput = e => { S.aluno.turma = e.target.value; upd(); };
  $('#wpp').onclick = e => { upd(); if (!S.aluno.nome.trim()) { e.preventDefault(); $('#cmsg').innerHTML = '⚠️ Escreva seu nome lá em cima antes de enviar.'; $('#nome').focus(); } };
  $('#copiar').onclick = () => { navigator.clipboard.writeText(textoRelatorio()).then(() => $('#cmsg').textContent = '✅ Copiado! Cole no WhatsApp.', () => $('#cmsg').textContent = 'Não consegui copiar — selecione o texto acima.'); };
}

/* ---------------- ROTAS ---------------- */
function route() {
  const [mod, tab, arg] = (location.hash.slice(1) || '').split('/');
  if (MODULOS[mod]) renderModulo(mod, tab || 't', arg);
  else if (mod === 'relatorio') renderRelatorio();
  else renderHome();
  if (!(tab === 't' && arg !== undefined)) scrollTo(0, 0);
}
addEventListener('hashchange', route);
route();
