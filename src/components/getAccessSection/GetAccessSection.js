import "./getAccessSection.css";

const GetAccessSection = () => {
  return (
    <section className="getAccessSection">
      <div className="getAccessSection-content flex-column align-center">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="access-btn-container">
          <input
            placeholder="email@example.com"
            className="enter-email-btn access-btn"
          />
          <button className="get-started-btn access-btn">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetAccessSection;
