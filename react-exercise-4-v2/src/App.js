import { useEffect, useState } from "react";
const App = () => {
  const all = "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
  const basic = "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?fields=title,description";
  const creator = "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?fields=title,description,director,producer";
  const [url, setUrl] = useState(all);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  useEffect(() => {
    setData([]);
    setIsPending(true);
    const getMovieRequest = async () => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
        setIsPending(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieRequest();
  }, [url]);
  return (
    <div>
      <select name="" id="" onChange={(e) => setUrl(e.target.value)}>
        <option value={all}>All</option>
        <option value={basic}>Basic</option>
        <option value={creator}>Basic with Creator</option>
      </select>

      {isPending && <h2>Loading...</h2>}
      {data && url === all ? (
        <div style={{ display: "flex" }}>
          <div>
            <img src={data.image} width="300" />
          </div>
          <div>
            <h2>{data.title}</h2>
            <h2>{data.original_title}</h2>
            <p>{data.release_date}</p>
            <p>Rating: {data.rt_score}</p>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <p>{data.description}</p>
          </div>
        </div>
      ) : url === basic ? (
        <div style={{ display: "flex" }}>
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      ) : url === creator ? (
        <div style={{ display: "flex" }}>
          <div>
            <h2>{data.title}</h2>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <p>{data.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
