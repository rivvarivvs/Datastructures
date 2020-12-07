class Array {
    constructor() {
        this.data = {}
        this.length = 0
    }

    push(item) {
        this.data[this.length] = item 
        this.length++
    }

    pop() {
        const item = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return item
    }

    get(index) {
        return this.data[index]
    }

    delete(index) {
        const item = this.data[index]
        delete this.data[index] 
        this.shiftIndex(index)
    }

    shiftIndex(index) {
        for(let i = index; i<this.data.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.data.length - 1]
        this.length--
    }
}

Array.fromValues = function(...values) {
    const array = new Array()
    for(let i=0; i<values.length; i++){
        array.push(values[i])
    }
    return array
}

const a = Array.fromValues(1, 2, 3, 4)
        console.log(a)
        a.push(5)
        console.log(a)

module.exports = Array