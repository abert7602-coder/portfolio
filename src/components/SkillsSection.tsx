import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["PHP", "JavaScript", "HTML", "CSS"],
    color: "from-primary to-accent",
  },
  {
    title: "Frameworks",
    skills: ["Laravel", "Livewire"],
    color: "from-accent to-primary",
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL"],
    color: "from-primary to-accent",
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "Composer", "Terminal"],
    color: "from-accent to-primary",
  },
  {
    title: "En Aprendizaje",
    skills: ["Python (IA)", "React"],
    color: "from-primary to-accent",
  },
  {
    title: "Conceptos",
    skills: ["APIs REST", "Arquitectura MVC", "Automatización"],
    color: "from-accent to-primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-foreground mb-12"
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <h3 className="text-foreground font-medium text-sm mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-1.5 text-xs rounded-full bg-gradient-to-r ${category.color} text-primary-foreground font-medium`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
