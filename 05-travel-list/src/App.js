const packingList = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Packi App 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need to pack?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {packingList.map((i) => (
          <Item key={i.id} itemObject={i} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObject }) {
  return (
    <li>
      <span style={itemObject.packed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.description}
      </span>
      <button>❌</button>
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
