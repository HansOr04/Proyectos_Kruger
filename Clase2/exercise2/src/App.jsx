import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts]=useState([]);
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(null);
  useEffect(() => {
      const fetchData= async () =>{
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if(!response.ok){
            throw new Error('Something went wrong');
            }
            const data = await response.json();
            setPosts(data);
          
        } catch (error) {
          setError(error);
          
        }finally{
          setLoading(false);
        }
    
      };
      fetchData();
    },[]  );
    

  return (
    <>
    <h1>Posts</h1>
    {loading && <p>Cargando...</p> && <img src='https://st3.depositphotos.com/6723736/12729/v/450/depositphotos_127297230-stock-illustration-download-sign-load-icon-load.jpg' alt='imagen'/>}
    {error && <p>{error.message}</p>}
    <ul>
    {posts.map((post)=>(
      <div key={post.id}>
        <h2>{post.id}</h2>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

      </div>
      ))}

    </ul>
    
    </>
  )
}

export default App
