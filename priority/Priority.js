function PriorityQueue() {
    const collection = []

    this.enqueue = (element) => {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false
            for(let i = 0; i<collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element)
                    added = true
                    break
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
    }
    this.dequeue = () => {
        const value = collection.shift()
        return value[0]
    }
    this.front = () => {
        return collection[0]
    }
    this.size = () => {
        return collection.length
    }
    this.isEmpty = () => {
        return (collection.length === 0)
    }
}
