import {CardProps} from "../../types/index.ts"


export default function Card({list}:CardProps){
    const totalPrice = list.reduce((total, currentValue) => total = total + currentValue.price,0);
    return(
        <div className='result'>
            { list.length >0 &&
                <div className='results'>{list.map((pizza) =>
                    <div className='resultRow'>{pizza.fullPizza? pizza.left : pizza.left +' + '+pizza.right} ({pizza.price} руб.)</div>)}
                </div>
            }
            <div>Общая цена: {totalPrice} руб.</div>
        </div>
    )
}