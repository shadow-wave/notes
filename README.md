# GreatNotes Studio Pro 

> **A native-grade, Liquid Glass note-taking & academic PDF study engine optimized for iPad (Apple Silicon / A16 / iPadOS 18) — 100% offline, zero external CDN dependencies, and ready for instant GitHub Pages deployment.**

[![Platform](https://img.shields.io/badge/Platform-iPadOS%2018%20%7C%20iOS%20%7C%20Web-007AFF?style=for-the-badge&logo=apple&logoColor=white)](#)
[![Apple Pencil](https://img.shields.io/badge/Apple%20Pencil-240Hz%20Coalesced%20Inking-34C759?style=for-the-badge&logo=apple&logoColor=white)](#)
[![Offline](https://img.shields.io/badge/Offline-100%25%20PWA%20Cache--First-FF9500?style=for-the-badge)](#)
[![Zero CDN](https://img.shields.io/badge/Dependencies-Zero%20CDN%20(Self--Contained)-AF52DE?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

---

## 🌟 Overview

**GreatNotes Studio Pro** brings the fluid, responsive, and tactile feel of premier desktop note applications (such as Apple Notes, GoodNotes, and LiquidText) directly into a lightweight, standalone progressive web app (PWA).

Engineered specifically for **iPad A16 / iPadOS 18**, GreatNotes Pro operates entirely client-side. There are **zero build steps**, **zero npm requirements**, and **zero external CDN dependencies** — meaning every asset, stylesheet, icon, and PDF processing library is bundled right inside this repository for effortless drag-and-drop deployment to **GitHub Pages**.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           GREATNOTES STUDIO PRO                             │
│                                                                             │
│   ┌────────────────────┐   ┌────────────────────────┐   ┌───────────────┐   │
│   │   Liquid Glass     │   │   240Hz Apple Pencil   │   │  Academic PDF │   │
│   │   Visual System    │   │      Inking Core       │   │  Study Engine │   │
│   │                    │   │                        │   │               │   │
│   │ • Specular Sheen   │   │ • Coalesced Events     │   │ • Interleaved │   │
│   │ • Optical Blurs    │   │ • Palm Rejection       │   │   Study Pages │   │
│   │ • Page Matrix      │   │ • Shape Snapping       │   │ • Under-Text  │   │
│   │ • Ambient Mesh     │   │ • 2/3 Finger Gestures  │   │   Highlight   │   │
│   └────────────────────┘   └────────────────────────┘   └───────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │           100% Offline PWA & IndexedDB Persistence Engine           │   │
│   │          Zero CDN Reliance • Local PDF.js • Local jsPDF             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Flagship Highlights

### 1. 🪟 Liquid Glass Aesthetic & True-Aspect-Ratio Page Sorter
* **Zero-Distortion Aspect Preservation**: Every preview card (A4 portrait, landscape slide deck, engineering grid, or ruled paper) dynamically renders in its genuine aspect ratio without vertical stretching or square cropping.
* **Retina High-DPI Matrix**: Thumbnails are rendered at 2.0x device pixel density, ensuring tiny textbook text and intricate pen strokes remain razor-sharp.
* **Full-Screen Liquid Glass Page Sorter (`#page-matrix-sheet`)**: Instant bird's-eye matrix view of your entire notebook with floating optical glass sheen, frosted page number badges, and 1-tap Duplicate / Delete quick actions.
* **Streamlined Access**: Launch the Liquid Page Matrix directly from the Document Outline Drawer header button, or by simply tapping the floating bottom **Page Scrubber Pill** (eliminating redundant buttons from the top navigation bar).

### 2. ⚡ Zero-Latency Apple Pencil Engine & Precision Toolcase
* **Coalesced Pointer Events (120Hz / 240Hz)**: Directly harnesses `e.getCoalescedEvents()` to record every micro-stroke up to 240Hz on Apple Pencil Pro and Apple Pencil (USB-C / 2nd Gen).
* **Hardware Palm Rejection (`Strict Stylus` Mode)**: Distinguishes between stylus (`e.pointerType === 'pen'`) and finger inputs to eliminate accidental palm markings while writing.
* **Apple SF Symbols Pro Vector Suite**: Pristine custom inline SVG vectors for all floating dock tools (`pencil.tip`, chisel `highlighter`, beveled `eraser`, `shapes`, laser reticle burst, `hand.raised`, undo, redo, clear trash, and chevron collapse) with flexbox optical centering.
* **Silky Smooth In-Flight Highlighter**: Live single-compound quadratic bezier rasterization eliminates overlapping cap artifacts and dark bead spots during drawing, delivering perfectly uniform, translucent ribbons that automatically blend under text.
* **Continuous Glowing Presentation Laser**: Re-engineered dual-pass laser beam with white-hot neon core, atmospheric lens flare tip, and seamless `lineCap = 'butt'` joint clipping that eliminates dotted-bead trails.
* **Laser Beam Thickness & Color Wells**: 3 selectable beam thicknesses (Fine 4px, Medium 8px, Broad 14px) and 5 vibrant neon colors (Crimson, Emerald, Cyan, Amber, Purple) directly in the dock and settings.
* **Adaptive Dynamic Dock**: When switching tools, the floating dock fluidly morphs with spring transitions to reveal specialized control trays for each tool:
  - **📐 Vector Shape Studio**: Interactive live rubber-band drawing and auto-snapping for `Line 📏`, `Arrow ➔`, `Rectangle ▭`, `Circle ◯`, and `Triangle 📐`.
  - **⚡ Glowing Laser Pointer**: Real-time laser presentation beam with trailing dissolution (500ms, 850ms, 1.4s), white-hot diode tip, and thickness adjustment.
  - **🧹 Dual-Engine Eraser**: Instant toggle between Whole-Object Eraser and Precision Pixel Eraser.
* **Hold-to-Snap Geometric Shapes**: Draw any stroke freehand and pause for 400ms to instantly snap into perfect geometric vectors.
* **Multitouch Gestures & Magic Keyboard Support**:
  - **Two-Finger Tap**: Instant Undo (`Cmd+Z` / `Ctrl+Z`)
  - **Three-Finger Tap**: Instant Redo (`Cmd+Shift+Z` / `Ctrl+Y`)
  - **Hardware Keyboard Hotkeys**: `1`/`P` (Pen), `2`/`H` (Highlighter), `3`/`E` (Eraser), `4`/`S` (Shape), `5`/`L` (Laser), `0`/`V` (Pan), `Cmd +`/`-` (Zoom), `Esc` (Close Modals).

### 3. 📚 Academic PDF Study & Complete Annotated Export
* **Seamless PDF Import**: Drag-and-drop or select multi-page textbooks, slide decks, or lecture notes.
* **Segregated Under-Text Highlighting**: Highlighter ink strokes are rendered in a separate pass *underneath* textbook text and pen strokes, preserving 100% readability of printed formulas and typography.
* **Full-Fidelity PDF & PNG Export**: When exporting to PDF or 2x PNG, the app composites the original underlying textbook graphics, diagrams, and slide text with all handwritten notes and highlighters into a single, pristine document.
* **Interleaved Study Pages**: Insert Cornell note pages, narrow-ruled sheets, engineering grid paper, or blank sketch pads between existing PDF slides.
* **Memory-Safe Lazy Mounting**: Leverages `IntersectionObserver` to mount and unmount off-screen canvas pages, ensuring silky-smooth performance even with 100+ page documents.

### 4. 🌙 Dual-Theme Engine, Deep Space Obsidian Dark Mode & Smart Night PDF
* **Smart Dark PDF & Night Reading Engine (`toggleSmartDarkPdf`)**: Automatically active in Dark Mode. Converts blinding white PDF pages into eye-friendly deep obsidian sheets (`#121522`) with high-contrast, crystal-clear silver-white typography (`#F1F5F9`) while preserving natural photo and diagram chrominance. Includes a 1-tap **`[ 🌙 Night PDF ]` / `[ ☀️ Day PDF ]`** toggle pill in the top system bar.
* **Apple Pro Adaptive Dual-Palette Notebook Materials**: Notebooks dynamically crossfade and harmonize with the active appearance mode:
  - **Light Mode**: Rich, vibrant designer pastels and saturated leather tones (Oceanic Sapphire, Botanical Sage, Saddle Caramel, Tuscan Wine, Royal Amethyst, Slate Titanium) that perfectly match the airy porcelain interface.
  - **Dark Mode**: Deep midnight obsidian tones (Deep Space Sapphire, Obsidian Titanium, Emerald Noir, Crimson Ruby Noir, Royal Amethyst, Saddle Cognac) blending seamlessly into the dark glass aesthetic.
  - **3D Hardcover Journal Realism**: Complete with a realistic left debossed spine crease stitch (`.notebook-cover-card::before`), right-side paper rim sliver (`.notebook-cover-card::after`), and an optical frosted glass bookplate badge with gold book vector insignia.
* **Luxury Apple Deep Space Obsidian Aesthetic**: Dark Mode has been completely redesigned to match iPadOS 18 and macOS Sequoia pro aesthetics. Replaced flat pitch-black blocks and patchy green smudges with unified deep space obsidian surfaces (`#080A11`), luminous sapphire/indigo refraction, refined zero-smudge drop shadows, and specular titanium rim borders (`inset 0 1px 0 rgba(255, 255, 255, 0.18)`).
* **Adaptive Dark Paper & Smart Inking Contrast**: When writing in Dark Mode or on dark study paper (`#121522`), pen and shape swatches dynamically surface pure chalk white (`#FFFFFF`) with glowing selection states, newly created notebooks automatically default to dark paper, and neon highlighters glow with vivid clarity via hardware `screen` blending.
* **Apple SF Symbols Pro Vector Suite**: Upgraded custom inline SVG vectors for all primary floating dock tools (Fountain Pen nib, Chisel-tip Highlighter, Precision Eraser, Geometric Shapes, and Glowing Laser Pointer) tailored for Apple Retina Displays.
* **Apple View Transitions & Ambient Wave**: Switching between Light and Dark mode activates a native cinematic crossfade with optical blur reveal (`document.startViewTransition()`), accompanied by a soft ambient optical light pulse and a tactile rotational spring flip on the theme toggle button.
* **Dual Adaptive App Icons (iPadOS 18 Standard)**: Includes dedicated **Light Mode** (frosted porcelain glass with Apple Pencil Pro and holographic rainbow ribbon) and **Dark Mode** (deep space obsidian with bioluminescent neon laser core and white-hot diode tip) icons that adapt dynamically with system appearance.
* **Interactive Paper & Theme Studio**: Live selection indicators for study paper templates (Ruled, Cornell, Grid, Dotted, Blank) and paper tone textures (White, Cream, Dark Slate).
* **⚙️ Comprehensive Settings Sheet (`#settings-sheet`)**:
  - **Dynamic Accent Color Picker**: Choose between Apple Blue, Royal Purple, Emerald Green, Sunset Amber, Neon Crimson, or Cyber Cyan.
  - **Stylus Hover Targeting Ring**: Toggleable glowing cursor indicator for iPad Pro / Air with Apple Pencil Hover.
  - **Laser Dissolution Duration**: Configurable neon beam persistence (500ms, 850ms, or 1.4s).
  - **Laser Beam Thickness**: Select Fine (4px), Medium (8px), or Broad (14px) beam diameter.
  - **Default Study Template & Paper Tone**: Automatically applies your preferred paper layout to newly inserted study sheets.
  - **Storage Metrics & Cache Optimizer**: Live IndexedDB inspection with 1-click cache purge and complete `.gn` archive backup.
* **Minimizable Floating Dock**: Tap the minimize icon to slide the dock away for distraction-free edge-to-edge drawing, with a floating glass restore pill to spring it back instantly.
* **Apple SF Symbols Vector Suite**: 80+ crisp, custom inline SVG icons styled after Apple's SF Symbols design language — zero blurry or generic icons.

### 5. 🛡️ 100% Offline & Zero-CDN Architecture
* **The "Taiwan CSS" Fix**: Unlike legacy apps that break when external CDNs (like `cdn.tailwindcss.com`) fail offline, GreatNotes Pro contains pre-compiled, embedded Apple SF Pro CSS that loads in **0.00ms** under any network condition.
* **Local Vendor Suite**: Includes localized, offline-ready copies of `pdf.min.js`, `pdf.worker.min.js`, `jspdf.umd.min.js`, and `lucide.min.js`.
* **Crash-Resistant IndexedDB**: Automatically saves notebook metadata and PDF blobs in a dual-store IndexedDB (`GreatNotesiPadDB`) with debounced flush on screen lock and app switching.

---

## 📁 Repository Structure

```
├── index.html                  # Core Studio Application (Self-contained UI, Inking Engine, & CSS)
├── sw.js                       # iPadOS Offline PWA Service Worker (Cache-First strategy)
├── manifest.json               # Web App Manifest (Standalone iPadOS configuration)
├── pdf.min.js                  # Offline PDF.js core library
├── pdf.worker.min.js           # Offline PDF.js web worker
├── jspdf.umd.min.js            # Offline jsPDF engine for annotated document export
├── lucide.min.js               # Offline icon vector utility
├── apple-touch-icon.png        # Default Retina Home Screen squircle icon for iPadOS
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
├── README.md                   # Developer & Client Architecture Documentation
├── LICENSE                     # MIT Open Source License
└── .gitignore                  # Clean git workspace exclusions
```

---

## 🚀 Quick Deployment Guide

You can deploy this entire repository to the web in **under 60 seconds** using GitHub Pages:

### Step 1: Upload to GitHub
1. Create a new repository on GitHub (e.g., `greatnotes-ipad`).
2. Drag and drop all files from this directory into the repository (or push via Git):
   ```bash
   git init
   git add .
   git commit -m "feat: initial GreatNotes Studio Pro release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/greatnotes-ipad.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. Go to your repository's **Settings** tab on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Set the branch to `main` and folder to `/ (root)`, then click **Save**.
5. GitHub will provide your live URL (e.g., `https://YOUR_USERNAME.github.io/greatnotes-ipad/`).

---

## 📱 How to Install on iPad (Full-Screen Native Experience)

To experience GreatNotes Pro as a full-screen, standalone app on your iPad without Safari browser bars:

1. Open your GitHub Pages URL in **Safari** on your iPad.
2. Tap the **Share** button (box with an arrow pointing up) in Safari's toolbar.
3. Scroll down and tap **"Add to Home Screen"** (`+`).
4. Tap **Add** in the top-right corner.
5. Launch **GreatNotes Pro** from your iPad Home Screen or Dock.

> [!TIP]
> Once launched from the Home Screen, GreatNotes Pro runs as a standalone app with hardware acceleration, offline caching via the Service Worker, and automatic palm rejection.

---

## ⌨️ iPad Magic Keyboard & Gesture Shortcuts

GreatNotes Studio Pro is engineered from the ground up for **Apple Magic Keyboard**, **Smart Keyboard Folio**, and external Bluetooth keyboards. Press **`⌘ /`** (or **`?`**) anywhere in the app to open the native iPadOS Shortcuts HUD.

### 🎨 Inking & Precision Tools
| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`P`** or **`1`** | Fountain Pen | Switches to calligraphic pressure & velocity inking pen |
| **`H`** or **`2`** | Highlighter | Switches to zero-fog chisel-tip text highlighter |
| **`E`** or **`3`** | Wedge Eraser | Switches to whole-object / precision pixel eraser |
| **`S`** or **`4`** | Vector Shapes | Switches to geometric recognizer & shapes studio |
| **`L`** or **`5`** | Laser Pointer | Switches to glowing presentation laser beam |
| **`V`** or **`0`** | Pan / Hand | Switches to two-axis viewport navigation mode |
| **`Space`** *(Hold)* | Quick Pan | Temporarily holds Pan mode; releasing restores previous tool |

### ✏️ Edit & History
| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`⌘ Z`** *(or 2-finger tap)* | Undo | Reverts the last stroke, highlight, or erased object |
| **`⌘ ⇧ Z`** or **`⌘ Y`** *(or 3-finger tap)* | Redo | Reapplies the most recent undone action |
| **`⌘ ⌫`** *(Cmd + Backspace)* | Clear Page | Erases all handwriting and highlights on active study page |

### 📖 Document & Page Navigation
| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`⌘ B`** or **`⌘ O`** | Toggle Outline | Opens or slides away the Document Outline drawer |
| **`⌘ M`** | Page Sorter Matrix | Toggles the full-screen Liquid Glass page matrix |
| **`⌘ N`** | New Page / Notebook | Inserts a study page in document, or new book on shelf |
| **`⌘ D`** | Duplicate Page | Clones active page and all vector ink in place |
| **`←`** / **`→`** or **`PageUp`** / **`PageDown`** | Page Turn | Smoothly scrolls to previous or next document page |
| **`⌘ ⇧ D`** | Smart Night PDF | Toggles eye-friendly deep obsidian night mode for PDFs |
| **`⌘ +`** / **`⌘ -`** | Zoom In / Out | Adjusts continuous canvas magnification in 15% steps |
| **`⌘ 0`** | Reset Zoom | Snaps continuous canvas back to exact 100% Retina scale |

### ⚙️ System & Modals
| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`⌘ ⇧ E`** or **`⌘ P`** | Export Studio | Opens annotated PDF, PNG, and .gn backup export sheet |
| **`⌘ ,`** | Settings Sheet | Opens appearance, themes, palm rejection, and cache options |
| **`⌘ ⇧ T`** | Toggle Dark Mode | Triggers cinematic Apple view transition between Light/Dark |
| **`Esc`** | Close / Back | Closes any open modal/drawer, or returns to library shelf |
| **`⌘ /`** or **`?`** | Shortcuts HUD | Slides up the floating frosted iPadOS Keyboard Shortcuts HUD |

---

## ⚙️ Technical Specifications

* **Rendering Engine**: Four-tier hardware-accelerated canvas architecture (GoodNotes Zero-Fog Specification):
  - **Layer 1 (`.layer-bg`, z-index 1)**: Crisp 2x Retina underlying PDF textbook graphics and vector study templates.
  - **Layer 2 (`.layer-hl`, z-index 2)**: Dedicated fluorescent highlighter layer with CSS hardware `mix-blend-mode: multiply` (light paper) and `screen` (dark paper), ensuring 100% crisp, zero-milky underlying text legibility.
  - **Layer 3 (`.layer-ink`, z-index 3)**: Calligraphic pressure-sensitive fountain pen vectors and geometric shapes.
  - **Layer 4 (`.layer-active`, z-index 4)**: 240Hz coalesced live inking scratchpad with dynamic blend mode and strict stylus palm rejection.
* **Fluid Dock Physics**: iPadOS 18 spring-staggered dock morphing animation (`.dock-item-enter` & `.tray-animated`) providing seamless dimensional adaptation between tool trays.
* **Display Density**: Adaptive Retina scaling up to `2.5x DPR` with memory bounds protection and virtualized viewport mounting.
* **Storage Limit**: Up to browser IndexedDB quota (~60% of available iPad disk storage).
* **Backup Format**: Native `.gn` format (JSON-serialized stroke vectors + embedded PDF page references).
* **Export Options**: High-resolution PNG or vectorized, searchable Annotated PDF via jsPDF with composite multiply-blended highlighters.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](file:///c:/Users/aravi/Downloads/notes/LICENSE) file for complete details. Free for academic, personal, and commercial study use.
