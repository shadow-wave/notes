# GreatNotes Studio Pro 

```
   ██████╗ ██████╗ ███████╗ █████╗ ████████╗███╗   ██╗ ██████╗ ████████╗███████╗███████╗
  ██╔════╝ ██╔══██╗██╔════╝██╔══██╗╚══██╔══╝████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝
  ██║  ███╗██████╔╝█████╗  ███████║   ██║   ██╔██╗ ██║██║   ██║   ██║   █████╗  ███████╗
  ██║   ██║██╔══██╗██╔══╝  ██╔══██║   ██║   ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ╚════██║
  ╚██████╔╝██║  ██║███████╗██║  ██║   ██║   ██║ ╚████║╚██████╔╝   ██║   ███████╗███████║
   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                 S T U D I O   P R O   •   I P A D O S   2 7 . 0 . 1
```

> **A native-grade, Liquid Glass note-taking & academic PDF study engine engineered for iPad (Apple Silicon / iPadOS 27.0.1). Featuring smooth Hydro-Elastic Water Drop jiggly physics, 240Hz coalesced Apple Pencil inking, dual-tier Dark Mode (Midnight Space & Pure Obsidian True OLED #000000), hardware palm rejection, and 100% offline self-contained deployment with zero external CDN dependencies.**

[![Platform](https://img.shields.io/badge/Platform-iPadOS%2027.0.1%20%7C%20iOS%20%7C%20macOS-007AFF?style=for-the-badge&logo=apple&logoColor=white)](#)
[![Physics Engine](https://img.shields.io/badge/Physics-Hydro--Elastic%20Water%20Drop%20Jiggle-00C7BE?style=for-the-badge)](#)
[![Apple Pencil](https://img.shields.io/badge/Apple%20Pencil-240Hz%20Coalesced%20Inking-34C759?style=for-the-badge&logo=apple&logoColor=white)](#)
[![Display Engine](https://img.shields.io/badge/OLED%20Display-True%20Black%20%23000000%20%2B%20Liquid%20Glass-FF2D55?style=for-the-badge)](#)
[![Offline](https://img.shields.io/badge/Offline-100%25%20PWA%20Cache--First-FF9500?style=for-the-badge)](#)
[![Zero CDN](https://img.shields.io/badge/Dependencies-Zero%20CDN%20(100%25%20Self--Contained)-AF52DE?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

---

## 🌟 Visual Showcase & Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           GREATNOTES STUDIO PRO (iPadOS 27.0.1)                         │
│                                                                                         │
│   ┌────────────────────────┐  ┌────────────────────────┐  ┌─────────────────────────┐   │
│   │   Hydro-Elastic Water  │  │   240Hz Apple Pencil   │  │   Pure Obsidian OLED    │   │
│   │    Drop Liquid Glass   │  │      Inking Core       │  │      Display Engine     │   │
│   │                        │  │                        │  │                         │   │
│   │ • Volume Squish (0.88) │  │ • Coalesced 240Hz      │  │ • True #000000 Black    │   │
│   │ • Viscous Jiggle Pop   │  │ • Hardware Palm Reject │  │ • Tandem OLED 0-Nit     │   │
│   │ • Droplet Levitation   │  │ • Zero-Fog Chisel HL   │  │ • Liquid Glass Backlit  │   │
│   │ • Caustic Wave Ripple  │  │ • Magic Keyboard HUD   │  │ • Smart Night PDF #1215 │   │
│   └────────────────────────┘  └────────────────────────┘  └─────────────────────────┘   │
│                                                                                         │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │                 100% Self-Contained Offline PWA & Storage Suite                 │   │
│   │      Zero CDN Dependencies • Local PDF.js • Local jsPDF • Local IndexedDB       │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Flagship Highlights

### 1. 💧 Refined Hydro-Elastic Water Drop & Liquid Glass Physics (iPadOS 27.0.1 Specification)
GreatNotes Studio Pro is engineered around the refined **iPadOS 27.0.1 subtle fluid interaction model**, treating UI components as cohesive, viscous water droplets with whisper-soft, relaxing physics:

* **Surface Tension & Subtle Tactile Press**:
  When any button, dock tool, or book card is pressed (`:active`), it organically compresses with whisper-soft tactile damping (`transform: scale(0.965, 0.975) translateY(0.5px)`), delivering authentic fluid feedback without visual distortion.
* **Whisper-Subtle Water-Drop Jiggle (`@keyframes waterDropJiggle`)**:
  Upon releasing touch, surface tension relaxes the element through a gentle, subtle fluid micro-settle:
  `scale(1.025, 0.975) -> scale(0.985, 1.015) -> scale(1.006, 0.996) -> scale(1, 1)`. Refined and calm, preserving full focus during intensive study.
* **Calm Ambient Levitation**:
  Active tools in the floating dock float in a slow, tranquil 5.5-second ambient breathing loop (`@keyframes waterDropletLevitate`), elevated above the glass tray with internal caustic specular highlights (`inset 0 1.5px 1px rgba(255, 255, 255, 0.55)`).
* **Cohesive Hydro-Dynamic Dock Adaptation**:
  Switching dock tools causes the dock container to morph and adapt smoothly (`@keyframes dockWaterMorph`), simulating fluid cohesion with serene, gentle damping.
* **Smooth Bubble Popping Sheets (`@keyframes waterBubblePopIn`)**:
  Modals and sheets (Settings, Page Matrix, Shortcuts HUD) glide smoothly into view from below, settling into place with native iPadOS elegance.
* **Whisper-Soft Caustic Ripple**:
  Every tap spawns an ethereal, low-opacity caustic wave (`.water-drop-ripple`) radiating gently outward directly beneath your Apple Pencil tip or finger.

---

### 2. 🌌 Dual-Tier Dark Engine: Midnight Space vs. Pure Obsidian True OLED
GreatNotes Studio Pro features an industry-first dual-mode dark appearance system engineered specifically for iPad displays:

| Feature | ☀️ Luminous Light | 🌌 Midnight Space | 🖤 Pure Obsidian OLED |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#F2F2F7` (Porcelain Slate) | `#080A11` (Cosmic Sapphire) | **`#000000` (True Pitch Black)** |
| **Study Paper Tone** | Crisp White / Cream Ivory | `#121522` (Deep Night) | **`#000000` (Infinite Contrast)** |
| **Glass Morphism** | Frosted Milk Glass | Frosted Sapphire Glass | **Obsidian Glass + Specular Rim** |
| **Target Display** | Liquid Retina IPS | Standard Dark Environments | **iPad Pro M4 Tandem OLED / XDR** |
| **Pixel State** | Fully Illuminated | Dimmed Sub-pixels | **Individual Pixels 100% OFF** |
| **Battery Impact** | Standard | Reduced Power | **Maximum Battery Preservation** |
| **Contrast Ratio** | 1,500:1 | 50,000:1 | **∞ : 1 (Infinite Dynamic Range)** |

* **Extreme Liquid Glass Sheen**: On Pure Obsidian mode, all floating docks, dialogs, bookplates, and sheets feature hyper-luminous specular top rim highlights (`inset 0 1px 0 rgba(255, 255, 255, 0.35)`), neon ambient backlight refraction, and crisp white typography that appears to float magically above true pitch-black glass.
* **Smart Dark PDF & Night Reading Engine (`⌘ ⇧ D`)**: Instantly converts blinding white textbook scans into eye-friendly deep obsidian sheets (`#121522`) with high-contrast, razor-sharp typography while preserving the true colors of diagrams and illustrations.
* **Apple View Transitions & Ambient Pulse**: Switching modes triggers a buttery smooth cinematic crossfade (`document.startViewTransition()`), accompanied by an ambient wave pulse and tactile rotational spring pop.
* **Adaptive App Icons**: Automatically synchronizes your Home Screen and browser tab icons between **Light Porcelain** and **Dark Obsidian** graphics.

---

### 3. ⚡ 240Hz Apple Pencil Inking Core & Adaptive Floating Dock
* **Coalesced Pointer Pipeline (`e.getCoalescedEvents()`)**: Captures micro-strokes at hardware-level 240Hz on Apple Pencil Pro and Apple Pencil (USB-C / 2nd Gen) for zero discernible latency.
* **Strict Stylus Hardware Palm Rejection**: Distinguishes stylus input (`pointerType === 'pen'`) from hand touch, allowing you to rest your palm naturally on the glass without false markings.
* **Zero-Fog Chisel Highlighter**: Built with continuous quadratic beziers and four-tier canvas layering. Renders translucent fluorescent ink ribbons *underneath* textbook text and pen strokes with zero overlapping cap artifacts, dark beads, or foggy haze.
* **Presentation Laser Studio**: Continuous glowing laser beam with white-hot diode tip, neon flare, and seamless `lineCap = 'butt'` joints. Configurable dissolution trails (500ms, 850ms, 1.4s) and beam thicknesses (Fine 4px, Medium 8px, Broad 14px).
* **Spring-Staggered Morphing Dock**: When selecting tools, the floating dock dynamically morphs with spring physics to present custom controls:
  - **📐 Vector Shape Studio**: Snapping vector drawing for Lines, Arrows, Rectangles, Circles, and Triangles.
  - **⚡ Glowing Laser Pointer**: 5 neon diode colors and trail duration selectors.
  - **🧹 Dual-Engine Eraser**: Instant toggle between Whole-Stroke Eraser and Precision Pixel Eraser.
* **Hold-to-Snap Geometric Recognition**: Draw any rough polygon or stroke freehand and pause for 400ms to snap into mathematically perfect vector geometry.
* **Minimizable Dock**: Tap the minimize toggle to collapse the dock into a sleek floating glass capsule for distraction-free edge-to-edge drawing.

---

### 4. 🪟 Liquid Glass Page Matrix & Academic Study Suite
* **True-Aspect-Ratio Page Sorter (`⌘ M`)**: Bird's-eye matrix view displaying every document page in its genuine aspect ratio (A4 portrait, engineering grid, or landscape slides) without stretching or square cropping.
* **Retina 2.0x DPI Previews**: Page thumbnails are rasterized at 2x device pixel density, keeping fine handwriting and formulas crisp.
* **Interleaved Study Sheets**: Seamlessly insert ruled sheets, Cornell notes, engineering graph paper, or blank sketch pads between existing PDF textbook pages.
* **Full-Fidelity Composite Export**: Exports annotated documents to searchable, multi-page vector PDFs or high-resolution 2x PNGs with composite multiply-blended highlighters and original book text intact.
* **Virtual Viewport Mounting**: Uses `IntersectionObserver` to mount and unmount off-screen canvas pages, ensuring silky-smooth scrolling even on 200+ page textbooks.

---

### 5. ⌨️ iPad Magic Keyboard & Gesture Shortcuts

Press **`⌘ /`** (or **`?`**) anywhere in the app to display the floating frosted **Shortcuts HUD Sheet**.

#### 🎨 Tool Selection
| Key | Tool | Function |
| :--- | :--- | :--- |
| **`P`** or **`1`** | Fountain Pen | Calligraphic pressure-sensitive inking pen |
| **`H`** or **`2`** | Highlighter | Zero-fog chisel-tip text highlighter |
| **`E`** or **`3`** | Wedge Eraser | Whole-object or precision pixel eraser |
| **`S`** or **`4`** | Vector Shapes | Geometric shape snap studio |
| **`L`** or **`5`** | Laser Pointer | Continuous glowing presentation laser |
| **`V`** or **`0`** | Pan / Hand | Two-axis smooth canvas navigation |
| **`Space`** *(Hold)* | Quick Pan | Temporarily pans; releasing restores active tool |

#### ✏️ History & Editing
| Key | Action | Description |
| :--- | :--- | :--- |
| **`⌘ Z`** *(2-finger tap)* | Undo | Reverts the last stroke or action |
| **`⌘ ⇧ Z`** or **`⌘ Y`** *(3-finger tap)* | Redo | Reapplies the most recent undone stroke |
| **`⌘ ⌫`** | Clear Page | Clears all handwriting and highlights on active page |

#### 📖 Navigation & Viewport
| Key | Action | Description |
| :--- | :--- | :--- |
| **`⌘ B`** or **`⌘ O`** | Outline Drawer | Toggles the Document Outline sidebar |
| **`⌘ M`** | Page Matrix | Toggles the Liquid Glass full-screen page matrix |
| **`⌘ N`** | New Page / Book | Adds study page in document, or new book on shelf |
| **`⌘ D`** | Duplicate Page | Clones the active page and all vector ink |
| **`←`** / **`→`** | Page Turn | Smoothly turns to previous or next page |
| **`⌘ ⇧ D`** | Night PDF Mode | Toggles deep obsidian reading mode for PDFs |
| **`⌘ +`** / **`⌘ -`** | Zoom Canvas | Steps continuous magnification in 15% intervals |
| **`⌘ 0`** | Reset Zoom | Snaps continuous canvas back to exact 100% scale |

#### ⚙️ System & Modals
| Key | Action | Description |
| :--- | :--- | :--- |
| **`⌘ ⇧ E`** or **`⌘ P`** | Export Studio | Opens PDF, PNG, and .gn backup export sheet |
| **`⌘ ,`** | Settings Sheet | Opens appearance, palm rejection, and cache options |
| **`⌘ ⇧ T`** | Toggle Dark Mode | Triggers cinematic Apple theme transition |
| **`Esc`** | Close / Back | Dismisses any active modal, or returns to shelf |
| **`⌘ /`** or **`?`** | Shortcuts HUD | Slides up the frosted Magic Keyboard HUD |

---

### 6. 🛡️ 100% Offline & Zero-CDN Architecture
* **Zero External Dependencies**: All vendor libraries (`pdf.min.js`, `pdf.worker.min.js`, `jspdf.umd.min.js`, `lucide.min.js`), vector icons, and stylesheets are bundled locally. **No unpkg, no cdnjs, no tailwind CDN**.
* **Instant 0.00ms Boot**: The Service Worker implements a **Cache-First** strategy with Stale-While-Revalidate, caching the complete application shell for offline study.
* **Crash-Resistant IndexedDB**: Automatically stores notebook metadata, vector strokes, and PDF blobs across app restarts and screen locks.

---

## 📁 Repository Structure

```
├── index.html                  # Core Studio Application (UI, Inking Engine & Water Drop Physics)
├── sw.js                       # iPadOS 27.0.1 Offline PWA Service Worker (Cache-First)
├── manifest.json               # Web App Manifest (Standalone iPadOS configuration)
├── pdf.min.js                  # Offline PDF.js core library
├── pdf.worker.min.js           # Offline PDF.js web worker
├── jspdf.umd.min.js            # Offline jsPDF engine for annotated PDF export
├── lucide.min.js               # Offline icon vector utility
├── apple-touch-icon.png        # Default Retina Home Screen squircle icon
├── apple-touch-icon-light.png  # Porcelain Light Mode Retina touch icon
├── apple-touch-icon-dark.png   # Obsidian Dark Mode Retina touch icon
├── icon-192.png                # PWA 192x192 application icon
├── icon-512.png                # PWA 512x512 splash screen icon
├── icon-light-192.png          # Light Mode PWA 192x192 icon
├── icon-light-512.png          # Light Mode PWA 512x512 icon
├── icon-light-1024.png         # Minimalist Porcelain Pro Master Icon (1024x1024)
├── icon-dark-192.png           # Dark Mode PWA 192x192 icon
├── icon-dark-512.png           # Dark Mode PWA 512x512 icon
├── icon-dark-1024.png          # Minimalist Obsidian Pro Master Icon (1024x1024)
├── favicon.png                 # Default browser tab icon
├── favicon-light.png           # Light Mode browser tab icon
├── favicon-dark.png            # Dark Mode browser tab icon
├── README.md                   # Developer & Architecture Documentation
├── LICENSE                     # MIT Open Source License
└── .gitignore                  # Clean workspace exclusions
```

---

## 🚀 One-Minute GitHub Pages Deployment

You can deploy GreatNotes Studio Pro to the web in **under 60 seconds**:

### Step 1: Push Repository to GitHub
```bash
git init
git add .
git commit -m "feat: GreatNotes Studio Pro v5.0 for iPadOS 27.0.1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/greatnotes-ipad.git
git push -u origin main
```

### Step 2: Activate GitHub Pages
1. Open your repository on GitHub and navigate to **Settings > Pages**.
2. Under **Build and deployment > Source**, choose **Deploy from a branch**.
3. Select **`main`** branch and **`/ (root)`** folder, then click **Save**.
4. GitHub Pages will build your live site immediately:
   `https://YOUR_USERNAME.github.io/greatnotes-ipad/`

---

## 📱 How to Install on iPad (Full-Screen Native App)

1. Open your GitHub Pages link in **Safari** on your iPad.
2. Tap the **Share** button in Safari's top toolbar.
3. Scroll down and tap **"Add to Home Screen"** (`+`).
4. Tap **Add** in the top-right corner.
5. Launch **GreatNotes Pro** from your Home Screen. It will run in standalone full-screen mode with full hardware acceleration, automatic palm rejection, and 100% offline access.

---

## ⚙️ Technical Specifications

* **Interaction Model**: Hydro-elastic water drop surface tension & volume-conserving squish physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
* **Canvas Architecture**: Four-tier hardware-accelerated canvas stack (`.layer-bg`, `.layer-hl`, `.layer-ink`, `.layer-active`).
* **Inking Latency**: Up to 240Hz coalesced pointer pipeline with dynamic quadratic bezier smoothing.
* **Highlighter Composition**: Hardware `mix-blend-mode: multiply` (light paper) and `screen` (dark paper) for zero-fog text legibility.
* **Theme Switching**: Dual-tier Dark Engine with View Transitions API and fallback timing loops.
* **Storage Limit**: Up to browser IndexedDB quota (~60% of available iPad disk space).
* **Backup Format**: Native `.gn` format (JSON-serialized stroke vectors + embedded PDF page references).

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for complete details. Free for academic, personal, and commercial study use.
