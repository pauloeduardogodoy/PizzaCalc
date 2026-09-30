# 📝 CHANGELOG — PizzaCalc

> **PT** · Histórico de mudanças do app. Segue versionamento semântico
> (**MAJOR.MINOR.PATCH**): MINOR = nova funcionalidade, PATCH = correção/ajuste.
> Datas no formato AAAA-MM-DD.
>
> **EN** · App change history. Uses semantic versioning (**MAJOR.MINOR.PATCH**):
> MINOR = new feature, PATCH = fix/tweak. Dates as YYYY-MM-DD.

> ℹ️ **Nota · Note** — O versionamento no app começou em **v1.2.0** (2026-09-25); as entregas
> anteriores foram commits de construção da base (calculadora, cronograma, PWA, diário, abas,
> rebranding "PizzaCalc") sem número de versão, resumidas na seção final. · *App versioning started
> at **v1.2.0** (2026-09-25); earlier work were foundational commits with no version number,
> summarized in the last section.*

---

## 🇧🇷 Português

### v1.15.2 — Logo por tema · 2026-09-29

- **v1.15.2** — O logo do cabeçalho agora acompanha o tema: versão preta (`icon-512_black.png`)
  no tema escuro (manual ou automático) e a versão padrão no tema claro.

### v1.15.1 — Ajuda atualizada · 2026-09-29

- **v1.15.1** — Correção: a aba **Ajuda** estava desatualizada. Adicionado o card **"Aba
  Configurações"** (que faltava) e atualizados os cards de Cronograma (marcador "agora"), Diário
  (nota 1–5, ordenar/filtrar, comparar), Referência (Farinha e hidratação) e Dicas (tema/idioma/
  unidades agora ficam na aba Config).

### v1.15.0 — Unidades Internacional/Imperial · 2026-09-29

- **v1.15.0** — Novo seletor de **unidades** na aba Config (abaixo do idioma): alterna toda a
  exibição entre **Internacional** (gramas, °C) e **Imperial** (onças/libras, °F). Pesos em oz e
  o total da massa em lb; temperaturas em °F, inclusive os campos do card de água (que passam a
  aceitar entrada em °F). Os cálculos internos e os dados salvos permanecem em gramas e °C — só a
  apresentação e a entrada mudam. Preferência salva.

### v1.14.0 — Cronograma: marcador "agora" · 2026-09-29

- **v1.14.1** — Correção: um erro de inicialização (variável acessada antes da declaração)
  travava o carregamento do app após a v1.14.0, deixando botões e recursos sem responder. Boot
  restaurado.
- **v1.14.0** — O cronograma ganhou um marcador **"agora"**: uma faixa no topo mostra em qual
  etapa você está pelo relógio e qual a próxima ação (com o tempo restante), e a etapa em
  andamento fica destacada com um selo "Agora". Atualiza sozinho (a cada 30 s) enquanto o card
  está aberto; não usa notificação. Também indica "produção concluída" após o horário de assar.

### v1.13.0 — Diário: nota, filtro/ordenação e comparação · 2026-09-29

- **v1.13.0** — Diário de fornadas ganhou três recursos: **nota de 1 a 5 estrelas** por fornada;
  **ordenar** (mais recente / mais antiga / melhor nota) e **filtrar** (todas / só favoritas) a
  lista; e um modo **comparar** que mostra duas fornadas lado a lado numa tabela (produção,
  temperaturas, massa, forno, atrito e observações). A nota entra no export/import.

### v1.12.0 — Tabelas de farinha e hidratação · 2026-09-29

- **v1.12.2** — Card "Farinha e hidratação" movido para logo abaixo do card "Farinhas" (agrupa as
  referências de farinha).
- **v1.12.1** — Correção: a tabela "Farinha e massa: exemplos" (larga) passou a rolar na horizontal
  no celular, em vez de estourar a largura da tela.
- **v1.12.0** — **Card "Farinha e hidratação"** na aba Referência (abaixo da Tabela de velocidades):
  quatro tabelas de referência — proteína → hidratação, força (W) → hidratação, aumento de volume
  na puntata, e exemplos de produto (W/hidratação/repouso/estrutura). Estático, bilíngue, valores
  indicativos. (Fonte: tabelas em `support/tables/`.)

### v1.11.x — Preferências, refinamentos e refatoração · 2026-09-29

