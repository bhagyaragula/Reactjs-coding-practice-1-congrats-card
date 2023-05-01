const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="cardContainer">
      <img
        className="images"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      ></img>
      <h1 className="name">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="images"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
