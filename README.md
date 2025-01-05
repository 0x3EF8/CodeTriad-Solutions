# CodeTriad Solutions Website

This is the official website for CodeTriad Solutions, a tech startup focused on programming, tech support, web development, and computer specialist services.

## Built With

This project was built using the following technologies:

- **Next.js** - The React Framework for Production
- **React** - A JavaScript library for building user interfaces
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **Framer Motion** - A library for creating animations in React
- **Lucide React** - A collection of open-source SVG icons for React
- **Radix UI** - A library of unstyled, accessible components
- and more.

## Getting Started

Follow these steps to get a local copy up and running for development and testing purposes.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project also uses npm, which is included with Node.js.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/CTriad-Dev/codetriad-website.git
   cd codetriad-website
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

### Running the Development Server

After installing dependencies, you can run the project locally:

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`. Open this URL in your browser to see the site.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This command generates a `/.next` folder containing optimized production-ready files.

#### Previewing the Production Build

You can also preview the production build locally by running:

```bash
npm run start
```

This starts the app in production mode at `http://localhost:3000`.

### Deployment

To deploy the website to GitHub Pages, run:

```bash
npm run deploy
```

This command will deploy the `out` directory to GitHub Pages.

### Project Structure

```bash
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── CodeTriad.mp4
│   ├── logo.png
│   ├── profile
│   ├── project-images
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   └── project4.jpg
│   └── site.webmanifest
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Service.tsx
│   │   └── ui
│   │       ├── badge.tsx
│   │       └── tabs.tsx
│   ├── data
│   │   ├── projects.ts
│   │   └── technologies.ts
│   ├── lib
│   │   ├── hooks
│   │   │   └── useDarkMode.ts
│   │   └── utils
│   │       └── cn.ts
│   ├── styles
│   │   └── global.css
│   └── types
│       └── index.ts
├── tailwind.config.js
└── tsconfig.json
```

### License

N/a

### Contact

For inquiries, please contact us at contact@codetriad.tech
