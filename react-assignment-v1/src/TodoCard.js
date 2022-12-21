function TodoCard({ todo }) {
  const btnAlert = (todoId) => {
    alert(`todo dengan id ${todoId} telah di clicked`);
  };
  return (
    <>
      {todo.map((todos, index) => (
        <button class="card" onClick={() => btnAlert(`${index + 1}`)} className="todo-card" style={{ backgroundColor: "GrayText", color: "white" }} key={index}>
          <h2>{todos.title}</h2>
          {todos.completed ? <p>Completed</p> : <p>Not Completed</p>}
        </button>
      ))}
    </>
  );
}

export default TodoCard;
