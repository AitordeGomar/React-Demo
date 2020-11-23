import React, {useState} from 'react';
import './css/Calculator.css';

const Calculator = () => {
    const [defaultValue] = useState('0');
    const [value, setValue] = useState(defaultValue);
    const reset = ()=>{
        return setValue('0')
    
    }

    const addValue= (e)=>{
        setValue(value + e.target.innerText);
    }

    const buttons = [
        {symbol:'C', width:'cols-3', action:reset},
        {symbol:'/', width:'cols-1', action:addValue},
        {symbol:'7', width:'cols-1', action:addValue},
        {symbol:'8', width:'cols-1', action:addValue},
        {symbol:'9', width:'cols-1', action:addValue},
        {symbol:'X', width:'cols-1', action:addValue},
        {symbol:'4', width:'cols-1', action:addValue},
        {symbol:'5', width:'cols-1', action:addValue},
        {symbol:'6', width:'cols-1', action:addValue},
        {symbol:'-', width:'cols-1', action:addValue},
        {symbol:'1', width:'cols-1', action:addValue},
        {symbol:'2', width:'cols-1', action:addValue},
        {symbol:'3', width:'cols-1', action:addValue},
        {symbol:'+', width:'cols-1', action:addValue},
        {symbol:'0', width:'cols-2', action:addValue},
        {symbol:'.', width:'cols-1', action:addValue},
        {symbol:'=', width:'cols-1', action:addValue}
    ]

    return (
        <div>
            <input type='text' value={defaultValue || value} readOnly/>
            {buttons.map((btn, i)=>{
                return <CalcButton  key={i} symbol={btn.symbol} width={btn.width} action={(symbol)=>{btn.action(symbol)}}/>
            })}
        </div>
    )

    
}
const CalcButton = (props)=>{
    return(
        <>
        <button className={props.width} onClick={props.action}>{props.symbol}</button>
        </>
    )
}

export default Calculator
