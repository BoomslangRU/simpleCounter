import { useState } from 'react'
import { observer, useLocalObservable, Observer } from 'mobx-react'

// if you wrap the component in an observer, the entire component will be rendering
export const CounterFunction = props => {

    // const {count,dec,inc} = ...
    const store = useLocalObservable(() => {
        return {
            count: props.initialCount ?? 0,
            dec() {
                this.count--
            },
            inc() {
                this.count++
            }
        }
    })

    return (
        <div>
            <button onClick={store.dec}>-</button>
            {/* rendering occurs only inside the tag <Observer> */}
            <Observer>{() => (
                <span>{store.count}</span>
            )}
            </Observer>
            <button onClick={store.inc}>+</button>
        </div>
    )
}

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