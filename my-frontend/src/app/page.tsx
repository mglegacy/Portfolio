import { Header } from './components/header';
import styles  from './page.module.scss'
import Image from 'next/image';
import logoImg from '/public/mg-legacy-modern-md-dark.svg';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Image
        src={logoImg}
        alt='Logo da Empresa'
        
        />

        <Header/>

        <div className={styles.titulo}>
          <h1>Olá! Nós somos MG Legacy</h1>
        </div>
      </div>
    </>
  );
}
