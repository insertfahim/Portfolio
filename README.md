# 🚀 Fahim's Personal Portfolio Website

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://fahimportfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-blue)](https://nextjs.org)
[![Chakra UI](https://img.shields.io/badge/Styled%20with-Chakra%20UI-teal)](https://chakra-ui.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Project Showcase

I designed and developed this personal portfolio website to showcase my work as a full-stack developer. This portfolio features a clean, minimal design with a unique 3D element that creates an engaging, interactive experience. The site is fully responsive and offers both light and dark modes.

![Website Preview](public/card.png)

## 🔥 Key Features

- **Interactive 3D Animation** - Custom-built Three.js animation with mouse interaction
- **Dynamic Portfolio Gallery** - Showcase of my projects with detailed case studies
- **Responsive Design** - Perfectly optimized for all devices from mobile to desktop
- **Dark/Light Mode** - Theme switching with persisted user preference
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **Smooth Page Transitions** - Enhanced UX with Framer Motion animations
- **Accessible Design** - WCAG compliant with keyboard navigation support
- **SEO Optimized** - Structured metadata and optimized for search engines

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js
- **Styling**: Chakra UI, Emotion
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: React Icons

### Performance & Analytics

- **Analytics**: Vercel Analytics
- **Performance Monitoring**: Integrated with Vercel

### DevOps

- **Hosting**: Vercel
- **CI/CD**: Vercel Git Integration
- **Version Control**: Git/GitHub

## 📐 Architecture

The application follows a component-based architecture with:

- **Pages**: Main routes with layout wrappers
- **Components**: Reusable UI elements
- **Lib**: Utility functions and configurations
- **Public**: Static assets and images

```
├── components/       # Reusable UI components
├── lib/              # Utility functions & configurations
├── pages/            # Application routes
│   ├── works/        # Individual project pages
│   └── wallpapers/   # Wallpaper section
├── public/           # Static assets
│   └── images/       # Project images and graphics
└── styles/           # Global styles
```

## 🚀 Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/insertfahim/portfolio-homepage.git
cd portfolio-homepage
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🔧 Usage

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality
- `npm run prettier` - Format code with Prettier

## 📱 Features in Detail

### Interactive 3D Model

I created a custom 3D model using Three.js that rotates and responds to user interaction, adding a unique element to the homepage.

### Theme Switching

I implemented a theme system that respects the user's preference while allowing manual toggling between light and dark modes.

### Portfolio Project Showcase

Each project in my portfolio includes:

- Detailed descriptions
- Technologies used
- Visual previews
- Links to repositories or live demos

### Responsive Navigation

The navigation adapts seamlessly across all device sizes, maintaining usability and aesthetic appeal.

## 🚢 Deployment

This project is configured for seamless deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your changes

For manual deployment:

```bash
npm run build
vercel --prod
```

## 🤝 Contributing

If you find any issues or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## 📧 Contact

- **Name**: Fahim
- **Email**: faahim06@gmail.com
- **GitHub**: [https://github.com/insertfahim](https://github.com/insertfahim)
- **Issues**: [https://github.com/insertfahim/portfolio-homepage/issues](https://github.com/insertfahim/portfolio-homepage/issues)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js for the 3D graphics library
- Chakra UI for the component library
- Vercel for hosting and deployment
- React Icons for the icon set
- Next.js team for the amazing framework
