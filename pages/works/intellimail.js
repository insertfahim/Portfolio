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
  <Layout title="IntelliMail">
    <Container>
      <Title>
        IntelliMail <Badge>2024</Badge>
      </Title>{' '}
      <P>
        AI-powered email client that revolutionizes email management through
        intelligent features and modern web technologies. Features advanced AI
        capabilities with multi-provider integration, creating an efficient
        email experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/IntelliMail">
            https://github.com/insertfahim/IntelliMail{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Full-Stack) / Desktop / Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>
            Next.js 14, TypeScript, Tailwind CSS, Radix UI, Framer Motion
          </span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Prisma ORM, PostgreSQL, tRPC, Zod, Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>AI & Search</Meta>
          <span>OpenAI API, Orama Search Engine, Vector Embeddings, RAG</span>
        </ListItem>
        <ListItem>
          <Meta>External Services</Meta>
          <span>Aurinko API, Clerk Auth, Stripe Payments, Vercel</span>
        </ListItem>
      </List>
      <WorkImage src="/images/intellimail.png" alt="IntelliMail Interface" />
      <Heading as="h4" fontSize={16} my={6}>
        AI-Powered Capabilities
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Smart Email Composition:</strong> AI-assisted writing with
          auto-completion, suggestions, and contextual content generation
        </ListItem>
        <ListItem>
          <strong>Intelligent Summarization:</strong> Automatically generate
          concise summaries of long email threads and conversations
        </ListItem>
        <ListItem>
          <strong>Context-Aware Responses:</strong> AI-generated reply
          suggestions based on email content, history, and conversation context
        </ListItem>
        <ListItem>
          <strong>Advanced RAG Search:</strong> Natural language search queries
          powered by embeddings and Retrieval Augmented Generation technology
        </ListItem>
        <ListItem>
          <strong>Semantic Understanding:</strong> Deep content analysis for
          intelligent categorization and priority detection
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/intellimail 2.png" alt="AI Assistant Interface" />
      <WorkImage src="/images/intellimail 3.png" alt="Email Composition" />
      <Heading as="h4" fontSize={16} my={6}>
        Email Management Features
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Multi-Provider Support:</strong> Seamless integration with
          Gmail, Office365, and other major email providers via Aurinko API
        </ListItem>
        <ListItem>
          <strong>Real-time Synchronization:</strong> Live email updates across
          all devices with intelligent threading and organization
        </ListItem>
        <ListItem>
          <strong>Smart Threading:</strong> Intelligent conversation grouping
          and organization for better email flow management
        </ListItem>
        <ListItem>
          <strong>Advanced Filtering:</strong> Custom labels, categories, and
          automated sorting with machine learning assistance
        </ListItem>
        <ListItem>
          <strong>Secure Authentication:</strong> OAuth 2.0 integration without
          storing passwords, powered by Clerk authentication
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/intellimail 4.png" alt="Email Threading" />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>
      <P>
        IntelliMail features a sophisticated full-stack architecture built on
        Next.js 14 with App Router, utilizing tRPC for end-to-end type safety
        and Prisma ORM for robust database operations. The AI layer integrates
        OpenAI&apos;s latest models with a custom RAG search system using Orama
        and vector embeddings for semantic email search capabilities.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 14 with TypeScript, Tailwind CSS,
          Radix UI components, and smooth Framer Motion animations
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> tRPC for type-safe APIs, Prisma ORM with
          PostgreSQL, and Zod for schema validation
        </ListItem>
        <ListItem>
          <strong>AI Integration:</strong> OpenAI GPT models, custom embeddings
          pipeline, and advanced prompt engineering for email contexts
        </ListItem>
        <ListItem>
          <strong>Search Engine:</strong> Orama full-text search with vector
          embeddings for semantic understanding and RAG capabilities
        </ListItem>
        <ListItem>
          <strong>Authentication:</strong> Clerk integration with secure session
          management and role-based access control
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/intellimail 5.png" alt="Search Interface" />
      <Heading as="h4" fontSize={16} my={6}>
        Premium Features & Monetization
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Subscription Management:</strong> Stripe-powered payment
          processing with multiple tier options and usage-based pricing
        </ListItem>
        <ListItem>
          <strong>Usage Analytics:</strong> Detailed insights into email
          patterns, productivity metrics, and AI feature utilization
        </ListItem>
        <ListItem>
          <strong>Priority Support:</strong> Enhanced customer service and
          direct access to advanced features for premium users
        </ListItem>
        <ListItem>
          <strong>Advanced AI Models:</strong> Access to latest GPT models,
          custom fine-tuned models, and experimental features
        </ListItem>
        <ListItem>
          <strong>Enterprise Features:</strong> Team collaboration, admin
          controls, and custom integrations for business users
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/intellimail 6.png" alt="Premium Dashboard" />
      <Heading as="h4" fontSize={16} my={6}>
        Key Innovations
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>RAG-Powered Search:</strong> Revolutionary email search using
          Retrieval Augmented Generation for contextual and semantic queries
        </ListItem>
        <ListItem>
          <strong>Multi-Provider Architecture:</strong> Unified interface for
          multiple email providers without compromising security or performance
        </ListItem>
        <ListItem>
          <strong>Intelligent AI Assistant:</strong> Context-aware AI that
          understands email patterns, relationships, and communication styles
        </ListItem>
        <ListItem>
          <strong>Real-time Collaboration:</strong> Live synchronization and
          sharing capabilities for team-based email management
        </ListItem>
        <ListItem>
          <strong>Privacy-First Design:</strong> End-to-end encryption, local
          processing options, and granular privacy controls
        </ListItem>
        <ListItem>
          <strong>Keyboard-First Navigation:</strong> Comprehensive keyboard
          shortcuts and command palette for power users
        </ListItem>
      </UnorderedList>
      <P>
        IntelliMail represents the future of email management, combining the
        power of modern AI with intuitive design and robust engineering. The
        application demonstrates advanced full-stack development capabilities,
        AI integration expertise, and a deep understanding of user experience
        design in productivity applications.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
