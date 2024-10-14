/* eslint-disable react/prop-types */
// import React from 'react'
import "remixicon/fonts/remixicon.css";
function Data({ title, sum, ondelete }) {
  function deleteButton() {
    ondelete(title.ind);
  }
  return (
    <>
      {title.map((title, ind) => {
        return (
          <div key={ind} className="data-box">
            {`${title.name} : ₹${title.price}`}
            <i onClick={deleteButton} className="ri-delete-bin-6-fill"></i>
          </div>
        );
      })}
      <section className="totalSum">{`Total money: ₹${sum}`}</section>
    </>
  );
}

export default Data;
