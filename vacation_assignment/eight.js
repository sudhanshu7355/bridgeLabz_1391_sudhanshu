//topological
class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjList[vertex1].push(vertex2);
    }

    topologicalSortDFS() {
        let visited = {};
        let result = [];

        for (let vertex in this.adjList) {
            if (!visited[vertex]) {
                this._dfs(vertex, visited, result);
            }
        }

        return result;
    }

    _dfs(vertex, visited, result) {
        visited[vertex] = true;

        for (let neighbor of this.adjList[vertex]) {
            if (!visited[neighbor]) {
                this._dfs(neighbor, visited, result);
            }
        }

        result.unshift(vertex);
    }

    topologicalSortKahn() {
        let inDegree = {};
        let queue = [];
        let result = [];

        for (let vertex in this.adjList) {
            inDegree[vertex] = 0;
        }

        for (let vertex in this.adjList) {
            for (let neighbor of this.adjList[vertex]) {
                inDegree[neighbor]++;
            }
        }

        for (let vertex in this.adjList) {
            if (inDegree[vertex] === 0) {
                queue.push(vertex);
            }
        }

        while (queue.length > 0) {
            let vertex = queue.shift();
            result.push(vertex);

            for (let neighbor of this.adjList[vertex]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(2, 4);

console.log(graph.topologicalSortDFS()); 
console.log(graph.topologicalSortKahn()); 