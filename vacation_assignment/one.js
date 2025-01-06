function dijkstra(graph, source) {
    const distances = {};
    const previous = {};
    const priorityQueue = [];
  
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
  
    distances[source] = 0;
  
    priorityQueue.push({ distance: 0, vertex: source });
  
    while (priorityQueue.length > 0) {
      const { distance, vertex } = priorityQueue.shift();
  
      if (distance > distances[vertex]) {
        continue;
      }
  
      for (const neighbor in graph[vertex]) {
        const weight = graph[vertex][neighbor];
        const tentativeDistance = distance + weight;
  
        if (tentativeDistance < distances[neighbor]) {
          distances[neighbor] = tentativeDistance;
          previous[neighbor] = vertex;
          priorityQueue.push({ distance: tentativeDistance, vertex: neighbor });
        }
      }
    }
  
    return { distances, previous };
  }
  
  
  const graph = {
    1: { 2: 4, 3: 2 },
    2: { 4: 7, 5: 1 },
    3: { 6: 5 },
    5: { 6: 3 }
  };
  
  
  const source = 1;
  
  
  const { distances, previous } = dijkstra(graph, source);
  
  
  for (const vertex in distances) {
    console.log(`Shortest distance from ${source} to ${vertex}: ${distances[vertex]}`);
  }
  
  
  for (const vertex in previous) {
    console.log(`Previous vertex in shortest path from ${source} to ${vertex}: ${previous[vertex]}`);
  }