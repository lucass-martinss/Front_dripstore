/* eslint-disable react/prop-types */
import "./Item.css";

export default function Item(props) {
  return (
    <div className="label">
      <div id="item">
        <img src={props.foto} alt="" />
      </div>
      <label htmlFor="">{props.label}</label>
    </div>
  );
}
