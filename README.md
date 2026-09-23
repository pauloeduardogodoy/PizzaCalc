# 🍕 PizzaCalc — Pizza Napolitana

> **PT** · Calculadora e guia de produção para pizza napolitana com poolish, pensada para quem
> faz em casa com a masseira **Ooni Halo Core** e o forno **Fornetto Slim**.
>
> **EN** · Dough calculator and production guide for poolish-based Neapolitan pizza, built for
> home bakers using the **Ooni Halo Core** mixer and the **Fornetto Slim** oven.

Um app web puro (HTML/CSS/JS, sem build), bilíngue (🇧🇷 PT / 🇺🇸 EN), instalável como PWA e
que funciona offline. · *A pure web app (HTML/CSS/JS, no build), bilingual, installable as a PWA
and works offline.*

---

## 🇧🇷 Português

### Objetivo

Escalar a receita validada de pizza napolitana e guiar todo o processo — da massa ao forno —
com base no equipamento real de casa. A receita de referência (fonte da verdade):

- Farinha: **95% Alma Italiana + 5% Integral** (Venturelli)
- Hidratação: **67%** (ajustável de 60% a 85%)
- Sal: **2,5%** · Fermento seco: **0,1%**
- **Poolish**: 30% da farinha, 100% de hidratação, metade do fermento
- Rendimento de referência: **6 panetti × 280 g**
- Forno: **Fornetto Slim a 390°C** · Masseira: **Ooni Halo Core**

### Funcionalidades

O app é organizado em **abas** (Receita · Preparo · Cronograma · Diário · Referência) com
ícones; no celular as abas mostram só o ícone. Os controles de produção ficam sempre visíveis
no topo. Cada card recolhível (água, mistura, cocção, cronograma, diário, velocidades)
**expande/recolhe ao clicar no cabeçalho** (com um chevron que gira), abre por padrão e
**lembra se você o deixou aberto ou fechado** entre sessões. O app sempre inicia na aba Receita.
Os botões usam ícones: os de ação comum (imprimir, salvar, registrar, exportar/importar)
mostram ícone + texto no desktop e só ícone no celular; os timers usam só ícones (play/pausar/
zerar).

- **Calculadora de ingredientes** — Escala a receita por nº de discos (2–10), peso por panetto
  (260–320 g) e hidratação (60–85%), mantendo as baker's percentages. Mostra a divisão
  poolish / massa final. Compensa ~1% de perda no manuseio.
- **Molho — The Ultimate Sauce** — Receita de molho rústico de tomate pelado (cru), com
  ingredientes, quantidades (que escalam com o nº de discos) e passo a passo.
- **Lista de compras** — Ingredientes de massa e molho, já escalados pelo nº de discos,
  agrupados para conferir na hora de comprar. Com botão de imprimir.
- **Custo por pizza** — Você informa o preço de cada ingrediente na unidade de compra
  (farinhas/sal/fermento por kg; tomate por lata; alho por cabeça; manjericão por maço; azeite
  por litro) e o app calcula o **custo total** da produção e o **custo por panetto**, escalando
  com as quantidades de massa e molho. Preços salvos no aparelho, botão "Restaurar preços padrão".
  Tem **histórico de preços**: salve um registro datado a cada compra para acompanhar a
  oscilação, restaurar preços antigos ou excluir registros (no estilo do diário).
- **Alertas de produção** — Avisa hidratação alta (≥71%) e faixa de carga da cuba da Halo Core
  (abaixo de ~700 g a espiral não pega; acima de 2500 g sobrecarrega o motor).
- **Perfis de massa salvos** — Salva/carrega configurações nomeadas de produção (localStorage).
- **Calculadora de temperatura da água (DDT)** — Card recolhível. Regra de 4 fatores,
  considerando que o **poolish** sai da geladeira frio: `água = (massa desejada × 4) −
  (farinha + ambiente + atrito + poolish)`. Estima o gelo moído a usar. O **atrito** da Halo
  Core é calibrável (padrão 36°C, obtido de fornada real). Alvo da massa: **19–23°C**
  (padrão 21°C). Botão "Restaurar padrão".
- **Guia de mistura passo a passo** — As etapas da massa final na Halo Core com timer por etapa
  (Iniciar/Pausar/Zerar) e **alarme contínuo** que toca até você tocar em "Parar alarme".
- **Guia de cocção — Fornetto Slim** — Timer de **pré-aquecimento** (40 min a 390°C) e de
  **cocção** (janela ideal 90–140 s) com barra de progresso e alarme contínuo, para não queimar.
