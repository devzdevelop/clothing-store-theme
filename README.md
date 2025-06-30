# Clothing Store Theme

A custom Shopify theme for clothing stores, built with modern Shopify 2.0 architecture. This theme is designed to provide a beautiful, flexible, and merchant-friendly e-commerce experience.

## Features

- **Modern Shopify 2.0** - Built with sections everywhere, app blocks, and JSON templates
- **Custom Design** - Beautiful, responsive design optimized for clothing stores
- **Merchant Flexibility** - Easy customization through Shopify Theme Editor
- **App Integration** - Support for third-party apps through app blocks
- **Performance Optimized** - Fast loading and SEO-friendly

## Architecture

This theme follows Shopify's best practices with:

- **Templates** - Page structure and routing
- **Sections** - Modular, reusable content blocks
- **Blocks** - Flexible content within sections
- **Snippets** - Reusable code fragments
- **Assets** - CSS, JavaScript, and images

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Shopify Liquid VS Code Extension](https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode) (recommended)

### Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Authenticate with Shopify:
   ```bash
   npx shopify login --store your-store-name.myshopify.com
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
   Or use the direct command:
   ```bash
   npx shopify theme dev
   ```

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run push` - Push theme changes to Shopify
- `npm run pull` - Pull theme changes from Shopify
- `npm run deploy` - Deploy theme to production
- `npm run check` - Check theme for issues

### Development Workflow

1. **Edit and Develop**
   - Open the project in VS Code or your preferred editor
   - Make changes to sections, templates, assets, etc.
   - Preview changes live in the browser at `http://127.0.0.1:9292`

2. **Theme Editor Sync**
   - Use `--theme-editor-sync` flag to sync Theme Editor changes back to local files
   - Example: `npx shopify theme dev --theme-editor-sync`

3. **Push Changes**
   - Use `npm run push` to upload your theme to Shopify
   - Or use `npx shopify theme push` for more control

### Structure

```
├── assets/          # Static assets (CSS, JS, images)
├── blocks/          # Reusable UI components
├── config/          # Global theme settings
├── layout/          # Page layout templates
├── locales/         # Translation files
├── sections/        # Modular page components
├── snippets/        # Reusable Liquid code
└── templates/       # Page templates
```

## Customization

This theme is designed to be highly customizable:

- **Sections** can be added, removed, and reordered via Theme Editor
- **Settings** allow merchants to customize colors, text, and images
- **App blocks** provide integration with third-party apps
- **Responsive design** works on all devices

## License

This project is open-sourced under the MIT License.

## Author

Built with modern Shopify development practices and a focus on merchant experience.
