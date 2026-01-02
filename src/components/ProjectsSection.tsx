import { motion } from "framer-motion";

const projects = [
  {
    title: "EasyPlay - Plataforma de Juegos Recreativos",
    description: "Producto Mínimo Viable (MVP) para validar un modelo de negocio de gestión de juegos recreativos y de azar para el cliente Sartek Colombia.",
    solution: "Plataforma web para la generación algorítmica de cartones, administración de sorteos en tiempo real y validación automática de resultados.",
    result: "Sistema funcional y escalable con autenticación de usuarios y panel administrativo dinámico.",
    tags: ["Laravel", "Livewire", "MySQL", "PHP"],
  },
  {
    title: "Back-Office de Gestión de Negocios",
    description: "Reemplazar la gestión manual de una aplicación móvil por un panel de administración robusto y autónomo.",
    solution: "Back-office con Laravel que centraliza la administración de comercios, cupones de oferta y suscripciones con sistema de roles y permisos.",
    result: "Se eliminó la dependencia del equipo de desarrollo para tareas operativas, permitiendo gestión eficiente.",
    tags: ["Laravel", "Livewire", "MySQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-foreground mb-12"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-foreground font-medium text-base mb-3">
                {project.title}
              </h3>
              
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-primary text-xs font-medium">Objetivo:</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <span className="text-primary text-xs font-medium">Solución:</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    {project.solution}
                  </p>
                </div>
                
                <div>
                  <span className="text-primary text-xs font-medium">Resultado:</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    {project.result}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
