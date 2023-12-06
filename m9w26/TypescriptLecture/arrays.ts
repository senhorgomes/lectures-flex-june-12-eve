// const array = ["Bryan", "Gomes", 5]

const myArray: string[] = ["Bryan", "Gomes"]
const myArray2: Array<string> = ["Bryan", "Gomes"]
const myArray3: Array<string | number | boolean | {key: string} > = ["Bryan", "Gomes", 5, {key: "value"}]
const myDeepArrays: Array<string[]> = [["Bryan", "Gomes", 5, {key: "value"}]]
// const myArray3: Array<string | number | boolean> = ["Bryan", "Gomes", 5]
// const [state, setState] = useState()

// Tuple -> An Array with a specific length

const listArray: [string, number, boolean] = ["Bryan", 10, true]