- **v1.11.25** — Card "Sobre": `© 2026`, versão, `Ooni® Halo Core™` e `Fornetto® Slim™` em negrito.
- **v1.11.24** — Card "Sobre": duas linhas finas tracejadas separando os blocos de texto.
- **v1.11.23** — Correção: parar o alarme no **guia de mistura** volta a etapa ao estado inicial.
- **v1.11.22** — Correção: botão de parar alarme dos **timers do forno** via propriedade `onclick`
  (corrige o clique que reiniciava o timer).
- **v1.11.21** — Parar o alarme dos **timers do forno** volta ao estado inicial; remove o sino
  emoji duplicado do botão (fica só o ícone SVG).
- **v1.11.20** — Refatoração: partes comuns dos dois timers do forno consolidadas em helpers.
- **v1.11.19** — Refatoração: acesso ao `localStorage` centralizado em helpers
  (`lsGet`/`lsSet`/`lsGetJSON`/`lsSetJSON`).
- **v1.11.18** — Refatoração: funções `toggle*` unificadas em `toggleCard`; remove CSS, ícones e
  i18n órfãos.
- **v1.11.1–v1.11.17** — Ajustes de layout do cabeçalho, rodapé, card "Sobre" e da aba Config
  (agrupados no mesmo lote da v1.11.0).
- **v1.11.0** — **Aba "Configurações" (7ª aba).** Reúne as preferências: **Aparência** (tema
  auto/claro/escuro + idioma PT/EN, movidos do cabeçalho), **Preparo** (ajuste de fermento pela
  temperatura), **Notificações do cronograma** e **Dados e layout** (atalho de backup + resetar
  layout dos cards). O cabeçalho ficou só com "Mão na massa" e "Manter tela ligada".

### v1.10.x — Tema claro/escuro/automático · 2026-09-28

- **v1.10.2** — Ajustes finais do rodapé e do card "Sobre"; `theme-color` dinâmico.
- **v1.10.0** — **Tema claro/escuro/automático.** Três estados via `data-tema`; automático segue o
  sistema em tempo real; preferência salva. Refatoração das cores em variáveis semânticas
  (mantendo o claro idêntico) + paleta escura (grafite quente, laranja/verde preservados).

### v1.9.x — Fração de poolish ajustável + correções · 2026-09-28

- **v1.9.12** — Notificações via service worker (`showNotification`) para funcionar no PWA
  instalado + vibração; handler `notificationclick`.
- **v1.9.11** — Aviso de farinha duplicada encurtado para "Nome repetido"; células alinhadas ao topo.
- **v1.9.10** — Corrige travamento na validação de farinha duplicada (feedback não-modal, sem loop
  de foco; limpa nome duplicado no blur; destaca duplicatas já salvas).
- **v1.9.9** — Nome de farinha duplicado devolve o foco ao campo (preserva o texto) em vez de limpar.
- **v1.9.8** — Bloqueia nome de farinha duplicado (valida no blur, avisa e limpa).
- **v1.9.7** — Mexer num controle limpa a seleção do perfil (volta a "- selecionar um perfil -").
- **v1.9.6** — Confirma antes de sobrescrever perfil de mesmo nome (evita perda acidental).
- **v1.9.5** — Inclui a fração de poolish nos perfis salvos (perfis antigos assumem 45%).
- **v1.9.4** — Move "Estilo da borda" para fora do grid de controles (largura total).
- **v1.9.3** — Desktop: controles em 2 colunas (discos/peso · hidratação/poolish); estilos da borda
  em linha única.
- **v1.9.2** — Remove "(da água)" do rótulo do slider de poolish.
- **v1.9.1** — Subtítulo 45%, slider do poolish abaixo da hidratação, receita padrão reseta
  poolish = 45%.
- **v1.9.0** — **Fração de poolish ajustável (45–100% da água).** 4º controle de produção; poolish
  1:1 com fermento proporcional. Correção de conceito: o antigo "30%" era ~45% da água.

### v1.8.x — Avisos dos timers no relógio + marcas · 2026-09-28

- **v1.8.3** — `Fornetto® Slim™` na nota de marcas (card Sobre) e no rodapé.
- **v1.8.2** — `Ooni® Halo Core™` na nota de marcas (card Sobre) e no rodapé.
- **v1.8.1** — Texto do card "Sobre" mais acolhedor (PT/EN, com emojis).
- **v1.8.0** — **Avisos dos timers** espelhados no smartwatch: ao fim dos timers (mistura, forno
  pré-aquecido, ponto ideal e limite da cocção), além do som o app vibra e notifica.

