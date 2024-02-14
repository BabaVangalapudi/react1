import './displaycomment.css'

const CommentDisplay = (props)=>{
    const {commentDetails} = props
    const {name, comment} = commentDetails
    return(
        
        <li className='displaycont'>
            <div className='avatarbox'>
                <p>{name[0]}</p>
            </div>
            <div className='comment'>
                <p style={{fontWeight:'bold'}}>{name}</p>
                <p>{comment}</p>
            </div>  
        </li>     
        
    )
}
export default CommentDisplay