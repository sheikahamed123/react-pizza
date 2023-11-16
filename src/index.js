import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


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

function Header(){
return (
  <div className="header">
     <h1 >Fast React Pizza Co.</h1>
  </div>
  
)
}

function Menu(){
  
const pizzaLength=pizzaData.length;
return(
  <div className="menu">
    <h2>Our menu</h2>


    {pizzaLength > 0 ? (
     <>
      <p>Authentic Italian cusine</p>
    
        <ul className="pizzas">
        {pizzaData.map((pizza)=>(
  
         <Pizza 
         key={pizza.name}
         pizzaObj={pizza}
         
         
         
         />
        ))}
  
      </ul>
      </>
    ) : <p>No items found</p>}
  
  { /* <Pizza  name="Pizza Spinaci" 
    ingredients="Tomato, mozarella, spinach, and ricotta cheese"
     image="pizzas/spinaci.jpg" 
     price={10}/>

<Pizza  name="Pizza Funghi" 
    ingredients="Tomato, mushrooms"
     image="pizzas/funghi.jpg" 
     price={15}/>*/}

  </div>
)
}
function Pizza({pizzaObj}){

  const soldOut=pizzaObj.soldOut;
     // if(soldOut==true){
     //   return null;
     // }
  
  return (
    <li className={`pizza ${soldOut? "sold-out" : ""}`} >
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
      <h3>{pizzaObj.name}</h3>
<p>{pizzaObj.ingredients}</p>
<span>{soldOut ?"SOLD OUT":"$"+pizzaObj.price}</span>

</div>


    </li>
  )
}

function Footer(){
  const hour=new Date().getHours();
  const openHour=12;
  const closeHour=22;
  const isOpen=hour>=openHour && hour<=closeHour;


 // if(hour>=openHour && hour<=closeHour) 
 // alert("We are currently open!")
//else
//alert("Sorry we are closed")
return(

  
  <footer className="footer">
    { isOpen && (
    <div className="order">
      <p>
        We're Open until {closeHour}:00. Come visit us or order online
      </p>
      <div className="btn-container">
 <button className="btn">Order</button>
 </div>
  </div>
)}
  </footer>
 // React.createElement("footer",null,"We are Currently Open!")
  
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

