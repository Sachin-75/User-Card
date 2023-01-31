import React from "react";

const UsersCard = ({ loading, users }) => {
  return loading ? (
    <div id="main">
    
    </div>
  ) : (
    <div className="row" id="main">
      {users.map((user) => (
        <div className="col-sm-6 col-md-4">
          <div className="info">
            <img src={user.avatar} alt={user.avatar} className="image"></img>
            <h3 id="id"><b>User ID: {user.id}</b></h3>
            <h3 className="name">User Name:
              {user.first_name} {user.last_name}
            </h3> 
            <p className="email"><b>Email:</b> {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCard;