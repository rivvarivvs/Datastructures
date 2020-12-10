class HashTable {
    //create instance with a size, if no size given, size is a prime number
    constructor(size=53) {
        this.keyArray = new Array(size)
    }
    _hash(key) {
        let total = 0
        let PRIME = 31
        for (let i=0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keyArray.length
        }
        return total
    }
    //store k/v pair in hash table via separate chaining
    set(key, value) {
        let index = this._hash(key)
        if(!this.keyArray[index]) {
            this.keyArray[index] = []
        }
        this.keyArray[index].push([key, value])
    }

    //retrieve value from key or returns undefined if not found
    get(key) {
        let index = this._hash(key)
        if (this.key[index]) {
            for (let i = 0; i < this.keyArray[index].length; i++) {
                if (this.keyArray[index][i][0] === key) {
                    return this.keyArray[index][i][1]
                }
            }
        } 
        return undefined
    }

    //function to retrieve all keys
    keys() {
        let keysArray = []
        for (let i = 0; i < this.keyArray.length; i++) {
            if (this.keyArray[i]) {
                for(let j = 0; j < this.keyArray[i].length; j++) {
                    if (!keysArray.includes(this.keyArray[i][j][0])) {
                        keysArray.push(this.keyArray[i][j][0])
                    }
                }
            }
        } 
        return keysArray
    }

    //function to retrieve all values
    values() {
        let valuesArray = []
        for (let i = 0; i<this.keyArray.length; i++) {
            if(this.keyArray[i]) {
                for(let j = 0; j < this.keyArray[i].length; j++) {
                    if(!this.valuesArray.includes(this.keyArray[i][j][1])) {
                        valuesArray.push(this.keyArray[i][j][1])
                    }
                }
            }
        } return valuesArray
    }
}