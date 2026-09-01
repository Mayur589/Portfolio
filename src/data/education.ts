export interface Degree {
  institution: string;
  degree: string;
  period: string;
  score: string;
  details: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  type: string;
  details: string;
}

export const degrees: Degree[] = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "Bachelor of Engineering in Computer Science & Engineering (AI/ML)",
    period: "2023 – 2027 (Expected)",
    score: "Current CGPA: 8.84 / 10",
    details: "Key Coursework: Artificial Intelligence, Machine Learning, Deep Learning, Operating Systems, Data Structures & Algorithms, Database Systems."
  }
];

export const certifications: Certificate[] = [
  {
    title: "IBM DevOps Professional Certificate",
    issuer: "IBM / Coursera",
    type: "Professional Credential",
    details: "Hands-on training in Continuous Integration & Continuous Deployment (CI/CD), Docker containerization, automated testing, and cloud deployments."
  }
];
