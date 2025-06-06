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
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
