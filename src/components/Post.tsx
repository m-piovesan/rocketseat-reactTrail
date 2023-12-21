import { format, formatDistanceToNow } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './Post.module.css'

export interface PostType {
    id: number;
    author: {
        name: string;
        avatarUrl: string;
        role: string;
    };
    content: {
        type: 'paragraph' | 'link';
        text: string;
    }[],
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const formattedDate = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'")
    
    const publishedDateToNow = formatDistanceToNow(post.publishedAt, {
            addSuffix: true 
        }
    )

    const [comments, setComments] = useState([
        'sabido maninho'
    ]) 

    const [newCommentText, setNewCommentText] = useState('')

    const isNewCommentEmpty = newCommentText.length == 0

    {/* adds a new comment to the array */}
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
      
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    {/* updates the value of the new comment */}
    function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    {/* deletes a comment from the array */}
    function deleteComment(commentToBeDeleted: string) {
        const filteredComments = comments.filter(comment => {
            return comment !== commentToBeDeleted
        })

        setComments(filteredComments);
    }

    {/* prevents from sending a empty comment */}
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório lil bro!')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={formattedDate} dateTime={post.publishedAt.toISOString()}>
                   {publishedDateToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((item) => {
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