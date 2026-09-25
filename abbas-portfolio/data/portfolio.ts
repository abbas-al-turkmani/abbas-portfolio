export type NavLink = {
  id: string;
  label: string;
};

export type SocialIcon = "github" | "linkedin" | "email" | "phone";

export type SocialLink = {
  name: string;
  href: string;
  icon: SocialIcon;
  ariaLabel: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
};

export type SkillLevel = "Advanced" | "Intermediate" | "Basic";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  title: string;
  icon: "smartphone" | "network" | "database" | "code";
  items: Skill[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  note?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
};

export type SpokenLanguage = {
  name: string;
  level: string;
};

export type PersonalInfo = {
  name: string;
  shortName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
  tagline: string;
  summary: string;
};

export type Portfolio = {
  personal: PersonalInfo;
  navLinks: NavLink[];
  socials: SocialLink[];
  highlights: Highlight[];
  experience: ExperienceItem[];
  projects: Project[];
  skills: SkillGroup[];
  education: EducationItem[];
  certificates: Certificate[];
  languages: SpokenLanguage[];
};

export const portfolio: Portfolio = {
  personal: {
    name: "Abbas al Turkmani",
    shortName: "Abbas",
    title: "Software Developer | Flutter",
    location: "Damascus, Syria",
    email: "abbas.az408@gmail.com",
    phone: "+963 949620906",
    phoneHref: "tel:+963949620906",
    linkedin: "https://www.linkedin.com/in/abbas-al-turkmani-b8b018376/",
    github: "https://github.com/abbas-al-turkmani",
    tagline:
      "Building polished Android and iOS apps with Flutter, Dart, and clean architecture.",
    summary:
      "Junior Software Developer specializing in Flutter and Dart, with hands-on experience building Android and iOS applications, integrating REST APIs, implementing state management with Bloc, Provider, and GetX, and applying clean coding practices. Experienced in developing e-commerce, delivery, and service-based mobile applications. Currently completing a Bachelor's degree in Computer Science.",
  },
  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ],
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/abbas-al-turkmani",
      icon: "github",
      ariaLabel: "GitHub profile (opens in a new tab)",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abbas-al-turkmani-b8b018376/",
      icon: "linkedin",
      ariaLabel: "LinkedIn profile (opens in a new tab)",
    },
    {
      name: "Email",
      href: "mailto:abbas.az408@gmail.com",
      icon: "email",
      ariaLabel: "Send an email to Abbas",
    },
    {
      name: "Phone",
      href: "tel:+963949620906",
      icon: "phone",
      ariaLabel: "Call Abbas",
    },
  ],
  highlights: [
    { value: "3+", label: "Mobile apps built" },
    { value: "Flutter", label: "Dart specialist" },
    { value: "REST", label: "API integration" },
    { value: "B.Sc.", label: "Computer Science" },
  ],
  experience: [
    {
      role: "Administrative Assistant and IT Support",
      organization: "Tadmor Prison Survivors Association",
      period: "08/2026 – 09/2026",
      description:
        "Designed a data archiving system with MS Access and C# interfaces, standardized Excel spreadsheets from multiple regional sources, and provided IT and network support.",
    },
    {
      role: "Training",
      organization: "Ear-tech",
      period: "07/2025 – 08/2025",
      description:
        "Completed intensive boot camps in cybersecurity, AI, and software development covering neural networks, Azure, DevOps, PHP Laravel, Figma UX/UI, and Kali Linux pentesting basics.",
    },
    {
      role: "Mobile Development using Flutter",
      organization: "Tamkeen",
      period: "09/2024 – 04/2025",
      description:
        "Six months of practical Flutter and Dart training. Built e-commerce, delivery, and ordering apps and received a recommendation letter.",
    },
  ],
  projects: [
    {
      title: "Coffee Shop App",
      description:
        "Mobile ordering app to choose a coffee type, customize a drink, pick pickup or delivery, track delivery live on a map, and save favorites.",
      tags: ["Flutter", "Dart", "Bloc", "REST API"],
      githubUrl: "https://github.com/abbas-al-turkmani/coffee_shop",
    },
    {
      title: "My Order (Delivery Services App)",
      description:
        "Multi-service app to order products or groceries or request a taxi, with a cart, a delivery-person accept/reject flow, light/dark theme, and English/Arabic with room to add languages.",
      tags: ["Flutter", "Dart", "GetX", "REST API"],
      githubUrl: "https://github.com/abbas-al-turkmani/my_order_app",
    },
    {
      title: "Platzy Store (Ecommerce App)",
      description:
        "Multi-category store with product details, wishlist, cart, checkout, theme switching, and English/Arabic language support.",
      tags: ["Flutter", "Dart", "Provider", "REST API"],
      githubUrl: "https://github.com/abbas-al-turkmani/platzy_fackstore",
    },
  ],
  skills: [
    {
      title: "Flutter Skills",
      icon: "smartphone",
      items: [
        { name: "Dart", level: "Advanced" },
        { name: "Flutter SDK & Widgets", level: "Advanced" },
        { name: "SharedPreferences / Local Storage", level: "Advanced" },
        { name: "Performance Optimization", level: "Advanced" },
        { name: "UI/UX Enhancement", level: "Basic" },
      ],
    },
    {
      title: "Architecture & State Management",
      icon: "network",
      items: [
        { name: "Provider, Bloc, GetX", level: "Advanced" },
        { name: "Clean Architecture, MVC, MVVM, TDD", level: "Intermediate" },
        { name: "Problem-Solving Skills", level: "Advanced" },
        { name: "REST API / JSON Integration", level: "Advanced" },
        { name: "Bloc, Cubit, http", level: "Intermediate" },
      ],
    },
    {
      title: "Databases",
      icon: "database",
      items: [
        { name: "Firebase", level: "Intermediate" },
        { name: "SQLite", level: "Intermediate" },
      ],
    },
    {
      title: "Other Programming",
      icon: "code",
      items: [
        { name: "HTML, CSS, JS", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "C#", level: "Intermediate" },
        { name: "Git, GitHub, CI/CD", level: "Intermediate" },
      ],
    },
  ],
  education: [
    {
      title: "Computer Science, Bachelor Degree",
      institution: "Applied Sciences Damascus University",
      period: "10/2019 – 08/2026",
    },
    {
      title: "Secondary Education in Computer Techniques",
      institution: "High School, Ministry of Education, Damascus",
      period: "09/2015 – 07/2019",
      note: "89%",
    },
  ],
  certificates: [
    {
      title: "Mobile Development Using Flutter",
      issuer: "New Horizons Institute",
    },
    {
      title: "Mobile Development Using Flutter",
      issuer: "Tamkeen Training Company",
    },
    {
      title: "Network+",
      issuer: "New Horizons Institute",
    },
    {
      title: "Computer Maintenance",
      issuer: "Al Khwarizmi Institute",
    },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
};
