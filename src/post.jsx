import './post.css'

export default function Post({post}){

    const {title, body, userId, id} = post

    return (
        <div className='box'>
            <h4>Title: {title}</h4>
            <h5>UserId:{userId}</h5>
            <h5>Id:{id}</h5>
            <p>Post:{body}</p>
        </div>
    )
}