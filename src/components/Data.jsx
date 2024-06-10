/* eslint-disable react/prop-types */
// import React from 'react'
import "remixicon/fonts/remixicon.css";
function Data({ title, sum, ondelete }) {
  function deleteButton() {
    ondelete(title.name);
    // console.log(ondelete(name.name));
  }
  return (
    <>
      {title.map((title) => {
        return (
          <div key={title.name} className="data-box">
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
