import React, {useState} from 'react';
import './css/ShopItems.css';
import Transfer from './Transfer';

const ShopItems = () => {

    return (
        <div>
            <div>Items</div>
            <Item name='Book' price='$6.5' img='https://www.earlylearninghq.org.uk/wp-content/uploads/2010/10/open-book3.jpg'/>
            <Item name='Bike' price='$7.5' img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.danielforsyth.me%2Fcontent%2Fimages%2F2014%2FMar%2Fbike.jpg&f=1&nofb=1img=' />
            <Item name='Flower' price='$9.5' img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GOwBKy2p4hh3xCPz4gcADAHaFj%26pid%3DApi&f=1'/>
            <Item name='Laptop' price='$2.5' img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iHfdQSmWeOX1DfRf3alzmAHaEK%26pid%3DApi&f=1'/>
        </div>
    )
}

const Item = (props)=>{
    const [cartElements, setCartElements] = useState({});
    const [boughtItems, setBoughtItems] = useState(0);
    const buy = (e)=>{
        e.preventDefault();
        setCartElements({name:props.name, units:e.target.value});
        if(cartElements.units === '1'){
        alert(`You have bought ${cartElements.units} ${cartElements.name}`);
        }else{
            alert(`You have bought ${cartElements.units} ${cartElements.name}(s)`);
        }
    }
    return(
        <div className='item'>
        <h3>{props.name}</h3>
        <h6>{props.price}</h6>
        <img src={props.img} alt='book' />
        <input value={boughtItems} onChange={(e)=>setBoughtItems(e.target.value)} type='number' min='1' max='10'/>
        <button value={boughtItems} onClick={buy}>Add to cart</button>
        </div>
    )
}



export default ShopItems;
