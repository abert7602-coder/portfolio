import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-xl font-medium text-foreground mb-6">Perfil Profesional</h2>
          <p className="text-hero-text text-base leading-relaxed mb-4">
            Soy un programador junior que busca activamente su primera oportunidad 
            laboral para desarrollarse profesionalmente. Mi objetivo es aprender y 
            dominar tecnologías de alta demanda, con un interés particular en 
            <span className="text-primary"> Python para soluciones de IA</span> y 
            <span className="text-primary"> React para interfaces dinámicas</span>.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Tengo una gran capacidad de aprendizaje y estoy motivado para contribuir 
            al éxito de un equipo innovador. Constantemente explorando nuevas tecnologías 
            y buscando soluciones eficientes a problemas complejos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Resolución de problemas", icon: "🧩" },
              { label: "Trabajo en equipo", icon: "🤝" },
              { label: "Comunicación efectiva", icon: "💬" },
              { label: "Autodisciplina", icon: "🎯" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-lg bg-card border border-border text-center"
              >
                <span className="text-xl mb-2 block">{item.icon}</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
