import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(itemObj) {
    setItems((items) => [...items, itemObj]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onCheckItem={handleCheckItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Packi App 💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Write the item here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onCheckItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item
            key={i.id}
            itemObject={i}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObject, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObject.packed}
        onChange={() => onCheckItem(itemObject.id)}
      ></input>
      <span style={itemObject.packed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.description}
      </span>
      <button onClick={() => onDeleteItem(itemObject.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list, and you already packed X (X%)</em>
    </footer>
  );
}
