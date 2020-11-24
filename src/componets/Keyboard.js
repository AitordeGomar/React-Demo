import React, {useState} from 'react'

const Keyboard = () => {
    const [value, setValue] = useState('');
    const vowels = ['a','e','i','o','u','y'];
    const consonants = ['b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','w','y','z'];

    const keyPressed = (e)=>{
        const code = e.charCodeAt(parseInt(value.length));
        if(code === 32){
            setValue(value + ' ')
        }else{
        if(code < 97 || code > 122){
            alert('Button not available');
        }else{
        if(Math.random()< 0.5){
            setValue(value + vowels[Math.floor(Math.random() * (6))])
        }else{
            setValue(value + consonants[Math.floor(Math.random() * (21))])
        }
        }
    }
    }
    
    

    return (
        <div>
            <input style={{display:'block'}} value={value || ''} onChange={(e)=>{keyPressed(e.target.value)}}/>
            <button onClick={()=>setValue('')}>Clear</button>
            <Keys letter='Q' />
            <Keys letter='W' />
            <Keys letter='E' />
            <Keys letter='R' />
            <Keys letter='T' />
            <Keys letter='Y' />
            <Keys letter='U' />
            <Keys letter='I' />
            <Keys letter='O' />
            <Keys letter='P' />
            <Keys letter='A' />
            <Keys letter='S' />
            <Keys letter='D' />
            <Keys letter='F' />
            <Keys letter='G' />
            <Keys letter='H' />
            <Keys letter='J' />
            <Keys letter='K' />
            <Keys letter='L' />
            <Keys letter='Z' />
            <Keys letter='C' />
            <Keys letter='V' />
            <Keys letter='B' />
            <Keys letter='N' />
            <Keys letter='M' />
        </div>
    )
}

const Keys = (props)=>{
    
    return(
        <>
        <button type='button'>{props.letter}</button>
        </>
    )
}

export default Keyboard
