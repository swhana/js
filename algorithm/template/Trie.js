class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false; //현재 노드(문자)가 단어의 끝인지 여부
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (let i of word) {
            let node = curr.children[i];
            if (node === undefined) {
                node = new TrieNode();
                curr.children[i] = node;
            }
            curr = node;
        }

        //삽입하려는 단어의 모든 문자를 순회했다면 마지막 문자가 currNode가 될 것이므로 endOfWord를 true로 해준다
        curr.endOfWord = true;
    }

    search(word) {
        let curr = this.root; //항상 루트노드부터 탐색 시작
        for (let i of word) {
            let node = curr.children[i]; //curr의 자식 노드(curr 다음 문자)에 i가 있는지 판단
            if (node === undefined) {
                return false; //찾는 단어가 없음
            }
            curr = node; //다음 노드로
        }

        return curr.endOfWord; //endOfWord가 false일 경우 내가 찾는 단어가 아님(예를 들어 mom을 찾고 싶었는데 mommy만 trie에 들어있던 경우)
    }
}

let trie = new Trie();
trie.insert("sammie");
trie.insert("simran");

trie.search("simran"); //true
trie.search("fake"); //false
trie.search("sam"); //false