"use client"
import { useState } from 'react';
import styles from './styles.module.scss'
import React from 'react';
import {Instagram, Mail} from 'lucide-react';

interface SocialInfo{
  name:string;
  content?:string;
}

const socials: SocialInfo[] = [
    {
      name: "Instagram",
      content:"Siga-nos no Instagram: @meuPerfil",
    },
    {
      name: "Email",
      content:"Contate-nos via email",
    },

];

export function Footer(){
  const [active, setActive] = useState(0);

  const current = socials[active];
  

    return(
    <footer className={styles.contact}>
          <h1 id="contact">
            Pronto para transformar sua ideia em realidade?
          </h1>
          
          <div className={styles.containerContact}>
            <h3>
              A tecnologia certa pode transformar grandes ideias em resultados reais. Vamos começar?
            </h3>
          </div>

          <div className={styles.container}>
      <div className={styles.sidebar}>
        {socials.map((tab, index) => (
          <div
            key={tab.name}
            className={`${styles.tab} ${active === index ? styles.active : ""}`}
            onClick={() => setActive(index)}
          >
            {tab.name}{" "}
            {tab.name === "Instagram" && <Instagram color={"white"} size={25} className={styles.icon}/>}
            {tab.name === "Email" && <Mail color={"white"} size={25} className={styles.icon}/>}
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <h2><button>{current.name}</button></h2>
          <p>{current.content}</p>
      </div>
    </div>
      </footer>

    
    )
}