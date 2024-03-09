import {PizzaProps} from "../../types";
import styles from "./Pizza.module.css"

export default function Pizza({pizzas, direction, index, setIndex}:PizzaProps){
    const currentPizza = pizzas[index]
    const className = styles.wrapper + ' ' + (direction=='LEFT' ?  styles.left : styles.right);

    const showPrevButton = (index>0);
    const showNextButton = (index < pizzas.length - 1);
    const halfPrice = (pizzas[index].price / 2)

    function goPrev() {
        setIndex(index-1);
    }

    function goNext() {
        setIndex(index+1);
    }

    return(
        <div className={className} style={{ backgroundImage: `url(${currentPizza.img})` }}>
            { showPrevButton && <div className={styles.prev} onClick={()=>goPrev()}> <span></span> </div> }
            <div className={styles.name}>{currentPizza.name} {halfPrice} руб.</div>
            { showNextButton && <div className={styles.next} onClick={()=>goNext()}> <span></span> </div>}
        </div>
    )
}