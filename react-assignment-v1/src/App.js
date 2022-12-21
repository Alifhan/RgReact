import { useState } from "react";
import { useEffect } from "react";
import TodoCard from "./TodoCard";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const responseJson = await response.json();
        setData(responseJson);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="App">
            <TodoCard todo={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
