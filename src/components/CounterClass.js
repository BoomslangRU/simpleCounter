import { Component } from 'react'
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'

import counterStoreClass from '../stores/counterStoreClass'

// store in global visibility fro educational purposes
const store = new counterStoreClass()

export const CounterContainer = observer(class extends Component {
    componentDidMount() {
        // store.count = this.props.initialCount ?? 0
        runInAction(() => {
            store.count = this.props.initialCount ?? 0
        })
    }
    render() {
        return (
            <div>
                <button onClick={store.dec}>-</button>
                <span style={{ color: store.color }}>{store.count}</span>
                <button onClick={store.inc}>+</button>
            </div>
        )
    }
})





// // @observer
// export const CounterContainer = observer(class extends Component {

//     // @observable
//     count = 0

//     // @computed
//     get color() {
//         return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black'
//     }

//     constructor(props) {
//         super(props)
//         makeObservable(this, {
//             count: observable,
//             color: computed,
//             dec: action,
//             inc: action.bound
//         })
//         this.count = this.props.initialCount ?? 0
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.dec}>-</button>
//                 <span style={{ color: this.color }}>{this.count}</span>
//                 <button onClick={this.inc}>+</button>
//             </div>
//         )
//     }
//     // @action
//     dec = () => this.count--
//     // @action.bound
//     inc() {
//         this.count++
//     }
// })





// export class CounterContainer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: this.props.initialCount ?? 0
//         }
//         this.inc = this.inc.bind(this)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.dec}>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.inc}>+</button>
//             </div>
//         )
//     }
//     dec = () => this.setState(prevState => ({
//         count: prevState.count - 1
//     }))
//     inc() {
//         this.setState(prevState => ({
//             count: +prevState.count + 1
//         }))
//     }
// }
