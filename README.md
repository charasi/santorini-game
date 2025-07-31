# 🌊 Santorini (Browser-Based)

A modern reimagining of the **Santorini board game** built for the browser, combining the powers of **PixiJS**, **React**, **Zustand**, **GSAP**, and **Spine 2D**. This project explores interactive scene orchestration, isometric grid projection, fluid character animation, and state-driven UI through a cutting-edge frontend architecture.

> ⚠️ **Note:** Development is still in progress. Contributions, suggestions, and feedback are welcome!

---

## 🎮 Features

### 🌀 Rendering & Animation
- **PixiJS** for scene graph rendering, layered object depth sorting, and dynamic tile stacking
- **Spine 2D Skeleton Animation** with custom animated tree using JSON + Atlas integration
- **GSAP + PixiPlugin** for interactive overlay transitions and object animations
- **Tiled JSON Maps** for isometric grid layout and z-index-aware object placement

### 🧠 Architecture & Scene Management
- **Overlay Scene Stack** with push/pop design for `IntroScene`, `MenuScene`, etc.
- **Zustand Global Store** to manage game phase (`Place`, `Move`, `Build`), selected tiles, and gameplay state
- **SceneManager Class** to orchestrate canvas elements, event handling, and responsive resizing

### 🧩 UI & Layout
- **React + Tailwind CSS** panels for gameplay actions across top, bottom, and sides
- **Responsive Design** with dynamic resizing of isometric map inside fixed layout constraints

---

## 🚀 Tech Stack

| Layer         | Technology                                      |
|---------------|--------------------------------------------------|
| Rendering     | PixiJS, GSAP, PixiPlugin                        |
| Animation     | Spine 2D (JSON + Atlas)                        |
| Frontend UI   | React, Tailwind CSS                            |
| State Management | Zustand                                      |
| Map Design    | Tiled Editor, JSON Grid                        |

---

## 📦 Project Setup (Coming Soon)

```bash
# Clone the repository
git clone https://github.com/yourusername/santorini-browser.git
cd santorini-browser

# Install dependencies
npm install

# Start development server
npm run dev

