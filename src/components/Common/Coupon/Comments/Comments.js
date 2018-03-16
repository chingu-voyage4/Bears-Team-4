import React, { Component } from "react";

import CommentItem from "../CommentItem/CommentItem";

import "./Comments.css";

class Comments extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="comments" style={this.props.showHide}>
        {/* Form to add new comments */}
        <form className="comments__add-form">
          <input type="text" name="name" placeholder="First Name (Optional)" />
          <textarea
            type="text"
            name="comment"
            placeholder="Add A Comment .... (Press Enter To Post Comment)"
          />
          <label htmlFor="location">
            <input type="checkbox" name="location" />Include Colombo, Sri Lanka
            With My Comment To Help Other Users.
          </label>
        </form>
        {/* Already posted comments */}
        <div className="comments__posted">
          {comments.map(comment => {
            return <CommentItem key={comment.commentId} comment={comment} />;
          })}
        </div>
      </div>
    );
  }
}

export default Comments;
