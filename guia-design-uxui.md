# Guia de Design e UX/UI - Projeto Hinário do Maestro

## 📏 Regras de Espaçamento

### Variáveis Globais

- **Seções:** `--section-spacing: clamp(2.5rem, 7vw, 5rem)`
- **Elementos:** `--element-spacing: clamp(1rem, 3vw, 2rem)`

### Margens e Paddings

| Componente   | Espaçamento Vertical     | Espaçamento Horizontal | Observação                                    |
| ------------ | ------------------------ | ---------------------- | --------------------------------------------- |
| **Seções**   | `py-10 md:py-16`         | `px-4 sm:px-6 lg:px-8` | Compacto para manter densidade informacional  |
| **Cards**    | `p-6 lg:p-7`             | `gap-6 lg:gap-8`       | Padding interno consistente                   |
| **CTA Box**  | `p-6 lg:p-8`             | `mb-0`                 | Remover margem inferior para conectar seções  |
| **Botões**   | `py-4`                   | `px-10`                | Proporção ideal para destaque                 |
| **Headings** | `mb-2` a `mb-6`          | -                      | Reduzir para aproximar elementos relacionados |
| **Icons**    | `margin-bottom: 0.75rem` | `padding: 0.75rem`     | Compacto mas distinguível                     |

### Grid e Alinhamento

- **Gap entre cards:** `gap-4 lg:gap-6` (mobile) / `gap-6 lg:gap-8` (desktop)
- **Alinhamento vertical:** Mantenha alinhamento de texto e elementos em cada seção
- **Alinhamento horizontal:** Centralize elementos principais e mantenha consistência lateral

## 🔤 Tipografia e Hierarquia

### Tamanhos de Fonte

- **H1 (Título Principal):** `text-5xl md:text-6xl lg:text-7xl`
- **H2 (Títulos de Seção):** `text-4xl md:text-5xl lg:text-6xl`
- **H3 (Títulos de Card):** `text-xl md:text-2xl`
- **Texto CTA:** `text-xl md:text-2xl`
- **Corpo de texto:** `text-base`
- **Texto secundário:** `text-sm`

### Pesos e Estilos

- **Título principal:** `font-black` (900)
- **Títulos secundários:** `font-bold` (700)
- **Destaques em texto:** `font-medium` (500) ou `font-semibold` (600)
- **Texto comum:** `font-normal` (400)
- **Badges e rótulos:** `font-bold` e `uppercase` com `letter-spacing: 0.05em`

### Famílias de Fonte

- **Títulos:** `font-display` (Poppins)
- **Corpo:** `font-sans` (Montserrat)

## 🎨 Cores e Contrastes

### Paleta Principal

- **Amarelo/Dourado:** `#FFCA0A` (Destaque principal)
- **Background escuro:** `#0D1117` (Base) e `#1E2130` (Elementos)
- **Textos:** Branco `#FFFFFF` (Principal) e `#BDBDBD`/`#9CA3AF` (Secundário)

### Gradientes e Efeitos

- **Texto destacado:** `.yellow-gradient` (linear-gradient 90deg)
- **Bordas brilhantes:** Gradientes sutis `rgba(255,196,0,0.3)`
- **Elementos fluídos:** Círculos com blur para profundidade

### Regras de Contraste

- **Texto sobre fundo escuro:** Sempre use texto branco ou amarelo
- **CTAs:** Sempre com alto contraste (amarelo sobre preto ou preto sobre amarelo)
- **Elementos informativos:** Contraste suficiente mas sem competir com CTAs

## 🧩 Componentes UI

### Botões

- **Primário:** `bg-yellow-500` com `text-dark-800` e efeito `btn-shine`
- **Secundário:** Mesmo estilo, tamanho levemente menor
- **Estados:** Hover com `scale-105` e `bg-yellow-400`
- **Efeitos:** `btn-pulse` e `btn-shine` para atrair atenção

### Cards e Contêineres

- **Feature Card:** `.feature-card` com efeito hover e gradiente superior
- **CTA Box:** `.cta-box` com bordas sutis e elementos fluídos
- **Badges:** `.badge` (retangular) ou `.badge-pill` (arredondado)

### Elementos Interativos

