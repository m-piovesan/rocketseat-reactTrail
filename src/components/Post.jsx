import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'
import { useState } from 'react'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt}) {
    const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    
    const publishedDateToNow = formatDistanceToNow(publishedAt, {
            locale: ptBR, 
            addSuffix: true 
        }
    )

    const [comments, setComments] = useState([
        'sabido maninho'
    ]) 

    const [newCommentText, setNewCommentText] = useState('')

    const isNewCommentEmpty = newCommentText.length == 0

    {/* adds a new comment to the array */}
    function handleCreateNewComment() {
        event.preventDefault()
      
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    {/* updates the value of the new comment */}
    function handleNewCommentText() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    {/* deletes a comment from the array */}
    function deleteComment(commentToBeDeleted) {
        const filteredComments = comments.filter(comment => {
            return comment !== commentToBeDeleted
        })

        setComments(filteredComments);
    }

    {/* prevents from sending a empty comment */}
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório lil bro!')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={formattedDate} dateTime={publishedAt.toISOString()}>
                   {publishedDateToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((item) => {
                    if (item.type === 'paragraph') {
                        return <p key={item.text}> {item.text} </p>
                    } else if (item.type === 'link') {
                        return <p key={item.text}> <a href="#">{item.text}</a> </p> 
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            {/* iteracts thru every position in the array and returns its value */}
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
            
        </article>
    )
}