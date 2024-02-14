import {useState} from 'react';
import './counter.css'

const Counter = () =>{
    const [count, setCount] = useState(0)
    const onIncrease = ()=>{
        setCount(count+1)
    }
    const onDecrease = ()=>{
        setCount(count-1)
    }
    return(
        <>
        <div className='buttonContainer'>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <h1>{count}</h1>
        </div>
        </>
    )
}

export default Counter;