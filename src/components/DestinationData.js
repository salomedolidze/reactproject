import "./DestinationStyle.css";
import { Component } from "react";
import firstdesimg1 from "../assets/image/first-des-img1.jpg";
import firstdesimg2 from "../assets/image/first-des-img2.jpg";
import "./DestinationStyle.css";
import seconddes1 from "../assets/image/second-des1.jpg";
import seconddes2 from "../assets/image/second-des2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="first-des-img">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
