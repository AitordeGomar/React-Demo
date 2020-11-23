import React, {useState} from 'react'

const Calculator = () => {

    const [value, setValue] = useState('');
    return (
        <div>
            <input type='text' value={value}/>
        </div>
    )
}

export default Calculator
