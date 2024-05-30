//지향성 그래프
class DirectedGraph {
    constructor() {
        this.edges = {}; //간선
    }

    //정점을 추가하면 그에 따른 간선도 따라온다
    addVertex(vertex) {
        this.edges[vertex] = {};
    }

    addEdge(st, ed, weight) {
        if (weight === undefined) weight = 0;
        //만약 무지향성 그래프라면 this.edges[ed][st]도 추가해줘야 함
        this.edges[st][ed] = weight;
    }

    removeEdge(st, ed) {
        if (this.edges[st] && this.edges[st][ed] !== undefined) {
            delete this.edges[st][ed]
        }
    }

    removeVertex(vertex) {
        //지우려는 정점과 인접한 모든 간선 제거
        for (adjVertex in this.edges[vertex]) {
            this.removeEdge(adjVertex, vertex);
        }

        delete this.edges[vertex];
    }

    traverseBFS(vertex, fn) {
        let queue = [];
        let visited = {};

        queue.push(vertex);
        while (queue.length) {
            let v = queue.shift();
            if (!visited[v]) {
                visited[v] = true;
                fn(v); //정점을 방문했을 때 할 작업

                //인접한 모든 정점을 queue에 푸시
                for (let adjVertex in this.edges[v]) {
                    queue.push(adjVertex);
                }
            }
        }
    }

    traverseDFS(vertex, fn) {
        let visited = {};
        this._traverseDFS(vertex, visited, fn);
    }

    _traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;
        fn(vertex); //정점을 방문했을 때 할 작업
        for (adjVertex in this.edges[vertex]) {
            if (!visited[adjVertex]) this._traverseDFS(adjVertex, visited, fn);
        }
    }

    dijkstra(start) {
        let nodes = {}; // 정점집합
        let dist = {}; // 거리 정리

        for (let vertex in this.edges) {
            dist[vertex] = Infinity; //출발점에서 vertex까지의 거리를 무한대로 초기화
            nodes[vertex] = this.edges[vertex];
        }

        dist[start] = 0; //출발점에서 출발점까지의 거리이므로 0

        while (!_isEmpty(nodes)) {
            let minDist = Infinity;
            let minNode = null;
            for (let node in nodes) {
                if (dist[node] < minDist) {
                    minDist = dist[node];
                    minNode = node;
                }
            }

            delete nodes[minNode]; //

            for (let adjVertex in this.edges[minNode]) {
                let altDist = dist[minNode] + this.edges[minNode][adjVertex]; //minNode를 경유해서 adjVertex까지 가는 거리

                //최소 거리 갱신
                if (altDist < dist[adjVertex]) {
                    dist[adjVertex] = altDist;
                }
            }
        }
        return dist; //거리 집합을 리턴
    }

    topologicalSort() {
        let visited = new Set();
        let stack = [];

        for (let v in this.edges) {
            if (visited.has(v) == false) this._topologicalSort(v, visited, stack);
        }

        return stack;
    }

    //위상정렬
    //결은 DFS와 같다
    _topologicalSort(vertex, visited, stack) {
        visited.add(vertex);

        //vertex에 인접한 모든 정점을 찾는다
        for (let v in this.edges[vertex]) {
            //방문한 적 없는 정점이면 위상정렬을 수행한다
            if (visited.has(v) == false) {
                this._topologicalSort(v, visited, stack);
            }
        }
        stack.unshift(vertex); //stack의 맨 밑에 vertex를 넣는다.
    }


}

function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


let graph = new DirectedGraph();
graph.addVertex("A"); graph.addVertex("B"); graph.addVertex("C"); graph.addVertex("D"); graph.addVertex("E"); graph.addVertex("F");
graph.addEdge("B", "A", 1); graph.addEdge("D", "C", 1); graph.addEdge("D", "B", 1); graph.addEdge("B", "A", 1); graph.addEdge("A", "F", 1); graph.addEdge("E", "C", 1);

console.log(graph);
console.log(graph.topologicalSort());