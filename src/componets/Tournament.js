import React,  {useState} from 'react';
import Data from './Data';

const Tournament = () => {
    const [valueA, setValueA] = useState({});
    const [valueB, setValueB] = useState({});
    const [valueC, setValueC] = useState({});
    const [valueD, setValueD] = useState({});
    const [valueE, setValueE] = useState({});
    const [valueF, setValueF] = useState({});
    const [valueG, setValueG] = useState({});
    const random =()=>{
        setValueE({name:'', power:''});
        setValueF({name:'', power:''});
        setValueG({name:'', power:''});
if(Math.random()<0.25){
    setValueA(Data[0]);
    setValueB(Data[1]);
    setValueC(Data[2]);
    setValueD(Data[3]);
}else if(Math.random()>0.33 && Math.random()<0.66){
    setValueA(Data[1]);
    setValueB(Data[2]);
    setValueC(Data[3]);
    setValueD(Data[0]);
}else if(Math.random()>0.66){
    setValueA(Data[1]);
    setValueB(Data[3]);
    setValueC(Data[0]);
    setValueD(Data[2]);
}
    }



    const reset =(e)=>{
        e.preventDefault();
        setValueE({name:'', power:''});
        setValueF({name:'', power:''});
        setValueG({name:'', power:''});
    }

    

    return (
        <>
        <button onClick={random}>Randomize</button>
        <h3>Semifinal</h3>
        <div>
        <input value={valueA.name || ''} readOnly/>
        <input value={valueB.name || ''} readOnly/>
        <button onClick={(e)=>{
        e.preventDefault();
        if(Math.abs(valueA.power-Math.random()*2) < Math.abs(valueB.power-Math.random()*2)){
            setValueE(valueA)
        }else{
            setValueE(valueB);
        }}}>Fight</button>
        </div>

        <div>
        <input value={valueC.name || ""} readOnly/>
        <input value={valueD.name || ""} readOnly/>
        <button onClick={(e)=>{
        e.preventDefault();
        if(Math.abs(valueC.power-Math.random()*2) < Math.abs(valueD.power-Math.random()*2)){
            setValueF(valueC)
        }else{
            setValueF(valueD);
        }}}>Fight</button>
        </div>

        <h3>Final match</h3>
        <input value={valueE.name || ""} readOnly/>
        <input value={valueF.name || ""} readOnly/>
        <button onClick={(e)=>{
        e.preventDefault();
        if(Math.abs(valueE.power-Math.random()*2) < Math.abs(valueF.power-Math.random()*2)){
            setValueG(valueE)
        }else{
            setValueG(valueF);
        }}}>Fight</button>
        <h3>Winner</h3>
        <input value={valueG.name || ""} readOnly/>
        <button onClick={reset}>Restart</button>
        </>
    )
}

export default Tournament;