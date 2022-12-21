import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  // TODO: answer here
  return <h1>{props.name}</h1>;
}

function Task2() {
  // TODO: answer here
  const [state, setState] = useState("Klik tombol di bawah");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("Tombol telah di-klik!")}> Klik saya!</button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  // TODO: answer here
  return students.map((student) => (
    <h2>
      {student.name} - {student.age}
    </h2>
  ));
}

function Task3_1() {
  // TODO: answer here
  return students.map((student) =>
    student.dropout ? null : (
      <h2>
        {student.name} - {student.age}
      </h2>
    )
  );
}

function Task4() {
  // TODO: answer here
  const [state, setState] = useState(false);

  return (
    <div>
      {state ? null : <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}

      <button onClick={() => setState(true)}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
