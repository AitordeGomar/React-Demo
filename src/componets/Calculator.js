import React, {useState} from 'react';
import './css/Calculator.css';

const Calculator = () => {

    const [value, setValue] = useState('');

    const buttons = [
        {symbol:'C', width:'cols-3'},
        {symbol:'/', width:'cols-1'},
        {symbol:'7', width:'cols-1'},
        {symbol:'8', width:'cols-1'},
        {symbol:'9', width:'cols-1'},
        {symbol:'X', width:'cols-1'},
        {symbol:'4', width:'cols-1'},
        {symbol:'5', width:'cols-1'},
        {symbol:'6', width:'cols-1'},
        {symbol:'-', width:'cols-1'},
        {symbol:'1', width:'cols-1'},
        {symbol:'2', width:'cols-1'},
        {symbol:'3', width:'cols-1'},
        {symbol:'+', width:'cols-1'},
        {symbol:'0', width:'cols-2'},
        {symbol:'.', width:'cols-1'},
        {symbol:'=', width:'cols-1'}
    ]

    return (
        <div>
            <input type='text' value={value}/>
            {buttons.map((btn, i)=>{
                return <CalcButton symbol={btn.symbol} width={btn.width}/>
            })}
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
