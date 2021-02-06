import react from "react";
import "../../src/styles.css";
function Component() {
  const style = {
    color: "",
    border: "5px solid red"
  };
  var d = new Date(2019, 1, 1, 23).getHours();
  let time;
  if (d < 12) {
    time = "Good morning";
    style.color = "blue";
  } else if (d <= 17) {
    time = "Good evening";
    style.color = "pink";
  } else {
    time = "Good night";
    style.color = "green";
  }
  return (
    <div alt="hi" style={style}>
      <h1> {time} </h1>
    </div>
  );
}
export default Component;
