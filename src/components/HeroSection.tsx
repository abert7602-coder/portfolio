import { motion } from "framer-motion";
import dragonImage from "@/assets/dragon-hero.png";
import FloatingElements from "./FloatingElements";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.span 
                className="text-primary text-sm font-medium tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Desarrollador Web Junior
              </motion.span>
              <h1 className="text-foreground text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Abel A. Cárdenas
              </h1>
            </div>
            
            <p className="text-hero-text text-base md:text-lg leading-relaxed max-w-lg">
              Programador apasionado por crear
              <br />
              soluciones innovadoras con
              <br />
              <span className="text-primary">Laravel, React y Python.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm transition-all hover:glow-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver proyectos
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contáctame
              </motion.a>
            </div>
          </motion.div>

          {/* Dragon illustration */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src={dragonImage}
              alt="Dragón mascota"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Glow effect behind dragon */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
          <span className="text-muted-foreground text-sm">Conoce más sobre mí</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
