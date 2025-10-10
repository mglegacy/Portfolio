import styles  from './page.module.scss'
import Image from 'next/image';
import { api } from '@/services/api'
interface Project {
  id: string;
  titulo: string;
  tipo: string;
  banner: string;
  description: string;
  tecnologies: string;
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
    <>
      <div className={styles.container}>
          <h1 className={styles.textOne}>Olá! Nós somos</h1>
          <h1 className={styles.textTwo}>MG Legacy</h1>
          <h2 className={styles.typing}>Construindo soluções digitais com tecnologia, performance e propósito.</h2>

          <div className={styles.containerBody}>

              <section className={styles.listProjects}>

                <h1>Projects</h1>

                <div className={styles.projectsGrid}>

                    {projects.map((project: Project) => (
                      <button key={project.id} className={styles.project}>
                        <div className={styles.card}>
                          <h3>{project.titulo}</h3>
                          <h3>{project.tipo}</h3>
                          <Image
                            src={`http://localhost:8000/files/${project.banner}`}
                            alt={project.titulo}
                            width={400}
                            height={300}
                          />
                          <p>{project.description}</p>
                          <p>{project.tecnologies}</p>
                </div>
              </button>
            ))}
          </div>
              </section>
          </div>
      </div>
    </>
  )
}
