import React, {useState} from 'react';
import CalcButton from './CalcButton';

const Calculator = () => {

    const [value, setValue] = useState('');
    return (
        <div>
            <input type='text' value={value}/>
            <CalcButton />
        </div>
    )
}

export default Calculator
