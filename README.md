# 🍕 Calculadora de Massa — Pizza Napolitana

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

- **Calculadora de ingredientes** — Escala a receita por nº de discos (2–10), peso por panetto
  (260–320 g) e hidratação (60–85%), mantendo as baker's percentages. Mostra a divisão
  poolish / massa final. Compensa ~1% de perda no manuseio.
- **Alertas de produção** — Avisa hidratação alta (≥71%) e faixa de carga da cuba da Halo Core
  (abaixo de ~700 g a espiral não pega; acima de 2500 g sobrecarrega o motor).
- **Perfis de massa salvos** — Salva/carrega configurações nomeadas de produção (localStorage).
- **Calculadora de temperatura da água (DDT)** — Regra de 4 fatores, considerando que o
  **poolish** sai da geladeira frio: `água = (massa desejada × 4) − (farinha + ambiente +
  atrito + poolish)`. Estima o gelo moído a usar. O **atrito** da Halo Core é calibrável
  (padrão 36°C, obtido de fornada real). Alvo da massa: **19–23°C** (padrão 21°C).
- **Guia de mistura passo a passo** — As etapas da massa final na Halo Core com timer por etapa
  (Iniciar/Pausar/Zerar) e **alarme contínuo** que toca até você tocar em "Parar alarme".
- **Guia de cocção — Fornetto Slim** — Timer de **pré-aquecimento** (40 min a 390°C) e de
  **cocção** (janela ideal 90–140 s) com barra de progresso e alarme contínuo, para não queimar.
- **Cronograma passo a passo** — Planeja de trás pra frente a partir do início do poolish +
  hora de assar + duração do appretto. Prioriza poolish de ~20h, usa a maturação em bloco como
  amortecedor e alerta sobre horários incômodos (madrugada), appretto longo e maturação fora de
  faixa. Datas em formato brasileiro.
- **Diário de fornadas** — Registra cada produção (temperaturas, massa final medida, tempo de
  forno, observações). Calcula o **atrito real** de cada fornada e a **média** — que pode ser
  aplicada na calculadora de água, fechando o ciclo de calibração. Exporta/compartilha (JSON +
  resumo) e importa para migrar entre aparelhos.
- **Tabela de velocidades da Halo Core** — As 20 velocidades com potência, RPM e equivalência
  industrial.
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

- **Ingredient calculator** — Scales by number of pizzas (2–10), weight per ball (260–320 g)
  and hydration (60–85%), keeping baker's percentages. Shows the poolish / final-dough split.
  Accounts for ~1% handling loss.
- **Batch alerts** — Warns about high hydration (≥71%) and the Halo Core bowl load range (below
  ~700 g the spiral won't grab; above 2500 g it overloads the motor).
- **Saved dough profiles** — Save/load named production settings (localStorage).
- **Water temperature calculator (DDT)** — 4-factor rule, accounting for the cold **poolish**
  from the fridge: `water = (desired dough × 4) − (flour + room + friction + poolish)`. Estimates
  crushed ice. The Halo Core **friction** is calibratable (default 36°C, from a real batch).
  Dough target: **19–23°C** (default 21°C).
- **Step-by-step mixing guide** — The final-dough steps on the Halo Core with a per-step timer
  (Start/Pause/Reset) and a **continuous alarm** that rings until you tap "Stop alarm".
- **Baking guide — Fornetto Slim** — **Preheat** timer (40 min at 390°C) and **baking** timer
  (ideal 90–140 s window) with a progress bar and continuous alarm, so you never burn it.
- **Step-by-step schedule** — Plans backwards from poolish start + baking time + appretto length.
  Prefers ~20h poolish, uses bulk maturation as the buffer, and warns about awkward hours,
  long appretto and out-of-range maturation. Brazilian date format.
- **Bake log** — Logs each batch (temperatures, measured final dough temp, baking time, notes).
  Computes the **real friction** per bake and the **average** — which can be applied to the water
  calculator, closing the calibration loop. Export/share (JSON + summary) and import to move
  between devices.
- **Halo Core speed table** — All 20 speeds with power, RPM and industrial equivalence.
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
