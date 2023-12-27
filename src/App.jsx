
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'

function App() {
  let fooditem = ['Dal' , 'vegetables ' , 'Salad' , 'briyani' , 'Milk', 'Ghee'];

  return (
   <div>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 border-black">
  
  <div>
    <div className="text-xl font-medium text-black ">Health App</div>
    <FoodItems items = {fooditem}></FoodItems>
    <ErrorMessage items = {fooditem}></ErrorMessage>
  </div>
</div>
   </div>

  )
}

export default App
