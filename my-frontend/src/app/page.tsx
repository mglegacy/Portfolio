import styles  from './page.module.scss'
import Image from 'next/image';
import { api } from '@/services/api'
import {CalendarArrowUp} from 'lucide-react'

interface Project {
  id: string;
  titulo: string;
  tipo: string;
  banner: string;
  description: string;
  tecnologies: string[];
  created_at: string;
  updated_at: string;
}

export default  async function Home() {

  async function handleListProjects(){
    try{
      const projects = await api.get("/listprojects")

      return projects.data;

    }catch(err){
      console.log("Erro ao buscar os projetos:", err);
      return [];
    }
  }

  const projects = await handleListProjects();

  return (
  <main id="#home" className={styles.container}>
    <header>
      <h1 className={styles.textOne}>Olá! Nós somos</h1>
      <h1 className={styles.textTwo}>MG Legacy</h1>
      <h2 className={styles.typing}>
        Construindo soluções digitais com tecnologia, performance e propósito.
      </h2>
    </header>

    <section className={styles.containerBody}>

      <section className={styles.listProjects}>

        <h1 id="projects"> Projetos </h1>

        <div className={styles.projectsGrid}>
          {projects.map((project: Project) => (
            <article key={project.id} className={styles.card}>
              <h3>{project.titulo}</h3>

               <div className={styles.infoLine}>
                <h4 className={styles.type}>{project.tipo}</h4>
                <div className={styles.date}>
                  <CalendarArrowUp size={16} color="#dfdfdfff" />
                  {new Date(project.created_at).toLocaleDateString('pt-BR', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
              </div>
              
              <figure className={styles.imageContainer}>
                <Image
                  src={`http://localhost:8000/files/${project.banner}`}
                  alt={project.titulo}
                  fill
                />
              </figure>

              <p className={styles.descricao}>{project.description}</p>

              <div className={styles.tecnologiesContainer}>     {/* tecnologias usadas no projeto */}
                {project.tecnologies.map((tech, index) => (

                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.about}>
          <h1 id="about">Sobre Nós: </h1>
          
          <div className={styles.containerAbout}>
            <h3>Sobre o MG Legacy
            MG Legacy nasceu com o objetivo de representar meu crescimento como desenvolvedor e de mostrar o impacto que a tecnologia pode ter quando aplicada com intenção.
            Cada projeto aqui é parte da minha evolução — uma mistura de criatividade, técnica e visão full stack.
            “Full stack é apenas o começo. O objetivo é deixar um legado digital.”
            </h3>
          </div>
      </section>
      
    </section>
  </main>
);
}
