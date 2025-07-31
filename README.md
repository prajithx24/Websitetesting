# Royal Taste Food Products Website

A modern, responsive website for Royal Taste Food Products showcasing authentic Kerala traditional food products.

## 🚀 Features

- **Product Catalog**: Browse 27+ authentic Kerala food products
- **Category Filtering**: Filter by Puttupodi, Spices, Ready Mixes, Powders, Rava
- **Availability Status**: Clear indication of available vs coming soon products
- **WhatsApp Ordering**: Direct ordering via WhatsApp (919388051003)
- **Contact Form**: Integrated contact form with database storage
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **FSSAI Certified**: Trust indicators and certification display

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Hono.js (Vercel Functions)
- **Database**: Vercel Postgres
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prajithx24/Websitetesting.git
   cd Websitetesting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with:
   ```env
   POSTGRES_URL="your-vercel-postgres-url"
   POSTGRES_HOST="your-postgres-host"
   POSTGRES_DATABASE="your-database-name"
   POSTGRES_USERNAME="your-username"
   POSTGRES_PASSWORD="your-password"
   VITE_WHATSAPP_NUMBER="919388051003"
   NODE_ENV="production"
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 🚀 Vercel Deployment

### Prerequisites
- Vercel account
- Vercel Postgres database

### Deployment Steps

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set up Vercel Postgres**
   - Create a new Postgres database in Vercel dashboard
   - Copy the connection string to environment variables

3. **Configure Environment Variables**
   In Vercel dashboard, add these environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_HOST`
   - `POSTGRES_DATABASE`
   - `POSTGRES_USERNAME`
   - `POSTGRES_PASSWORD`
   - `VITE_WHATSAPP_NUMBER`

4. **Deploy**
   ```bash
   npx vercel --prod
   ```

## 📁 Project Structure

```
royaltasteweb/
├── api/                    # Vercel serverless functions
│   └── [...path].js       # Main API handler
├── src/
│   └── react-app/         # React application
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── hooks/         # Custom hooks
│       └── contexts/      # React contexts
├── public/                # Static assets
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies and scripts
```

## 🛍️ Available Products

### Currently Available
- **Puttupodi Collection** (12 products)
- **Spices** (4 products)
- **Ready Mixes** (2 products)

### Coming Soon
- **Powders** (7 products)
- **Rava** (2 products)

## 📞 Contact Information

- **Phone**: 919388051003
- **Email**: royaltastefoodproducts@gmail.com
- **Address**: SREEBHADRA GROUP OF CONCERNS, 8/125A, SB COMPLEX, PALAKKAD MAIN ROAD, NEAR SREEKRISHNAPURAM POLICE STATION, THIRUVAZHIYODE PO, Palakkad, Kerala-679514
- **FSSAI License**: 11325009000514

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run vercel-build` - Build for Vercel deployment

## 📝 License

Proprietary - All rights reserved by Royal Taste Food Products

## 🤝 Support

For support, contact:
- **WhatsApp**: 919388051003
- **Email**: royaltastefoodproducts@gmail.com
