import './App.css';
import {useState} from "react";

import Pizza from "./components/Pizza/Pizza.tsx";
import { IPizza, IPizzaHalfs } from "./types";

const DATA:IPizza[] = [
    {'id':1, 'name': 'Пепперони', 'img': '/1.png', 'price': 550},
    {'id':2, 'name': 'Карбанара', 'img': '/2.png', 'price': 450},
    {'id':3, 'name': 'С грибами', 'img': '/3.png', 'price': 500},
    {'id':4, 'name': 'Диабло', 'img': '/4.png', 'price': 570}
]

function App() {
    const [leftIndex, setLeftIndex] = useState<number>(0);
    const [rightIndex, setRightIndex] = useState<number>(0);
    const [resultList, setResultList] = useState<IPizzaHalfs[]>([]);


    function handleAddPizza() {
        let price;
        const fullPizza = (leftIndex == rightIndex)
        if(fullPizza){
            price = DATA[leftIndex].price;
        }else{
            price = (DATA[leftIndex].price+ DATA[rightIndex].price) /2;
        }
        const newPizza:IPizzaHalfs = {'fullPizza': fullPizza, 'price': price, 'left':DATA[leftIndex].name, 'right': DATA[rightIndex].name};
        setResultList([
            ...resultList,
            newPizza])
    }

    const totalPrice = resultList.reduce((total, currentValue) => total = total + currentValue.price,0);

    return (
        <div className="App">
            <header className="header"><h2 className='title'>Ту Пицца</h2></header>
            <div className="pizzas">
                <Pizza pizzas={DATA} direction={'LEFT'} index={leftIndex} setIndex={setLeftIndex}></Pizza>
                <Pizza pizzas={DATA}  direction={'RIGHT'} index={rightIndex} setIndex={setRightIndex}></Pizza>
            </div>
            <div className='result'>
                <button onClick={handleAddPizza}>Добавить</button>

                { resultList.length >0 &&
                    <div className='results'>{resultList.map((pizza) =>
                        <div className='resultRow'>{pizza.fullPizza? pizza.left : pizza.left +' + '+pizza.right} ({pizza.price} руб.)</div>)}
                    </div>
                }
                <div>Общая цена: {totalPrice} руб.</div>
            </div>

        </div>
    );
}

export default App;
