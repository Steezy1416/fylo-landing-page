import reviews from "../../reviewData";
import "./reviewSection.css"

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="review-section-content">
        {reviews.map((review) => {
          return <Review key={review.name} reviewData={review} />;
        })}
      </div>
    </section>
  );
};

const Review = ({ reviewData }) => {
  const { profilePicture, name, occupation, review } = reviewData;

  return (
    <div className="review-card flex-column gap1">
      <p className="review">{review}</p>
      <div className="flex-row align-center justify-start gap0_5">
        <img className="profile-picture" alt="" src={profilePicture} />
        <div className="flex-column">
          <p className="reviewer-name">{name}</p>
          <p className="reviewer-occupation">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection
