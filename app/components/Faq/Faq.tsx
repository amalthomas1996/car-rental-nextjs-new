"use client";
import React, { useState } from "react";
interface FaqItemProps {
  question: string;
  answer: string;
}
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faq-question" onClick={handleToggle}>
        <span>{question}</span>
        <img
          src={isActive ? "/xicon.svg" : "/+icon.svg"}
          alt={isActive ? "close" : "open"}
          className="toggle-button"
        />
      </div>
      {isActive && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What is my eligibility to book a car?",
      answer:
        "You should be of 18 years old above and you must possess a valid driving license.",
    },
    {
      question: "Can I book for any period of time?",
      answer:
        "Yes, you can book a car for as short as a few hours or as long as several months, depending on your needs. Our flexible rental periods are designed to accommodate both short-term and long-term rental requirements.",
    },
    {
      question: "Can I opt for a longer period?",
      answer:
        "Absolutely! We offer special rates for long-term rentals. If you need the car for an extended period, such as several weeks or months, we can provide you with a customized rental plan that suits your schedule and budget.",
    },
    {
      question: "Can I book a one-way trip?",
      answer:
        "Yes, one-way trips are available. You can pick up the car at one location and drop it off at another, as long as it's within our network of service areas. Please note that additional fees may apply for one-way rentals.",
    },
    {
      question: "Is there a home delivery option available?",
      answer:
        "Yes, we offer home delivery services for your convenience. You can have the car delivered to your doorstep or a location of your choice. Simply select the delivery option during the booking process, and we'll take care of the rest.",
    },
    {
      question: "How can I make the payment?",
      answer:
        "We accept various payment methods, including credit/debit cards, online banking, and mobile payment options. Full payment is required at the time of booking. For long-term rentals, we also offer installment plans. All transactions are securely processed.",
    },
  ];

  return (
    <section className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default Faq;
