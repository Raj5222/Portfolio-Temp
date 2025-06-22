export const darkTheme = {
  bg: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
  bgLight: "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
  primary: "#ff6b6b",
  secondary: "#4ecdc4",
  accent: "#45b7d1",
  tertiary: "#96ceb4",
  quaternary: "#feca57",
  text_primary: "#ffffff",
  text_secondary: "#e0e6ed",
  text_tertiary: "#b8c6db",
  card: "rgba(30, 30, 46, 0.95)",
  card_light: "rgba(45, 45, 68, 0.8)",
  card_hover: "rgba(255, 107, 107, 0.1)",
  button: "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)",
  button_hover: "linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%)",
  white: "#ffffff",
  black: "#000000",
  brand: "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)",
  shadow: "0 20px 40px rgba(255, 107, 107, 0.3)",
  shadow_secondary: "0 15px 35px rgba(78, 205, 196, 0.2)",
  glow: "0 0 30px rgba(255, 107, 107, 0.5)",
  border: "rgba(255, 107, 107, 0.3)",
  glass: "rgba(255, 255, 255, 0.1)",
  success: "#2ecc71",
  warning: "#f39c12",
  error: "#e74c3c",
  info: "#3498db"
};

export const lightTheme = {
  bg: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
  bgLight: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
  primary: "#e63946",
  secondary: "#2a9d8f",
  accent: "#264653",
  tertiary: "#f77f00",
  quaternary: "#fcbf49",
  text_primary: "#212529",
  text_secondary: "#495057",
  text_tertiary: "#6c757d",
  card: "rgba(255, 255, 255, 0.95)",
  card_light: "rgba(248, 249, 250, 0.9)",
  card_hover: "rgba(230, 57, 70, 0.1)",
  button: "linear-gradient(135deg, #e63946 0%, #2a9d8f 100%)",
  button_hover: "linear-gradient(135deg, #2a9d8f 0%, #264653 100%)",
  white: "#ffffff",
  black: "#000000",
  brand: "linear-gradient(135deg, #e63946 0%, #2a9d8f 50%, #264653 100%)",
  shadow: "0 20px 40px rgba(230, 57, 70, 0.2)",
  shadow_secondary: "0 15px 35px rgba(42, 157, 143, 0.15)",
  glow: "0 0 30px rgba(230, 57, 70, 0.3)",
  border: "rgba(230, 57, 70, 0.2)",
  glass: "rgba(0, 0, 0, 0.05)",
  success: "#27ae60",
  warning: "#e67e22",
  error: "#c0392b",
  info: "#2980b9"
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