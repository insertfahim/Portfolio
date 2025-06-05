import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Quizmify">
    <Container>
      <Title>
        Quizmify <Badge>2024</Badge>
      </Title>{' '}
      <P>
        &ldquo;Quiz yourself on anything!&rdquo; - The ultimate AI-driven quiz
        platform that transforms any topic into an engaging learning experience.
        This intelligent application leverages OpenAI to generate personalized
        quizzes on any subject, featuring dual quiz modes, comprehensive
        analytics, and a modern user experience designed for effective learning
        and knowledge retention.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/quizmify">
            https://github.com/insertfahim/quizmify{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Full-Stack) / AI-Powered Learning Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>
            Next.js 13, TypeScript, Tailwind CSS, Shadcn/ui, React Hook Form
          </span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Prisma ORM, PlanetScale MySQL, NextAuth.js</span>
        </ListItem>
        <ListItem>
          <Meta>AI & Services</Meta>
          <span>OpenAI API, React Query, Lucide React</span>
        </ListItem>
        <ListItem>
          <Meta>Key Features</Meta>
          <span>
            AI Quiz Generation, Dual Quiz Modes, Real-time Analytics, Progress
            Tracking
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/quiz.png" alt="Quizmify Dashboard Overview" />
      <Heading as="h4" fontSize={16} my={6}>
        Smart Quiz Generation
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>AI-Powered Questions:</strong> Leverages OpenAI to generate
          intelligent, contextually relevant questions on any topic with
          customizable difficulty levels and quiz length
        </ListItem>
        <ListItem>
          <strong>Dual Quiz Modes:</strong> Multiple Choice (MCQ) for quick-fire
          questions with instant feedback, and Open-Ended questions for deeper
          understanding and critical thinking
        </ListItem>
        <ListItem>
          <strong>Topic Flexibility:</strong> Generate quizzes on virtually any
          subject from science and history to current events and specialized
          knowledge domains
        </ListItem>
        <ListItem>
          <strong>Adaptive Difficulty:</strong> Intelligent question generation
          that adapts to user preferences and learning objectives
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/quiz 2.png"
        alt="Quiz Creation and Topic Selection"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Comprehensive Analytics & Tracking
      </Heading>
      <P>
        Quizmify provides detailed insights into learning performance with
        real-time statistics, progress tracking, and visual analytics. The
        platform monitors accuracy rates, time management, and knowledge
        retention patterns to help users optimize their learning strategies.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Real-time Statistics:</strong> Track accuracy rates, time
          taken per question, and overall performance trends with instant
          feedback and detailed breakdowns
        </ListItem>
        <ListItem>
          <strong>Progress Monitoring:</strong> Comprehensive learning journey
          tracking with historical performance data and improvement metrics
        </ListItem>
        <ListItem>
          <strong>Visual Insights:</strong> Beautiful charts and progress
          indicators that make performance data easy to understand and act upon
        </ListItem>
        <ListItem>
          <strong>Question Analysis:</strong> Detailed question-by-question
          breakdown with correct answers, explanations, and learning insights
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/quiz 3.png" alt="Quiz Analytics Dashboard" />
      <WorkImage src="/images/quiz 4.png" alt="Performance Statistics" />
      <Heading as="h4" fontSize={16} my={6}>
        Modern User Experience
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Responsive Design:</strong> Seamless experience across all
          devices with mobile-first approach and adaptive layouts for optimal
          learning on any screen size
        </ListItem>
        <ListItem>
          <strong>Theme Customization:</strong> Dark and light theme options for
          comfortable studying in any environment with smooth transitions and
          consistent styling
        </ListItem>
        <ListItem>
          <strong>Intuitive Dashboard:</strong> Clean, organized interface with
          easy navigation, clear visual hierarchy, and quick access to all
          features
        </ListItem>
        <ListItem>
          <strong>Real-time Feedback:</strong> Instant results with detailed
          explanations, progress indicators, and immediate performance insights
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/quiz 5.png" alt="Quiz Interface and Feedback" />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Modern Frontend:</strong> Next.js 13 with App Router for
          optimized performance, TypeScript for type safety, and Tailwind CSS
          for responsive design
        </ListItem>
        <ListItem>
          <strong>Component System:</strong> Shadcn/ui for beautiful, accessible
          components, Radix UI primitives for unstyled flexibility, and React
          Hook Form for performant form handling
        </ListItem>
        <ListItem>
          <strong>Database & Auth:</strong> Prisma ORM for type-safe database
          operations, PlanetScale for serverless MySQL hosting, and NextAuth.js
          for secure authentication
        </ListItem>
        <ListItem>
          <strong>AI Integration:</strong> OpenAI API for intelligent question
          generation, React Query for efficient data fetching and caching, and
          optimized API routes for fast responses
        </ListItem>
        <ListItem>
          <strong>User Experience:</strong> Lucide React for beautiful icons,
          smooth animations and transitions, and accessibility-first design
          principles
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/quiz 6.png" alt="User Profile and History" />
      <Heading as="h4" fontSize={16} my={6}>
        Secure & Personalized Learning
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Authentication System:</strong> NextAuth integration with
          multiple providers including Google OAuth, secure session management,
          and user profile customization with avatar support
        </ListItem>
        <ListItem>
          <strong>Personal Learning History:</strong> Comprehensive tracking of
          all quiz attempts, detailed performance history, and personalized
          learning insights
        </ListItem>
        <ListItem>
          <strong>Data Privacy:</strong> Secure user data handling, encrypted
          authentication, and compliance with privacy standards
        </ListItem>
        <ListItem>
          <strong>Customizable Experience:</strong> Personalized dashboards,
          learning preferences, and adaptive difficulty based on performance
          history
        </ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        Key Innovations
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>AI-Driven Personalization:</strong> Smart question generation
          that adapts to user knowledge level and learning style preferences
        </ListItem>
        <ListItem>
          <strong>Dual Learning Modes:</strong> Strategic combination of MCQ for
          quick recall and open-ended questions for deeper comprehension
        </ListItem>
        <ListItem>
          <strong>Comprehensive Analytics:</strong> Advanced performance
          tracking with actionable insights for continuous learning improvement
        </ListItem>
        <ListItem>
          <strong>Modern Tech Stack:</strong> Cutting-edge technologies ensuring
          fast performance, type safety, and scalable architecture
        </ListItem>
        <ListItem>
          <strong>Accessibility Focus:</strong> WCAG-compliant design with
          keyboard navigation, screen reader support, and inclusive user
          experience
        </ListItem>
        <ListItem>
          <strong>Topic Versatility:</strong> Unlimited subject coverage with
          AI-generated content that spans academic subjects, professional
          skills, and general knowledge
        </ListItem>
      </UnorderedList>
      <P>
        Quizmify represents the future of AI-powered learning platforms,
        combining intelligent question generation with comprehensive analytics
        and modern user experience design. The application demonstrates
        expertise in AI integration, educational technology, and full-stack
        development, creating a powerful tool that transforms how people learn
        and assess their knowledge across any subject domain.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
