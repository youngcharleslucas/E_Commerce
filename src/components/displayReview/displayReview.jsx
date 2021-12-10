import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DisplayReviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReview();
  }, [props.productID]);

  const getComment = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/review/${props.productId}/`
    );
    SetComments(response.data);
    console.log(comments);
  };

  return (
    <React.Fragment>
      <table>
        <thead>
          <td>Reviews</td>
        </thead>
        <tbody>
          <tr>
            {reviews.map((element) => {
              return (
                <React.Fragment>
                  <tr>
                    <td>{element.review}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default DisplayReviews;
