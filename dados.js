/* =========================================================
   CONTEÚDO DO SITE — Mentoria Educacional Promover (8º Ano)
   Gramática (Cap. 10, 11 e 12) + Inglês (Will e Relative Pronouns)
   c = índice da correta (0=A,1=B,2=C,3=D)
   ========================================================= */
const CONFIG = { serie: '8º', serieLonga: '8º Ano', lsKey: 'promover_8ano_ling_v1', area: 'Português e Inglês' };
const D = s => `<mark class="d">${s}</mark>`;      // trecho destacado
const L = '<span class="lac">______</span>';       // lacuna

const MODULOS = {
  m1: {
    id: 'm1', titulo: 'Gramática', sub: 'Coordenação, Subordinação e Gêneros Textuais', emoji: '📝',
    topicos: ['Coordenação e gêneros (Cap. 10)', 'Subordinação e artigo de opinião (Cap. 11)', 'Gêneros orais e divulgação científica (Cap. 12)'],
    questoes: [
      { t: 0, txt: `Leia o período extraído de uma campanha ambiental: “A comunidade escolar separou os resíduos recicláveis, organizou a coleta seletiva ${D('e reduziu o lixo enviado ao aterro')}.” Analisando a relação entre as três orações, classifica-se a primeira como assindética e a última como:`,
        ops: ['coordenada sindética adversativa.', 'coordenada sindética aditiva.', 'subordinada substantiva subjetiva.', 'subordinada adverbial condicional.'], c: 1,
        dica: 'Qual conjunção inicia a última oração? Ela soma, opõe ou explica?',
        exp: 'As três orações são <b>independentes</b> (coordenadas). A 1ª e a 2ª não têm conjunção (assindéticas). A 3ª começa com <b>e</b>, que <b>soma</b> uma ação às anteriores → <b>coordenada sindética aditiva</b>.' },
      { t: 0, txt: `Observe o período: “Os moradores enviaram várias sugestões à prefeitura, ${D('entretanto')} nenhuma obra foi iniciada até o momento.” O conectivo destacado estabelece relação de oposição e pode ser substituído, mantendo o sentido e a classificação, por:`,
        ops: ['portanto.', 'porque.', 'contudo.', 'logo.'], c: 2,
        dica: 'Procure outra conjunção adversativa (mas, porém, contudo, todavia…).',
        exp: '<b>Entretanto</b> é adversativo (oposição). Equivale a <b>contudo</b>, mas, porém, todavia. <i>Portanto</i> e <i>logo</i> são conclusivos; <i>porque</i> é explicativo.' },
      { t: 0, txt: 'A conjunção <b>pois</b> muda de classificação conforme sua posição na frase. Compare:<br>I. Apresse-se na entrega do formulário, <b>pois</b> o prazo encerra às 17h.<br>II. Todos os documentos foram conferidos; o pedido está, <b>pois</b>, aprovado.<br>Em I e em II, as orações com <i>pois</i> classificam-se, respectivamente, como:',
        ops: ['conclusiva e explicativa.', 'explicativa (antes do verbo) e conclusiva (posposta ao verbo, entre vírgulas).', 'aditiva e alternativa.', 'adversativa e explicativa.'], c: 1,
        dica: 'Pois ANTES do verbo = porque. Pois DEPOIS do verbo, entre vírgulas = portanto.',
        exp: 'Em <b>I</b>, <i>pois</i> vem antes do verbo (<i>encerra</i>) e dá o motivo da ordem → <b>explicativa</b>. Em <b>II</b>, vem depois do verbo (<i>está</i>), entre vírgulas, e vale <i>portanto</i> → <b>conclusiva</b>.' },
      { t: 0, txt: 'Sobre os gêneros <b>panfleto, flyer e folheto</b> (Capítulo 10), assinale a alternativa que apresenta corretamente suas características:',
        ops: ['São documentos jurídicos sigilosos redigidos exclusivamente em linguagem arcaica pelo Poder Judiciário.', 'São materiais impressos ou digitais de rápida circulação que combinam linguagem objetiva, recursos visuais e verbos no imperativo para informar ou persuadir, distinguindo-se pelo formato (o flyer é compacto de folha única; o folheto possui dobras).', 'São romances literários extensos narrados obrigatoriamente em primeira pessoa.', 'São atas de reuniões parlamentares que proíbem o uso de imagens ou chamadas visuais.'], c: 1,
        dica: 'Pense num papel que alguém te entrega na rua chamando para um evento.',
        exp: 'São gêneros de <b>circulação rápida</b>, com linguagem direta, imagens e <b>verbos no imperativo</b> ("Participe!", "Venha!"). O <b>flyer</b> é uma folha única compacta; o <b>folheto</b> tem dobras e mais espaço.' },
      { t: 0, txt: 'Um estudante precisa solicitar formalmente à direção da escola a segunda via do seu histórico escolar. O gênero adequado é o <b>requerimento</b>, o qual exige:',
        ops: ['gírias juvenis, emojis e despedida informal como “Valeu, galera!”.', 'endereçamento formal à autoridade, identificação do requerente, exposição objetiva do pedido em 3ª pessoa (requer...) e fecho protocolar (“Nestes termos, pede deferimento”).', 'rimas alternadas, estrofes regulares e metáforas poéticas subjetivas.', 'diálogos teatrais entre personagens fictícios sem assinatura nem data.'], c: 1,
        dica: 'Veja o modelo de requerimento interativo na teoria do tópico 1.',
        exp: 'O <b>requerimento</b> é formal e padronizado: vocativo (Exmo. Sr. Diretor), identificação do requerente, pedido em <b>3ª pessoa</b> com o verbo <i>requer</i>, fecho "<b>Nestes termos, pede deferimento</b>", local, data e assinatura.' },
      { t: 1, txt: `Leia o período: “A comissão organizadora anunciou ${D('que a feira científica ocorrerá na próxima sexta-feira')}.” Aplicando o teste sintático adequado, a oração destacada classifica-se como:`,
        ops: ['subordinada substantiva objetiva direta (completa o verbo transitivo direto anunciou e equivale a “isso”).', 'subordinada adjetiva explicativa (qualifica o substantivo comissão).', 'coordenada sindética conclusiva.', 'subordinada adverbial temporal.'], c: 0,
        dica: 'Faça o teste: troque a oração destacada por ISSO.',
        exp: '“A comissão anunciou <b>ISSO</b>.” Funciona! A oração começa com a conjunção integrante <i>que</i> e completa o verbo <i>anunciou</i> sem preposição → <b>subordinada substantiva objetiva direta</b>.' },
      { t: 1, txt: 'Compare:<br>I. Os livros que tratam de astronomia foram transferidos para a estante principal.<br>II. Os livros, que tratam de astronomia, foram transferidos para a estante principal.<br>A presença ou ausência das vírgulas altera o sentido porque:',
        ops: ['em I (restritiva), apenas os livros de astronomia foram transferidos; em II (explicativa), todos os livros mencionados tratam de astronomia e todos foram transferidos.', 'em I, nenhum livro foi transferido; em II, os livros foram descartados.', 'ambas possuem rigorosamente o mesmo significado, sendo a vírgula facultativa.', 'em I o termo que é conjunção integrante; em II é advérbio de lugar.'], c: 0,
        dica: 'Sem vírgula = restringe (só alguns). Com vírgula = explica (todos).',
        exp: 'Sem vírgulas (<b>restritiva</b>) separa um grupo: <u>só</u> os livros de astronomia foram. Entre vírgulas (<b>explicativa</b>) vale para <u>todos</u>: todos os livros são de astronomia e todos foram transferidos.' },
      { t: 1, txt: `Observe: “${D('Embora')} as energias renováveis apresentem custos iniciais elevados, elas garantem sustentabilidade ambiental a longo prazo.” A oração iniciada pelo conectivo destacado exprime quebra de expectativa e classifica-se como subordinada adverbial:`,
        ops: ['causal.', 'concessiva.', 'final.', 'proporcional.'], c: 1,
        dica: 'Embora = ainda que, mesmo que. O fato contrário não impede a ação principal.',
        exp: '<b>Embora</b> apresenta um fato contrário que <b>não impede</b> a oração principal (os custos são altos, mesmo assim garantem sustentabilidade) → <b>adverbial concessiva</b>.' },
      { t: 1, txt: `Leia: “O consumo excessivo de plásticos descartáveis agravou-se tanto ${D('que os oceanos já acumulam milhões de toneladas de microplásticos')}.” A oração destacada exprime o resultado da intensidade expressa na principal, classificando-se como subordinada adverbial:`,
        ops: ['consecutiva.', 'condicional.', 'comparativa.', 'conformativa.'], c: 0,
        dica: 'tão… que / tanto… que → qual é a CONSEQUÊNCIA?',
        exp: 'A correlação <b>tanto… que</b> liga causa (o consumo aumentou muito) e <b>consequência</b> (oceanos cheios de microplástico) → <b>adverbial consecutiva</b>.' },
      { t: 1, txt: 'Assinale a alternativa em que o período se estrutura exclusivamente por <b>coordenação</b> (sem nenhuma oração subordinada):',
        ops: ['Espero que todos compreendam a importância da preservação hídrica.', 'Quando a chuva cessou, os pesquisadores iniciaram a coleta das amostras.', 'O debate foi intenso, mas os participantes chegaram a um acordo equilibrado.', 'Os alunos que participaram do seminário receberam certificados digitais.'], c: 2,
        dica: 'Procure as duas orações que fazem sentido sozinhas, cada uma por si.',
        exp: 'Em (C), “O debate foi intenso” e “os participantes chegaram a um acordo” são <b>independentes</b>, ligadas por <i>mas</i> (adversativa). (A) tem substantiva ("espero ISSO"), (B) adverbial temporal (quando) e (D) adjetiva restritiva (que participaram).' },
      { t: 1, txt: 'No <b>artigo de opinião</b> (Capítulo 11), a qualidade e o poder de convencimento dependem diretamente da articulação entre:',
        ops: ['uma tese clara (ponto de vista defendido pelo autor) e argumentos fundamentados em dados, exemplos ou citações de autoridade.', 'apenas relatos pessoais sem nenhum posicionamento explícito sobre o tema.', 'instruções passo a passo de montagem de eletrodomésticos sem conectivos.', 'versos metrificados que evitam qualquer referência à realidade social.'], c: 0,
        dica: 'Opinião precisa de quê para convencer alguém?',
        exp: 'O artigo de opinião defende uma <b>tese</b> (posição clara) sobre um tema polêmico e a sustenta com <b>argumentos</b>: dados, exemplos, causa e consequência e falas de especialistas.' },
      { t: 1, txt: `Trecho de um artigo de opinião: “O uso consciente das redes sociais na adolescência é indispensável, ${D('já que')} a exposição excessiva às telas prejudica o sono e a concentração escolar.” O operador destacado introduz um argumento por meio de uma relação de:`,
        ops: ['alternância.', 'causa / justificativa.', 'finalidade.', 'condição.'], c: 1,
        dica: 'Troque "já que" por "porque". Continua fazendo sentido?',
        exp: '<b>Já que</b> = porque, uma vez que. Introduz o <b>motivo</b> que sustenta a tese → relação de <b>causa / justificativa</b>.' },
      { t: 2, txt: 'Durante um <b>seminário</b> ou <b>debate regrado</b> (gêneros orais formais — Capítulo 12), os participantes devem observar, entre outros procedimentos:',
        ops: ['falar improvisadamente sem pesquisa prévia e interromper constantemente os colegas.', 'planejar a exposição com base em fontes confiáveis, adequar a linguagem ao registro formal, respeitar os turnos de fala e manter postura comunicativa clara.', 'ler mecanicamente páginas inteiras sem contato visual com o público nem sintetizar as ideias.', 'utilizar exclusivamente gírias regionais e abreviações de mensagens instantâneas.'], c: 1,
        dica: 'Use o checklist interativo do tópico 3.',
        exp: 'Gêneros orais formais exigem <b>pesquisa prévia</b> em fontes confiáveis, roteiro, <b>linguagem formal</b>, boa postura e dicção, controle do tempo e <b>respeito aos turnos de fala</b>.' },
      { t: 2, txt: 'Um <b>texto de divulgação científica</b> numa revista juvenil explica as vacinas de RNA mensageiro comparando o código genético a uma “receita temporária” lida pelas células. Esse recurso é típico do gênero porque visa:',
        ops: ['substituir o rigor científico por ficção fantástica sem compromisso com a verdade.', 'traduzir conceitos técnicos complexos por meio de analogias e definições acessíveis ao público não especializado.', 'restringir a leitura apenas aos cientistas de laboratórios universitários.', 'convencer o leitor a comprar um produto comercial por meio de apelos emocionais.'], c: 1,
        dica: 'Para quem é escrito esse texto: cientistas ou pessoas comuns?',
        exp: 'A divulgação científica torna a ciência <b>acessível ao público leigo</b>. Comparações do dia a dia ("receita") explicam termos difíceis <b>sem perder a precisão</b>.' },
      { t: 2, txt: `Fragmento de divulgação científica: “Pesquisadores brasileiros desenvolveram um bioplástico a partir da casca de mandioca ${D('que se decompõe em apenas sessenta dias no solo')}, reduzindo o impacto ambiental das embalagens convencionais.” É correto afirmar que:`,
        ops: ['o texto divulga um avanço tecnológico em linguagem objetiva, e a oração destacada é subordinada adjetiva restritiva (especificando o tipo de bioplástico).', 'trata-se de um requerimento administrativo, e a oração destacada é coordenada sindética alternativa.', 'trata-se de um panfleto publicitário, e a palavra que funciona como conjunção integrante.', 'o texto usa linguagem exclusivamente subjetiva e poética, sem dados objetivos.'], c: 0,
        dica: 'O "que" retoma qual substantivo? Há vírgula antes dele?',
        exp: 'É <b>divulgação científica</b> (descoberta em linguagem objetiva). O <i>que</i> é <b>pronome relativo</b> (retoma <i>bioplástico</i>), sem vírgula antes → <b>adjetiva restritiva</b>.' }
    ]
  },

  m2: {
    id: 'm2', titulo: 'Inglês', sub: 'Simple Future (Will) e Relative Pronouns', emoji: '🇬🇧',
    topicos: ['Simple Future com WILL', 'Relative Pronouns: who, which, that, whose', 'Juntando tudo (revisão)'],
    questoes: [
      { t: 0, txt: 'Assinale a alternativa em que a frase afirmativa do <b>Simple Future</b> está estruturada <b>corretamente</b>:',
        ops: ['My brother wills travel to Curitiba next month.', 'My brother will to travel to Curitiba next month.', 'My brother will travel to Curitiba next month.', 'My brother will traveling to Curitiba next month.'], c: 2,
        dica: 'Will nunca ganha -s, e o verbo depois dele fica na forma base (sem to, sem -ing).',
        exp: '<b>Will</b> é invariável (nada de <i>wills</i>) e pede o verbo na <b>forma base</b>, sem <i>to</i> e sem <i>-ing</i>: <b>will travel</b>.' },
      { t: 0, txt: 'Reescreva na <b>negativa</b> com a forma contraída: “The students will finish the science project tonight.”',
        ops: ['The students don’t will finish the science project tonight.', 'The students won’t finish the science project tonight.', 'The students willn’t to finish the science project tonight.', 'The students not will finish the science project tonight.'], c: 1,
        dica: 'will + not = ?',
        exp: 'Negativa: <b>will not</b> → contraído <b>won’t</b>, seguido do verbo base (<i>finish</i>). Não existe <i>willn’t</i> e não se usa <i>don’t</i> com will.' },
      { t: 0, txt: `Complete o diálogo:<br>A: ${L} your parents ${L} to the school meeting tomorrow?<br>B: Yes, they ${L}.`,
        ops: ['Do / will come / do.', 'Will / come / will.', 'Will / to come / will.', 'Are / come / are.'], c: 1,
        dica: 'Pergunta: Will vai para o começo. Resposta curta: repete o auxiliar.',
        exp: 'Interrogativa: <b>Will</b> + sujeito + verbo base → “<b>Will</b> your parents <b>come</b>…?”. Resposta curta: “Yes, they <b>will</b>.”' },
      { t: 0, txt: `“Ana is carrying three heavy boxes. Lucas sees her and says immediately: ‘Wait a second! I${L} help you carry those boxes!’” O uso de <b>will (’ll)</b> expressa principalmente:`,
        ops: ['uma rotina habitual praticada todos os dias no passado.', 'uma decisão espontânea e oferta de ajuda tomadas no exato momento da fala.', 'uma ação que já estava em andamento antes de Ana entrar na sala.', 'uma obrigação legal proibida no passado.'], c: 1,
        dica: 'Lucas tinha planejado ajudar ou decidiu na hora?',
        exp: 'Lucas decide ajudar <b>na hora em que vê</b> Ana → <b>decisão espontânea / oferta</b>, um dos usos típicos de <b>will (’ll)</b>.' },
      { t: 0, txt: '“<b>In my opinion</b>, artificial intelligence <b>will transform</b> many professions in the next twenty years.” O futuro com will foi usado para expressar:',
        ops: ['uma previsão futura baseada na opinião pessoal do falante.', 'um fato histórico comprovado ocorrido no século XIX.', 'uma ordem imperativa dada a um computador.', 'uma ação interrompida no passado contínuo.'], c: 0,
        dica: 'Repare na expressão "In my opinion".',
        exp: '“In my opinion” (na minha opinião) mostra uma <b>previsão baseada em opinião</b> — como <i>I think, I believe, probably</i>.' },
      { t: 1, txt: 'Os <b>pronomes relativos</b> (who, which, that, whose) são fundamentais para a coesão textual porque permitem:',
        ops: ['conjugar todos os verbos irregulares no passado simples sem alterar a grafia.', 'retomar um termo antecedente (pessoa, animal ou objeto) e conectar duas orações, evitando repetições.', 'substituir exclusivamente preposições de lugar como under e between.', 'transformar frases afirmativas em perguntas negativas no presente.'], c: 1,
        dica: 'Eles "colam" duas frases em uma só.',
        exp: 'Pronomes relativos <b>retomam o antecedente</b> e <b>unem duas orações</b>, evitando repetir o substantivo. Ex.: I met a boy. <s>The boy</s> → I met a boy <b>who</b>…' },
      { t: 1, txt: `“The doctor ${L} examined my grandmother at the hospital was very attentive.” Como o antecedente é uma <b>pessoa</b>, o pronome mais específico para a lacuna é:`,
        ops: ['which.', 'who.', 'whose.', 'what.'], c: 1,
        dica: 'Pessoa → ? (e não há substantivo de posse logo depois).',
        exp: '<i>The doctor</i> é <b>pessoa</b> e logo depois vem um verbo (<i>examined</i>), sem ideia de posse → <b>who</b>.' },
      { t: 1, txt: 'Assinale a alternativa em que <b>who</b> foi empregado <b>incorretamente</b>:',
        ops: ['The singer who performed last night has an incredible voice.', 'The woman who I talked to at the library is our new principal.', 'The bicycle who is parked in front of the gate belongs to Pedro.', 'Students who respect their classmates create a better environment.'], c: 2,
        dica: 'Who é só para pessoas. Qual antecedente NÃO é pessoa?',
        exp: '<i>The bicycle</i> é <b>objeto</b> — não pode ser <i>who</i>. O correto é <b>which</b> ou <b>that</b>: The bicycle <b>which</b> is parked…' },
      { t: 1, txt: `I. The laptop ${L} I use for my online classes is very fast.<br>II. The stray puppy ${L} we rescued yesterday is already healthy.<br>Como os antecedentes (laptop — objeto; puppy — animal) não são pessoas, ambos podem ser preenchidos por:`,
        ops: ['who.', 'which.', 'whose.', 'whom.'], c: 1,
        dica: 'Coisas e animais → ?',
        exp: 'Objetos e animais → <b>which</b> (ou <i>that</i>). The laptop <b>which</b> I use… / The puppy <b>which</b> we rescued…' },
      { t: 1, txt: 'Sobre o pronome relativo <b>that</b>, assinale a alternativa <b>correta</b>:',
        ops: ['Pode substituir tanto who (pessoas) quanto which (objetos e animais) em orações relativas restritivas (sem vírgulas).', 'É usado exclusivamente para indicar posse antes de substantivos abstratos.', 'Só pode aparecer em frases interrogativas sobre horários e datas.', 'Nunca pode ser usado quando o antecedente for um objeto.'], c: 0,
        dica: 'That é o "coringa" dos pronomes relativos.',
        exp: '<b>That</b> é versátil: substitui <b>who</b> e <b>which</b> em orações <b>restritivas</b> (sem vírgulas). Ex.: The boy <b>that</b> arrived… / The movie <b>that</b> we watched…' },
      { t: 1, txt: `“The author ${L} new novel became a bestseller will visit our school next Friday.” O pronome relativo que estabelece a relação de <b>posse</b> entre o autor e o novo romance é:`,
        ops: ['who.', 'which.', 'whose.', 'that.'], c: 2,
        dica: 'Depois da lacuna vem um substantivo (novel) que pertence ao autor.',
        exp: 'O romance <b>pertence</b> ao autor → <b>whose</b> (cujo): “O autor <b>cujo</b> novo romance virou best-seller…”' },
      { t: 1, txt: '<b>Whose</b> traduz-se por “cujo/cuja/cujos/cujas” e exige estrutura específica. Assinale a frase <b>correta</b>:',
        ops: ['The athlete whose won the gold medal broke the world record.', 'The neighbor whose dog barks every morning apologized to us.', 'The smartphone whose I bought yesterday is already broken.', 'The teacher whose teaches Geography is from Pernambuco.'], c: 1,
        dica: 'Whose precisa vir colado num SUBSTANTIVO, nunca num verbo ou pronome.',
        exp: 'Só em (B) <b>whose</b> vem antes de um substantivo: <b>whose dog</b> = cujo cachorro. Em (A) e (D) vem um verbo (seria <i>who</i>); em (C), seria <i>which/that</i>.' },
      { t: 2, txt: 'Una as orações: “I lost the notebook. <b>It</b> had all my English grammar notes.”',
        ops: ['I lost the notebook who had all my English grammar notes.', 'I lost the notebook which had all my English grammar notes.', 'I lost the notebook whose had all my English grammar notes.', 'I lost the notebook where had all my English grammar notes.'], c: 1,
        dica: '"It" retoma o caderno (objeto). Troque "It" pelo pronome relativo de coisas.',
        exp: '<i>It</i> retoma <i>the notebook</i> (objeto) → troca por <b>which</b>: I lost the notebook <b>which</b> had all my notes.' },
      { t: 2, txt: `Complete:<br>1. The architect ${L} designed this museum won an international award.<br>2. The museum ${L} stands near the river receives thousands of visitors.<br>3. The artist ${L} paintings are exhibited there lives in Paris.`,
        ops: ['who | which | whose.', 'which | who | whose.', 'whose | who | which.', 'who | whose | which.'], c: 0,
        dica: 'Analise cada antecedente: pessoa? coisa? posse?',
        exp: '1. <i>architect</i> = pessoa → <b>who</b>. 2. <i>museum</i> = coisa → <b>which</b>. 3. <i>artist ___ paintings</i> = as pinturas do artista (posse) → <b>whose</b>.' },
      { t: 2, txt: '“Next Saturday, our school <b>will host</b> an ecological fair for students <b>who</b> care about sustainability. Visitors will also see inventions <b>which</b> were created by the 8th grade.” É correto afirmar que:',
        ops: ['will indica uma ação passada; who retoma inventions; e which retoma students.', 'will expressa um evento futuro; who retoma pessoas (students); e which retoma coisas (inventions).', 'who e which indicam ideia de posse e traduzem-se por “cujo”.', 'a frase está incorreta porque falta a partícula to entre will e host.'], c: 1,
        dica: 'Next Saturday é passado ou futuro? Quem são as pessoas e quais são as coisas?',
        exp: '<b>will host</b> = evento futuro (Next Saturday). <b>who</b> → <i>students</i> (pessoas). <b>which</b> → <i>inventions</i> (coisas). E não existe <i>to</i> depois de will.' }
    ]
  }
};