- **Modo "mão na massa"** — Botão no topo abre um passo a passo em **tela cheia**, uma fase por
  vez (poolish → massa final → maturação → bolear → assar), com fonte e botões grandes para usar
  na bancada. Mostra as quantidades reais, a temperatura da água e os **horários calculados pelo
  cronograma** em cada passo (início, assar previsto, maturação, appretto…). Reaproveita os
  **mesmos timers** de mistura e de forno nos passos correspondentes. Liga a tela sempre ligada
  automaticamente enquanto está aberto.
- **Cronograma passo a passo** — Planeja de trás pra frente a partir do início do poolish +
  hora de assar + duração do appretto. Prioriza poolish de ~20h, usa a maturação em bloco como
  amortecedor e alerta sobre horários incômodos (madrugada), appretto longo e maturação fora de
  faixa. Datas em formato brasileiro.
- **Diário de fornadas** — Registra cada produção (temperaturas, massa final medida, tempo de
  forno, observações). Calcula o **atrito real** de cada fornada e a **média** — que pode ser
  aplicada na calculadora de água, fechando o ciclo de calibração. Cada fornada aceita **várias
  fotos** (glúten, panetto, borda, fundo…), adicionadas pela ficha, com miniaturas e visualização
  ampliada; as fotos são comprimidas no aparelho. Exporta/compartilha (JSON + resumo, com as
  fotos) e importa para migrar entre aparelhos.
- **Tabela de velocidades da Halo Core** — As 20 velocidades com potência, RPM e equivalência
  industrial.
- **Glossário napolitano** — Termos da técnica (poolish, biga, puntata, staglio, appretto,
  panetto, maturação, cornicione, leopard spots…) com definições. Botão de imprimir.
- **Solução de problemas** — Problemas comuns (massa rasga, encolhe, borda pálida, azeda…)
  com causa provável e como ajustar.
- **Manter tela ligada** — Impede o celular de apagar a tela durante a produção (Wake Lock API).
- **Impressão** — Modos independentes: só receita, só cronograma, tudo, ou só a tabela de
  velocidades.

### Como usar

1. Abra o app (veja *Instalação* abaixo).
2. Ajuste discos, peso e hidratação. Salve como perfil se quiser reaproveitar.
3. Use a calculadora de água antes de bater a massa final.
4. Siga o guia de mistura com os timers; depois o cronograma; e o guia de cocção no forno.
5. Ao final, registre a fornada no diário para calibrar as próximas.

### Instalação / Deploy

- É HTML/CSS/JS puro, sem dependências nem build.
- **PWA (instalável/offline):** sirva a pasta `app/` por **https** (ex.: GitHub Pages). O
  `index.html` é a raiz. No celular, "Adicionar à tela inicial".
- A Wake Lock API e o service worker exigem **https** (não funcionam via `file://`).

---

## 🇺🇸 English

### Goal

Scale the validated Neapolitan pizza recipe and guide the whole process — from dough to oven —
based on real home equipment. Reference recipe (source of truth):

- Flour: **95% Alma Italiana + 5% wholemeal** (Venturelli)
- Hydration: **67%** (adjustable 60%–85%)
- Salt: **2.5%** · Dry yeast: **0.1%**
- **Poolish**: 30% of the flour, 100% hydration, half the yeast
- Reference yield: **6 dough balls × 280 g**
- Oven: **Fornetto Slim at 390°C** · Mixer: **Ooni Halo Core**

### Features

The app is organized into **tabs** (Recipe · Prep · Schedule · Log · Reference) with icons;
on mobile the tabs show the icon only. The production controls stay visible at the top. Each
collapsible card (water, mixing, baking, schedule, log, speeds) **expands/collapses when you
tap its header** (with a rotating chevron), opens by default and **remembers whether you left
it open or closed** across sessions. The app always starts on the Recipe tab. Buttons use
icons: common actions (print, save, log, export/import) show icon + text on desktop and
icon-only on mobile; timers use icons only (play/pause/reset).

- **Ingredient calculator** — Scales by number of pizzas (2–10), weight per ball (260–320 g)
  and hydration (60–85%), keeping baker's percentages. Shows the poolish / final-dough split.
  Accounts for ~1% handling loss.
- **Sauce — The Ultimate Sauce** — Rustic raw peeled-tomato sauce recipe, with ingredients,
  quantities (scaling with the number of pizzas) and step-by-step instructions.
