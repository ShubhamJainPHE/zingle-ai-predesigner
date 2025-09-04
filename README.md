# Zingle AI Website

A modern, professional website for Zingle AI built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd /path/to/zingle-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
zingle-ai/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── api/            # API routes
│   │   │   └── contact/    # Contact form handler
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/       # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSolutionSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/             # Reusable UI components
│   │       └── Button.tsx
│   └── lib/                # Utility functions
│       └── utils.ts
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Blue palette (`primary-50` to `primary-950`)
- **Secondary**: Neutral gray palette (`secondary-50` to `secondary-950`)

### Typography
- **Font**: Inter (Google Fonts)
- **Mono**: JetBrains Mono

### Components
- Custom button variants (primary, secondary, outline, ghost)
- Consistent spacing and animation utilities
- Responsive design patterns

## 🔧 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint

## 📮 Contact Form Setup

The contact form requires email service integration. Current options:

### Option 1: Resend (Recommended)
```bash
npm install resend
```

Add environment variable:
```env
RESEND_API_KEY=your_api_key_here
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

Add environment variable:
```env
SENDGRID_API_KEY=your_api_key_here
```

### Option 3: Nodemailer
```bash
npm install nodemailer
```

**Implementation**: Uncomment and configure the email service in `src/app/api/contact/route.ts`

## ⚠️ Content Requirements

### Before Going Live

**Critical**: Replace all placeholder content with real information:

#### 1. Customer Testimonials (`TestimonialsSection.tsx`)
- [ ] Real customer names, titles, and companies
- [ ] Written permission from each customer
- [ ] Professional headshot photos (high-resolution)
- [ ] Actual metrics and outcomes
- [ ] Verifiable contact information

#### 2. Team Information (`TeamSection.tsx`)
- [ ] Real team member names and roles
- [ ] Professional headshots (500x500px minimum)
- [ ] Actual backgrounds and experience
- [ ] Real LinkedIn profile URLs
- [ ] Accurate company stats and funding info

#### 3. Company Details
- [ ] Real contact information (email, phone, address)
- [ ] Actual company milestones and metrics
- [ ] Legal documents (Privacy Policy, Terms of Service)
- [ ] Only include public investor information

#### 4. Product Information
- [ ] Real product screenshots or mockups
- [ ] Actual API examples (if applicable)
- [ ] Verified technical specifications

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository:**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Automatic deployments on push

2. **Environment Variables:**
   Add email service API keys in Vercel dashboard

### Alternative Hosting
- **Netlify**: Full Next.js support
- **Railway**: Easy Node.js deployment
- **AWS**: S3 + CloudFront for static sites

## 🔒 Security & Legal

### Security Features
- Input validation on all forms
- XSS protection
- HTTPS enforced
- Environment variable protection

### Legal Compliance
- All customer content requires written permission
- Privacy policy and terms of service needed
- GDPR compliance considerations
- Cookie policy implementation

## 📊 Performance

### Current Optimizations
- Next.js 14 App Router for optimal performance
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Font optimization with Google Fonts
- Build-time static generation

### Performance Goals
- Lighthouse score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Mobile-first responsive design

## 🛠️ Development Guidelines

### Code Standards
- TypeScript strict mode enabled
- ESLint configuration for Next.js
- Consistent component structure
- Mobile-first responsive design
- Accessibility best practices

### Component Guidelines
- Use functional components with hooks
- Implement proper prop types
- Follow naming conventions
- Include error boundaries where needed

## 📝 Content Management

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `Header.tsx` if needed
4. Test mobile responsiveness

### Modifying Existing Content
1. Update text content directly in component files
2. Replace placeholder images in `public/` folder
3. Update meta tags in `layout.tsx`
4. Regenerate sitemap if needed

## 🤝 Contributing

### Before Production
1. **Content Review**: Ensure all placeholder content is replaced
2. **Legal Review**: Verify all customer permissions
3. **Performance Testing**: Run Lighthouse audits
4. **Cross-browser Testing**: Test on Chrome, Safari, Firefox
5. **Mobile Testing**: Test on actual devices

### Code Review Checklist
- [ ] No placeholder content in production build
- [ ] All customer testimonials have written permission
- [ ] Contact form email integration working
- [ ] Mobile responsiveness verified
- [ ] Performance score 90+
- [ ] All links functional
- [ ] Legal pages implemented

## 📞 Support

For technical questions or setup assistance:
- Check the Next.js documentation
- Review Tailwind CSS documentation
- Contact the development team

## 📄 License

This project is proprietary to Zingle AI. All rights reserved.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
