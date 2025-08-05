import React from 'react';

const Users = () => {


  const handleUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);
    // create user in the database
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log('data after creating user in the database', data);

      })


  }




  return (
    <div>
      {/* add user */}
      <div>
        <form onSubmit={handleUser}>
          <input type="text" name='name' />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </div>

  );
};

export default Users;