import React, { useState } from "react";
import { samagriList } from "../data/samagriItem";

// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const SamagriListForm = () => {
  const [formState, setFormState] = useState(
    samagriList.map((item) => ({ name: item, checked: false, quantity: 0 }))
  );

  const handleCheck = (index) => {
    const newFormState = [...formState];
    newFormState[index].checked = !newFormState[index].checked;
    setFormState(newFormState);
  };

  const handleQuantityChange = (index, quantity) => {
    const newFormState = [...formState];
    newFormState[index].quantity = quantity;
    setFormState(newFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedFruits = formState
      .filter((item) => item.checked)
      .map((item) => ({ name: item.name, quantity: item.quantity }));
    console.log(selectedFruits);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-lg mx-auto bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">
        Select Puja Samagri & Quantity
      </h2>
      {formState.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`item-${index}`}
            className="mr-2"
            checked={item.checked}
            onChange={() => handleCheck(index)}
          />
          <label htmlFor={`item-${index}`} className="flex-grow text-lg">
            {item.name}
          </label>
          <input
            type="number"
            className="border rounded p-1 w-20 ml-2"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
            min="0"
            disabled={!item.checked}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default SamagriListForm;
