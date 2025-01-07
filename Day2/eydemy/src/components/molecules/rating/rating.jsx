import React from "react";
import Star from "../../atoms/icon/star";

export default function Rating(props) {
  let ratings = [];
  for (let index = 0; index < props.noofstars; index++) {
    ratings.push(<Star key={index} />);
  }
  return <div>{ratings}</div>;
}

// export default class Rating extends Component {
//   render() {
//     let ratings = [];
//     for (let index = 0; index < this.props.noofstars; index++) {
//       ratings.push(<Star key={index} />);
//     }
//     return <div>{ratings}</div>;
//   }
// }
