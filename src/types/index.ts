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



export type CartProps = {
    list: IPizzaHalfs[],
}