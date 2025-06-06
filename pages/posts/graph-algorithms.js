import {
  Container,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Image,
  Code
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Post = () => (
  <Layout title="Graph Algorithms Explained">
    <Container>
      <Heading as={'h1'} fontSize={24} mb={4}>
        Graph Algorithms Explained: From Basics to Advanced Applications
      </Heading>

      <Text color="gray.500" fontSize="sm" mb={8}>
        June 1, 2025 • 16 min read
      </Text>

      <Image
        src="/images/Graph Algorithms Explained.png"
        alt="Graph Algorithms Explained"
        borderRadius="lg"
        w="full"
        mb={6}
      />

      <P>
        Graph algorithms form the backbone of countless applications in computer
        science, from social networks and mapping services to network routing
        and artificial intelligence. Despite their ubiquity and importance, many
        developers find graph algorithms intimidating due to their mathematical
        nature and complex implementations.
      </P>

      <P>
        In this comprehensive guide, I&apos;ll demystify the most important
        graph algorithms, explaining not just how they work, but also when and
        why to use them. Drawing from my experience in competitive programming
        and professional software development, I&apos;ll provide practical
        implementations and real-world applications that demonstrate the power
        of these algorithms.
      </P>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Understanding Graphs: The Fundamental Concepts
      </Heading>

      <P>
        Before diving into algorithms, let&apos;s establish a solid
        understanding of what graphs are and how they&apos;re represented in
        code:
      </P>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        Graph Terminology
      </Heading>

      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Vertex (Node):</Text> A fundamental unit in a
          graph
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Edge:</Text> A connection between two vertices
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Directed Graph:</Text> Edges have direction
          (one-way connections)
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Undirected Graph:</Text> Edges have no
          direction (two-way connections)
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Weighted Graph:</Text> Edges have associated
          values (distances, costs, etc.)
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Path:</Text> A sequence of vertices connected
          by edges
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Cycle:</Text> A path that begins and ends at
          the same vertex
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Connected Component:</Text> A subset of
          vertices where any vertex can reach any other
        </ListItem>
      </UnorderedList>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        Graph Representations
      </Heading>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">1. Adjacency Matrix</Text>
        <Text mt={2}>
          A 2D array where matrix[i][j] represents an edge from vertex i to
          vertex j.
        </Text>
        <Box as="pre" mt={2} fontSize="sm">
          <Code>
            {`// Example for a graph with 4 vertices
const adjMatrix = [
  [0, 1, 0, 1],  // Vertex 0 is connected to 1 and 3
  [1, 0, 1, 0],  // Vertex 1 is connected to 0 and 2
  [0, 1, 0, 1],  // Vertex 2 is connected to 1 and 3
  [1, 0, 1, 0]   // Vertex 3 is connected to 0 and 2
];`}
          </Code>
        </Box>
        <Text fontWeight="bold" mt={4}>
          Pros:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>O(1) time to check if an edge exists</ListItem>
          <ListItem>Simple to implement and understand</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={2}>
          Cons:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>
            O(V²) space complexity (inefficient for sparse graphs)
          </ListItem>
          <ListItem>O(V) time to find all neighbors of a vertex</ListItem>
        </UnorderedList>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">2. Adjacency List</Text>
        <Text mt={2}>
          An array of lists, where each list contains the neighbors of the
          corresponding vertex.
        </Text>
        <Box as="pre" mt={2} fontSize="sm">
          <Code>
            {`// Example for the same graph
const adjList = [
  [1, 3],  // Vertex 0 is connected to 1 and 3
  [0, 2],  // Vertex 1 is connected to 0 and 2
  [1, 3],  // Vertex 2 is connected to 1 and 3
  [0, 2]   // Vertex 3 is connected to 0 and 2
];`}
          </Code>
        </Box>
        <Text fontWeight="bold" mt={4}>
          Pros:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>
            O(V+E) space complexity (efficient for sparse graphs)
          </ListItem>
          <ListItem>
            O(degree(v)) time to find all neighbors of vertex v
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={2}>
          Cons:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>O(degree(v)) time to check if an edge exists</ListItem>
          <ListItem>Slightly more complex implementation</ListItem>
        </UnorderedList>
      </Box>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Essential Graph Traversal Algorithms
      </Heading>

      <P>
        Graph traversal forms the foundation for most other graph algorithms.
        The two primary traversal methods are Breadth-First Search (BFS) and
        Depth-First Search (DFS):
      </P>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        Breadth-First Search (BFS)
      </Heading>

      <P>
        BFS explores a graph level by level, visiting all neighbors of a vertex
        before moving to the next level. It uses a queue data structure for this
        level-order traversal.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function bfs(graph, start) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const queue = [start];
  const distance = new Array(n).fill(-1);
  
  visited[start] = true;
  distance[start] = 0;
  
  while (queue.length > 0) {
    const vertex = queue.shift();
    
    // Process current vertex
    console.log(\`Visiting vertex \${vertex} at distance \${distance[vertex]}\`);
    
    // Visit all neighbors
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        distance[neighbor] = distance[vertex] + 1;
        queue.push(neighbor);
      }
    }
  }
  
  return distance; // Returns distances from start to all vertices
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Key Applications of BFS:</Text>
        <UnorderedList mt={2}>
          <ListItem>Finding shortest paths in unweighted graphs</ListItem>
          <ListItem>Level-order traversal of trees</ListItem>
          <ListItem>Finding connected components</ListItem>
          <ListItem>Testing bipartiteness of a graph</ListItem>
          <ListItem>Web crawlers (exploring web pages layer by layer)</ListItem>
          <ListItem>
            Social network friend suggestions (people at distance 2)
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(V + E)
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V)
      </Box>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        Depth-First Search (DFS)
      </Heading>

      <P>
        DFS explores a graph by going as deep as possible along each branch
        before backtracking. It uses recursion or a stack for this
        depth-priority traversal.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function dfs(graph, start) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  
  // DFS helper function
  function dfsHelper(vertex) {
    visited[vertex] = true;
    
    // Process current vertex
    console.log(\`Visiting vertex \${vertex}\`);
    
    // Recursively visit all unvisited neighbors
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        dfsHelper(neighbor);
      }
    }
  }
  
  dfsHelper(start);
  
  return visited;
}

// Iterative DFS using a stack
function dfsIterative(graph, start) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const stack = [start];
  
  while (stack.length > 0) {
    const vertex = stack.pop();
    
    if (!visited[vertex]) {
      visited[vertex] = true;
      console.log(\`Visiting vertex \${vertex}\`);
      
      // Add neighbors to stack in reverse order
      // to match recursive DFS traversal order
      for (let i = graph[vertex].length - 1; i >= 0; i--) {
        const neighbor = graph[vertex][i];
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
  
  return visited;
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Key Applications of DFS:</Text>
        <UnorderedList mt={2}>
          <ListItem>Detecting cycles in a graph</ListItem>
          <ListItem>
            Topological sorting of a directed acyclic graph (DAG)
          </ListItem>
          <ListItem>Finding strongly connected components</ListItem>
          <ListItem>Solving mazes and puzzles</ListItem>
          <ListItem>
            Generating all possible configurations (e.g., permutations)
          </ListItem>
          <ListItem>Finding bridges and articulation points in graphs</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(V + E)
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V) in worst case (for the recursion stack)
      </Box>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Shortest Path Algorithms
      </Heading>

      <P>
        Finding the shortest path between vertices is one of the most common
        graph problems. Different algorithms are suited for different scenarios:
      </P>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        1. Dijkstra&apos;s Algorithm
      </Heading>

      <P>
        Dijkstra&apos;s algorithm finds the shortest path from a source vertex
        to all other vertices in a weighted graph with non-negative weights.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function dijkstra(graph, start) {
  const n = graph.length;
  const dist = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  const prev = new Array(n).fill(-1);
  
  dist[start] = 0;
  
  for (let i = 0; i < n; i++) {
    // Find vertex with minimum distance
    let minDist = Infinity;
    let minVertex = -1;
    
    for (let v = 0; v < n; v++) {
      if (!visited[v] && dist[v] < minDist) {
        minDist = dist[v];
        minVertex = v;
      }
    }
    
    if (minVertex === -1) break; // No reachable vertices left
    
    visited[minVertex] = true;
    
    // Update distances to neighbors
    for (let v = 0; v < n; v++) {
      if (graph[minVertex][v] > 0 && !visited[v]) {
        const newDist = dist[minVertex] + graph[minVertex][v];
        if (newDist < dist[v]) {
          dist[v] = newDist;
          prev[v] = minVertex;
        }
      }
    }
  }
  
  return { dist, prev }; // Returns distances and predecessor array
}

// More efficient implementation using a priority queue would be:
// Time complexity: O((V+E)logV) instead of O(V²)`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">When to Use:</Text>
        <UnorderedList mt={2}>
          <ListItem>
            Finding shortest paths from a source to all other vertices
          </ListItem>
          <ListItem>All edge weights are non-negative</ListItem>
          <ListItem>Works for both directed and undirected graphs</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Real-world Applications:
        </Text>
        <UnorderedList mt={2}>
          <ListItem>GPS navigation systems</ListItem>
          <ListItem>Network routing protocols</ListItem>
          <ListItem>Flight scheduling</ListItem>
          <ListItem>Robotics path planning</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(V² + E) with array implementation, O((V+E)logV) with priority queue
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V)
      </Box>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        2. Bellman-Ford Algorithm
      </Heading>

      <P>
        Bellman-Ford finds shortest paths from a source vertex to all other
        vertices and can handle negative edge weights. It can also detect
        negative cycles.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function bellmanFord(graph, edges, start, n) {
  // graph: adjacency list, edges: list of [u, v, weight], n: number of vertices
  
  const dist = new Array(n).fill(Infinity);
  const prev = new Array(n).fill(-1);
  
  dist[start] = 0;
  
  // Relax all edges |V| - 1 times
  for (let i = 0; i < n - 1; i++) {
    for (const [u, v, weight] of edges) {
      if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
        prev[v] = u;
      }
    }
  }
  
  // Check for negative weight cycles
  for (const [u, v, weight] of edges) {
    if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
      console.log("Graph contains negative weight cycle");
      return null;
    }
  }
  
  return { dist, prev };
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">When to Use:</Text>
        <UnorderedList mt={2}>
          <ListItem>Graph may contain negative edge weights</ListItem>
          <ListItem>Need to detect negative cycles</ListItem>
          <ListItem>
            All vertices need to be reached from a single source
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Real-world Applications:
        </Text>
        <UnorderedList mt={2}>
          <ListItem>
            Currency exchange rate calculations (detecting arbitrage
            opportunities)
          </ListItem>
          <ListItem>Network routing with variable delays</ListItem>
          <ListItem>Traffic flow analysis with congestion modeling</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(V×E)
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V)
      </Box>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        3. Floyd-Warshall Algorithm
      </Heading>

      <P>
        Floyd-Warshall finds shortest paths between all pairs of vertices in a
        weighted graph, including those with negative edges (but no negative
        cycles).
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function floydWarshall(graph) {
  const n = graph.length;
  const dist = JSON.parse(JSON.stringify(graph)); // Deep copy
  const next = Array(n).fill().map(() => Array(n).fill(-1));
  
  // Initialize the next matrix for path reconstruction
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && dist[i][j] < Infinity) {
        next[i][j] = j;
      }
    }
  }
  
  // Main algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
          next[i][j] = next[i][k];
        }
      }
    }
  }
  
  // Check for negative cycles
  for (let i = 0; i < n; i++) {
    if (dist[i][i] < 0) {
      console.log("Graph contains negative cycle");
      return null;
    }
  }
  
  return { dist, next };
}

