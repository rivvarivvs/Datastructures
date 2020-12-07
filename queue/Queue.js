class Queue {
    constructor() {
        this.items = [],
        this.count = 0
    }

    enqueue(item) {
        this.items[this.count] = item
        this.count++
        return this.count-1
    }

    dequeue() {
        if (this.count == 0) return undefined

        this.count--
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count == 0
    }
}

Queue.fromValues = function(...values) {
    const qq = new Queue()
    for (let i=0; i<this.count-1; i++) {
        qq.enqueue(values[i])
    }

    return qq
}

const qq = Queue.fromValues(1,2,3,4,5)
console.log(qq)

module.exports = Queue