- **Vídeos:** `.video-container` com borda brilhante
- **Links:** Sempre com hover state e underline para acessibilidade
- **Ícones:** Consistentes em tamanho e estilo, preferencialmente outline

## 🔄 Consistência Visual

### Sistema de Design

- Mantenha consistência de cores entre badges, botões e destaques
- Use os mesmos efeitos (glow, shine) de forma consistente por toda interface
- Preserve as mesmas proporções e espaçamentos entre componentes similares

### Hierarquia Visual

1. **Nível 1:** CTAs (máximo destaque visual)
2. **Nível 2:** Títulos principais e valores de destaque
3. **Nível 3:** Subtítulos e componentes principais
4. **Nível 4:** Textos e elementos de suporte

### Alinhamentos Chave

- Cabeçalhos e descrições centralizados na visão geral
- Cards alinhados em grid com mesma altura
- Bordas e paddings consistentes entre componentes similares

## 📱 Responsividade

### Breakpoints

- **Mobile:** Base (abaixo de 640px)
- **Small:** `sm:` (640px+)
- **Medium:** `md:` (768px+)
- **Large:** `lg:` (1024px+)
- **Extra large:** `xl:` (1280px+)

### Adaptações por Breakpoint

| Elemento    | Mobile     | Tablet      | Desktop         |
| ----------- | ---------- | ----------- | --------------- |
| **Grid**    | 1 coluna   | 2-3 colunas | 2-4 colunas     |
| **Texto**   | Reduzido   | Médio       | Completo        |
| **Padding** | Compacto   | Médio       | Amplo           |
| **Imagens** | 100% width | 80-90%      | Tamanho natural |

### Regras de Layout Responsivo

- Use `clamp()` para valores de espaçamento e tamanho de fonte
- Priorize conteúdo essencial em mobile
- Certifique-se que botões CTA tenham largura adequada para toque (min 44px)

## ⚡ Animações e Micro-interações

### Diretrizes

- Sutis, não intrusivas
- Propósito claro (chamar atenção, feedback)
- Duração curta (0.3s para hover, 2-4s para animações cíclicas)
- Performance (evite animações pesadas)

### Animações Implementadas

- **Shine:** Efeito de brilho passando pelo botão
- **Pulse:** Pulsação sutil no botão CTA
- **Hover Cards:** Elevação e destaque na borda superior
- **Fade In:** Entrada suave de elementos ao carregar a página

## ♿ Acessibilidade

### Requisitos Mínimos

- Contraste de texto adequado (4.5:1 mínimo)
- Tamanho de fonte legível (16px+ para corpo de texto)
- Alt text para todas imagens
- Foco visual claro para navegação por teclado
- Textos de botões descritivos

### Boas Práticas

- Estrutura de heading lógica e hierárquica
- Cores não devem ser o único indicativo de informação
- Animações que possam ser desativadas via `prefers-reduced-motion`

## 📋 Checklist de Conformidade

Use esta checklist antes de finalizar qualquer seção:

- [ ] Espaçamento entre elementos segue as variáveis definidas
- [ ] Tipografia mantém a hierarquia visual estabelecida
- [ ] Cores seguem a paleta definida com contraste adequado
- [ ] Componentes reaproveitam os padrões estabelecidos
- [ ] Layout responde adequadamente a todos breakpoints
- [ ] Elementos interativos têm estados de hover/focus claros
- [ ] Animações são sutis e têm propósito
- [ ] Conteúdo principal é acessível em todas as resoluções

## 🚀 Inspirações e Referências

### Estilo Alex Hormozi

- Alto contraste visual
- Elementos de prova social destacados
- CTAs com máxima visibilidade
- Densidade de informação estratégica

### Princípios UX Contemporâneos

- Clareza antes de estilo
- Direcionamento visual para pontos de conversão
- Redução de atrito em fluxos importantes
- Feedback visual para ações do usuário

---

### Como Utilizar Este Guia

1. **Referência rápida:** Consulte as tabelas para valores específicos
2. **Novos componentes:** Confira as seções relevantes antes de criar
3. **Revisão:** Use a checklist para validar seu trabalho
4. **Discussão:** Utilize os termos e conceitos deste guia para comunicação clara

Este documento está em constante evolução, assim como o próprio design do projeto.
