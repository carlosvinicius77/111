# 🔥 Brutus Burger Co. — Landing Page

Landing page moderna e responsiva para a hamburgueria artesanal **Brutus Burger Co.**, desenvolvida com React + Vite e CSS Modules.

## ✨ Funcionalidades

- **Design escuro e moderno** com paleta de cores premium
- **100% responsiva** (mobile, tablet e desktop)
- **Navegação suave** com scroll entre seções
- **Animações e efeitos hover** nos cards e botões
- Seções: Hero, Cardápio, Sobre Nós, Depoimentos, Contato e Footer
- **Componentes reutilizáveis** e bem organizados

## 🏗 Estrutura do Projeto

```
brutus-burger/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Menu/
│   │   ├── About/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/
│   │   ├── burgers.js
│   │   └── testimonials.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/brutus-burger.git

# Entre na pasta
cd brutus-burger

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

```bash
npm run preview
```

## 🎨 Personalização

- **Imagens**: Substitua os placeholders por imagens reais nos componentes
- **Cardápio**: Edite `src/data/burgers.js`
- **Depoimentos**: Edite `src/data/testimonials.js`
- **Contato**: Atualize endereço, telefone e link do WhatsApp em `Contact.jsx`
- **Cores**: Customize as variáveis CSS em `src/index.css` (`:root`)

## 🔧 Tecnologias

- [React 18](https://react.dev/)
- [Vite 4](https://vitejs.dev/)
- CSS Modules

## 📦 Deploy no GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## 📄 Licença

MIT
