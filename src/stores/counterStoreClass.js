import { makeAutoObservable } from 'mobx'

export default class counterStoreClass  {
    // observable
    count = 0

    // computed
    get color() {
        return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black'
    }

    constructor() {
        // makeObservable(this, {
        //     count: observable,
        //     color: computed,
        //     dec: action,
        //     inc: action
        // })
        makeAutoObservable(this)
    }

    // actions
    dec = () => this.count--

    inc = () => this.count++
}