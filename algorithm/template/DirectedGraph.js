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
}

function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


let graph = new DirectedGraph();
graph.addVertex("A"); graph.addVertex("B"); graph.addVertex("C"); graph.addVertex("D");
graph.addEdge("A", "B", 1); graph.addEdge("A", "D", 1); graph.addEdge("B", "C", 1); graph.addEdge("C", "A", 1);

console.log(graph);
console.log(graph.dijkstra('A'));