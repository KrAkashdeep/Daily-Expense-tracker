import { useRef, useState } from "react";
import Data from "./Data";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function Page() {
  // const nameData = [];
  const [initial, setinitial] = useState([]);
  const [sum, setSum] = useState(0);
  const name = useRef();
  const price = useRef();
  const addbutton = () => {
    const newName = name.current.value;
    if (newName !== "") {
      const newPrice = price.current.value;
      const newInitial = [...initial, { name: newName, price: newPrice }];
      setinitial(newInitial);
      const add = sum + Number(newPrice);
      setSum(add);
    } else {
      alert("error");
      // console.log("error");
      // toast.error("fill the data");
    }
    name.current.value = "";
    price.current.value = "";
  };
  function deleteButton(name) {
    // console.log(name);
    setinitial((name1) => {
      return name1.filter((name1) => {
        return name1 !== name;
      });
    });
  }
  return (
    <>
      <h1>Expense tracker </h1>
      <label>Item name:</label>
      <input
        className="input-box"
        ref={name}
        type="text"
        placeholder="enter item name"
      />
      <label>Item amount:</label>
      <input
        ref={price}
        className="input-box"
        type="text"
        placeholder="enter item amount"
      />
      <button className="button-add" onClick={addbutton}>
        Add item
      </button>

      <Data title={initial} sum={sum} ondelete={deleteButton} />
    </>
  );
}

export default Page;
