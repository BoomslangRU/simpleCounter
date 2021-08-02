import { action, makeAutoObservable } from 'mobx'

export default class counterStoreClass  {
    count = 0

    get color() {
        return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black'
    }

    constructor() {
        // makeObservable(this, {
        //     count: observable,
        //     color: computed,
        //     dec: action,
        //     inc: action.bound
        // })
        makeAutoObservable(this, {
            inc: action.bound
        })
    }

    dec = () => this.count--

    inc() {
        this.count++
    }
}