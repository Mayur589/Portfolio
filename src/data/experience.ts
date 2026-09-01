export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "drdo",
    role: "Software Development Intern",
    company: "Defence Research and Development Organisation (RCI)",
    location: "Hyderabad",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Built a Windows-based C interface for a Vaunix USB RF Attenuator using official device SDKs.",
      "Created reusable C modules for hardware attenuation control and device configuration.",
      "Automated RF testing workflows in the laboratory to replace manual adjustments."
    ]
  },
  {
    id: "aspirenet",
    role: "Backend Developer Intern",
    company: "DheerajReddy Technologies (Aspirenet)",
    location: "Chennai",
    period: "Jan 2026 – Mar 2026",
    bullets: [
      "Developed backend services for authentication, authorization, and user management.",
      "Created secure REST APIs using JWT authentication and request validation.",
      "Collaborated with frontend teams to optimize API response times and integration."
    ]
  }
];
