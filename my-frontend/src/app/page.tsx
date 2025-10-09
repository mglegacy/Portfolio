import styles  from './page.module.scss'


export default function Home() {
  return (
    <>
      <div className={styles.container}>
          <h1 className={styles.textOne}>Olá! Nós somos</h1>
          <h1 className={styles.textTwo}>MG Legacy</h1>
          <h2 className={styles.typing}>Construindo soluções digitais com tecnologia, performance e propósito.</h2>
      </div>
    </>
  );
}
