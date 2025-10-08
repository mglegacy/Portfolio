import styles  from './page.module.scss'
import { Header } from './components/header';


export default function Home() {
  return (
    <>
    <Header/>
    
      <div className={styles.container}>
          <h1>Olá! Nós somos MG Legacy</h1>
      </div>
    </>
  );
}