- **Shopping list** — Dough and sauce ingredients, already scaled by the number of pizzas,
  grouped for easy checking while shopping. With a print button.
- **Cost per pizza** — You enter each ingredient's price by its purchase unit (flour/salt/yeast
  per kg; tomatoes per can; garlic per head; basil per bunch; olive oil per liter) and the app
  computes the **total batch cost** and the **cost per dough ball**, scaling with the dough and
  sauce quantities. Prices saved on the device, "Reset default prices" button. Includes a
  **price history**: save a dated record on each shopping trip to track fluctuations, restore
  old prices or delete records (bake-log style).
- **Batch alerts** — Warns about high hydration (≥71%) and the Halo Core bowl load range (below
  ~700 g the spiral won't grab; above 2500 g it overloads the motor).
- **Saved dough profiles** — Save/load named production settings (localStorage).
- **Water temperature calculator (DDT)** — Collapsible card. 4-factor rule, accounting for the
  cold **poolish** from the fridge: `water = (desired dough × 4) − (flour + room + friction +
  poolish)`. Estimates crushed ice. The Halo Core **friction** is calibratable (default 36°C,
  from a real batch). Dough target: **19–23°C** (default 21°C). "Reset to default" button.
- **Step-by-step mixing guide** — The final-dough steps on the Halo Core with a per-step timer
  (Start/Pause/Reset) and a **continuous alarm** that rings until you tap "Stop alarm".
- **Baking guide — Fornetto Slim** — **Preheat** timer (40 min at 390°C) and **baking** timer
  (ideal 90–140 s window) with a progress bar and continuous alarm, so you never burn it.
- **Hands-on mode** — A top button opens a **full-screen** step-by-step, one phase at a time
  (poolish → final dough → maturation → balling → baking), with large text and buttons for use
  at the bench. It shows the real quantities, the water temperature and the **times computed by
  the schedule** on each step (start, planned bake, maturation, appretto…). It reuses the **same
  timers** for mixing and the oven in the matching steps. Keeps the screen on automatically
  while open.
- **Step-by-step schedule** — Plans backwards from poolish start + baking time + appretto length.
  Prefers ~20h poolish, uses bulk maturation as the buffer, and warns about awkward hours,
  long appretto and out-of-range maturation. Brazilian date format.
- **Bake log** — Logs each batch (temperatures, measured final dough temp, baking time, notes).
  Computes the **real friction** per bake and the **average** — which can be applied to the water
  calculator, closing the calibration loop. Each bake can hold **several photos** (gluten, dough
  ball, crust, base…), added from the entry, with thumbnails and a full-screen viewer; photos are
  compressed on the device. Export/share (JSON + summary, including photos) and import to move
  between devices.
- **Halo Core speed table** — All 20 speeds with power, RPM and industrial equivalence.
- **Neapolitan glossary** — Technique terms (poolish, biga, puntata, staglio, appretto,
  panetto, maturation, cornicione, leopard spots…) with definitions. Print button.
- **Troubleshooting** — Common issues (dough tears, shrinks, pale crust, too sour…) with
  likely cause and how to fix.
- **Keep screen on** — Prevents the phone screen from turning off during a bake (Wake Lock API).
- **Printing** — Independent modes: recipe only, schedule only, everything, or the speed table.

### How to use

1. Open the app (see *Setup* below).
2. Adjust pizzas, weight and hydration. Save a profile to reuse it.
3. Use the water calculator before mixing the final dough.
4. Follow the mixing guide with its timers; then the schedule; then the baking guide.
5. Afterwards, log the bake to calibrate future batches.

### Setup / Deploy

- Pure HTML/CSS/JS, no dependencies and no build step.
- **PWA (installable/offline):** serve the `app/` folder over **https** (e.g. GitHub Pages).
  `index.html` is the root. On mobile, "Add to Home screen".
- The Wake Lock API and the service worker require **https** (they don't work via `file://`).

---

## 📁 Estrutura · Structure

```
app/
├── index.html       # app completo (calculadora + PWA + service worker)
├── manifest.json    # configuração da PWA
├── sw.js            # service worker (cache offline)
└── icon-*.png       # ícones
```

---

## 🛠️ Tecnologia · Tech

HTML + CSS + JavaScript puro · sem frameworks · sem build · dados salvos em `localStorage` ·
PWA com service worker (cache offline) · Web Audio (alarmes) · Screen Wake Lock API ·
Web Share API (exportar diário).

*Feito para pizzaiolos caseiros · Made for home pizzaioli. 🍕*
