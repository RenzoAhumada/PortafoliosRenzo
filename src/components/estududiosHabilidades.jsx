import { motion } from "framer-motion"

export const EstududiosHabilidades = () => {
  return (
    <>
     <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2}}
                  viewport={{ once: true }}
                >
      <section className="text-gray-400 bg-white-900 body-font">
        
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
              Estudios y habilidades
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-gray-800 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
                <path d="M9 10l3 3 3-3"></path>
                <path d="M9 14l3 3 3-3"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-black text-lg title-font font-medium mb-2">Licenciatura en Informática y desarrollo de software</h2>
              <p className="leading-relaxed text-black">Universidad del Aconcagua</p>
              <p className="leading-relaxed text-black">Actualmente cursando el segundo año, mi carrera está diseñada para ofrecer una formación integral en el mundo IT. No solo me concentro en el desarrollo de software, sino que también estoy adquiriendo habilidades prácticas y teóricas en diversas áreas clave:
                <br />
                #Lenguajes de programación: C, C++, Java, JavaScript <br />
                #Desarrollo web: Maquetado en HTML y hojas de estilo CSS <br />
                #Diseño de interfaces: UX/UI <br />
                #Matemáticas aplicadas: Fundamentales para resolver problemas complejos <br />
                #Hardware: Comprensión profunda de los componentes y su funcionamiento <br />
                #Habilidades blandas: Trabajo en equipo, liderazgo, y comunicación efectiva <br />
                Esta formación me está preparando para enfrentar desafíos variados en el campo de la tecnología, asegurándome una visión completa y habilidades versátiles para contribuir de manera significativa en cualquier proyecto IT.</p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-black text-lg title-font font-medium mb-2">Curso de programación full stack</h2>
              <p className="leading-relaxed text-black">Institu EGG</p>
              <p className="leading-relaxed text-black">Este curso intensivo me ha brindado una formación completa y práctica en desarrollo web y programación orientada a objetos. He adquirido conocimientos y habilidades en varias áreas clave:
                <br />
                #Desarrollo web: Maquetado en HTML y hojas de estilo CSS, creando interfaces de usuario atractivas y funcionales.<br />
                #Programación orientada a objetos: Dominio de Java, aplicando conceptos avanzados de programación para desarrollar aplicaciones robustas.<br />
                #Bases de datos: Gestión y diseño de bases de datos utilizando MySQL, asegurando la integridad y eficiencia de los datos.<br />
                Este curso ha sido fundamental para solidificar mis habilidades técnicas y preparar mi camino hacia una carrera en el desarrollo full stack.<br />
              </p>
            </div>
            <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-gray-800 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M3 7l4-4m0 0l4 4m-4-4v14m11-14l4 4m0 0l-4 4m4-4v14"></path>
                <path d="M7 13h10M7 17h10"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-gray-800 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-black text-lg title-font font-medium mb-2">Estudios autodidactas</h2>
              <p className="leading-relaxed text-black">Udemy</p>
              <p className="leading-relaxed text-black">Mis estudios autodidactas han sido fundamentales para complementar mi formación formal y ampliar mis habilidades en tecnologías clave del desarrollo web:
                <br />
                Desarrollo web: Profundización en JavaScript y frameworks modernos como React, utilizando Vite para optimizar el flujo de trabajo.<br />
                #React: Enfoque en el desarrollo con React, creando aplicaciones web dinámicas y eficientes.<br />
                #Seguridad informática: Cursos realizados en hacking ético y ciberseguridad, adquiriendo conocimientos esenciales para proteger y asegurar aplicaciones web.<br />
                Estos estudios me han permitido mantenerme al día con las tecnologías más recientes y desarrollar una comprensión sólida de las mejores prácticas en desarrollo y seguridad web.</p>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  )
}

export default EstududiosHabilidades
