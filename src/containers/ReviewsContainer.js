import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} />

        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
  }

  const mapStateToProps = state => ({ reviews: state.reviews })


  const mapDispatchToProps = dispatch => ({

  addReview: text => dispatch({type: 'ADD_REVIEWS', text}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  })
  export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
