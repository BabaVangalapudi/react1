import {useState} from 'react';
import './nameRender.css'

const NameRender = ()=>{
    const [name, setName] = useState("")
    const onChange = event => setName(event.target.value)
    return (
      <>
        <div className='nameContainer'>
          <input type="text" placeholder='Your name' onChange={onChange}/>
          <h1>Hi {name}</h1>
        </div>
      </>
    )
}
export default NameRender