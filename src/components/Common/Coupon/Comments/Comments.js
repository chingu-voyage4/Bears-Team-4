import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CommentItem from "../CommentItem/CommentItem";
import * as couponActions from "../../../../actions/couponActions";

import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      location: true
    };
  }

  // Binding input values to state
  onChangeHandler(e) {
    switch (e.target.name) {
      case "username": {
        this.setState({ username: e.target.value });
        break;
      }
      case "comment": {
        this.setState({ comment: e.target.value });
        break;
      }
      case "location": {
        this.setState({ location: e.target.checked });
        break;
      }
      default:
    }
  }

  onKeyUpHandler(e) {
    let { comment, location, username } = this.state;
    const { user, couponId } = this.props;

    // When user entered comment get added.
    if (e.keyCode === 13) {
      // Only posting if a comment is provided. (textarea seems to be length 1 even when nothing in box)
      if (comment.length !== 1) {
        // Adding Location to comments if user ticked that.
        const userLocation = location
          ? " - " + user.country + ", " + user.city
          : "";

        // Combining comment with location
        comment = comment + userLocation;

        // Adding Comment
        this.props.couponActions.AddComment({ couponId, comment, username });
      }

      //Cleaning Input Fields
      this.setState({
        username: "",
        comment: ""
      });
    }
  }

  render() {
    let { comments, user } = this.props;

    // Sorting comments latest to top
    comments = comments.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    return (
      <div className="comments" style={this.props.showHide}>
        {/* Form to add new comments */}
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
          className="comments__add-form"
        >
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler.bind(this)}
            onKeyUp={this.onKeyUpHandler.bind(this)}
            placeholder="First Name (Optional)"
          />
          <textarea
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.onChangeHandler.bind(this)}
            onKeyUp={this.onKeyUpHandler.bind(this)}
            placeholder="Add A Comment .... (Press Enter To Post Comment)"
          />
          <label htmlFor="location">
            <input
              type="checkbox"
              checked={this.state.location}
              onChange={this.onChangeHandler.bind(this)}
              name="location"
            />
            Include {user.country ? user.country + ", " + user.city : ""} With
            My Comment To Help Other Users.
          </label>
        </form>
        {/* Already posted comments */}
        <div className="comments__posted">
          {comments.map((comment, i) => {
            return <CommentItem key={i} comment={comment} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapActionsToProps(dispatch) {
  return {
    couponActions: bindActionCreators(couponActions, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Comments);
