// Enhanced theme configuration for modern portfolio
export const theme = {
  // Main background and surfaces
  bg: "#0F172A",
  bg_secondary: "#1E293B", 

  // Card backgrounds
  card: "rgba(30, 41, 59, 0.8)",
  card_light: "rgba(30, 41, 59, 0.6)",
  card_hover: "rgba(30, 41, 59, 0.9)",

  // Glass effects
  glass: "rgba(255, 255, 255, 0.05)",

  // Text colors
  text_primary: "#F1F5F9",
  text_secondary: "#94A3B8",

  // Primary brand colors
  primary: "#3B82F6",
  secondary: "#8B5CF6",
  accent: "#EC4899",

  // Gradients
  gradient_primary: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
  gradient_secondary: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
  gradient_accent: "linear-gradient(135deg, #EC4899 0%, #F97316 100%)",

  // Interactive states
  hover: "#475569",
  border: "rgba(148, 163, 184, 0.2)",

  // Status colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",

  // Shadows and effects
  shadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  glow: "0 0 30px rgba(59, 130, 246, 0.3)",

  // White for contrast
  white: "#FFFFFF",

  // Animation variants
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
};

// Animation variants for reuse
export const fadeInUp = theme.fadeInUp;
export const staggerContainer = theme.staggerContainer;
export const scaleIn = theme.scaleIn;
export const slideInLeft = theme.slideInLeft;
export const slideInRight = theme.slideInRight;

// Add fadeInLeft animation variant
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Helper for theme validation
export const Pass = "authenticated_user";
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

export default theme;