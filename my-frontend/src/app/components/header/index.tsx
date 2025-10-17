'use client';

import Image from 'next/image';
import logoImg from '/public/mg-legacy-modern-md-dark.svg';
import styles  from './styles.module.scss'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Header(){
    
    const pathname = usePathname();

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerMenu} >
                <Image
                src={logoImg}
                alt='Logo da Empresa'
                />
                <nav>
                    <Link href='#home' className={`${styles.text} ${pathname === '/' ? styles.active : ''}`}> Home </Link>

                    <Link href='#projects' className={`${styles.text} ${pathname === '/projects' ? styles.active : ''}`}> Projects </Link>

                    <Link href='#about' className={`${styles.text} ${pathname === '/about' ? styles.active : ''}`}> About </Link>
                        
                    <Link href='#contact' className={`${styles.text} ${pathname === '/contact' ? styles.active : ''}`}> Contact </Link>
                </nav>
            </div>
        </header>
    )
}