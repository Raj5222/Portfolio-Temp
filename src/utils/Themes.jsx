
export const darkTheme = {
  bg: "#0a0a0a",
  bgLight: "#1a1a1a",
  primary: "#00d4aa",
  secondary: "#00b894",
  accent: "#00cec9",
  tertiary: "#81ecec",
  quaternary: "#fdcb6e",
  text_primary: "#ffffff",
  text_secondary: "#b2bec3",
  text_tertiary: "#636e72",
  card: "#1e1e1e",
  card_light: "#2d2d2d",
  card_hover: "rgba(0, 212, 170, 0.1)",
  button: "#00d4aa",
  button_hover: "#00b894",
  white: "#ffffff",
  black: "#000000",
  brand: "#00d4aa",
  shadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  shadow_secondary: "0 5px 15px rgba(0, 0, 0, 0.2)",
  glow: "0 0 20px rgba(0, 212, 170, 0.3)",
  border: "#2d2d2d",
  glass: "rgba(255, 255, 255, 0.05)",
  success: "#00b894",
  warning: "#fdcb6e",
  error: "#e17055",
  info: "#74b9ff"
};

export const lightTheme = {
  bg: "#ffffff",
  bgLight: "#f8f9fa",
  primary: "#2d3436",
  secondary: "#636e72",
  accent: "#00b894",
  tertiary: "#00d4aa",
  quaternary: "#fdcb6e",
  text_primary: "#2d3436",
  text_secondary: "#636e72",
  text_tertiary: "#b2bec3",
  card: "#ffffff",
  card_light: "#f8f9fa",
  card_hover: "rgba(45, 52, 54, 0.05)",
  button: "#2d3436",
  button_hover: "#636e72",
  white: "#ffffff",
  black: "#000000",
  brand: "#00d4aa",
  shadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  shadow_secondary: "0 5px 15px rgba(0, 0, 0, 0.08)",
  glow: "0 0 20px rgba(0, 212, 170, 0.2)",
  border: "#e9ecef",
  glass: "rgba(0, 0, 0, 0.03)",
  success: "#00b894",
  warning: "#fdcb6e",
  error: "#e17055",
  info: "#74b9ff"
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
