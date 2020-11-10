import React,  {useState} from 'react';
import Data from './Data';

const Tournament = () => {

    const [valueA, setValueA] = useState(Data[0]);
    const [valueB, setValueB] = useState(Data[1]);
    const [valueC, setValueC] = useState(Data[2]);
    const [valueD, setValueD] = useState(Data[3]);
    const [valueE, setValueE] = useState({});
    const [valueF, setValueF] = useState({});
    const [valueG, setValueG] = useState({});
    const reset =(e)=>{
        e.preventDefault();
        setValueE({name:'', power:''});
        setValueF({name:'', power:''});
        setValueG({name:'', power:''});
    }

    const test =()=>{

        console.log(Math.random()*2);
        console.log(Math.abs(valueA.power-Math.random()*2));
        console.log(Math.abs(valueB.power-Math.random()*2));
    }

    return (
        <>
        <button onClick={test}>test</button>
        <h3>Semifinal</h3>
        <div>
        <input value={valueA.name} readOnly/>
        <input value={valueB.name} readOnly/>
        <button onClick={(e)=>{
        e.preventDefault();
        if(Math.abs(valueA.power-Math.random()*2) < Math.abs(valueB.power-Math.random()*2)){
            setValueE(Data[0])
        }else{
            setValueE(Data[1]);
        }}}>Fight</button>
        </div>

        <div>
        <input value={valueC.name || ""} readOnly/>
        <input value={valueD.name || ""} readOnly/>
        <button onClick={(e)=>{
        e.preventDefault();
        if(Math.abs(valueC.power-Math.random()*2) < Math.abs(valueD.power-Math.random()*2)){
            setValueF(Data[2])
        }else{
            setValueF(Data[3]);
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