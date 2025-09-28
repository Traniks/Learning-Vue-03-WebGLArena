<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AngryBots - Web3 Gaming Landing Page

## ✅ Project Status: BASE READY

**Базовая структура проекта создана и работает! Готов к доработкам и улучшениям.**

## 🛠️ Technology Stack

- **Vue 3** with Composition API & `<script setup>`
- **TypeScript** for type safety
- **Tailwind CSS** with new @tailwindcss/vite plugin
- **Pinia** for state management
- **Vite** as build tool and dev server

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.vue          ✅ Gradient title, dark theme
│   ├── Description.vue     ✅ Game info + contract address copy
│   ├── GameSection.vue     ✅ Unity WebGL container (16:9)
│   └── Footer.vue          ✅ Links, copyright, branding
├── stores/
│   └── game.ts            ✅ Pinia store for game state
├── App.vue                ✅ Main app component
├── main.ts               ✅ Entry point with Tailwind import
└── style.css             ✅ Global styles + Tailwind

public/                    📁 Static assets
.github/                   📁 GitHub configuration
vite.config.ts            ✅ Vite + Tailwind plugin config
```

## 🎨 Design Implementation Status

- ✅ **Dark theme** with red-orange gradients
- ✅ **Huge gradient title** with glow effects
- ✅ **Elegant description** (3-4 lines)
- ✅ **Contract address** with truncation + copy button
- ✅ **Game section** with 16:9 aspect ratio
- ✅ **Fullscreen toggle** (top-right corner)
- ✅ **Unity branding removal** logic
- ✅ **Footer** matching header style
- ✅ **Responsive design** for all devices

## 🎯 Development Guidelines for Future Improvements

### Code Style (FOLLOW THIS):

```vue
<!-- Correct Vue SFC order -->
<script setup lang="ts">
// TypeScript logic here
</script>

<template>
  <!-- HTML template here -->
</template>

<style scoped>
/* Component styles here */
</style>
```

### Component Patterns:

- Use **Composition API** with `<script setup>`
- **TypeScript strict mode** enabled
- **Tailwind utility classes** for styling
- **Responsive design** (mobile-first approach)
- **Semantic HTML** structure

### State Management:

- Use **Pinia stores** for shared state
- Keep **reactive data** in stores when needed across components
- Use **computed properties** for derived state

### Game Integration:

- **Unity WebGL** build integration ready
- **Fullscreen API** implemented
- **Loading states** handled
- **Unity branding removal** automated

## 🚀 Available Commands

```bash
npm run dev      # Start development server (already running)
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🔧 Next Steps & Improvements

- [ ] Add real Unity WebGL build integration
- [ ] Implement actual contract address
- [ ] Add more animations and transitions
- [ ] Optimize performance
- [ ] Add SEO meta tags
- [ ] Implement error handling
- [ ] Add loading skeletons
- [ ] Mobile UX improvements

## 💡 Copilot Instructions

When helping with this project:

1. **Follow established patterns** from existing components
2. **Use TypeScript** for all new code
3. **Maintain responsive design** principles
4. **Keep dark theme** consistency
5. **Use Pinia store** for shared state
6. **Follow Vue 3 best practices**
7. **Optimize for performance**
