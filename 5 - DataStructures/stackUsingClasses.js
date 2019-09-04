class Stack extends Array {
    constructor(name, ...items) {
        super(...items);
        this.name = name;
    }
}