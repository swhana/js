class Graph {
    constructor() {
        this.edges = {}; //간선
    }

    addVertex(vertex) {
        this.edges[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight) {
        if (weight == undefined) weight = 0;

        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }
}
