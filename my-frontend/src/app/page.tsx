import styles  from './page.module.scss'
import Image from 'next/image';
import { api } from '@/services/api'
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
      <h1>Projects</h1>

      <section className={styles.listProjects}>
        <ul className={styles.projectsGrid}>
          {projects.map((project: Project) => (
            <li key={project.id}>
              <article className={styles.card}>
                <header>
                  <h3>{project.titulo}</h3>
                  <h4 className={styles.type}>{project.tipo}</h4>
                </header>

                <figure className={styles.imageContainer}>
                  <Image
                    src={`http://localhost:8000/files/${project.banner}`}
                    alt={project.titulo}
                    fill
                  />
                </figure>

                <p className={styles.descricao}>{project.description}</p>

                <footer className={styles.tecnologiesContainer}>
                  {project.tecnologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </section>
  </main>
);
}
