import React, {useState} from 'react';
import './css/Calculator.css';

const Calculator = () => {
    const [defaultValue] = useState('');
    const [value, setValue] = useState(defaultValue);
    const [savedValue, setSavedValue] = useState('');
    const [savedOperation, setSavedOperation] = useState('');
    const reset = ()=>{
        setValue('');
        setSavedValue('');
    
    }
    const addValue= (e)=>{
         if(e.target.innerText === 'C' || e.target.innerText === '/' || e.target.innerText === 'X' || e.target.innerText === '-' || e.target.innerText === '+'){
             setSavedValue(value);
             setSavedOperation(e.target.innerText);
            setValue('');
        }else{
        setValue(value + e.target.innerText);
        }
    } 
    const calculate = ()=>{
        if(value === '' || savedValue ===''){
            setValue('');
            setSavedValue('');
            alert('You need two values. Try again,please');
        }else{
            switch(savedOperation){
                case '/': setValue(parseFloat(savedValue) / parseFloat(value));
                break;
                case 'X': setValue(parseFloat(savedValue) * parseFloat(value));
                break;
                case '+': setValue(parseFloat(savedValue) + parseFloat(value));
                break;
                case '-': setValue(parseFloat(savedValue) - parseFloat(value));
                break;
                default: setValue('0');
            }
        }
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
        {symbol:'=', width:'cols-1', action:calculate}
    ]

    const keyPressed=(e)=>{
        switch(e.charCode){
            case 13: calculate();
            break;
            case 42: setSavedOperation('X');
                setSavedValue(value);
                setValue('')
            break;
            case 43: setSavedOperation('+');
                setSavedValue(value);
                setValue('')
            break;
            case 44: setValue(value + '.');
            break;
            case 45: setSavedOperation('-');
                setSavedValue(value);
                setValue('')
            break;
            case 47: setSavedOperation('/');
                setSavedValue(value);
                setValue('')
            break;
            case 48: setValue(value + '0');
            break;
            case 49: setValue(value + '1');
            break;
            case 50: setValue(value + '2');
            break;
            case 51: setValue(value + '3');
            break;
            case 52: setValue(value + '4');
            break;
            case 53: setValue(value + '5');
            break;
            case 54: setValue(value + '6');
            break;
            case 55: setValue(value + '7');
            break;
            case 56: setValue(value + '8');
            break;
            case 57: setValue(value + '9');
            break;
            default:alert('Button not available');
        }
    }

    return (
        <div>
            <input style={{marginTop:'3vw'}} id="input1"type='text' value={savedValue || ''} readOnly/>
            <input onKeyPress={keyPressed} onClick={reset} type='text' id='input2' value={value || defaultValue} readOnly/>
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
