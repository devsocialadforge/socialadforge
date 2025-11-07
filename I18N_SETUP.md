# Multi-Language Support with next-intl

## Overview
This project now supports multiple languages using `next-intl`. Currently configured for English (en) and Arabic (ar).

## Project Structure
```
├── messages/
│   ├── en.json          # English translations
│   └── ar.json          # Arabic translations
├── src/
│   └── i18n/
│       └── request.ts   # i18n configuration
├── next.config.ts       # Next.js config with next-intl plugin
└── app/
    └── layout.tsx       # Root layout with NextIntlClientProvider
```

## How It Works

### 1. Translation Files
Translation files are stored in `messages/` directory:
- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

### 2. Configuration
The `src/i18n/request.ts` file configures next-intl to:
- Read the locale from a cookie (defaults to 'en')
- Load the appropriate translation file

### 3. Using Translations

#### In Client Components
Use the `useTranslations` hook:

```tsx
"use client"
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

#### In Server Components
Use the `getTranslations` function:

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyPage() {
  const t = await getTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

## Adding New Translations

### Step 1: Add to Translation Files
Add your translation keys to both `messages/en.json` and `messages/ar.json`:

**messages/en.json:**
```json
{
  "MySection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

**messages/ar.json:**
```json
{
  "MySection": {
    "title": "عنواني",
    "description": "وصفي"
  }
}
```

### Step 2: Use in Your Component
```tsx
const t = useTranslations('MySection');
<h1>{t('title')}</h1>
<p>{t('description')}</p>
```

## Language Switcher

The `LanguageSwitcher` component allows users to switch between languages. It:
1. Sets a cookie with the selected locale
2. Refreshes the page to apply the new language

### Usage
```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  return (
    <header>
      {/* Your header content */}
      <LanguageSwitcher />
    </header>
  );
}
```

## Example: WhatIOffer Component

The `WhatIOffer` component demonstrates how to use translations:

```tsx
"use client"
import { useTranslations } from 'next-intl';

export default function WhatIOffer() {
  const t = useTranslations('Services');
  
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('subtitle')}</p>
      {/* Use nested translations */}
      <h3>{t('digitalMarketing.title')}</h3>
    </div>
  );
}
```

## Adding More Languages

To add a new language (e.g., French):

1. Create `messages/fr.json` with all translations
2. The locale will be automatically detected from the cookie
3. No code changes needed!

## Current Translations

The project currently includes translations for:
- HomePage (title, description)
- Header (navigation items)
- Hero section
- Services section (all 4 service cards with full details)
- Skills section

## Testing

To test language switching:
1. Add the `LanguageSwitcher` component to your Header
2. Click "EN" or "عربي" to switch languages
3. The page will refresh with the new language

## Notes

- The locale is stored in a cookie that persists for 1 year
- Default locale is English ('en')
- Arabic text is properly right-to-left (RTL) compatible
- All existing content in WhatIOffer component is now translatable

