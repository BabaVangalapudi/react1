import { useState, version } from "react";
import CommentDisplay from "./displayComments";
import {v4 as uuidv4} from 'uuid';
import './comment.css'

const CommentsCont = () =>{
    const [name, setName] = useState('')
    const [comment,setComment] = useState('')
    const [commentList, setCommentList] = useState([])
    const onChangeName = event => setName(event.target.value)
    const onChangeComment = event => setComment(event.target.value)
    const addComment = (event)=>{
        event.preventDefault ()
        setName('')
        setComment('')
        const newComment = {
            id:uuidv4(),
            name,
            comment
        }
        setCommentList(prevList =>[...prevList,newComment])
    }
    return(
        <>
        <div className="container"> 
            <h3>Comments</h3>
        <form onSubmit={addComment} className="section">
            <input className="inputtext" type="text" placeholder="Your name" value={name} onChange={onChangeName}/>
            <textarea className="inputtext" rows={4} cols={10} placeholder="Your Comment" value={comment} onChange={onChangeComment}></textarea>
            <button type="submit">Add Comment</button>
        </form>
        <ul style={{listStyleType: 'none'}}>
            
               { commentList.map((eachComment)=>(
                <CommentDisplay key={eachComment.id} commentDetails={eachComment}/>
                ))
               }
            
        </ul>
        </div>
        </>
    )
}

export default CommentsCont