import Item from "./Item";

const FoodItems = ({items})=> {

  return (<ul role="list" className=" divide-y divide-black ">
    {items.map((item)=>(
        <Item key= {item} fooditem = {item}></Item>
    ))}
      
      
    </ul>
  );};

export default FoodItems;