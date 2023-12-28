import Item from "./Item";

const FoodItems = ({items , acive })=> {

  return (<ul role="list" className=" divide-y divide-black w-[350px]  ">
    {items.map((item)=>(
        <Item key= {item} fooditem = {item }  acive = {acive} ></Item>
    ))}
      
      
    </ul>
  );};

export default FoodItems;