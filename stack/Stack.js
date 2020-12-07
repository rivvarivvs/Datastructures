class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(data) {
        this.items[this.count] = data
        this.count++
        console.log(`${data} added to ${this.count}`)
        return this.count - 1
    }

    pop() {
        if(this.count == 0) {
            return undefined
        }

        const item = this.items[this.count - 1]
        this.count--
        this.items.length--
        console.log(`${item} removed`)
        return item
    }

    peek() {
        if(this.count == 0) {
            return undefined
        }
        console.log(`Returning ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    print() {
        let str = ''
        for (let i=0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        console.log(str)
        return str 
    }

    clear() {
        this.count = 0
        this.items = []
        return this.items
    }
}

const stack = new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.print()
console.log(stack)

module.exports = Stack