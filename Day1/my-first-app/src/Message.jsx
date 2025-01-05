import React from "react";

export default class Message extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.messagedetails.imageUrl}
            alt={this.props.messagedetails.msg}
            height={200}
            width={200}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title"> {this.props.messagedetails.msg}</h5>
            <p className="card-text">From : {this.props.messagedetails.from}</p>
            <p className="card-text">To : {this.props.messagedetails.to}</p>
          </div>
        </div>
        {/* <img
          src={this.props.messagedetails.imageUrl}
          alt={this.props.messagedetails.msg}
          height={100}
          width={200}
        />
        <h2> {this.props.messagedetails.msg} ! </h2>
        <h3> From : {this.props.messagedetails.from}</h3>
        <h3> To : {this.props.messagedetails.to}</h3> */}
      </div>
    );
  }
}
