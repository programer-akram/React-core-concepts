import { useEffect, useState } from "react"
import Post from "./post"
import './post.css'

export default function Posts(){

    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))

    },[])    

    return (
        <div className="box">
            <h3>Posts: {posts.length}</h3>
            {
                posts.map( post => <Post post={post}></Post>)
            }    
        </div>
    )
}