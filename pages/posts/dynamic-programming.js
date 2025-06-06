import {
  Container,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  OrderedList,
  Link,
  Image,
  Code,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Post = () => (
  <Layout title="Dynamic Programming Masterclass">
    <Container>
      <Heading as="h1" fontSize={24} mb={4}>
        Dynamic Programming Masterclass
      </Heading>
      <Text color="gray.500" fontSize="sm" mb={8}>
        June 3, 2025 • 18 min read
      </Text>{' '}
      <Image
        src="/images/Dynamic Programming Masterclass.png"
        alt="Dynamic Programming Masterclass"
        borderRadius="lg"
        w="full"
        mb={6}
      />
      <P>
        Dynamic Programming (DP) is one of the most powerful algorithmic
        paradigms in computer science, yet it remains challenging for many
        developers to master. In this comprehensive guide, I'll demystify
        dynamic programming, breaking down the core concepts, implementation
        patterns, and optimization techniques that will help you solve complex
        problems with elegance and efficiency.
      </P>
      <P>
        Drawing from my experience with competitive programming and technical
        interviews at top tech companies, I'll walk you through a structured
        approach to tackling DP problems that has consistently helped me convert
        intimidating challenges into manageable solutions.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Understanding the Essence of Dynamic Programming
      </Heading>
      <P>
        At its core, dynamic programming is a method for solving complex
        problems by breaking them down into simpler subproblems. It's
        particularly effective when:
      </P>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          The problem has overlapping subproblems (the same subproblems are
          solved multiple times)
        </ListItem>
        <ListItem>
          The problem exhibits optimal substructure (an optimal solution can be
          constructed from optimal solutions of its subproblems)
        </ListItem>
      </UnorderedList>
      <P>
        These two properties are what distinguish DP from other problem-solving
        techniques like divide-and-conquer. With DP, we solve each subproblem
        just once and store its solution in a table (memoization) to avoid
        redundant calculations, leading to significant performance improvements.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        The Dynamic Programming Framework
      </Heading>
      <P>
        When approaching any DP problem, I follow a systematic framework that
        helps demystify even the most complex challenges:
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        1. Define the State
      </Heading>
      <P>
        The state represents the current situation in the problem. Identifying
        the right state variables is often the most crucial step. Ask yourself:
        "What information do I need to make an optimal decision at each step?"
      </P>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Example:</Text> In the classic "Knapsack
        Problem," the state would be defined by (i, w):
        <UnorderedList mt={2}>
          <ListItem>
            i = the index of the current item being considered
          </ListItem>
          <ListItem>w = the remaining weight capacity of the knapsack</ListItem>
        </UnorderedList>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        2. Formulate the Recurrence Relation
      </Heading>
      <P>
        This is the mathematical expression that relates the current state to
        previous states. It's essentially the heart of your DP solution,
        expressing how to build optimal solutions from previously computed
        optimal subproblems.
      </P>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Example:</Text> For the Knapsack Problem, the
        recurrence relation would be:
        <Box as="pre" mt={2} fontSize="sm">
          <Code>
            {`dp[i][w] = max(
  dp[i-1][w],               // Skip the current item
  dp[i-1][w-weight[i]] + value[i]  // Take the current item
)`}
          </Code>
        </Box>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        3. Identify the Base Cases
      </Heading>
      <P>
        Base cases are the simplest subproblems whose solutions can be
        determined without further recursion. These serve as the foundation for
        building more complex solutions.
      </P>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Example:</Text> In our Knapsack example:
        <UnorderedList mt={2}>
          <ListItem>dp[0][w] = 0 for all w (no items means no value)</ListItem>
          <ListItem>
            dp[i][0] = 0 for all i (no capacity means no value)
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        4. Determine the Computation Order
      </Heading>
      <P>
        Since DP builds solutions from smaller subproblems, the order in which
        you compute them matters. There are two main approaches:
      </P>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Top-Down (Memoization):</Text> Start with the
        original problem and recursively solve subproblems, storing results in a
        memo table.
        <Text fontWeight="bold" mt={3}>
          Bottom-Up (Tabulation):
        </Text>{' '}
        Start with base cases and iteratively build up to the solution of the
        original problem using a DP table.
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        5. Analyze Space & Time Complexity
      </Heading>
      <P>The efficiency of a DP solution is determined by:</P>
      <UnorderedList mb={4} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Time Complexity:</Text> Usually O(states ×
          work per state)
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Space Complexity:</Text> Usually O(states) but
          can often be optimized
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Implementation Patterns: From Concept to Code
      </Heading>
      <P>Let's examine both implementation approaches in detail:</P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Top-Down Approach (Memoization)
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
          {`function knapsackTopDown(weights, values, capacity, n) {
  // Initialize memoization table with -1 (unsolved)
  const memo = Array(n + 1).fill().map(() => Array(capacity + 1).fill(-1));
    function dp(i, w) {
    // Base cases
    if (i === 0 || w === 0) return 0;
    
    // Return memoized result if available
    if (memo[i][w] !== -1) return memo[i][w];
    
    // Item is too heavy for current capacity
    if (weights[i-1] {'>'} w) {
      memo[i][w] = dp(i-1, w);
    } else {
      // Max of (skip item, take item)
      memo[i][w] = Math.max(
        dp(i-1, w),
        dp(i-1, w - weights[i-1]) + values[i-1]
      );
    }
    
    return memo[i][w];
  }
  
  return dp(n, capacity);
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Bottom-Up Approach (Tabulation)
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
          {`function knapsackBottomUp(weights, values, capacity, n) {
  // Initialize DP table
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    // Fill the DP table bottom-up
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      // Current item is too heavy
      if (weights[i-1] {'>'} w) {
        dp[i][w] = dp[i-1][w];
      } else {
        // Max of (skip item, take item)
        dp[i][w] = Math.max(
          dp[i-1][w],
          dp[i-1][w - weights[i-1]] + values[i-1]
        );
      }
    }
  }
  
  return dp[n][capacity];
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Comparison of Approaches
      </Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Aspect</Th>
            <Th>Top-Down (Memoization)</Th>
            <Th>Bottom-Up (Tabulation)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Implementation</Td>
            <Td>Usually easier and more intuitive</Td>
            <Td>Often requires more careful planning</Td>
          </Tr>
          <Tr>
            <Td>Stack Usage</Td>
            <Td>Uses recursion (stack space)</Td>
            <Td>Iterative (no stack overhead)</Td>
          </Tr>
          <Tr>
            <Td>Computation</Td>
            <Td>Computes only needed states</Td>
            <Td>Computes all states in the table</Td>
          </Tr>
          <Tr>
            <Td>Space Optimization</Td>
            <Td>Harder to optimize space</Td>
            <Td>Often easier to optimize space</Td>
          </Tr>
          <Tr>
            <Td>Best For</Td>
            <Td>Problems with many unnecessary states</Td>
            <Td>Problems where most/all states are needed</Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Common DP Patterns and Problem Types
      </Heading>
      <P>
        After solving hundreds of DP problems, I've observed that many fall into
        recognizable patterns. Familiarizing yourself with these patterns can
        significantly accelerate your problem-solving process:
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        1. Linear Sequence DP
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Pattern:</Text> Problems involving a linear
        sequence where decisions at each position depend on previous positions.
        <Text fontWeight="bold" mt={3}>
          Examples:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>Maximum Subarray Sum</ListItem>
          <ListItem>Longest Increasing Subsequence</ListItem>
          <ListItem>House Robber (non-adjacent sum)</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={3}>
          State Definition Example:
        </Text>{' '}
        dp[i] = best result ending at or including position i
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        2. Two-Dimensional Grid DP
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Pattern:</Text> Problems involving movement or
        calculations on a 2D grid.
        <Text fontWeight="bold" mt={3}>
          Examples:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>Minimum Path Sum</ListItem>
          <ListItem>Unique Paths</ListItem>
          <ListItem>Dungeon Game</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={3}>
          State Definition Example:
        </Text>{' '}
        dp[i][j] = best result reaching cell (i,j)
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        3. Interval DP
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Pattern:</Text> Problems involving intervals or
        subarrays where you consider different ways to split or process the
        interval.
        <Text fontWeight="bold" mt={3}>
          Examples:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>Matrix Chain Multiplication</ListItem>
          <ListItem>Burst Balloons</ListItem>
          <ListItem>Palindrome Partitioning</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={3}>
          State Definition Example:
        </Text>{' '}
        dp[i][j] = best result for interval [i...j]
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        4. State Machine DP
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Pattern:</Text> Problems where you transition
        between different states with different rules.
        <Text fontWeight="bold" mt={3}>
          Examples:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>
            Best Time to Buy and Sell Stock (multiple variants)
          </ListItem>
          <ListItem>Paint House</ListItem>
          <ListItem>Stock Problems with Cooldown/Transaction Fees</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={3}>
          State Definition Example:
        </Text>{' '}
        dp[i][state] = best result at position i in given state
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        5. String DP
      </Heading>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Pattern:</Text> Problems involving string
        manipulation, matching, or transformation.
        <Text fontWeight="bold" mt={3}>
          Examples:
        </Text>
        <UnorderedList mt={1}>
          <ListItem>Longest Common Subsequence</ListItem>
          <ListItem>Edit Distance</ListItem>
          <ListItem>Regular Expression Matching</ListItem>
        </UnorderedList>
        <Text fontWeight="bold" mt={3}>
          State Definition Example:
        </Text>{' '}
        dp[i][j] = result for first i characters of string1 and first j
        characters of string2
      </Box>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Space Optimization Techniques
      </Heading>
      <P>
        One of the most powerful aspects of DP is that many solutions can be
        optimized to use much less memory than the naive approach:
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        1. Rolling Array Optimization
      </Heading>
      <P>
        When the recurrence relation only depends on a fixed number of previous
        states (often just the previous row in a 2D DP table), you can reduce
        the space complexity from O(n²) to O(n).
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
          {`function knapsackOptimized(weights, values, capacity, n) {
  // Only need two rows: current and previous
  let prev = Array(capacity + 1).fill(0);
  let curr = Array(capacity + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {    for (let w = 1; w <= capacity; w++) {
      if (weights[i-1] {'>'} w) {
        curr[w] = prev[w];
      } else {
        curr[w] = Math.max(
          prev[w],
          prev[w - weights[i-1]] + values[i-1]
        );
      }
    }
    // Swap for next iteration
    [prev, curr] = [curr, prev];
  }
  
  return prev[capacity];
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        2. Single Array Optimization
      </Heading>
      <P>
        For some problems, you can optimize even further by using just a single
        array, updating it in-place with careful attention to the update order.
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
          {`function knapsackSingleArray(weights, values, capacity, n) {
  // Single array
  const dp = Array(capacity + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {    // Must iterate backward to avoid using the updated values
    for (let w = capacity; w {'>='} weights[i-1]; w--) {
      dp[w] = Math.max(
        dp[w],
        dp[w - weights[i-1]] + values[i-1]
      );
    }
  }
  
  return dp[capacity];
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        3. State Compression
      </Heading>
      <P>
        For problems with boolean states or small discrete values, you can
        sometimes use bit manipulation to compress multiple states into a single
        integer.
      </P>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text>
          Example: In the Traveling Salesman Problem, we can represent the set
          of visited cities as a bitmask, where the i-th bit is 1 if city i has
          been visited.
        </Text>

        <Text mt={3}>
          This reduces space complexity from O(n×2ⁿ) to O(2ⁿ) by encoding the
          visited cities directly in the state index.
        </Text>
      </Box>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Tackling Complex DP Problems: A Case Study
      </Heading>
      <P>
        Let's walk through a complete example to illustrate the full DP approach
        on a challenging problem: "Longest Palindromic Subsequence".
      </P>
      <Box p={4} bg="whiteAlpha.200" borderRadius="md" mb={6}>
        <Text fontWeight="bold">Problem:</Text> Given a string s, find the
        longest subsequence that is a palindrome.
        <Text fontWeight="bold" mt={3}>
          Example:
        </Text>{' '}
        For s = "bbbab", the answer is "bbbb" (length 4).
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Step 1: Define the State
      </Heading>
      <P>
        Let dp[i][j] = length of the longest palindromic subsequence in the
        substring s[i...j].
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Step 2: Formulate the Recurrence Relation
      </Heading>
      <Box
        as="pre"
        p={4}
        bg="whiteAlpha.200"
        borderRadius="md"
        mb={6}
        fontSize="sm"
      >
        <Code>
          {`If s[i] === s[j]:
    dp[i][j] = dp[i+1][j-1] + 2  // Include both characters

If s[i] !== s[j]:
    dp[i][j] = max(dp[i+1][j], dp[i][j-1])  // Skip one character`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Step 3: Identify Base Cases
      </Heading>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          dp[i][i] = 1 (single character is a palindrome of length 1)
        </ListItem>
        <ListItem>dp[i][j] = 0 for i {'>'} j (empty substring)</ListItem>
      </UnorderedList>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Step 4: Implementation (Bottom-Up)
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
          {`function longestPalindromicSubsequence(s) {
  const n = s.length;
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  
  // Base case: single characters are palindromes of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  
  // Fill the DP table
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      
      if (s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
      }
    }
  }
  
  return dp[0][n-1];
}`}
        </Code>
      </Box>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Step 5: Complexity Analysis
      </Heading>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Time Complexity:</Text> O(n²) where n is the
          length of the string
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Space Complexity:</Text> O(n²) for the DP
          table
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Advanced Techniques and Strategies
      </Heading>
      <P>
        As you become more comfortable with basic DP, these advanced techniques
        will help you tackle even more complex problems:
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        1. DP with Divide and Conquer Optimization
      </Heading>
      <P>
        For certain problems with monotonicity properties, you can reduce time
        complexity from O(n³) to O(n² log n) or even O(n²) by cleverly dividing
        the search space.
      </P>{' '}
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        2. Convex Hull Optimization
      </Heading>
      <P>
        When the recurrence relation has a specific form (dp[i] = min/max
        &#123;dp[j] + b[j] * a[i]&#125;) and certain conditions are met, you can
        use convex hull techniques to optimize from O(n²) to O(n).
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        3. Knuth's Optimization
      </Heading>{' '}
      <P>
        For problems with the form dp[i][j] = min&#123;dp[i][k] + dp[k +
        1][j]&#125; + C[i][j] that satisfy the quadrangle inequality, you can
        reduce time complexity from O(n³) to O(n²).
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        4. DP on Trees
      </Heading>
      <P>
        Using DP on tree structures often involves a post-order traversal with
        states representing subtree properties. Common examples include
        calculating the maximum independent set or minimum vertex cover on
        trees.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Conclusion: The Art of Dynamic Programming
      </Heading>
      <P>
        Dynamic programming is as much an art as it is a science. While the
        framework I've outlined provides a structured approach, developing an
        intuition for identifying DP problems and designing elegant state
        representations comes with practice and exposure to diverse problem
        types.
      </P>
      <P>
        The beauty of DP lies in its ability to transform seemingly exponential
        problems into polynomial-time solutions through the clever exploitation
        of overlapping subproblems. Each problem you solve strengthens your
        pattern recognition and algorithmic thinking, making future challenges
        more approachable.
      </P>
      <P>
        Remember that the hardest part of DP is often finding the right state
        definition and recurrence relation. Once you've cracked that, the
        implementation typically follows naturally. Don&apos;t be discouraged by
        initial difficulty – even experienced programmers sometimes struggle
        with complex DP problems.
      </P>
      <P>
        {' '}
        With consistent practice and the systematic approach outlined in this
        guide, you&apos;ll develop the confidence to tackle even the most
        challenging dynamic programming problems in competitive programming
        contests and technical interviews.
      </P>
      <Box mt={10} p={4} bg="whiteAlpha.200" borderRadius="md">
        <Text fontStyle="italic">
          This post is part of my algorithm masterclass series. If you found
          this helpful, check out my other guides on graph algorithms, advanced
          data structures, and competitive programming strategies. Happy problem
          solving!
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Post
export { getServerSideProps } from '../../components/chakra'
