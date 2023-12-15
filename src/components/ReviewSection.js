import reviews from "../reviewData";

const ReviewSection = () => {
  return (
    <section>
      {reviews.map((review) => {
        return <Review key={review.name} reviewData={review} />;
      })}
    </section>
  );
};

const Review = ({ reviewData }) => {
  const { profilePicture, name, occupation, review } = reviewData;

  return (
    <div>
      <p>{review}</p>
      <div>
        <img alt="" src={profilePicture} />
        <div>
          <p>{name}</p>
          <p>{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection
