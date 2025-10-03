# Mining AI Solutions Website

A modern, responsive website for mining AI solutions built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with Bento grid layout
- **Interactive Elements**: Animated neural network orb with hover effects
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js, OGL
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add environment variables in Vercel dashboard if needed

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── ...                # Other pages
├── components/            # Reusable components
│   ├── Orb.tsx           # 3D neural network orb
│   └── ui/               # UI components
└── lib/                   # Utility functions
```

## 🎨 Customization

- **Colors**: Update `tailwind.config.js` for color scheme
- **Content**: Modify pages in `src/app/` directory
- **Components**: Add new components in `src/components/`
- **Styling**: Use Tailwind CSS classes or add custom CSS

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

- **Next.js**: `next.config.js`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.js`
- **Vercel**: `vercel.json`

## 📄 License

Private project - All rights reserved.
