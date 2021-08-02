import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'

import { counterStoreFunction } from '../stores/counterStoreFunction'

// store in global visibility fro educational purposes
const store = counterStoreFunction()

export const CounterFunction = observer(props => {

    useEffect(() => {
        runInAction(() => {
            store.count = props.initialCount ?? 0
        })
    }, [props.initialCount])

    return (
        <div>
            <button onClick={store.dec}>-</button>
            <span style={{ color: store.color }}>{store.count}</span>
            <button onClick={store.inc}>+</button>
        </div>
    )
})



// // if you wrap the component in an observer, the entire component will be rendering
// export const CounterFunction = props => {

//     // const {count,dec,inc} = ...
//     const store = useLocalObservable(() => {
//         return {
//             count: props.initialCount ?? 0,
//             get color() {
//                 return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black'
//             },
//             dec() {
//                 this.count--
//             },
//             inc() {
//                 this.count++
//             }
//         }
//     })

//     return (
//         <div>
//             <button onClick={store.dec}>-</button>
//             {/* rendering occurs only inside the tag <Observer> */}
//             <Observer>{() => (
//                 <span style={{ color: store.color }}>{store.count}</span>
//             )}
//             </Observer>
//             <button onClick={store.inc}>+</button>
//         </div>
//     )
// }



// export const CounterFunction = (props) => {

//     const [count, setCount] = useState(props.initialCount ?? 0)
//     const dec = () => setCount(prevCount => prevCount - 1)
//     const inc = () => setCount(prevCount => prevCount + 1)

//     return (
//         <div>
//             <button onClick={dec}>-</button>
//             <span>{count}</span>
//             <button onClick={inc}>+</button>
//         </div>
//     )
// }