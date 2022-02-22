import "./blank.css";
import { Link } from "react-router-dom";

export default function Blank({ question }) {
  return (
    <div className="">
        <p className="blankQuestion">{question}</p>
        <div className="value">
          <input className="postCat">{}</input>
        </div>
    </div>
  );
}
