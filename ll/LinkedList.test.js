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

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(-1)).toBe(null)
        })
    })

    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(5)).toBe(null)
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll = LinkedList.fromValues(10,20)

            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in the middle', () => {
        test('it returns the e at that index', () => {
            const ll = LinkedList.fromValues(10,20,30,40)

            expect(ll.getByIndex(2).value).toBe(30)
        })
    })
})

describe('#insertIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertIndex(-1, 30)
    
            expect(ll.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertIndex(5, 30)
    
            expect(ll.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('it inserts at the head', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertIndex(0, 30)

            expect(ll.head.value).toBe(30)
            expect(ll.head.next.value).toBe(10)
            expect(ll.length).toBe(3)
        })
    })

    describe('with index in the middle', () => {
        test('it inserts at the index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.insertIndex(2, 50)
            const node = ll.getByIndex(2)

            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
            expect(ll.length).toBe(5)
        })
    })
})

describe('#remoteHead', () => {
    test('removes the head', () => {
        const ll = LinkedList.fromValues(10, 20, 30)
        ll.removeHead()

        expect(ll.head.value).toBe(20)
        expect(ll.length).toBe(2)
    })
})

describe('#removeIndex', () => {
    describe('with index less than 0', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.removeIndex(-1)
    
            expect(ll.length).toBe(2)
        })
    })

    describe('with index larger than length', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.removeIndex(6)
    
            expect(ll.length).toBe(2)
        })
    })

    describe('remove at index 0', () => {
        test('it removes the head', () => {
            const ll = LinkedList.fromValues(10, 20, 30)
            ll.removeIndex(0)
    
            expect(ll.length).toBe(2)
            expect(ll.head.value).toBe(20)
            expect(ll.head.next.value).toBe(30)
        })
    })

    describe('remove at given index', () => {
        test('removes from that specific index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50)
            ll.removeIndex(2)
            const node = ll.getByIndex(2)
    
            expect(ll.length).toBe(4)
            expect(node.value).toBe(40)
            expect(node.next.value).toBe(50)
        })
    })
})