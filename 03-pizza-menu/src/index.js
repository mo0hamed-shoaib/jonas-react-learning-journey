import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Pizza Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Jimmy's Pizza</h1>
    </header>
  );
}

function Menu() {
  // const pizzaData = [];
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic taste with 6 pizzas to choose from! using top materials
            for a premium experience, only at Jimmy's Pizza
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Out of Stock! Check later..</p>
      )}

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* <Pizza
        image={"pizzas/focaccia.jpg"}
        name={"Pizza Focaccia"}
        ingredient={"Bread with italian olive oil and rosemary"}
        price={10}
      />
      <Pizza
        image={"pizzas/funghi.jpg"}
        name={"Pizza Funghi"}
        ingredient={"Tomato, mozarella, mushrooms, and onion"}
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>
          {pizzaObject.soldOut ? "SOLD OUT" : "$" + pizzaObject.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const openTime = 9;
  const closedTime = 23;
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= openTime && currentTime <= closedTime;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedTime={closedTime} />
      ) : (
        <p>
          We are closed, we're open from {openTime}:00 to {closedTime}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closedTime }) {
  return (
    <div className="order">
      <p>We are open until {closedTime}:00. you can also order online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
