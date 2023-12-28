
import { useState } from 'react';
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems'

function App() {
 
  
  let [fooditem , setFooditem] = useState(['Dal' , 'vegetables ' , 'Salad']);
  
 

  const handleKeyDown = (event)=>{
  if(event.key==='Enter'){
    let eventval = event.target.value;
    event.target.value = "";  
    let newItem = [...fooditem , eventval]; 
    setFooditem(newItem);
  }
}

  return (
   <div>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 ">
  
  <div >
    <div className="text-xl font-medium text-black ">Health App</div>
    <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
    <FoodItems items = {fooditem }
     
     
     ></FoodItems>
    <ErrorMessage items = {fooditem}></ErrorMessage>
  </div>
</div>
   </div>

  )
}

export default App
