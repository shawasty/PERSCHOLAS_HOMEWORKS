
import './App.css';
import { useRef } from 'react'

function App() {
  const groceryList = []
 
  const item = useRef ('');
  const brand= useRef ('');
  const units = useRef ('');
  const quantity= useRef ('');
  const isPurchased = useRef('');
  const submitForm =(e) => {
    e.preventDefault();
    console.log(isPurchased.current.checked )
    groceryList.push({item:item.current.value , brand:brand.current.value , units:units.current.value , quantity:quantity.current.value , isPurchased:isPurchased.current.checked})
    console.log(groceryList)
  }
  return (
    
    <div className="App">
     <form action="" className='inputList' onSubmit={submitForm}>
       <label htmlFor="Item">Item</label>
       <input type="text" 
        ref={item}
       />
       <br />
       <label htmlFor="brand">brand</label>
       <input type="text"  ref={brand}/>
       <br />
       <label htmlFor="units">units</label>
       <input type="text" ref={units} />
       <br />
       <label htmlFor="quantity">quantity</label>
       <input type="text" ref={quantity}/>
       <br />
       <label htmlFor="isPurchased">isPurchased</label>
       <input type="checkbox" ref={isPurchased} />
       <button value="submit"> submit</button>


     </form>
    </div>
  );
}

export default App;
