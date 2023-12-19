import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/pedropesserl.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Pedro Pesserl</strong>
                        <span>Maninho</span>
                    </div>
                </div>

                <time title="18 de dezembro às 13:16" dateTime="2023-18-12 1:16:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi eos adipisci saepe repudiandae facilis, fugiat asperiores labore alias earum beatae sapiente neque sunt eum, accusamus, veniam qui vel explicabo?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi eos adipisci saepe repudiandae facilis, fugiat asperiores labore alias earum beatae sapiente neque sunt eum, accusamus, veniam qui vel explicabo?</p>
                <p> <a href="#"> Link para a página </a> </p>
                <p> 
                    <a href="#"> #programacao </a> {' '}
                    <a href="#"> #react </a> {' '}
                    <a href="#"> #sabido </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
            
        </article>
    )
}