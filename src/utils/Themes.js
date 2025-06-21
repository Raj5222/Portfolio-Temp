export const darkTheme = {
  bg: "#0a0a0f",
  bgLight: "#1a1a2e",
  primary: "#854CE6",
  secondary: "#667eea",
  text_primary: "#F2F3F4",
  text_secondary: "#b1b2b3",
  card: "rgba(17, 25, 40, 0.83)",
  card_light: "#191924",
  button: "#854CE6",
  white: "#FFFFFF",
  black: "#000000",
  brand: "#000",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
};

export const lightTheme = {
  bg: "#FFFFFF",
  bgLight: "#f8fafc",
  primary: "#6366f1",
  secondary: "#8b5cf6",
  text_primary: "#1f2937",
  text_secondary: "#6b7280",
  card: "#FFFFFF",
  card_light: "#f1f5f9",
  button: "#6366f1",
  white: "#FFFFFF",
  black: "#000000",
  brand: "#000",
  success: "#059669",
  warning: "#d97706",
  error: "#dc2626",
  info: "#2563eb",
};

export const Pass = "0206";
export const Connect_URL = "https://portfolio-api-livid-one.vercel.app/portfolio";
export const Page_Title = "Raj Sathvara";
export const Full_name = "Raj Sathvara";
export const Section_Title = [
  "about",
  "skills", 
  "experience",
  "projects",
  "education",
  "connect",
];

// Animation variants for consistent motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};