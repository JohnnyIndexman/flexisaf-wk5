import "../CSS/Home.css";
import useData from "../hooks/useData";

function Home() {
  const {
    data: blog,
  } = useData(); 


  return (
    <div className="home">
      <div className="blog-post">
        <h1>Posts</h1>
      </div>

      <div className="blogs">
        {blog.map((b) => (
          <div className="blog" key={b.id}>
            <h3>{b.name}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
