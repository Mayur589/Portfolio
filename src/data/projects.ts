export interface Project {
  id: string;
  num: string;
  badge: string;
  title: string;
  subtitle: string;
  category: string; // space separated for filtering e.g. "systems tools"
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "minecraft-mod-manager",
    num: "01",
    badge: "DESKTOP",
    title: "Minecraft Mod Manager",
    subtitle: "Go · React · Wails",
    category: "systems tools",
    description: "Desktop application to download, update, and manage Minecraft mods with automatic backups and compatibility checks.",
    bullets: [
      "Integrates with Modrinth REST API using SHA-1 file hashes for atomic mod updates and rollbacks.",
      "In-memory TTL cache with Go mutexes to reduce redundant API calls by ~80%.",
      "Automated multi-platform builds using GitHub Actions (Linux, Windows, macOS)."
    ],
    tags: ["Go", "React", "Wails", "REST API", "CI/CD"],
    githubUrl: "https://github.com/Mayur589/minecraft-mod-manager"
  },
  {
    id: "protocol-vii",
    num: "02",
    badge: "GAME DEV",
    title: "Protocol VII",
    subtitle: "Godot 4.5 · Shaders",
    category: "systems",
    description: "3D tactical cybersecurity simulation game where players defend network nodes by solving terminal hacking puzzles.",
    bullets: [
      "First-person 3D command room with interactive terminal workstations and status displays.",
      "Security puzzles covering CLI command sequences, log file exploration, and SQL injection.",
      "Custom GLSL shaders for CRT scanlines and holographic monitor effects."
    ],
    tags: ["Godot 4.5", "GDScript", "Shaders", "Security"],
    githubUrl: "https://github.com/Mayur589/Protocol-VII"
  },
  {
    id: "adaptive-os",
    num: "03",
    badge: "AI SECURITY",
    title: "AdaptiveOS",
    subtitle: "PyTorch · LSTM",
    category: "ai systems",
    description: "Behavioral biometric system that continuously analyzes user typing and click dynamics to detect anomalies in real time.",
    bullets: [
      "PyTorch LSTM model predicting user context and risk scores from telemetry sequences.",
      "Adaptive baseline engine to filter outliers and personalize detection per user.",
      "Tiered security responses with Fernet file encryption to protect sensitive data."
    ],
    tags: ["Python", "PyTorch", "LSTM", "Security"],
    githubUrl: "https://github.com/Mayur589"
  },
  {
    id: "collaborative-whiteboard",
    num: "04",
    badge: "REAL-TIME",
    title: "Collaborative Whiteboard",
    subtitle: "Go · WebSockets",
    category: "tools systems",
    description: "Multi-user collaborative whiteboard application with low-latency drawing synchronization over WebSockets.",
    bullets: [
      "Real-time room synchronization using Gorilla WebSockets and Go routines.",
      "Interactive canvas UI built with React and HTML5 Canvas."
    ],
    tags: ["Go", "WebSockets", "React", "Canvas"],
    githubUrl: "https://github.com/Mayur589/midWhiteboard"
  },
  {
    id: "football-transfer-prediction",
    num: "05",
    badge: "MACHINE LEARNING",
    title: "Football Transfer Prediction",
    subtitle: "XGBoost · Flask",
    category: "ai",
    description: "Machine learning system to predict football player market values based on per-90 performance metrics.",
    bullets: [
      "Trained an ensemble of 8 regression models with XGBoost for market valuations.",
      "SHAP feature importance analysis and a Flask web UI for evaluation."
    ],
    tags: ["Python", "XGBoost", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/Mayur589/football-transfer-value-prediction"
  },
  {
    id: "video-frame-extractor",
    num: "06",
    badge: "MEDIA TOOL",
    title: "Video Frame Extractor",
    subtitle: "TypeScript · Canvas",
    category: "tools",
    description: "Client-side web tool to extract, preview, and download high-resolution frame sequences from videos at custom intervals.",
    bullets: [
      "Frame capture using Canvas APIs with batch ZIP archive download.",
      "Customizable FPS sampling and instant thumbnail gallery view."
    ],
    tags: ["TypeScript", "Canvas API", "Node.js"],
    githubUrl: "https://github.com/Mayur589/Video-Frame-Extractor"
  }
];

export const projectFilters = [
  { label: "All Projects (6)", value: "all" },
  { label: "Systems & Desktop", value: "systems" },
  { label: "AI / Machine Learning", value: "ai" },
  { label: "Real-Time & Tools", value: "tools" }
];
