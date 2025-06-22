
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

// Modern Enhanced Color Palette
export const darkTheme = {
  bg: "#0a0f1c",
  bgLight: "#151b2e",
  primary: "#00d4ff",
  secondary: "#7c3aed",
  accent: "#f59e0b",
  text_primary: "#ffffff",
  text_secondary: "#94a3b8",
  card: "#1a2332",
  card_hover: "#1f2937",
  card_light: "#374151",
  button: "#00d4ff",
  button_hover: "#0ea5e9",
  white: "#ffffff",
  black: "#000000",
  border: "#374151",
  glass: "rgba(255, 255, 255, 0.05)",
  shadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  glow: "0 20px 40px rgba(0, 212, 255, 0.3)",
  error: "#ef4444",
  success: "#10b981",
  warning: "#f59e0b",
  gradient_primary: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
  gradient_secondary: "linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)",
  gradient_accent: "linear-gradient(135deg, #f59e0b 0%, #00d4ff 100%)",
}

export const lightTheme = {
  bg: "#ffffff",
  bgLight: "#f8fafc",
  primary: "#0ea5e9",
  secondary: "#7c3aed",
  accent: "#f59e0b",
  text_primary: "#1e293b",
  text_secondary: "#64748b",
  card: "#ffffff",
  card_hover: "#f8fafc",
  card_light: "#f1f5f9",
  button: "#0ea5e9",
  button_hover: "#0284c7",
  white: "#ffffff",
  black: "#000000",
  border: "#e2e8f0",
  glass: "rgba(255, 255, 255, 0.8)",
  shadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  glow: "0 20px 40px rgba(14, 165, 233, 0.3)",
  error: "#ef4444",
  success: "#10b981",
  warning: "#f59e0b",
  gradient_primary: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
  gradient_secondary: "linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)",
  gradient_accent: "linear-gradient(135deg, #f59e0b 0%, #0ea5e9 100%)",
}

// Enhanced Animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.8
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
    x: -80,
    scale: 0.8
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
    x: 80,
    scale: 0.8
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

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.6,
    rotateY: 15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
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
      delayChildren: 0.1,
    }
  }
};

export const slideInFromBottom = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: 45
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 1, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const glowEffect = {
  boxShadow: [
    "0 0 20px rgba(0, 212, 255, 0.3)",
    "0 0 40px rgba(0, 212, 255, 0.6)",
    "0 0 20px rgba(0, 212, 255, 0.3)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
