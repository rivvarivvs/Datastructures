const Stack = require('./Stack')

describe('#push', () => {
    test('adding an item to the top of the stack', () => {
        const s = new Stack()
        s.push(1)
        s.push(2)
        s.push(3)
        s.push(4)

        expect(s.count).toBe(4)
        expect(s.items[3]).toBe(4)
    })
})

describe('#pop', () => {
    describe('popping with no items on stack', () => {
        test('it return null', () => {
            const s = new Stack()
            s.pop()

            expect(s.item).toBe(undefined)
            expect(s.count).toBe(0)
        })
    })
    describe('popping an item', () => {
        test('it returns the item', () => {
            const s = new Stack()
            s.push(1)
            s.push(2)
            s.push(3)
            s.push(4)
            s.pop()

            expect(s.count).toBe(3)
            expect(s.items[3]).toBe(undefined)
        })
    })
})

describe('#peek', () => {
    test('return item at top of stack', () => {
        const s = new Stack()
        expect(s.peek()).toBe(undefined)
        s.push(1)
        s.push(2)
        s.push(3)
        s.push(4)

        expect(s.peek()).toBe(4)
    })
})

describe('#isEmpty', () => {
    test('checks if stack is empty', () => {
        const s = new Stack()
        expect(s.isEmpty()).toBe(true)
        s.push(1)

        expect(s.isEmpty()).toBe(false)
    })
})

describe('#size', () => {
    test('checks size', () => {
        const s = new Stack()
        s.push(1)

        expect(s.size()).toBe(1)
    })
})

describe('#print', () => {
    test('prints stack', () => {
        const s = new Stack()
        s.push(1)
        s.push(2)
        s.push(3)
        s.push(4)

        expect(s.print()).toBe('1 2 3 4 ')
    })
})

describe('#clear', () => {
    test('return item at top of stack', () => {
        const s = new Stack()
        s.push(1)
        s.push(2)
        s.clear()

        expect(s.isEmpty()).toBe(true)
    })
})
