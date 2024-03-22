import {IPizzaHalfs} from "../../types/index.ts"
import CartSvg from "../../assets/cart.svg"
import styles from "./Cart.module.css"
import {useState} from "react";
import {createPortal} from "react-dom";

type Props = {
    list: IPizzaHalfs[],
}

function ResultList({list}:Props){
    const totalPrice = list.reduce((total, currentValue) => total = total + currentValue.price,0);
    return(
        <div className={styles.popup}>
            <h2 className={styles.title}>Корзина</h2>
            <div className={styles.results}>{list.map((pizza, index) =>
                <div key={index} className={styles.resultRow}>{pizza.fullPizza? pizza.left : pizza.left +' + '+pizza.right} ({pizza.price} руб.)</div>)}
            </div>
        <div className={styles.totalPrice}>Общая цена: {totalPrice} руб.</div>
    </div>)
}

export default function Cart({list}:Props){
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () =>{
        if(list.length >0){
            setShowPopup(!showPopup)
        }
    }

    return(
        <>
            <div className={styles.button} onClick={handleClick}>
                <img src={CartSvg} className={styles.logo} />
                { list.length>0 && <div className={styles.number}>{list.length}</div>}
            </div>
            { showPopup && createPortal(
                    <div className={styles.shadow} onClick={handleClick}><ResultList list={list} ></ResultList></div>,
                    document.body
                )
            }
        </>
    )
}