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
  <Layout title="IntelliMail">
    <Container>
      <Title>
        IntelliMail <Badge>2024</Badge>
      </Title>{' '}
      <P>
        AI-powered email client with RAG pipeline processing 100K+ emails,
        achieving 50ms semantic search vs 2s+ keyword search (40x speedup).
        Features idempotent Stripe webhook processing with Redis deduplication
        and dead-letter queue, reaching 98% payment success rate and $8K MRR.
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
          <span>Web (Full-Stack SaaS)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js 14, tRPC, PostgreSQL, OpenAI, Stripe</span>
        </ListItem>
        <ListItem>
          <Meta>Search Performance</Meta>
          <span>50ms semantic search (40x speedup vs keyword)</span>
        </ListItem>
        <ListItem>
          <Meta>Payment Success</Meta>
          <span>98% success rate, $8K MRR</span>
        </ListItem>
        <ListItem>
          <Meta>Vector Storage</Meta>
          <span>pgvector with HNSW index, OpenAI ada-002 embeddings</span>
        </ListItem>
      </List>
      <WorkImage src="/images/intellimail.png" alt="IntelliMail Interface" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>RAG Pipeline & Search</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Email Processing:</strong> Chunked 100K+ emails into semantic
          segments for efficient vector embedding generation
        </ListItem>
        <ListItem>
          <strong>Embedding Generation:</strong> Generated embeddings via OpenAI
          ada-002 model with optimized batch processing
        </ListItem>
        <ListItem>
          <strong>Vector Storage:</strong> Stored embeddings in pgvector with HNSW
          index for efficient similarity search
        </ListItem>
        <ListItem>
          <strong>Search Performance:</strong> Achieved 50ms semantic search vs 2s+
          keyword search—40x speedup improvement
        </ListItem>
        <ListItem>
          <strong>RAG Retrieval:</strong> Context-aware responses using retrieved
          email chunks for accurate AI-generated replies
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/intellimail 2.png" alt="AI Assistant Interface" />
      <WorkImage src="/images/intellimail 3.png" alt="Email Composition" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Email Management Features</Center>
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
        <Center>Technical Architecture</Center>
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
        <Center>Payment Infrastructure & Reliability</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Idempotent Processing:</strong> Implemented idempotent Stripe
          webhook event processing with Redis deduplication to prevent duplicate
          charges
        </ListItem>
        <ListItem>
          <strong>Dead-Letter Queue:</strong> Built dead-letter queue for failed
          webhook events with automated retry using exponential backoff
        </ListItem>
        <ListItem>
          <strong>Payment Success Rate:</strong> Achieved 98% payment success rate
          through robust error handling and retry mechanisms
        </ListItem>
        <ListItem>
          <strong>Revenue Growth:</strong> Reached $8K MRR through reliable
          subscription management and billing automation
        </ListItem>
        <ListItem>
          <strong>Subscription Tiers:</strong> Multiple pricing tiers with
          usage-based billing and seamless upgrade/downgrade flows
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/intellimail 6.png" alt="Premium Dashboard" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Innovations</Center>
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
