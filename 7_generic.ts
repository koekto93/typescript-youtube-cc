//Джинерик - это такой тип, который подстаивается под данные, к примеру в массиве. 
//Можно не указывать какой тип элементов в массиве хардкодом, T[] сам сделает это
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']


function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

=========
//Пример использования хука и джинерика
export interface ITodo {
    title: String,
    id: number
    completed: boolean
}

//для обозначения джинерика в хуке
const [todos, setTodos] = useState<ITodo[]>([]) 