/* ---------------- TEORIA ---------------- */
const TEORIA = {
  m1: [
    () => `
      <p class="lead">No <b>período composto por coordenação</b>, as orações são <b>independentes</b>: cada uma tem sentido completo e nenhuma faz função sintática dentro da outra.</p>
      ${arvorePeriodo()}
      <div class="duo">
        <div class="box"><b>🔗 Assindética</b><p><u>Sem</u> conjunção, ligada por vírgula:</p><p class="ex">Cheguei, observei a sala, anotei tudo.</p></div>
        <div class="box"><b>🧷 Sindética</b><p><u>Com</u> conjunção coordenativa:</p><p class="ex">Estudei <b>e</b> passei.</p></div>
      </div>
      <h4>Os 5 tipos de sindética</h4>
      <div class="tipos">
        <div class="tp t1"><b>➕ Aditiva</b><small>soma</small><span>e, nem, não só… mas também</span></div>
        <div class="tp t2"><b>⚔️ Adversativa</b><small>oposição</small><span>mas, porém, contudo, todavia, entretanto</span></div>
        <div class="tp t3"><b>🔀 Alternativa</b><small>escolha</small><span>ou, ou… ou, ora… ora</span></div>
        <div class="tp t4"><b>🏁 Conclusiva</b><small>conclusão</small><span>logo, portanto, por isso, pois (depois do verbo)</span></div>
        <div class="tp t5"><b>💬 Explicativa</b><small>motivo</small><span>porque, que, pois (antes do verbo)</span></div>
      </div>
      <div class="alerta">🎯 <b>O truque do POIS:</b> antes do verbo = <b>explicativa</b> (= porque). Depois do verbo, entre vírgulas = <b>conclusiva</b> (= portanto).</div>
      <div data-w="conjuncoes"></div>
      <h4>Gêneros do Capítulo 10</h4>
      <div class="generos">
        <div class="gen"><div class="papel p-panf"><b>RECICLE!</b><i>♻️</i><small>Separe o lixo em casa</small></div><b>Panfleto</b><p>Informativo, cívico ou comercial, distribuído em locais públicos.</p></div>
        <div class="gen"><div class="papel p-fly"><b>FESTA JUNINA</b><i>🎉</i><small>Sábado · 19h · Venha!</small></div><b>Flyer</b><p>Folha única e compacta, forte apelo visual para eventos.</p></div>
        <div class="gen"><div class="papel p-fol"><span></span><span></span><span></span></div><b>Folheto</b><p>Tem <b>dobras</b> e mais espaço para instruções detalhadas.</p></div>
      </div>
      <p class="center"><span class="pill">linguagem objetiva</span> <span class="pill">apelo visual</span> <span class="pill">verbos no imperativo: "Participe!", "Venha!"</span></p>
      <h4>📄 Requerimento: toque em cada parte</h4>
      <div data-w="requerimento"></div>
      ${exemplo('Exemplo 1', 'Compare: (I) “O projeto era complexo, <b>contudo</b> a equipe concluiu tudo no prazo.” e (II) “<b>Embora</b> o projeto fosse complexo, a equipe concluiu tudo no prazo.”',
        'As duas frases expressam contraste. Em <b>(I)</b>, <i>contudo</i> liga duas orações independentes → <b>coordenada sindética adversativa</b>. Em <b>(II)</b>, <i>embora</i> introduz uma oração dependente → <b>subordinada adverbial concessiva</b>.')}`,
    () => `
      <p class="lead">No <b>período composto por subordinação</b>, uma oração (<b>subordinada</b>) <b>depende</b> da outra (<b>principal</b>) e exerce uma função sintática nela.</p>
      <div class="tres">
        <div class="box s1"><b>📦 Substantiva</b><p>Vale um substantivo. <b>Teste: troque por ISSO.</b> Começa com <i>que</i> ou <i>se</i> (conjunção integrante).</p></div>
        <div class="box s2"><b>🏷️ Adjetiva</b><p>Qualifica um substantivo anterior. Começa com <b>pronome relativo</b>: que, quem, onde, o qual, cujo.</p></div>
        <div class="box s3"><b>⏰ Adverbial</b><p>Indica uma <b>circunstância</b>: causa, condição, tempo, concessão, finalidade, consequência…</p></div>
      </div>
      <div data-w="isso"></div>
      <h4>Adjetiva: a vírgula muda tudo!</h4>
      <div data-w="virgula"></div>
      <h4>Adverbiais: as circunstâncias</h4>
      <table class="mini wide"><tr><th>Circunstância</th><th>Conjunções</th><th>Exemplo</th></tr>
        <tr><td>Causa</td><td>porque, já que, como</td><td>Faltou <b>porque</b> estava doente.</td></tr>
        <tr><td>Consequência</td><td>tão… que, tanto… que</td><td>Choveu <b>tanto que</b> alagou.</td></tr>
        <tr><td>Condição</td><td>se, caso</td><td><b>Se</b> estudar, passará.</td></tr>
        <tr><td>Concessão</td><td>embora, ainda que, mesmo que</td><td><b>Embora</b> cansado, treinou.</td></tr>
        <tr><td>Tempo</td><td>quando, assim que</td><td><b>Quando</b> cheguei, saíram.</td></tr>
        <tr><td>Finalidade</td><td>para que, a fim de que</td><td>Falei alto <b>para que</b> ouvissem.</td></tr></table>
      <div data-w="adverbiais"></div>
      <div data-w="coordsub"></div>
      <h4>🗞️ Artigo de opinião</h4>
      <div class="opiniao">
        <div class="op-tese"><small>TESE</small>“O celular deve ser proibido em sala de aula.”</div>
        <div class="op-args">
          <div><small>📊 dados</small>Pesquisa mostra queda de 20% na atenção.</div>
          <div><small>📚 exemplo</small>Escolas da França já adotaram a regra.</div>
          <div><small>🧠 raciocínio</small>Notificações quebram a concentração.</div>
          <div><small>🎓 autoridade</small>Segundo especialistas em educação…</div>
        </div>
        <p>Texto <b>assinado</b> e argumentativo sobre tema polêmico. Usa <b>operadores argumentativos</b>: <i>já que, portanto, além disso, no entanto…</i></p>
      </div>
      ${exemplo('Exemplo 2', 'Explique a diferença: (A) “Os candidatos que entregaram o requerimento farão a prova.” (B) “Os candidatos, que entregaram o requerimento, farão a prova.”',
        'Em <b>(A)</b> (sem vírgulas — <b>restritiva</b>) só a parte dos candidatos que entregou fará a prova. Em <b>(B)</b> (entre vírgulas — <b>explicativa</b>) todos entregaram e todos farão a prova.')}`,
    () => `
      <div class="duo">
        <div class="box"><b>🎤 Gêneros orais formais</b><p>Seminário, debate regrado e exposição oral. São falados, mas exigem <b>planejamento</b> e <b>registro formal</b>. No debate regrado, um <b>moderador</b> controla os turnos de fala.</p></div>
        <div class="box"><b>🔬 Divulgação científica</b><p>Torna descobertas científicas <b>acessíveis ao público leigo</b>. Linguagem clara, impessoal (3ª pessoa), com definições, comparações e exemplos do cotidiano, sem perder o rigor.</p></div>
      </div>
      <div data-w="checklist"></div>
      <h4>🔬 Como a divulgação científica "traduz" a ciência</h4>
      <div class="traduz">
        <div><small>Linguagem do cientista</small>“O mRNA codifica a proteína spike, induzindo resposta imune adaptativa.”</div>
        <span>➜</span>
        <div><small>Linguagem da divulgação</small>“A vacina entrega às células uma <b>receita temporária</b> para fabricar uma peça do vírus. Assim o corpo aprende a se defender.”</div>
      </div>
      <div class="alerta">🧪 Recursos típicos: <b>analogias</b> ("receita"), <b>definições</b>, <b>glossários</b>, <b>comparações</b> e <b>dados</b> de pesquisas.</div>`
  ],
  m2: [
    () => `
      <p class="lead">Usamos <b>will</b> para falar do futuro. Ele é <b>invariável</b> (igual para todas as pessoas, nunca ganha -s) e o verbo principal fica na <b>forma base</b> (sem <i>to</i>).</p>
      <div class="usos">
        <div><i>📅</i><b>Fatos futuros</b><span>The concert will start at 8 p.m.</span></div>
        <div><i>⚡</i><b>Decisão na hora</b><span>“The phone is ringing.” — “I’ll answer it!”</span></div>
        <div><i>🔮</i><b>Previsão / opinião</b><span>I think Brazil will win the match.</span></div>
        <div><i>🤝</i><b>Promessa, oferta, pedido</b><span>I will always help you. / Will you open the door?</span></div>
      </div>
      <table class="mini wide"><tr><th>Forma</th><th>Estrutura</th><th>Exemplo</th></tr>
        <tr><td>✅ Afirmativa</td><td>Subject + <b>will (’ll)</b> + verb</td><td>She <b>will</b> travel. / She<b>’ll</b> travel.</td></tr>
        <tr><td>❌ Negativa</td><td>Subject + <b>will not (won’t)</b> + verb</td><td>They <b>won’t</b> stay here.</td></tr>
        <tr><td>❓ Interrogativa</td><td><b>Will</b> + subject + verb + ?</td><td><b>Will</b> he study? → Yes, he will. / No, he won’t.</td></tr></table>
      <div data-w="willBuilder"></div>
      <p class="center">⏰ Marcadores: <span class="pill">tomorrow</span><span class="pill">next week</span><span class="pill">next year</span><span class="pill">soon</span><span class="pill">tonight</span><span class="pill">in 2030</span></p>
      <div data-w="willErro"></div>
      ${exemplo('Example 1', 'Passe “Sarah will visit her grandparents next weekend” para a negativa e a interrogativa.',
        'Negativa: “Sarah <b>won’t</b> visit her grandparents next weekend.” Interrogativa: “<b>Will</b> Sarah visit her grandparents next weekend?” O verbo <i>visit</i> fica sem -s e sem <i>to</i> em todas as formas.')}`,
    () => `
      <p class="lead">Os pronomes relativos <b>retomam um termo anterior</b> (antecedente) e <b>unem duas orações</b>, evitando repetição.</p>
      ${fluxoRelativos()}
      <div class="rel4">
        <div class="r who"><b>WHO</b><small>pessoas · que/quem</small><p>The teacher <b>who</b> lives in London speaks three languages.</p></div>
        <div class="r which"><b>WHICH</b><small>coisas e animais · que/o qual</small><p>The dog <b>which</b> barked all night belongs to my neighbor.</p></div>
        <div class="r that"><b>THAT</b><small>pessoas, coisas, animais · que</small><p>The movie <b>that</b> we watched was exciting.</p></div>
        <div class="r whose"><b>WHOSE</b><small>posse · cujo/cuja</small><p>The girl <b>whose</b> brother is a pilot lives in Canada.</p></div>
      </div>
      <div class="alerta">🔑 <b>WHOSE</b> vem sempre <b>seguido de substantivo</b>: whose <u>car</u>, whose <u>dog</u>, whose <u>books</u>. <br>The man whose car broke… = O homem <b>cujo</b> carro quebrou…</div>
      <div data-w="relGame"></div>`,
    () => `
      <p class="lead">Para <b>unir duas frases</b> com pronome relativo, descubra o que a palavra repetida representa.</p>
      <div data-w="unir"></div>
      ${exemplo('Example 2', 'Una as frases “I met a boy. <b>His</b> father is an astronaut.”',
        '<i>His</i> mostra que o pai <b>pertence</b> ao garoto (posse) → troca por <b>whose</b>: “I met a boy <b>whose</b> father is an astronaut.” (Conheci um garoto <b>cujo</b> pai é astronauta.)')}`
  ]
};
