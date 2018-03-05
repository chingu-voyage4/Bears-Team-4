import React, { Component } from "react";
import "./CommentItem.css";

class CommentItem extends Component {

  render() {
    return (
      <div className="commentItem">
        <div className="commentItem__logo"> 
            <i className="fas fa-comments"></i>
        </div>
        <div className="commentItem__details">
            <div className="commentItem__details__comment"> Only took 15% & 2 free gifts</div>
            <div className="commentItem__details__poster"> 5 days ago by Anonymous</div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
