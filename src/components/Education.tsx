const Education = () => {
    const educationData = [
        {
            title: "Analista en Sistemas",
            institution: "Colegio Universitario IES Siglo 21",
            date: "2022 — Presente",
            description: "Formación técnica con un fuerte enfoque académico en Estructuras de Datos y Programación Orientada a Objetos (C#). Especialización en el diseño y administración de bases de datos con MS SQL Server, abarcando desde consultas avanzadas hasta la gestión de seguridad y backups. Sólidos fundamentos en desarrollo web y resolución de problemas mediante lógica aplicada.",
            isCurrent: true 
        },
        {
            title: "Especialización en Desarrollo Front-end",
            institution: "Alura Latam & Ticmas",
            date: "2023",
            description: "Formación intensiva de más de 300 horas cubriendo React, JavaScript ES6+, maquetación avanzada y optimización de interfaces responsivas.",
            isCurrent: false
        },
        {
            title: "Datos y Lógica de Programación",
            institution: "Alura Latam & Argentina Programa",
            date: "2022 — 2023",
            description: "Capacitación en procesamiento de datos con Python, diseño de bases de datos relacionales con MySQL y fundamentos de lógica algorítmica.",
            isCurrent: false
        }
    ];

    return (
        <section id="education" className="py-20 px-8 md:px-20 lg:px-32">
            
            <div className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
                <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left">
                    Formación Académica
                </h2>
                <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
            </div>

            {/* LÍNEA VERTICAL: 
                Usamos 'border-blue-200' para el tema claro (ese azul claro que pediste)
                y 'dark:border-accent/20' para que en modo oscuro siga siendo magenta sutil.
            */}
            <div className="max-w-4xl space-y-12 border-l-2 border-blue-200 dark:border-accent/20 ml-4 md:ml-0 pl-8 relative mb-12">
                
                {educationData.map((item, index) => (
                    <div key={index} className="relative">
                        
                        {/* Círculos magenta: se mantienen consistentes */}
                        <span className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent 
                            ${item.isCurrent ? 'shadow-[0_0_10px_var(--accent)] scale-110' : 'opacity-70 scale-90'}`}
                        ></span>
                        
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl md:text-2xl font-bold text-textMain leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-accent font-medium">
                                {item.institution}
                            </p>
                            <span className="text-textDim text-sm font-mono opacity-80">
                                {item.date}
                            </span>
                        </div>
                        
                        <p className="text-textDim text-sm md:text-base mt-4 text-justify leading-relaxed max-w-2xl">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Sección de Idiomas */}
            <div className="max-w-4xl pt-8 border-t border-black/5 dark:border-white/5">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h4 className="text-lg font-bold text-textMain uppercase tracking-widest">Idiomas</h4>
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-accent/50 hidden md:block"></span>
                        <p className="text-textDim text-sm md:text-base">
                            Inglés <span className="text-accent font-semibold ml-2">Nivel A2</span> 
                            <span className="text-textDim/60 ml-1">(Básico - Intermedio)</span>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Education;