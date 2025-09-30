export default function Item({ itemObject, onDeleteItem, onCheckItem }) {
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
