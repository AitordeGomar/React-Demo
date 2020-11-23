import React, {useState} from 'react';
import './css/Calculator.css';

const Calculator = () => {

    const [value, setValue] = useState('');

    return (
        <div>
            <input type='text' value={value}/>
            <CalcButton symbol='C' width='cols-3'/>
            <CalcButton symbol='/'/>
            <CalcButton symbol='9'/>            
            <CalcButton symbol='*'/>            
            <CalcButton symbol='8'/>
            <CalcButton symbol='7'/>
            <CalcButton symbol='6'/>            
            <CalcButton symbol='-'/>            
            <CalcButton symbol='5'/>
            <CalcButton symbol='4'/>
            <CalcButton symbol='3'/>
            <CalcButton symbol='+'/>
            <CalcButton symbol='2'/>
            <CalcButton symbol='1'/>
            <CalcButton symbol='0'/>
            <CalcButton symbol='.'/>            
            <CalcButton symbol='='/>            

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
