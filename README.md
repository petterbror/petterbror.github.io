# Petter Kärnestad - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This site showcases my projects, technical interests, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **TypeScript**: Type-safe development with excellent developer experience
- **GitHub Pages Ready**: Automated deployment to GitHub Pages

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/petterbror/petterbror.github.io.git
cd petterbror.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization

### Updating Personal Information

Edit the following in `src/App.tsx`:

1. **Personal Details**: Update the `hero` array with your details
2. **Projects**: Modify the `projects` array with your actual projects
3. **Tech Interests**: Update the `techInterests` array with your skills and interests
4. **Contact Information**: Update contact details in the contact section

### Styling

- Main styles are in `src/App.css`
- Global styles are in `src/index.css`
- The design uses CSS custom properties for easy theming

### Adding New Sections

1. Add a new section component in `App.tsx`
2. Update the navigation menu
3. Add corresponding styles in `App.css`

## 🚀 Deployment

### GitHub Pages (Automatic)

The site is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment is handled by GitHub Actions.

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## 📱 Sections

- **About**: Personal introduction and professional summary
- **Projects**: Showcase of featured projects with technologies used
- **Tech Interests**: Technical skills organized by category
- **Contact**: Contact information and social links

## 🎨 Design Features

- Gradient hero section with call-to-action buttons
- Card-based layout for projects and interests
- Smooth scrolling navigation
- Hover effects and transitions
- Mobile-first responsive design
- Modern typography with Inter font

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

---

Built with ❤️ by Petter Kärnestad