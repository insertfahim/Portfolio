import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Learning Journey">
    <Container>
      <Title>
        AI Learning Journey <Badge>2024</Badge>
      </Title>{' '}
      <P>
        AI-powered educational platform that transforms any topic into
        comprehensive learning courses. Features YouTube video integration,
        interactive quizzes, and personalized learning paths using advanced AI
        technology.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/learning-journey">
            https://github.com/insertfahim/learning-journey{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 13, TypeScript, OpenAI GPT-3.5, Prisma, MySQL, Stripe
          </span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>
            AI Course Generation, YouTube Integration, Interactive Quizzes,
            Subscription Management
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/ailms.png" alt="AI Learning Journey Dashboard" />
      <WorkImage src="/images/ailms 2.png" alt="Course Creation Interface" />
      <WorkImage
        src="/images/ailms 3.png"
        alt="AI-Generated Course Structure"
      />
      <WorkImage
        src="/images/ailms 4.png"
        alt="Interactive Learning Experience"
      />
      <WorkImage src="/images/ailms 5.png" alt="YouTube Video Integration" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>AI-Powered Course Generation:</strong> Transform any topic
          into a structured learning path using OpenAI GPT-3.5 for intelligent
          content creation and course structuring
        </ListItem>
        <ListItem>
          <strong>YouTube Integration:</strong> Automatically curates and embeds
          relevant educational videos using YouTube Data API for comprehensive
          multimedia learning
        </ListItem>
        <ListItem>
          <strong>Interactive Quizzes:</strong> AI-generated multiple-choice
          questions with instant feedback to test understanding and reinforce
          learning
        </ListItem>
        <ListItem>
          <strong>Beautiful UI/UX:</strong> Modern, responsive design with
          dark/light themes using Tailwind CSS and Shadcn/ui components
        </ListItem>
        <ListItem>
          <strong>Subscription Management:</strong> Stripe-powered premium
          features with secure payment processing and subscription handling
        </ListItem>
        <ListItem>
          <strong>Secure Authentication:</strong> Google OAuth integration with
          NextAuth.js for seamless user management
        </ListItem>
        <ListItem>
          <strong>Progress Tracking:</strong> Visual progress indicators and
          learning analytics to monitor your educational journey
        </ListItem>
        <ListItem>
          <strong>Personalized Learning:</strong> Courses tailored to user
          preferences with real-time generation and multi-language support
        </ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 13.4 with App Router, TypeScript,
          Tailwind CSS, Shadcn/ui, Framer Motion, React Hook Form with Zod
          validation
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Next.js API Routes, Prisma ORM, NextAuth.js,
          tRPC/TanStack Query for type-safe API calls
        </ListItem>
        <ListItem>
          <strong>Database:</strong> MySQL with Prisma ORM for type-safe
          database access and schema management
        </ListItem>
        <ListItem>
          <strong>AI & External APIs:</strong> OpenAI GPT-3.5 for content
          generation, YouTube Data API for video curation, Unsplash API for
          course imagery
        </ListItem>
        <ListItem>
          <strong>Payment Processing:</strong> Stripe integration for
          subscription management and secure payment handling
        </ListItem>
        <ListItem>
          <strong>DevOps:</strong> Docker containerization, DigitalOcean cloud
          hosting, GitHub Actions for CI/CD pipeline
        </ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Architecture Highlights</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Smart Course Generation:</strong> AI processes user input to
          create structured units, chapters, and learning modules with relevant
          content
        </ListItem>
        <ListItem>
          <strong>Real-time Processing:</strong> Courses generated in seconds
          using efficient AI algorithms and optimized API calls
        </ListItem>
        <ListItem>
          <strong>Scalable Architecture:</strong> Built with modern technologies
          ensuring performance optimization and enterprise-level security
        </ListItem>
        <ListItem>
          <strong>Type-safe Development:</strong> Full TypeScript implementation
          with Prisma ORM and tRPC for end-to-end type safety
        </ListItem>
        <ListItem>
          <strong>Responsive Design:</strong> Mobile-first approach ensuring
          seamless experience across all devices and screen sizes
        </ListItem>
        <ListItem>
          <strong>Premium Features:</strong> Tiered subscription model with
          unlimited courses, advanced AI features, and priority support
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
