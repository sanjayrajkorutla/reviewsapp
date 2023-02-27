// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props

    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex - 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[reviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
