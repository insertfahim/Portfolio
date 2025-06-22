import {
  Container,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  OrderedList,
  Image,
  Code,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Post = () => (
  <Layout title="React Performance Optimization: Essential Techniques">
    <Container>
      <Heading as="h1" fontSize={24} mb={4}>
        React Performance Optimization: Essential Techniques
      </Heading>
      <Text color="gray.500" fontSize="sm" mb={8}>
        June 25, 2025 • 12 min read
      </Text>
      <Image
        src="/images/React Performance Optimization Essential Techniques.png"
        alt="React Performance Optimization"
        borderRadius="lg"
        w="full"
        mb={6}
      />
      <P>
        React applications can become slow as they grow in complexity. From
        unnecessary re-renders to inefficient data fetching, performance
        issues can significantly impact user experience. This guide covers
        the most effective techniques for optimizing React applications.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Understanding React Performance
      </Heading>
      <P>
        Before optimizing, understand what causes performance issues in React:
      </P>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Unnecessary Re-renders:</Text> Components
          updating when they don&apos;t need to
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Expensive Calculations:</Text> Complex
          operations running on every render
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Large Bundle Sizes:</Text> Too much
          JavaScript being loaded initially
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Memory Leaks:</Text> Resources not being
          properly cleaned up
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Preventing Unnecessary Re-renders
      </Heading>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        1. React.memo for Component Memoization
      </Heading>
      <P>
        React.memo prevents re-renders when props haven&apos;t changed.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Without memoization
const ExpensiveComponent = ({ data }) => {
  console.log('Rendering expensive component');
  return <div>{data.map(item => <div key={item.id}>{item.name}</div>)}</div>;
};

// With memoization
const OptimizedComponent = React.memo(({ data }) => {
  console.log('Rendering expensive component');
  return <div>{data.map(item => <div key={item.id}>{item.name}</div>)}</div>;
});`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        2. useMemo for Expensive Calculations
      </Heading>
      <P>
        useMemo memoizes the result of expensive calculations.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`const ExpensiveCalculation = ({ items }) => {
  const expensiveResult = useMemo(() => {
    return items.reduce((acc, item) => {
      // Expensive operation
      return acc + complexCalculation(item);
    }, 0);
  }, [items]); // Only recalculate when items change
  
  return <div>{expensiveResult}</div>;
};`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        3. useCallback for Function Memoization
      </Heading>
      <P>
        useCallback memoizes functions to prevent child re-renders.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`const ParentComponent = ({ items }) => {
  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
  }, []); // Empty dependency array - function never changes
  
  return (
    <div>
      {items.map(item => (
        <ChildComponent
          key={item.id}
          item={item}
          onItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Optimizing List Rendering
      </Heading>
      <P>
        For large lists, use virtual scrolling to render only visible items.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItem item={items[index]} />
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
};`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Code Splitting and Lazy Loading
      </Heading>
      <P>
        Split your bundle and load components only when needed.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

// Route-based splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Optimizing Data Fetching
      </Heading>
      <P>
        Implement caching and efficient data management strategies.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Simple cache implementation
const cache = new Map();

const useCachedFetch = (url) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (cache.has(url)) {
      setData(cache.get(url));
      return;
    }
    
    fetch(url)
      .then(response => response.json())
      .then(result => {
        cache.set(url, result);
        setData(result);
      });
  }, [url]);
  
  return data;
};`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Bundle Size Optimization
      </Heading>
      <P>
        Reduce your JavaScript bundle size with these techniques:
      </P>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Tree Shaking:</Text> Use ES6 modules and
          configure webpack properly
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Import Optimization:</Text> Import only
          what you need from libraries
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Bundle Analysis:</Text> Use tools like
          webpack-bundle-analyzer to identify large dependencies
        </ListItem>
      </UnorderedList>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Bad - imports entire library
import _ from 'lodash';

// Good - imports only what you need
import { debounce, throttle } from 'lodash-es';

// Bad - imports entire component library
import { Button, Card, Modal, Table } from 'antd';

// Good - imports specific components
import Button from 'antd/lib/button';`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Memory Management
      </Heading>
      <P>
        Prevent memory leaks by properly cleaning up resources.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Proper cleanup in useEffect
const ComponentWithCleanup = () => {
  useEffect(() => {
    const handleResize = () => {
      // Handle resize
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div>Component</div>;
};

// Subscription cleanup
const SubscriptionComponent = () => {
  useEffect(() => {
    const subscription = someService.subscribe(data => {
      // Handle data
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return <div>Component</div>;
};`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Performance Monitoring
      </Heading>
      <P>
        Monitor performance to identify and fix issues:
      </P>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">React DevTools Profiler:</Text> Identify
          which components are re-rendering
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Lighthouse:</Text> Audit your application
          for performance issues
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Bundle Analyzer:</Text> Analyze your
          JavaScript bundle size
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Real User Monitoring:</Text> Track
          performance metrics from actual users
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Best Practices Summary
      </Heading>
      <OrderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Profile First:</Text> Always measure
          performance before optimizing
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Use React.memo:</Text> For expensive
          components that don&apos;t need frequent updates
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Implement useMemo:</Text> For expensive
          calculations
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Use useCallback:</Text> For function props
          passed to child components
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Virtual Scrolling:</Text> For large lists
          of data
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Code Splitting:</Text> Load components
          only when needed
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Optimize Imports:</Text> Import only what
          you need from libraries
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Clean Up Resources:</Text> Always clean up
          event listeners and subscriptions
        </ListItem>
      </OrderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Conclusion
      </Heading>
      <P>
        React performance optimization is an ongoing process. Start with the
        basics like preventing unnecessary re-renders and code splitting,
        then move to more advanced techniques as your application grows.
      </P>
      <P>
        Remember to always measure performance before and after
        optimizations, and focus on improvements that provide the most
        benefit to your users.
      </P>
      <Alert status="info" mb={6}>
        <AlertIcon />
        <Box>
          <AlertTitle>Key Takeaway</AlertTitle>
          <AlertDescription>
            Don&apos;t optimize prematurely. Always profile your application
            first to identify the actual bottlenecks, then apply the
            appropriate optimization techniques.
          </AlertDescription>
        </Box>
      </Alert>
    </Container>
  </Layout>
)

export default Post 