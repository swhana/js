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

    removeEdge(vertex1, vertex2) {
        if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined)
            delete this.edges[vertex1][vertex2];
        if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined)
            delete this.edges[vertex2][vertex1];
    }

    removeVertex(vertex) {
        for (let adjVertex in this.edges[vertex]) {
            this.removeEdge(adjVertex, vertex);
        }

        delete this.edges[vertex];
    }
}
