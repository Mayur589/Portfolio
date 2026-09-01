export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Go", "Python", "C / C++", "Java", "JavaScript", "TypeScript", "GDScript", "SQL"]
  },
  {
    title: "AI / Machine Learning",
    skills: ["PyTorch", "LSTM & Neural Networks", "Scikit-learn", "XGBoost", "SHAP", "Pandas & NumPy"]
  },
  {
    title: "Backend & Frameworks",
    skills: ["REST APIs", "JWT Auth", "WebSockets", "React", "Wails", "Godot Engine 4.5", "Flask", "Astro"]
  },
  {
    title: "DevOps & Developer Tools",
    skills: ["Git", "GitHub", "GitHub Actions (CI/CD)", "Docker", "Linux", "Neovim", "Postman"]
  }
];
