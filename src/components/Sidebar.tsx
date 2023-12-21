import styles from './Sidebar.module.css'

import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react'; 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}> 
            <img className={styles.cover} 
                src="https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" 
            />

            <div className={styles.profile}>
                <Avatar isProfile src="https://github.com/m-piovesan.png"/>

                <strong>Matheus Piovesan</strong>
                <span>Web Developer</span>
            </div>
                
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Edit profile
                </a>
            </footer>
        </aside>
    );
}