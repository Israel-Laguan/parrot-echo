import React, {useContext,useEffect} from "react";
import PostContext from './../context/Post/Context';

const Posts = () =>{

  const {items,getPosts} = useContext(PostContext)

  useEffect(() => {
    getPosts()
  }, [])
  
  return(
    <div>
      <h2 className="text-secondary">Past Shout outs!</h2>
      {items.length > 0 ? (
        items.map((post,index) => (
          <div key={post.id}>
            <h3>Usuario {index+1}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <span>Add your own!</span>
      )}
    </div>
  )
};


export default Posts;
