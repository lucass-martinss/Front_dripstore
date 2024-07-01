/* eslint-disable react/prop-types */
import "./Item.css";

export default function Item({foto, label}) {
  return (
    <div className="label">
      <div id="item">
        <img src={foto} alt="" />
      </div>
      <label htmlFor="">{label}</label>
    </div>
  );
}
