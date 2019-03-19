import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";

// extend react components to get special features
class App extends Component {
  constructor(props) {
    // super allows for the use of the components method we imported from react
    super(props);
    // state hold all of out data we are working with in the component
    this.state = {
      picture: "",
      name: "",
      friends: []
    };
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  // update picture method takes in the value passed in and calls setState()
  // to update the state of the component
  updatePicture = event => {
    console.log(event.target.value);
    // setState will cause a rendering of your component with the new data passed in
    this.setState({ picture: event.target.value });
  };
  updateName(event) {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  }
  addFriend() {
    const { name, picture, friends } = this.state;
    // let newFriends = friends.slice;
    // friends.push({ picture: picture, name: name });
    // this.setState({ friends: newFriends, picture: "", name: "" });
    this.setState({
      friends: [...friends, { name: name, picture: picture }],
      name: "",
      picture: ""
    });
  }

  render() {
    // destruction state to avoid rewriting "this.state" multiple times
    const { friends, name, picture } = this.state;
    console.log(this.state.friends);
    // map over friends array returning the pertinent values wrapped in JSX
    // and set equal to a new variable called mappedFriends
    const mappedFriends = friends.map((element, index, array) => {
      // you must always return from a map
      return (
        //
        <div key={element.name}>
          <img
            style={{
              width: "1200px",
              border: index % 2 === 1 ? "red 10px solid" : "black 30px solid"
            }}
            src={element.picture}
          />
          <span>{element.name}</span>
        </div>
      );
    });
    return (
      <div>
        <Header label="THIS IS SPARTA" />
        <Header label="THIS IS SPARTA" />
        <Header label="THIS IS SPARTA" />
        <label>Picture</label>
        <input onChange={this.updatePicture} value={picture} />

        <label>Name</label>
        <input onChange={event => this.updateName(event)} value={name} />
        <button onClick={this.addFriend}>Add Friend</button>
        {mappedFriends}
      </div>
    );
  }
}

export default App;
