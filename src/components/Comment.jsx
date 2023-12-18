import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/m-piovesan.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Piovesan</strong>
                            <time title="18 de dezembro às 13:16" dateTime="2023-18-12 1:16:00">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={22} />
                        </button>
                    </header>
                    <p>daora</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}