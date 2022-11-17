import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) random = index - 1; // index + 1 also works. incase if we get repetitive random numbers
    setIndex(checkIndex(random));
  };

  // this one keeps the index in its range.
  const checkIndex = (index) => {
    if (index > people.length - 1) return 0;
    else if (index < 0) return people.length - 1;
    return index;
  };

  const nextPerson = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
