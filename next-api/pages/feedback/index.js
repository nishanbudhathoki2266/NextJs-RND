import React, { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();

  async function loadFeedbackHandler(id) {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    setFeedbackData(data.feedback);
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}{" "}
            <button onClick={() => loadFeedbackHandler(feedback.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbacks: data,
    },
    revalidate: 10,
  };
}

export default FeedbackPage;
