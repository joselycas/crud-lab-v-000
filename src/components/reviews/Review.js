import React, { Component } from 'react';

class Review extends Component {




  handleOnClick = event => {
    event.preventDefault()
    this.props.deleteReview(this.props.review.id)
  }


  render() {
    const { review } = this.props;
    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={this.handleOnClick}> X </button>

        </li>
      </div>
    );
  }
};

export default Review;
