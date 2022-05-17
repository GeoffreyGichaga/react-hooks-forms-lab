import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem,setNewItem] = useState({

    name:"",
    category:"Produce"
  })

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    
    setNewItem({
      ...newItem,
      [name]:value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id:uuid(),
      ...newItem
    })


  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" onChange={handleChange} name="name" value={newItem.name}/>
      </label>

      <label>
        Category:
        <select value={newItem.category} onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
