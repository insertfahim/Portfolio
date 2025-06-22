import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="The Art of Competitive Programming: A Comprehensive Guide"
            thumbnail="/images/Art%20of%20Competitive%20Programming.png"
            href="/posts/competitive-programming-guide"
          >
            Master the essential skills, strategies, and mindset for excelling
            in competitive programming contests.
          </GridItem>
          <GridItem
            title="Advanced Data Structures for Coding Interviews"
            thumbnail="/images/Advanced Data Structures for Coding Interviews.png"
            href="/posts/advanced-data-structures"
          >
            Deep dive into the advanced data structures that can help you solve
            complex algorithmic problems.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Problem Solving Techniques
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Dynamic Programming Masterclass"
            thumbnail="/images/Dynamic Programming Masterclass.png"
            href="/posts/dynamic-programming"
          >
            A comprehensive guide to mastering dynamic programming - from basic
            concepts to advanced optimization techniques.
          </GridItem>
          <GridItem
            title="Graph Algorithms Explained"
            thumbnail="/images/Graph Algorithms Explained.png"
            href="/posts/graph-algorithms"
          >
            Understanding and implementing essential graph algorithms for
            solving complex problems.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Software Architecture & Development
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="System Design Principles: Building Scalable Applications"
            thumbnail="/images/System Design Principles Building Scalable Applications.png"
            href="/posts/system-design-principles"
          >
            Learn the fundamental principles of designing scalable, maintainable
            software systems for modern applications.
          </GridItem>
          <GridItem
            title="Microservices Architecture: From Monolith to Distributed Systems"
            thumbnail="/images/Microservices Architecture From Monolith to Distributed Systems.png"
            href="/posts/microservices-architecture"
          >
            A comprehensive guide to transitioning from monolithic applications
            to microservices architecture.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.7}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Frontend Development
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="React Performance Optimization: Essential Techniques"
            thumbnail="/images/React Performance Optimization Essential Techniques.png"
            href="/posts/react-performance-optimization"
          >
            Master the techniques for optimizing React applications, from
            preventing unnecessary re-renders to bundle optimization.
          </GridItem>
          <GridItem
            title="TypeScript Best Practices: Writing Maintainable Code"
            thumbnail="/images/TypeScript Best Practices Writing Maintainable Code.png"
            href="/posts/typescript-best-practices"
          >
            Learn essential patterns and techniques for writing clean,
            maintainable TypeScript code in production applications.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.9}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Advanced Software Architecture
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Event-Driven Architecture: Building Responsive Systems"
            thumbnail="/images/System Design Principles Building Scalable Applications.png"
            href="/posts/event-driven-architecture"
          >
            Explore event-driven patterns and how to build highly responsive,
            decoupled software systems.
          </GridItem>
          <GridItem
            title="Domain-Driven Design: Strategic Modeling for Complex Systems"
            thumbnail="/images/Microservices Architecture From Monolith to Distributed Systems.png"
            href="/posts/domain-driven-design"
          >
            Master DDD principles to create well-structured, maintainable
            software that reflects business domain complexity.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={1.1}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Modern Frontend Technologies
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Next.js 14: Server Components and App Router Deep Dive"
            thumbnail="/images/React Performance Optimization Essential Techniques.png"
            href="/posts/nextjs-14-deep-dive"
          >
            Comprehensive guide to Next.js 14 features including Server
            Components, App Router, and performance optimizations.
          </GridItem>
          <GridItem
            title="State Management in Modern React: Context, Redux, and Zustand"
            thumbnail="/images/TypeScript Best Practices Writing Maintainable Code.png"
            href="/posts/state-management-react"
          >
            Compare and implement different state management solutions for
            React applications with real-world examples.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
