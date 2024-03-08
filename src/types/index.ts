export interface IPizza{
    'id': number,
    'name': string,
    'img': string,
    'price': number
}

export interface IPizzaHalfs{
    'fullPizza': boolean,
    'price': number,
    'left': string,
    'right': string
}

export type PizzaProps = {
    pizzas: IPizza[],
    direction: "LEFT"|"RIGHT",
    index: number,
    setIndex: (number: number) => void
}