import React, { Component } from "react";
import "./Comments.css";
import CommentItem from "../CommentItem/CommentItem";

class Comments extends Component {

  render() {
    return (
      <div className="comments" style={this.props.showHide}>
        <form className="comments__addForm">
          <input type="text" name="name" placeholder="First Name (Optional)"/>
          <textarea type="text" name="comment" placeholder="Add A Comment .... (Press Enter To Post Comment)"></textarea>
          <label htmlFor="location"><input type="checkbox" name="location"/>Include Colombo, Sri Lanka With My Comment To Help Other Users.</label> 
        </form>
        <div className="comments__posted">
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </div>
      </div>
    );
  }
}

export default Comments;
