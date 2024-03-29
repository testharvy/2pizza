import './App.css';
import {useState} from "react";
import Pizza from "./components/Pizza/Pizza.tsx";
import { IPizza, IPizzaHalfs } from "./types";
import Cart from "./components/Cart/Cart.tsx";

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


    return (
        <div className="App">
            <header className="header">
                <div className="headerInner">
                    <h2 className='title'>Ту Пицца</h2>
                    <Cart list={resultList}></Cart>
                </div>
            </header>
            <div className="pizzas-wrapper">
                <div className="pizzas">
                    <Pizza pizzas={DATA} direction={'LEFT'} index={leftIndex} setIndex={setLeftIndex}></Pizza>
                    <Pizza pizzas={DATA}  direction={'RIGHT'} index={rightIndex} setIndex={setRightIndex}></Pizza>
                </div>
                <button onClick={handleAddPizza} className='button'>Добавить</button>
            </div>
        </div>
    );
}

export default App;