### v1.7.x — Notificações do cronograma · 2026-09-28

- **v1.7.1** — Rótulos "Ativar notificações" e "Avisar antes" na mesma linha dos botões.
- **v1.7.0** — **Notificações do cronograma.** Notificações do navegador por etapa (com lembrete
  configurável antes) + exportar `.ics` para o calendário/smartwatch (funciona com o app fechado).

### v1.6.x — Recheios: expandir/recolher · 2026-09-25

- **v1.6.1** — Alinha o botão expandir/recolher dos recheios ao padrão dos demais.
- **v1.6.0** — Botão "Expandir todas / Recolher todas" na biblioteca de recheios.

### v1.5.x — Biblioteca de recheios · 2026-09-25

- **v1.5.3** — Recheios ordenados alfabeticamente por idioma.
- **v1.5.2** — Remove rodelas de tomate da Muçarela e da Marguerita.
- **v1.5.1** — Recheios revistos: 11 combinações na ordem definida, montagem pela sequência.
- **v1.5.0** — **Biblioteca de recheios / combinações** (card estático na aba Referência).

### v1.4.x — Hidratação assistida · 2026-09-25

- **v1.4.3** — Mais espaço entre o valor da hidratação e o estilo da borda.
- **v1.4.2** — Botões de estilo de borda no feminino (Equilibrada/Macia).
- **v1.4.1** — Rótulo "Estilo da borda" e notas ajustadas (feminino no PT).
- **v1.4.0** — **Ajuste de hidratação assistido.** Estilos (crocante/equilibrado/macio/canotto)
  movem o slider para a hidratação sugerida, ajustada pela temperatura ambiente.

### v1.3.x — Molho: orégano e pimenta em gramas · 2026-09-25

- **v1.3.0** — Orégano e pimenta do molho em gramas (escalam com os discos); tabela do molho sem
  correlação de latas/colheres.

### v1.2.x — Molho quantificado (primeira versão numerada) · 2026-09-25

- **v1.2.0** — **Sal e azeite quantificados no molho** (escalam com o nº de discos).

### Base do app (antes do versionamento numérico) · 2026-08-21 a 2026-09-25

> Commits de construção, sem número de versão. Compõem o núcleo do PizzaCalc:

- **2026-08-21 a 09-11** — Protótipo: guia da pizza napolitana, cronograma (v1/v2/v3), calculadora
  de massa, cronograma interativo/planejável com modos de impressão, PWA (`index.html`, start_url,
  cache).
- **2026-09-21 a 09-24** — Núcleo do app: ferramentas (mistura na Halo Core com timers, DDT, guia
  do forno Fornetto Slim, carga da cuba, perfis, Wake Lock); diário de fornadas (atrito real,
  favoritar, "Repetir", galeria de fotos com lightbox, Insights SVG, ficha de farinhas/blend);
  custo por pizza + histórico de preços; ajuste de fermento por temperatura (Q10); dicas
  contextuais; navegação por abas + rebranding "PizzaCalc"; ícones nos botões (3 fases); glossário;
  solução de problemas; lista de compras; aba "Ajuda"; modo "mão na massa" amarrado ao cronograma;
  expandir/recolher cards; splash/ícones do Android.
- **2026-09-25** — Reorganização da pasta (`app_web` / `app_android` / `support`); descarte da
  versão standalone; setup Android (TWA/APK).

---

## 🇺🇸 English

### v1.15.2 — Theme-aware logo · 2026-09-29

- **v1.15.2** — The header logo now follows the theme: a black version (`icon-512_black.png`) in
  dark mode (manual or automatic) and the standard version in light mode.

### v1.15.1 — Help updated · 2026-09-29

- **v1.15.1** — Fix: the **Help** tab was out of date. Added the missing **"Settings tab"** card
  and updated the Schedule (the "now" marker), Log (1–5 rating, sort/filter, compare), Reference
  (Flour and hydration) and Tips (theme/language/units now live on the Settings tab) cards.

### v1.15.0 — Metric/Imperial units · 2026-09-29

- **v1.15.0** — New **units** selector on the Settings tab (below language): switches the whole
  display between **Metric** (grams, °C) and **Imperial** (ounces/pounds, °F). Weights in oz and
  total dough in lb; temperatures in °F, including the water card fields (which now accept °F
  input). Internal calculations and stored data stay in grams and °C — only the display and input
  change. Preference saved.

