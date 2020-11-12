import React,  {useState} from 'react';

const Home = () => {

    const [value, setValue] = useState('');
    const handleClick= (e)=>{
        e.preventDefault();
        alert('Hi, '+ value);
    }

    return (
        <div>
        <h3>Greet yourself in an alert message</h3>
        <input type='text' placeholder='Who do you want to say Hi?' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleClick}>Say hello</button>
        </div>
    )
}

export default Home;