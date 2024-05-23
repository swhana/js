//Least Recently Used Caching

class LRUNode {
    constructor(key, value) {
        this.key = key;
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.keys = {};
        this.capacity = capacity;
        this.head = new LRUNode("Head Buffer", null);
        this.tail = new LRUNode("Tail Buffer", null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode(node) {
        let oldTail = this.tail.prev;
        oldTail.next = node;

        this.tail.prev = node;
        node.prev = oldTail;
        node.next = this.tail;
    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        next.prev = prev;
        prev.next = next;
    }

    get(key) {
        let node = this.keys[key];
        if (node == undefined) return null;
        else {
            //새로 참조되었기 때문에 맨 뒤로 노드를 옮겨주는 작업
            this.removeNode(node);
            this.addNode(node);
            return console.log(node.data);
        }
    }

    set(key, value) {
        let node = this.keys[key];
        if (node) this.removeNode(node);

        let newNode = new LRUNode(key, value);
        this.addNode(newNode);
        this.keys[key] = newNode;

        if (Object.keys(this.keys).length > this.capacity) {
            let oldHead = this.head.next;
            this.removeNode(oldHead);
            delete this.keys[oldHead.key];
        }

        console.log(this);
    }
}

let myLRU = new LRUCache(5);

myLRU.set(1, 1);
myLRU.set(2, 2);
myLRU.set(3, 3);
myLRU.set(4, 4);
myLRU.set(5, 5);
myLRU.get(1);
myLRU.get(1);
myLRU.get(2);
//1노드를 2번, 2노드를 1번 참조했기 때문에 가장 빈도가 낮은 3 4 5 중 테일에 가장 가까운 3 노드가 제거된다
myLRU.set(6, 6);
myLRU.get(6);