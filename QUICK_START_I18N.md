# Quick Start Guide - Multi-Language Support

## 🚀 Getting Started

Your project now supports **English** and **Arabic**! Here's how to use it:

## 1️⃣ Running the Project

```bash
npm run dev
```

Open `http://localhost:3000` and you'll see:
- Language switcher buttons (EN / عربي) in the header
- All content in the default language (English)

## 2️⃣ Switching Languages

Click on:
- **EN** button → English content
- **عربي** button → Arabic content

Your choice is automatically saved and will persist across sessions!

## 3️⃣ Adding Translations to Your Components

### For Client Components (with "use client")

```tsx
"use client"
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('MySectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### For Server Components

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyPage() {
  const t = await getTranslations('MySectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## 4️⃣ Adding New Translations

### Step 1: Add to English file
Open `messages/en.json`:

```json
{
  "MySectionName": {
    "title": "My English Title",
    "description": "My English description"
  }
}
```

### Step 2: Add to Arabic file
Open `messages/ar.json`:

```json
{
  "MySectionName": {
    "title": "عنواني بالعربي",
    "description": "وصفي بالعربي"
  }
}
```

### Step 3: Use in your component
```tsx
const t = useTranslations('MySectionName');
<h1>{t('title')}</h1>
```

## 5️⃣ What's Already Translated

✅ **Header Navigation**
- Home, Services, Portfolio, About, Contact
- Available in both desktop and mobile menus

✅ **Services Section (WhatIOffer component)**
- All 4 service cards fully translated:
  - Digital Marketing
  - Website Development  
  - Meta Ads
  - Branding & Creatives

## 6️⃣ File Locations

```
messages/
├── en.json          ← English translations
└── ar.json          ← Arabic translations

components/
└── LanguageSwitcher.tsx   ← Language toggle buttons

src/i18n/
└── request.ts       ← i18n configuration
```

## 7️⃣ Tips & Best Practices

### Organize by Section
```json
{
  "Header": { ... },
  "Footer": { ... },
  "HomePage": { ... },
  "AboutPage": { ... }
}
```

### Use Nested Keys
```json
{
  "Services": {
    "digitalMarketing": {
      "title": "...",
      "description": "...",
      "point1": "..."
    }
  }
}
```

Access with: `t('digitalMarketing.title')`

### Keep Keys Consistent
Use the same keys in both `en.json` and `ar.json`:
```json
// en.json
{"greeting": "Hello"}

// ar.json  
{"greeting": "مرحبا"}
```

## 8️⃣ Common Use Cases

### Simple Text
```tsx
<h1>{t('title')}</h1>
```

### Nested Keys
```tsx
<h1>{t('section.subsection.title')}</h1>
```

### Multiple Translation Namespaces
```tsx
const tHeader = useTranslations('Header');
const tFooter = useTranslations('Footer');

<nav>{tHeader('home')}</nav>
<footer>{tFooter('copyright')}</footer>
```

### Dynamic Content
```tsx
// In messages/en.json:
// "welcome": "Welcome, {name}!"

t('welcome', {name: 'John'}) 
// Output: "Welcome, John!"
```

## 9️⃣ Troubleshooting

### Translation not showing?
1. Check that the key exists in both `en.json` and `ar.json`
2. Make sure the namespace matches: `useTranslations('YourNamespace')`
3. Restart the dev server: `npm run dev`

### Language not switching?
1. Check browser console for errors
2. Clear browser cookies and try again
3. Make sure `LanguageSwitcher` is imported correctly

### Build errors?
Run `npm run build` to check for TypeScript or configuration errors.

## 🎯 Next Steps

1. **Translate more components**
   - Hero section
   - Footer
   - Other pages

2. **Add more languages**
   - Create `messages/fr.json` for French
   - Create `messages/es.json` for Spanish

3. **Optimize for RTL**
   - Add RTL support for Arabic layout
   - Adjust CSS for right-to-left text direction

## 📚 Documentation

For more details, see:
- `I18N_SETUP.md` - Complete setup documentation
- `IMPLEMENTATION_SUMMARY.md` - What's been implemented

## ✅ You're All Set!

Your project is now fully configured for multi-language support. Start translating your content and provide a great experience for users in multiple languages! 🌍

