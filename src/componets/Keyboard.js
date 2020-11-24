import React, {useState, useRef, useEffect} from 'react';

const Keyboard = () => {
    const [value, setValue] = useState('');
    const [realValue, setRealValue] = useState('');
    const inputValue = useRef();
    const v1 = ['a','e','i','o','u'];
    const c1 = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','x', 'y','z', 'bl', 'cl','dr','fl','fr','gl','ch', 'll','pl','pr','qu','rr','tr'];
    const v2 = v1;
    const c2 = ['b','g','l','m','n','r','s','t','x','z'];

    useEffect(() => {
        inputValue.current.focus();
      })

    const keyPressed = (e)=>{
        const code = e.charCodeAt(parseInt(value.length));
        if(code === 32){
            setValue(value + ' ')
        }else{
            if(code < 97 || code > 122){
                alert('Button not available');
            }else{
                if(value.slice(-1) === ' '){
                    if(v1.includes(value.slice(-2,-1))){
                        setValue(value + c1[Math.floor(Math.random() * (33))]);
                    }else{ 
                        if(c1.includes(value.slice(-2,-1))){
                            setValue(value + v1[Math.floor(Math.random() * (5))])
                        }else{
                            if(Math.random()< 0.5){
                                setValue(value + v1[Math.floor(Math.random() * (5))])
                            }else{
                                setValue(value + c1[Math.floor(Math.random() * (33))])
                            }
                        }
                    }
                }else{
                    if(v1.includes(value.slice(-2,-1))){
                        setValue(value + c1[Math.floor(Math.random() * (34))]);
                    }else{
                        if(c1.includes(value.slice(-2,-1))){
                            setValue(value + v1[Math.floor(Math.random() * (5))])
                        }else{
                            if(Math.random()< 0.5){
                            setValue(value + v2[Math.floor(Math.random() * (5))])
                            }else{
                                setValue(value + c2[Math.floor(Math.random() * (10))])
                            }
                        }
                    }
                }
            }
        }
    }

    return (
        <div>
            <h1>The Broken keyboard</h1>
            <h3>The first text will random each letter you press, the second one is the correct one</h3>
            <input style={{display:'block', marginTop:'1vw'}} value={value || ''} onChange={(e)=>{
                keyPressed(e.target.value);
                setRealValue(realValue + e.nativeEvent.data);
                }} ref={inputValue}/>
            <input style={{display:'block', marginTop:'1vw'}}  readOnly value={realValue || ''} />
            <button onClick={()=>{setValue('');setRealValue('')}}>Clear</button>
        </div>
    )
}

export default Keyboard
