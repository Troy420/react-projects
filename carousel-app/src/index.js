import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const Images = () => {
  return (
    <section>
      <div className="js-Carousel" id="carousel">
        <ListOfImages />
      </div>
    </section>
  );
};

const publicURL = process.env.PUBLIC_URL;

const ListOfImages = () => {
  return (
    <ul>
      <li>
        <img src={`${publicURL}/assets/images/1.jpg`} alt="" />
        <h4>0</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/2.jpg`} alt="" />
        <h4>1</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/3.jpg`} alt="" />
        <h4>2</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/4.jpg`} alt="" />
        <h4>3</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/5.jpg`} alt="" />
        <h4>4</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/6.jpg`} alt="" />
        <h4>5</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/7.jpg`} alt="" />
        <h4>6</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/8.jpg`} alt="" />
        <h4>7</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/9.jpg`} alt="" />
        <h4>8</h4>
      </li>
      <li>
        <img src={`${publicURL}/assets/images/10.jpg`} alt="" />
        <h4>9</h4>
      </li>
    </ul>
  );
};

ReactDom.render(<Images />, document.getElementById("root"));
