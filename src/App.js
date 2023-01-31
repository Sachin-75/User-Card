import UsersCard from "./user";
import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    document.getElementById("main").style.display = "flex";
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <>
        <nav id="col-sm-6 col-md-4">
          <ul>
            <li><img src="https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg" id="logo"></img></li>
            <li><button onClick={this.showUsers}>Get Users</button></li>
          </ul>
        </nav>


        <UsersCard loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}
export default App;