import React, { useState, useEffect } from "react";
//   https://i.pravatar.cc/300?img=${id}

const Users = () => {
  const [users, setUsers] = useState("asd");
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    // ? componentDidMount
    getUsers();
  }, []);
  // ! en başta render yaparken usersr boş olduğu için boş kalır, renderdan sonra arrayı basar
  console.log(users);
  return (
    <div>
      <h1>USER LIST</h1>
      {/* <button className="btn btn-primary" onClick={getUsers}>
        Get Users
      </button> */}
      <div className="row">
        <div className="col">
          <img src="" alt=""></img>
          <h6>Name</h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
