import React, { Component } from "react";

import * as helpers from "../../../../helpers/helperFunctions";
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
            {/* Calculate how many days, mins ago comment was posted */}
            {/* Also if comment is posted by registered user then get name by users table or if ananymous user then get name from username */}
            {helpers.dateDiff(comment.updatedAt)} ago by {!comment.userId ? comment.username : comment.userId.firstName}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
