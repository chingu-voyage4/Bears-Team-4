import React, { Component } from "react";

import "./CommentItem.css";

class CommentItem extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="commentItem">
        <div className="commentItem__logo">
          <i className="fas fa-comments" />
        </div>
        <div className="commentItem__details">
          <div className="commentItem__details__comment">
            {" "}
            {comment.comment}
          </div>
          <div className="commentItem__details__poster">
            {" "}
            {comment.addedDate} ago by {comment.userId}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
