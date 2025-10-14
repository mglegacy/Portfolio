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
  <main className={styles.container}>
    <header>
      <h1 className={styles.textOne}>Olá! Nós somos</h1>
      <h1 className={styles.textTwo}>MG Legacy</h1>
      <h2 className={styles.typing}>
        Construindo soluções digitais com tecnologia, performance e propósito.
      </h2>
    </header>

    <section className={styles.containerBody}>
      <section className={styles.listProjects}>

        <h1>Projects</h1>

        <div className={styles.projectsGrid}>
          {projects.map((project: Project) => (
            <article key={project.id} className={styles.card}>
              <header>

                <h3>{project.titulo}</h3>    

                <h4 className={styles.type}>{project.tipo}</h4>  {/* // caixa de calendario */}
              <div className={styles.date}>

               <CalendarArrowUp size={16} color="#000000ff"/>    

                {new Date(project.created_at).toLocaleDateString('pt-BR', {
                  month: 'long',
                  year: 'numeric',
                })}
                
              </div>     


              </header>
              
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
    </section>
  </main>
);
}
