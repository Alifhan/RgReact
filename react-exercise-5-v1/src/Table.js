import { useState } from "react";
function Table({ mentors }) {
  console.log(mentors);
  const [tombol, setTombol] = useState(false);
  const handleButton = () => {
    setTombol(true);
    console.log(tombol);
  };

  return (
    <>
      {tombol === false ? <button onClick={handleButton}>Refresh</button> : null}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>House</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tombol ? (
            mentors.map((mentor) =>
              mentor.id % 2 !== 0 ? (
                <tr style={{ backgroundColor: "lightCyan" }} key={mentor.id}>
                  <td>{mentor.name}</td>
                  <td>{mentor.house}</td>
                  <td>{mentor.email}</td>
                </tr>
              ) : (
                <tr style={{ backgroundColor: "white" }} key={mentor.id}>
                  <td>{mentor.name}</td>
                  <td>{mentor.house}</td>
                  <td>{mentor.email}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td>Data not available</td>
              <td>Data not available</td>
              <td>Data not available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
