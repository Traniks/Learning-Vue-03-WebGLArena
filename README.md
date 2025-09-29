# UnityOnWeb - WebGL Gaming Platform

A cutting-edge single-page application built with Vue 3, TypeScript, and Tailwind CSS. Experience seamless Unity WebGL games in your browser with modern web technologies and blockchain integration.

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Unity WebGL** - Game engine integration
- **Vite** - Fast build tool and dev server

## ✨ Features

- 🎮 **Unity WebGL Game Integration** - Seamless browser-based gaming
- 📱 **Mobile Detection** - Optimized experience recommendations
- 🖥️ **Fullscreen Mode** - Immersive 16:9 aspect ratio gaming
- 🎨 **Modern UI/UX** - Gradient designs with mint green theme
- 🔗 **Blockchain Integration** - Contract address management
- 📋 **Copy Functionality** - Easy contract address sharing
- 🎯 **Responsive Design** - Adaptive typography and layouts

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.vue          # Platform title and social links
│   ├── Description.vue     # Platform info and contract address
│   ├── GameSection.vue     # Unity game container
│   └── Footer.vue          # Footer with links
├── utils/
│   ├── contract.ts         # Contract utilities
│   └── unityLoader.ts      # Unity WebGL loader
└── App.vue                 # Main application
```

## 🎮 Game Experience

### Desktop Users

- Full Unity WebGL game with complete controls
- Fullscreen mode with proper 16:9 aspect ratio
- Keyboard and mouse support
- Optimized performance and graphics

### Mobile Users

- Smart device detection
- Desktop experience recommendations
- Informative guidance about optimal setup
- Responsive design for all screen sizes

## 🎨 Design Features

- **Gradient Theme** - Modern mint green (#7acfb5) color palette
- **Typography Hierarchy** - Responsive text sizing across devices
- **Interactive Elements** - Hover effects and smooth transitions
- **Visual Feedback** - Loading states and success animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
