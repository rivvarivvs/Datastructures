const LinkedList = require('./LinkedList')

describe('#insertHead', () => {
    test('it adds the element to the beginning of list', () => {
        const ll = new LinkedList()
        ll.insertHead(10)
        const oldHead = ll.head
        ll.insertHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})