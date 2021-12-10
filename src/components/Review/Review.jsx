import React, { useEffect, useState } from "react";
import axios from "axios";

const Review = (props) => {
  const [review, setReview] = useState("");
  const [product, setProduct] = useState(props.currentProductID);
};

const handleChange = (event) => {
  setReview(event.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let newReview = {
    review: review,
    product_id: product,
    //   rating:0,
  };

  await axios.post(" ", newReview);
};

return (
  <div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input onChange={handleChange} value={ewview} />
      <button type="submit">Review</button>
    </form>
  </div>
);

export default Review;
