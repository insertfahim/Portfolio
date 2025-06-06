import {
  Container,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  OrderedList,
  Image,
  Code
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Post = () => (
  <Layout title="Advanced Data Structures for Coding Interviews">
    <Container>
      <Heading as="h1" fontSize={24} mb={4}>
        Advanced Data Structures for Coding Interviews
      </Heading>
      <Text color="gray.500" fontSize="sm" mb={8}>
        June 5, 2025 • 15 min read
      </Text>
      <Image
        src="/images/Advanced Data Structures for Coding Interviews.png"
        alt="Advanced Data Structures"
        borderRadius="lg"
        w="full"
        mb={6}
      />
      <P>
        In the competitive landscape of technical interviews, particularly at
        top tech companies, a solid understanding of advanced data structures
        can be the difference between success and failure. While basic data
        structures like arrays, linked lists, and hash tables form the
        foundation, more sophisticated structures often hold the key to solving
        complex algorithmic problems efficiently.
      </P>
      <P>
        In this comprehensive guide, I&apos;ll walk you through several advanced data
        structures that frequently appear in coding interviews, explaining their
        mechanics, implementation details, and practical applications. My goal
        is to demystify these powerful tools and help you add them to your
        problem-solving arsenal.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        1. Trie (Prefix Tree)
      </Heading>
      <P>
        A trie is a tree-like data structure that excels at storing and
        retrieving strings from a dictionary. Unlike binary search trees, tries
        store characters along edges rather than nodes, making them particularly
        efficient for prefix-based operations.
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Key Operations &amp; Complexity
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text>
          <strong>Insertion:</strong> O(m) where m is the length of the string
        </Text>
        <Text>
          <strong>Search:</strong> O(m) for exact match or prefix
        </Text>
        <Text>
          <strong>Memory:</strong> O(ALPHABET_SIZE × N × M) where N is the
          number of strings and M is average length
        </Text>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Implementation Sketch
      </Heading>
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
          {`class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let current = this.root;
    
    for (let char of word) {
      if (!(char in current.children)) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    
    current.isEndOfWord = true;
  }
  
  search(word) {
    let current = this.root;
    
    for (let char of word) {
      if (!(char in current.children)) {
        return false;
      }
      current = current.children[char];
    }
    
    return current.isEndOfWord;
  }
  
  startsWith(prefix) {
    let current = this.root;
    
    for (let char of prefix) {
      if (!(char in current.children)) {
        return false;
      }
      current = current.children[char];
    }
    
    return true;
  }
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Interview Applications
      </Heading>
      <UnorderedList mb={6} pl={6}>
        <ListItem>Autocomplete systems and type-ahead features</ListItem>
        <ListItem>Spell checkers</ListItem>
        <ListItem>IP routing (longest prefix matching)</ListItem>
        <ListItem>
          Word games (like finding all words in a boggle board)
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        2. Segment Tree
      </Heading>
      <P>
        Segment trees are powerful data structures for handling range queries
        and updates on arrays. They allow operations like finding the minimum,
        maximum, or sum over a range of elements, as well as updating individual
        elements, all in logarithmic time.
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Key Operations &amp; Complexity
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text>
          <strong>Construction:</strong> O(n) where n is the array size
        </Text>
        <Text>
          <strong>Range Query:</strong> O(log n)
        </Text>
        <Text>
          <strong>Update:</strong> O(log n)
        </Text>
        <Text>
          <strong>Memory:</strong> O(4n) ≈ O(n)
        </Text>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Implementation Sketch (Range Sum Query)
      </Heading>
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
          {`class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.build(arr, 1, 0, this.n - 1);
  }
  
  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start];
      return;
    }
    
    const mid = Math.floor((start + end) / 2);
    this.build(arr, 2 * node, start, mid);
    this.build(arr, 2 * node + 1, mid + 1, end);
    
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }
  
  queryRange(node, start, end, left, right) {
    if (left > end || right < start) {
      return 0; // Outside of range
    }
    
    if (left <= start && right >= end) {
      return this.tree[node]; // Complete overlap
    }
    
    // Partial overlap - check both children
    const mid = Math.floor((start + end) / 2);
    const leftSum = this.queryRange(2 * node, start, mid, left, right);
    const rightSum = this.queryRange(2 * node + 1, mid + 1, end, left, right);
    
    return leftSum + rightSum;
  }
  
  update(node, start, end, idx, val) {
    if (start === end) {
      this.tree[node] = val;
      return;
    }
    
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) {
      this.update(2 * node, start, mid, idx, val);
    } else {
      this.update(2 * node + 1, mid + 1, end, idx, val);
    }
    
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }
  
  // Public methods
  query(left, right) {
    return this.queryRange(1, 0, this.n - 1, left, right);
  }
  
  updateValue(idx, val) {
    this.update(1, 0, this.n - 1, idx, val);
  }
}`}
        </Code>
      </Box>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        3. Fenwick Tree (Binary Indexed Tree)
      </Heading>
      <P>
        Fenwick trees, also known as Binary Indexed Trees (BIT), provide an
        efficient way to calculate prefix sums in an array while supporting
        updates. They&apos;re more space-efficient than segment trees for certain
        types of range queries.
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Key Operations & Complexity
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text>
          <strong>Construction:</strong> O(n log n) or O(n) with optimization
        </Text>
        <Text>
          <strong>Prefix Sum Query:</strong> O(log n)
        </Text>
        <Text>
          <strong>Update:</strong> O(log n)
        </Text>
        <Text>
          <strong>Memory:</strong> O(n)
        </Text>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Implementation Sketch
      </Heading>
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
          {`class FenwickTree {
  constructor(size) {
    this.size = size;
    this.bit = new Array(size + 1).fill(0);
  }
  
  // Update value at index idx
  update(idx, delta) {
    idx++; // 1-based indexing
    while (idx <= this.size) {
      this.bit[idx] += delta;
      idx += idx & -idx; // Add LSB
    }
  }
  
  // Get prefix sum up to index idx
  prefixSum(idx) {
    idx++; // 1-based indexing
    let sum = 0;
    while (idx > 0) {
      sum += this.bit[idx];
      idx -= idx & -idx; // Remove LSB
    }
    return sum;
  }
  
  // Get sum in range [left, right]
  rangeSum(left, right) {
    return this.prefixSum(right) - this.prefixSum(left - 1);
  }
  
  // Build from array
  static fromArray(arr) {
    const n = arr.length;
    const tree = new FenwickTree(n);
    for (let i = 0; i < n; i++) {
      tree.update(i, arr[i]);
    }
    return tree;
  }
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Interview Applications
      </Heading>
      <UnorderedList mb={6} pl={6}>
        <ListItem>Range sum queries with point updates</ListItem>
        <ListItem>Counting inversions in an array</ListItem>
        <ListItem>Finding the kth smallest element in a range</ListItem>
        <ListItem>2D range sum queries in matrices</ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        4. Disjoint Set Union (DSU) / Union-Find
      </Heading>
      <P>
        DSU is a data structure that keeps track of elements which are split
        into non-overlapping sets. It has two primary operations: finding which
        set an element belongs to and merging two sets.
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Key Operations & Complexity
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text>
          <strong>Find:</strong> O(α(n)) ≈ O(1) amortized with path compression
        </Text>
        <Text>
          <strong>Union:</strong> O(α(n)) ≈ O(1) amortized with rank/size
          optimization
        </Text>
        <Text>
          <strong>Memory:</strong> O(n)
        </Text>
        <Text>
          <em>
            Note: α(n) is the inverse Ackermann function, which grows extremely
            slowly
          </em>
        </Text>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Implementation Sketch
      </Heading>
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
          {`class DisjointSet {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
    this.count = size; // Number of components
  }
  
  // Find with path compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  
  // Union by rank
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return false;
    
    // Merge smaller rank tree into larger rank tree
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    this.count--; // Decrease component count
    return true;
  }
  
  // Check if two elements are in the same set
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  // Get number of disjoint sets
  getCount() {
    return this.count;
  }
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Interview Applications
      </Heading>
      <UnorderedList mb={6} pl={6}>
        <ListItem>Kruskal's algorithm for Minimum Spanning Tree</ListItem>
        <ListItem>Detecting cycles in undirected graphs</ListItem>
        <ListItem>Finding connected components</ListItem>
        <ListItem>Network connectivity problems</ListItem>
        <ListItem>Image segmentation in computer vision</ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        5. Sparse Table
      </Heading>
      <P>
        Sparse tables excel at answering range queries on static arrays,
        particularly for operations that are associative and idempotent (like
        min, max, gcd). They offer O(1) queries after preprocessing, making them
        faster than segment trees for immutable data.
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Key Operations & Complexity
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text>
          <strong>Construction:</strong> O(n log n)
        </Text>
        <Text>
          <strong>Range Query:</strong> O(1) for idempotent operations (min,
          max, gcd)
        </Text>
        <Text>
          <strong>Memory:</strong> O(n log n)
        </Text>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Implementation Sketch (Range Minimum Query)
      </Heading>
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
          {`class SparseTable {
  constructor(arr) {
    this.n = arr.length;
    this.logN = Math.floor(Math.log2(this.n)) + 1;
    this.table = Array(this.logN).fill().map(() => Array(this.n).fill(0));
    
    // Fill in the base case
    for (let i = 0; i < this.n; i++) {
      this.table[0][i] = arr[i];
    }
    
    // Build the sparse table
    for (let j = 1; j < this.logN; j++) {
      for (let i = 0; i + (1 << j) <= this.n; i++) {
        this.table[j][i] = Math.min(
          this.table[j-1][i],
          this.table[j-1][i + (1 << (j-1))]
        );
      }
    }
  }
  
  // Query the minimum value in range [left, right]
  queryMin(left, right) {
    const length = right - left + 1;
    const log = Math.floor(Math.log2(length));
    
    return Math.min(
      this.table[log][left],
      this.table[log][right - (1 << log) + 1]
    );
  }
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Interview Applications
      </Heading>
      <UnorderedList mb={6} pl={6}>
        <ListItem>Range minimum/maximum queries</ListItem>
        <ListItem>Lowest Common Ancestor (LCA) in trees</ListItem>
        <ListItem>Range GCD queries</ListItem>
        <ListItem>Long paths in graphs</ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Preparing for Interviews: Beyond Data Structures
      </Heading>
      <P>
        Understanding these advanced data structures is crucial, but excelling
        in technical interviews requires more:
      </P>
      <OrderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Recognize the patterns:</Text> Many interview
          problems are variations of classic problems. Learn to identify the
          underlying patterns.
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Start with brute force:</Text> Always begin
          with a simple solution, then optimize. This shows your thought process
          and ensures you have at least some solution.
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Practice communication:</Text> Explain your
          approach clearly. Think aloud about tradeoffs between different data
          structures.
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Prepare for follow-ups:</Text> Interviewers
          often ask how you'd extend your solution. Consider scalability and
          edge cases.
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Know your complexities:</Text> Be prepared to
          analyze the time and space complexity of your solutions.
        </ListItem>
      </OrderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        My Interview Experience with Advanced Data Structures
      </Heading>
      <P>
        In my experience interviewing at major tech companies, these advanced
        data structures have repeatedly been crucial to solving the most
        challenging problems. In one memorable FAANG interview, a seemingly
        complex problem about finding patterns in a large dataset became
        surprisingly elegant when approached with a trie structure.
      </P>
      <P>
        What's particularly interesting is how often these structures appear in
        disguise. The interviewer rarely says "use a segment tree here" -
        instead, they present a problem that requires efficient range queries or
        updates, leaving you to recognize the appropriate data structure.
      </P>
      <P>
        My advice: don't just memorize implementations. Understand the
        fundamental properties that make each structure suitable for specific
        types of problems. This deeper understanding will help you apply these
        tools creatively in novel situations.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Conclusion
      </Heading>
      <P>
        Advanced data structures represent some of the most powerful tools in a
        programmer's arsenal. While they may seem intimidating at first,
        mastering them opens the door to elegant solutions for complex problems
        that would otherwise be inefficient or unwieldy.
      </P>
      <P>
        Remember that these structures weren't created in a vacuum - they
        evolved to solve specific classes of problems efficiently. By
        understanding both their implementations and their applications, you'll
        not only be better prepared for technical interviews but also become a
        more effective problem solver in your day-to-day work.
      </P>
      <P>
        As you continue your preparation, practice implementing these structures
        from scratch and solve problems that utilize them. Over time, you'll
        develop an intuition for which structure is most appropriate for a given
        problem - a skill that distinguishes exceptional engineers from the
        merely good.
      </P>
      <Box mt={10} p={4} bg="whiteAlpha.200" borderRadius="md">
        <Text fontStyle="italic">
          If you found this post helpful, check out my other articles on
          competitive programming strategies and algorithm design. Happy coding,
          and best of luck with your interviews!
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Post
export { getServerSideProps } from '../../components/chakra'
