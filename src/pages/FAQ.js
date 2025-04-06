// File: frontend/src/pages/FAQ.js
import React from 'react';
import FAQItem from '../components/FAQItem';

const faqData = [
  { question: 'How do I schedule a waste pickup?', answer: 'Log in and go to the Schedule Pickup page to select a date and provide your address.' },
  { question: 'Can I track the garbage truck?', answer: 'Yes, you can view the trucks live location on the Tracking page.' },
  { question: 'Will I receive notifications?', answer: 'Yes, SMS and email alerts will be sent for confirmed pickups.' },
];

const FAQ = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
