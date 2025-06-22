export const darkTheme = {
  bg: "linear-gradient(135deg, #0d0221 0%, #1a0b3d 30%, #2d1b69 60%, #3c2d8f 100%)",
  bgLight: "linear-gradient(135deg, #1e0f4a 0%, #2d1b69 50%, #3c2d8f 100%)",
  primary: "#9945ff",
  secondary: "#c084fc",
  accent: "#e879f9",
  tertiary: "#a855f7",
  quaternary: "#f59e0b",
  text_primary: "#ffffff",
  text_secondary: "#e2d1ff",
  text_tertiary: "#c4b5fd",
  card: "rgba(41, 22, 101, 0.85)",
  card_light: "rgba(60, 45, 143, 0.7)",
  card_hover: "rgba(153, 69, 255, 0.15)",
  button: "linear-gradient(135deg, #9945ff 0%, #c084fc 50%, #e879f9 100%)",
  button_hover: "linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #7c3aed 100%)",
  white: "#ffffff",
  black: "#000000",
  brand: "linear-gradient(135deg, #9945ff 0%, #c084fc 30%, #e879f9 70%, #f472b6 100%)",
  shadow: "0 25px 50px rgba(153, 69, 255, 0.4)",
  shadow_secondary: "0 20px 40px rgba(192, 132, 252, 0.25)",
  glow: "0 0 40px rgba(153, 69, 255, 0.6)",
  border: "rgba(153, 69, 255, 0.4)",
  glass: "rgba(192, 132, 252, 0.1)",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6"
};

export const lightTheme = {
  bg: "linear-gradient(135deg, #faf7ff 0%, #f3f0ff 30%, #ede9fe 60%, #ddd6fe 100%)",
  bgLight: "linear-gradient(135deg, #ffffff 0%, #faf7ff 50%, #f3f0ff 100%)",
  primary: "#7c3aed",
  secondary: "#a855f7",
  accent: "#9333ea",
  tertiary: "#c084fc",
  quaternary: "#f59e0b",
  text_primary: "#1f2937",
  text_secondary: "#4b5563",
  text_tertiary: "#6b7280",
  card: "rgba(255, 255, 255, 0.9)",
  card_light: "rgba(250, 247, 255, 0.85)",
  card_hover: "rgba(124, 58, 237, 0.1)",
  button: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
  button_hover: "linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #6d28d9 100%)",
  white: "#ffffff",
  black: "#000000",
  brand: "linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #c084fc 70%, #e879f9 100%)",
  shadow: "0 20px 40px rgba(124, 58, 237, 0.15)",
  shadow_secondary: "0 15px 35px rgba(168, 85, 247, 0.1)",
  glow: "0 0 30px rgba(124, 58, 237, 0.3)",
  border: "rgba(124, 58, 237, 0.3)",
  glass: "rgba(124, 58, 237, 0.05)",
  success: "#059669",
  warning: "#d97706",
  error: "#dc2626",
  info: "#2563eb"
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

// Animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { 
    scale: 0,
    opacity: 0,
    rotate: -180
  },
  visible: { 
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slideInFromTop = {
  hidden: { 
    y: -100,
    opacity: 0
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const bounceIn = {
  hidden: { 
    scale: 0.3,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};