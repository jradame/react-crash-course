import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function main() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      main();
    }, 500); 
  }, []);
const pixels = "3px";

  return (
    <div style={{ border: `${pixels} solid black` }}>
      <div>Id</div>
      <div>Name</div>
      <div>Username</div>
      <div>Email</div>
    </div>




    // <div>
    //   {/* {users.length > 0 ? 
    //     <h1>{users[0]?.name}</h1>
    //     : <h1>Loading...</h1>
    //   } */}
    // </div>
  );
}

export default Home;