// Path reconstruction
function getPath(next, u, v) {
  if (next[u][v] === -1) return [];
  
  const path = [u];
  while (u !== v) {
    u = next[u][v];
    path.push(u);
  }
  
  return path;
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">When to Use:</Text>
        <UnorderedList mt={2}>
          <ListItem>Need shortest paths between all pairs of vertices</ListItem>
          <ListItem>Graph is dense (E ≈ V²)</ListItem>
          <ListItem>
            Graph has negative edge weights (but no negative cycles)
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Real-world Applications:
        </Text>
        <UnorderedList mt={2}>
          <ListItem>Network routing tables</ListItem>
          <ListItem>Finding transitive closure of a graph</ListItem>
          <ListItem>Optimal delivery route planning</ListItem>
          <ListItem>
            Detecting arbitrage opportunities in currency exchange
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(V³)
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V²)
      </Box>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Minimum Spanning Tree Algorithms
      </Heading>

      <P>
        A Minimum Spanning Tree (MST) is a subset of edges that connects all
        vertices in a weighted, undirected graph with the minimum possible total
        edge weight.
      </P>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        1. Kruskal&apos;s Algorithm
      </Heading>

      <P>
        Kruskal&apos;s algorithm builds the MST by adding edges in order of
        increasing weight, skipping those that would create a cycle.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`// DisjointSet implementation from earlier section is used
function kruskal(edges, n) {
  // Sort edges by weight
  edges.sort((a, b) => a[2] - b[2]);
  
  const mst = [];
  const ds = new DisjointSet(n);
  let totalWeight = 0;
  
  for (const [u, v, weight] of edges) {
    if (!ds.connected(u, v)) {
      ds.union(u, v);
      mst.push([u, v, weight]);
      totalWeight += weight;
      
      // Early termination if MST is complete
      if (mst.length === n - 1) break;
    }
  }
  
  return { mst, totalWeight };
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">When to Use:</Text>
        <UnorderedList mt={2}>
          <ListItem>Graph is sparse (E much less than V²)</ListItem>
          <ListItem>
            Edge weights are already sorted or easily sortable
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(E log E) or O(E log V)
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V + E)
      </Box>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        2. Prim&apos;s Algorithm
      </Heading>

      <P>
        Prim&apos;s algorithm builds the MST by starting from a single vertex
        and continuously adding the lowest-weight edge that connects a vertex in
        the tree to a vertex outside the tree.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function prim(graph, start = 0) {
  const n = graph.length;
  const mst = [];
  const visited = new Array(n).fill(false);
  const minEdge = new Array(n).fill(Infinity);
  const parent = new Array(n).fill(-1);
  
  minEdge[start] = 0;
  
  for (let i = 0; i < n; i++) {
    let minWeight = Infinity;
    let minVertex = -1;
    
    // Find vertex with minimum edge weight
    for (let v = 0; v < n; v++) {
      if (!visited[v] && minEdge[v] < minWeight) {
        minWeight = minEdge[v];
        minVertex = v;
      }
    }
    
    if (minVertex === -1) break; // No more vertices to add
    
    visited[minVertex] = true;
    
    // Add edge to MST
    if (parent[minVertex] !== -1) {
      mst.push([parent[minVertex], minVertex, graph[parent[minVertex]][minVertex]]);
    }
    
    // Update min edge weights for adjacent vertices
    for (let v = 0; v < n; v++) {
      if (graph[minVertex][v] > 0 && !visited[v] && graph[minVertex][v] < minEdge[v]) {
        minEdge[v] = graph[minVertex][v];
        parent[v] = minVertex;
      }
    }
  }
  
  return mst;
}

// More efficient implementation using a priority queue would be:
// Time complexity: O(E log V) instead of O(V²)`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">When to Use:</Text>
        <UnorderedList mt={2}>
          <ListItem>Graph is dense (E ≈ V²)</ListItem>
          <ListItem>Need to build MST starting from a specific vertex</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Real-world Applications of MST:
        </Text>
        <UnorderedList mt={2}>
          <ListItem>Network design (minimizing cable length)</ListItem>
          <ListItem>Cluster analysis in data mining</ListItem>
          <ListItem>Image segmentation in computer vision</ListItem>
          <ListItem>
            Approximation algorithms for NP-hard problems like TSP
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={4}>
          Time Complexity:
        </Text>{' '}
        O(V²) with array implementation, O(E log V) with priority queue
        <Text fontWeight="bold" mt={2}>
          Space Complexity:
        </Text>{' '}
        O(V)
      </Box>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Advanced Graph Algorithms
      </Heading>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        1. Topological Sort
      </Heading>

      <P>
        Topological sorting arranges the vertices of a directed acyclic graph
        (DAG) in a linear order such that for every directed edge (u, v), vertex
        u comes before vertex v.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function topologicalSort(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const result = [];
  
  function dfs(vertex) {
    visited[vertex] = true;
    
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
    
    // Add vertex to result after visiting all descendants
    result.unshift(vertex);
  }
  
  // Process all vertices
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  
  return result;
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Applications:</Text>
        <UnorderedList mt={2}>
          <ListItem>Scheduling tasks with dependencies</ListItem>
          <ListItem>
            Build systems (compiling source files in correct order)
          </ListItem>
          <ListItem>Course prerequisites planning</ListItem>
          <ListItem>Symbol resolution in linkers</ListItem>
        </UnorderedList>
      </Box>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        2. Strongly Connected Components
      </Heading>

      <P>
        A strongly connected component (SCC) is a maximal subgraph where every
        vertex is reachable from every other vertex. Kosaraju&apos;s algorithm
        is commonly used to find all SCCs in a directed graph.
      </P>

      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        overflowX="auto"
        fontSize="sm"
      >
        <Code>
          {`function kosarajuSCC(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const finishOrder = [];
  const scc = [];
  
  // Create reversed graph
  const reversed = Array(n).fill().map(() => []);
  for (let u = 0; u < n; u++) {
    for (const v of graph[u]) {
      reversed[v].push(u);
    }
  }
  
  // First DFS to get finishing order
  function dfs1(vertex) {
    visited[vertex] = true;
    
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        dfs1(neighbor);
      }
    }
    
    finishOrder.push(vertex);
  }
  
  // Second DFS to find SCCs
  function dfs2(vertex, component) {
    visited[vertex] = true;
    component.push(vertex);
    
    for (const neighbor of reversed[vertex]) {
      if (!visited[neighbor]) {
        dfs2(neighbor, component);
      }
    }
  }
  
  // Run first DFS on original graph
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs1(i);
    }
  }
  
  // Reset visited array for second DFS
  visited.fill(false);
  
  // Run second DFS on reversed graph in order of finishing times
  while (finishOrder.length > 0) {
    const vertex = finishOrder.pop();
    if (!visited[vertex]) {
      const component = [];
      dfs2(vertex, component);
      scc.push(component);
    }
  }
  
  return scc;
}`}
        </Code>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Applications:</Text>
        <UnorderedList mt={2}>
          <ListItem>Finding cycles in directed graphs</ListItem>
          <ListItem>Solving 2-SAT problems</ListItem>
          <ListItem>Analysis of social networks and web graphs</ListItem>
          <ListItem>
            Identifying strongly connected regions in transportation networks
          </ListItem>
        </UnorderedList>
      </Box>

      <Heading as={'h3'} fontSize={16} mt={6} mb={3}>
        3. Articulation Points and Bridges
      </Heading>

      <P>
        Articulation points (cut vertices) are vertices whose removal increases
        the number of connected components. Bridges are edges whose removal
        increases the number of connected components.
      </P>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Applications:</Text>
        <UnorderedList mt={2}>
          <ListItem>Network reliability analysis</ListItem>
          <ListItem>
            Identifying critical infrastructure in transportation networks
          </ListItem>
          <ListItem>Finding weak points in computer networks</ListItem>
          <ListItem>Biconnected components in graphs</ListItem>
        </UnorderedList>
      </Box>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Graph Algorithms in the Real World
      </Heading>

      <P>
        Let&apos;s explore some fascinating real-world applications of graph
        algorithms:
      </P>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">1. Social Network Analysis</Text>
        <UnorderedList mt={2}>
          <ListItem>
            Community detection using graph clustering algorithms
          </ListItem>
          <ListItem>Influence measurement with centrality metrics</ListItem>
          <ListItem>
            Friend recommendation using common neighbors and path-based metrics
          </ListItem>
          <ListItem>
            Information flow modeling with graph propagation algorithms
          </ListItem>
        </UnorderedList>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">2. Recommendation Systems</Text>
        <UnorderedList mt={2}>
          <ListItem>Collaborative filtering using bipartite graphs</ListItem>
          <ListItem>
            Content similarity using graph embedding techniques
          </ListItem>
          <ListItem>
            Knowledge graphs for context-aware recommendations
          </ListItem>
        </UnorderedList>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">3. Geographical Information Systems</Text>
        <UnorderedList mt={2}>
          <ListItem>Route planning with shortest path algorithms</ListItem>
          <ListItem>Traffic flow optimization</ListItem>
          <ListItem>Location-based service area calculations</ListItem>
          <ListItem>Emergency response planning</ListItem>
        </UnorderedList>
      </Box>

      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">4. Computer Networks</Text>
        <UnorderedList mt={2}>
          <ListItem>
            Routing protocols (OSPF, BGP) using variants of Dijkstra&apos;s
            algorithm
          </ListItem>
          <ListItem>Network topology discovery</ListItem>
          <ListItem>Fault detection and resilience planning</ListItem>
        </UnorderedList>
      </Box>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        My Experience with Graph Algorithms in Competitive Programming
      </Heading>

      <P>
        Throughout my competitive programming journey, graph algorithms have
        consistently been among the most powerful tools in my problem-solving
        arsenal. I&apos;ve found that many seemingly unrelated problems can be
        reformulated as graph problems, unlocking elegant and efficient
        solutions.
      </P>

      <P>
        One particularly memorable contest involved a complex logistics
        optimization problem that initially seemed like a dynamic programming
        challenge. By reframing it as a minimum-cost flow problem on a carefully
        constructed graph, I was able to develop a solution that was both more
        intuitive and significantly faster than my initial approach.
      </P>

      <P>
        What I&apos;ve come to appreciate most about graph algorithms is their
        versatility. The same fundamental algorithms can be applied across
        diverse domains, from network design to computational biology, from
        social network analysis to compiler optimization. Mastering these
        algorithms provides you with a powerful set of tools applicable to
        countless real-world problems.
      </P>

      <Heading as={'h2'} fontSize={20} mt={8} mb={4}>
        Conclusion: The Power of Graph Thinking
      </Heading>

      <P>
        Graph algorithms represent one of the most versatile and powerful
        toolsets in computer science. By modeling problems as graphs, we can
        leverage centuries of mathematical theory and decades of algorithmic
        research to solve complex problems efficiently.
      </P>

      <P>
        Whether you&apos;re preparing for technical interviews, competing in
        programming contests, or building real-world applications, developing a
        strong intuition for graph algorithms will significantly enhance your
        problem-solving capabilities. The ability to recognize when and how to
        apply these algorithms separates exceptional engineers from the merely
        competent.
      </P>

      <P>
        As you continue your journey with graph algorithms, remember that
        practice is essential. Start with simple problems and gradually tackle
        more complex ones. Visualize the graphs, trace through the algorithms by
        hand, and build a mental library of problem patterns that can be solved
        with graph techniques.
      </P>

      <P>
        The world around us is full of networks and relationships that can be
        modeled as graphs. By mastering these algorithms, you&apos;re equipping
        yourself with the tools to understand and optimize these networks,
        whether they&apos;re social connections, transportation systems,
        computer networks, or abstract mathematical relationships.
      </P>

      <Box mt={10} p={4} bg="whiteAlpha.200" borderRadius="md">
        <Text fontStyle="italic">
          This post is part of my algorithm masterclass series. If you found
          this helpful, check out my other guides on dynamic programming,
          advanced data structures, and competitive programming strategies.
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Post
export { getServerSideProps } from '../../components/chakra'
