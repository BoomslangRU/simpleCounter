import { makeObservable, observable, action, computed } from 'mobx'


export const counterStoreFunction = () => {
    return makeObservable({
        // observable
        count: 0,

        // computed
        get color() {
            return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black'
        },

        // actions
        dec() {
            this.count--
        },
        inc() {
            this.count++
        }
    }, {
        count: observable,
        color: computed,
        dec: action.bound,
        inc: action.bound
    })
}