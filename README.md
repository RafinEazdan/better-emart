# SuperProduct Landing Page

A modern, responsive landing page for SuperProduct, built with Next.js and Tailwind CSS.

## Overview

This project is a single-page landing site that showcases SuperProduct's features, about section, and contact information. The site includes:

- Responsive design that works on all devices
- Smooth scrolling navigation
- Modern UI with gradient accents
- Interactive components

## Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **Lucide React** - For icons

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/superproduct-landing.git
   cd superproduct-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
superproduct-landing/
├── app/             # Next.js app directory
│   ├── layout.tsx   # Root layout component
│   └── page.tsx     # Home page component
├── components/      # Reusable UI components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Navbar.tsx
├── public/          # Static assets
└── ...
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the color schemes in `tailwind.config.js`
2. Updating the component classes directly
3. Adding custom CSS in the component files

### Content

Update the content of each section by modifying the corresponding component files in the `components` directory.

## Deployment

The site is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/superproduct-landing)

Alternatively, you can build the project for production:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)