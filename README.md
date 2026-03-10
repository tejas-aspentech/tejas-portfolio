# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🚀 Optimized for Azure Static Web Apps deployment

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the following files with your information:

- `app/layout.tsx` - Update metadata (title, description)
- `components/Hero.tsx` - Your name, title, and introduction
- `components/About.tsx` - Your background and story
- `components/Skills.tsx` - Your technical skills
- `components/Experience.tsx` - Your work experience
- `components/Projects.tsx` - Your portfolio projects
- `components/Contact.tsx` - Your contact information

## Building for Production

```bash
npm run build
```

This generates a static export in the `out` directory, ready for deployment.

## Deployment to Azure Static Web Apps

### Option 1: Using Azure Portal

1. Create a new Static Web App in Azure Portal
2. Connect your GitHub repository
3. Set build configuration:
   - App location: `/`
   - Output location: `out`
   - Build command: `npm run build`

### Option 2: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create static web app
az staticwebapp create \
  --name your-portfolio \
  --resource-group portfolio-rg \
  --source https://github.com/yourusername/your-repo \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Experience section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json           # Dependencies
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) - Hosting

## License

MIT License - feel free to use this template for your own portfolio!
