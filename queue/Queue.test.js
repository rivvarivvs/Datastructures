const Queue = require('./Queue')

describe('#enqueue', () => {
    test('add value at the end of the queue', () => {
        const qq = new Queue()
        qq.enqueue(1)
        qq.enqueue(2)
        qq.enqueue(3)

        expect(qq.items[1]).toBe(2)
        expect(qq.count).toBe(3)
    })
})

describe('#dequeue', () => {
    test('remove value from the beggining of the queue', () => {
        const qq = new Queue()

        expect(qq.dequeue()).toBe(undefined)
        
        qq.enqueue(1)
        qq.enqueue(2)
        qq.enqueue(3)
        qq.enqueue(4)

        const item = qq.dequeue()

        expect(item).toBe(1)
        expect(qq.count).toBe(3)
    })
})

describe('#front', () => {
    test('check first value in the queue', () => {
        const qq = new Queue()
        qq.enqueue(1)
        qq.enqueue(2)
        qq.enqueue(3)
        qq.enqueue(4)

        expect(qq.front()).toBe(1)
    })
})

describe('#size', () => {
    test('check size', () => {
        const qq = new Queue()
        qq.enqueue(1)
        qq.enqueue(2)
        qq.enqueue(3)
        qq.enqueue(4)

        expect(qq.size()).toBe(4)
    })
})

describe('#isEmpty', () => {
    test('check if it is empty', () => {
        const qq = new Queue()
        expect(qq.isEmpty()).toBe(true)

        qq.enqueue(1)
        expect(qq.isEmpty()).toBe(false)
    })
})