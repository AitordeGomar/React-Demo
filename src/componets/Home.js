import React,  {useState} from 'react';
import Data from './Data';

const Home = () => {

    const [value, setValue] = useState('');
    const handleClick= (e)=>{
        e.preventDefault();
        alert('Hi, '+ value);
    }

    return (
        <>
        <input value={Data[0].name} readOnly/>
        <input value={Data[0].name} readOnly/>
        </>
    )
}

export default Home;