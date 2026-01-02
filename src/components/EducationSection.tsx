import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-foreground mb-12"
        >
          Formación Académica
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Carrera */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground font-medium text-base">Ingeniería de Sistemas</h3>
                <p className="text-primary text-sm mt-1">6to Semestre</p>
                <p className="text-muted-foreground text-sm mt-1">Instituto Politécnico Santiago Mariño</p>
                <p className="text-muted-foreground text-xs mt-1">Valencia, Venezuela • 2021 - Actualidad</p>
              </div>
            </div>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="text-foreground font-medium text-base mb-4">Cursos y Certificaciones</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-foreground text-sm">Lógica de Programación</p>
                  <p className="text-muted-foreground text-xs">Instituto de Emprendimiento Profesional</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div>
                  <p className="text-foreground text-sm">Redes de Computadores</p>
                  <p className="text-muted-foreground text-xs">Academia de Redes FUNDANET</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