### v1.14.0 — Schedule: "now" marker · 2026-09-29

- **v1.14.1** — Fix: an initialization error (variable accessed before its declaration) broke the
  app's load after v1.14.0, leaving buttons and features unresponsive. Boot restored.
- **v1.14.0** — The schedule gained a **"now"** marker: a band at the top shows which stage you're
  in by the clock and the next action (with time remaining), and the current stage is highlighted
  with a "Now" badge. It self-updates (every 30 s) while the card is open; no notification. It also
  shows "production complete" after the baking time.

### v1.13.0 — Log: rating, filter/sort and comparison · 2026-09-29

- **v1.13.0** — The bake log gained three features: a **1–5 star rating** per bake; **sort**
  (newest / oldest / best rating) and **filter** (all / favorites only) for the list; and a
  **compare** mode showing two bakes side by side in a table (production, temperatures, dough,
  oven, friction and notes). The rating is included in export/import.

### v1.12.0 — Flour and hydration tables · 2026-09-29

- **v1.12.2** — "Flour and hydration" card moved to right below the "Flours" card (groups the flour
  references).
- **v1.12.1** — Fix: the wide "Flour & dough: examples" table now scrolls horizontally on mobile
  instead of overflowing the screen width.
- **v1.12.0** — **"Flour and hydration" card** on the Reference tab (below the Speed table): four
  reference tables — protein → hydration, strength (W) → hydration, volume increase during bulk
  (puntata), and product examples (W/hydration/rest/structure). Static, bilingual, indicative
  values. (Source: tables in `support/tables/`.)

### v1.11.x — Preferences, refinements and refactor · 2026-09-29

- **v1.11.25** — "About" card: `© 2026`, version, `Ooni® Halo Core™` and `Fornetto® Slim™` in bold.
- **v1.11.24** — "About" card: two thin dashed separators between text blocks.
- **v1.11.23** — Fix: stopping the alarm in the **mixing guide** resets the step to its initial state.
- **v1.11.22** — Fix: the **oven timers**' stop-alarm button via the `onclick` property (fixes the
  click that restarted the timer).
- **v1.11.21** — Stopping the **oven timers**' alarm returns to the initial state; removes the
  duplicated bell emoji from the button (SVG icon only).
- **v1.11.20** — Refactor: common parts of both oven timers consolidated into helpers.
- **v1.11.19** — Refactor: `localStorage` access centralized into helpers
  (`lsGet`/`lsSet`/`lsGetJSON`/`lsSetJSON`).
- **v1.11.18** — Refactor: `toggle*` functions unified into `toggleCard`; removes orphan CSS, icons
  and i18n.
- **v1.11.1–v1.11.17** — Header, footer, "About" card and Settings tab layout tweaks (grouped in the
  same batch as v1.11.0).
- **v1.11.0** — **"Settings" tab (7th tab).** Gathers preferences: **Appearance** (theme
  auto/light/dark + language PT/EN, moved from the header), **Prep** (yeast-by-temperature),
  **Schedule notifications** and **Data & layout** (backup shortcut + reset cards layout). The
  header kept only "Hands-on" and "Keep screen on".

### v1.10.x — Light/dark/automatic theme · 2026-09-28

- **v1.10.2** — Final footer and "About" card tweaks; dynamic `theme-color`.
- **v1.10.0** — **Light/dark/automatic theme.** Three states via `data-tema`; automatic follows the
  system in real time; preference saved. Colors refactored into semantic variables (light kept
  identical) + dark palette (warm graphite, orange/green preserved).

### v1.9.x — Adjustable poolish fraction + fixes · 2026-09-28

- **v1.9.12** — Notifications via service worker (`showNotification`) to work in the installed PWA +
  vibration; `notificationclick` handler.
- **v1.9.11** — Duplicate-flour warning shortened to "Duplicate name"; cells top-aligned.
- **v1.9.10** — Fixes the freeze on duplicate-flour validation (non-modal feedback, no focus loop;
  clears the duplicate name on blur; highlights already-saved duplicates).
