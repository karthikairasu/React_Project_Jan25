import "./App.css";
import React from "react";
import Message from "./Message";

class App extends React.Component {
  messages = [
    {
      msg: "Hey",
      from: "John",
      to: "Carter",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/39/06/68/360_F_239066841_TGuyjQRJuQDDML5btQq9jQszX57cQUpk.jpg",
    },
    {
      msg: "Hi",
      from: "Peter",
      to: "Parker",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/1138004576/display_1500/stock-vector-hi-sticker-for-social-media-content-vector-hand-drawn-illustration-design-bubble-pop-art-comic-1138004576.jpg",
    },
    {
      msg: "Bye",
      from: "James",
      to: "Bond",
      imageUrl:
        "https://media.gettyimages.com/id/1207131318/vector/bye-speech-bubble-vector-illustration-design-element.jpg?s=612x612&w=gi&k=20&c=pelaDlxU3ygaCU5xV_j3T08PAcEtVTBxwhTQ67BGcvo=",
    },
  ];
  render() {
    return (
      <div className="row">
        {this.messages.map(m => (
          <Message messagedetails={m} />
        ))}
      </div>
    );
  }
}

export default App;
