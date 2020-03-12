import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const names= ['Mahe Alom1', 'Sakib1', 'Rakib1', 'Taki1', 'pagol','chagol', 'gdfhgsdfj', 'hfsdjj'];
  const products=[
    {name:'photoshop', price: '$99.99'},
    {name: 'Illustrator', price:'$69.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'Premiere El', price:'$100.99'}
  ]

  

 
  return (
    <div className="App">
      <header className="App-header">

        <p> I am a Rract Developer</p>

        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {/* <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li>
          <li>{names[3]}</li> */}
          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
       
       {products.map(product => <Product product= {product}></Product>)}
       
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        
        {/* <Person name="Mishu" job="Wev developer"></Person>
        <Person name="Mahe Alom" job="freelancer"></Person> */}



        {/* <Person name={names[0]} food="fffsd"></Person>
        <Person name="sakib" food="fdfsdjs"></Person>
        <Person name="Rakib" food="fjsdhfjasd"></Person>
        <Person name="Taki" food="jfjfk"></Person>
         */}
        
      </header>
    </div>
  );
}

// function Person(props){
//   const personStyle={
//    border: '2px solid red' , 
//     margin:'10px'
//   }
  
//   console.log(props);
//   return ( <div style={personStyle}>
//   <h1>Name : {props.name} </h1>
//   <h3> Favourite food {props.food}</h3>
//   </div >
//   )
// }

// React State
function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease =() => setCount(count +1);

  
  return  (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count -1)}> Decrease </button>
      <button onClick={()=> setCount(count +1)}> Increase</button>
    </div>
  )
}
// React State
// React data load
function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3> Dynamic Users: {users.length}</h3>
      <ul>
        
        {
          users.map(user=><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

// react data load


function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height:"200px",
    width:"200px",
    float:'left'
  }
  const {name, price}= props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5> {props.product.price} </h5>
      <button> Buy Now</button>

    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid gold', width: '400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession {props.job}</p>
    </div>
  )
}

export default App;
