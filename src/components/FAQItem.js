// File: frontend/src/components/FAQItem.js
import React from 'react';

const FAQItem = ({ index, question, answer }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
// This code defines a functional component for an FAQ item in a React application.
// It uses Bootstrap's accordion component to display a question and its answer.
// The component takes in props for the question and answer, and uses them to render the content.