- **v1.9.9** — Duplicate flour name returns focus to the field (keeps the text) instead of clearing.
- **v1.9.8** — Blocks duplicate flour name (validates on blur, warns and clears).
- **v1.9.7** — Changing a control clears the profile selection (back to "- select a profile -").
- **v1.9.6** — Confirms before overwriting a same-name profile (prevents accidental loss).
- **v1.9.5** — Includes the poolish fraction in saved profiles (old profiles assume 45%).
- **v1.9.4** — Moves "Crust style" out of the controls grid (full width).
- **v1.9.3** — Desktop: controls in 2 columns (pizzas/weight · hydration/poolish); crust styles on a
  single line.
- **v1.9.2** — Removes "(of the water)" from the poolish slider label.
- **v1.9.1** — 45% subtitle, poolish slider below hydration, default recipe resets poolish = 45%.
- **v1.9.0** — **Adjustable poolish fraction (45–100% of the water).** 4th production control; 1:1
  poolish with proportional yeast. Concept fix: the old "30%" was ~45% of the water.

### v1.8.x — Timer alerts on the watch + trademarks · 2026-09-28

- **v1.8.3** — `Fornetto® Slim™` in the trademarks note (About card) and footer.
- **v1.8.2** — `Ooni® Halo Core™` in the trademarks note (About card) and footer.
- **v1.8.1** — Friendlier "About" card text (PT/EN, with emojis).
- **v1.8.0** — **Timer alerts** mirrored on the smartwatch: when timers end (mixing, oven preheated,
  sweet spot and baking limit), besides the sound the app vibrates and notifies.

### v1.7.x — Schedule notifications · 2026-09-28

- **v1.7.1** — "Enable notifications" and "Notify before" labels on the same line as the buttons.
- **v1.7.0** — **Schedule notifications.** Browser notifications per stage (with a configurable lead
  reminder) + `.ics` export to the calendar/smartwatch (works with the app closed).

### v1.6.x — Toppings: expand/collapse · 2026-09-25

- **v1.6.1** — Aligns the toppings expand/collapse button to the standard of the others.
- **v1.6.0** — "Expand all / Collapse all" button in the toppings library.

### v1.5.x — Toppings library · 2026-09-25

- **v1.5.3** — Toppings ordered alphabetically per language.
- **v1.5.2** — Removes tomato slices from Mozzarella and Margherita.
- **v1.5.1** — Toppings revised: 11 combinations in the defined order, assembly by sequence.
- **v1.5.0** — **Toppings / combinations library** (static card on the Reference tab).

### v1.4.x — Assisted hydration · 2026-09-25

- **v1.4.3** — More space between the hydration value and the crust style.
- **v1.4.2** — Crust style buttons in feminine form in PT (Equilibrada/Macia).
- **v1.4.1** — "Crust style" label and adjusted notes (feminine in PT).
- **v1.4.0** — **Assisted hydration.** Styles (crispy/balanced/soft/canotto) move the slider to a
  suggested hydration, adjusted by room temperature.

### v1.3.x — Sauce: oregano and pepper in grams · 2026-09-25

- **v1.3.0** — Sauce oregano and pepper in grams (scale with pizzas); sauce table without
  cans/spoons correlation.

### v1.2.x — Quantified sauce (first numbered version) · 2026-09-25

- **v1.2.0** — **Salt and olive oil quantified in the sauce** (scale with the number of pizzas).

### App foundation (before numeric versioning) · 2026-08-21 to 2026-09-25

> Construction commits, with no version number. They make up the PizzaCalc core:

- **2026-08-21 to 09-11** — Prototype: Neapolitan pizza guide, schedule (v1/v2/v3), dough
  calculator, interactive/planned schedule with print modes, PWA (`index.html`, start_url, cache).
- **2026-09-21 to 09-24** — App core: tools (Halo Core mixing with timers, DDT, Fornetto Slim oven
  guide, bowl load, profiles, Wake Lock); bake log (real friction, favorites, "Repeat", photo
  gallery with lightbox, SVG Insights, flour database/blend); cost per pizza + price history;
  yeast-by-temperature (Q10); contextual tips; tab navigation + "PizzaCalc" rebranding; button
  icons (3 phases); glossary; troubleshooting; shopping list; "Help" tab; hands-on mode tied to the
  schedule; expand/collapse cards; Android splash/icons.
- **2026-09-25** — Folder reorganization (`app_web` / `app_android` / `support`); standalone version
  dropped; Android setup (TWA/APK).

---

*Feito para pizzaiolos caseiros · Made for home pizzaioli. 🍕*
