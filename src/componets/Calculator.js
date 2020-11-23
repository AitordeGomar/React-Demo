import React, {useState} from 'react';
import './css/Calculator.css';

const Calculator = () => {

    const [value, setValue] = useState('');

    return (
        <div>
            <input type='text' value={value}/>
            <CalcButton symbol='C' width='cols-3'/>
            <CalcButton symbol='/' width='cols-1'/>
            <CalcButton symbol='7' width='cols-1'/>            
            <CalcButton symbol='8' width='cols-1'/>            
            <CalcButton symbol='9' width='cols-1'/>
            <CalcButton symbol='X' width='cols-1'/>
            <CalcButton symbol='4' width='cols-1'/>            
            <CalcButton symbol='5' width='cols-1'/>            
            <CalcButton symbol='6' width='cols-1'/>
            <CalcButton symbol='-' width='cols-1'/>
            <CalcButton symbol='1' width='cols-1'/>
            <CalcButton symbol='2' width='cols-1'/>
            <CalcButton symbol='3' width='cols-1'/>
            <CalcButton symbol='+' width='cols-1'/>
            <CalcButton symbol='0' width='cols-2'/>
            <CalcButton symbol='.' width='cols-1'/>            
            <CalcButton symbol='=' width='cols-1'/>            

        </div>
    )

    
}
const CalcButton = (props)=>{
    return(
        <>
        <button className={props.width}>{props.symbol}</button>
        </>
    )
}

export default Calculator
