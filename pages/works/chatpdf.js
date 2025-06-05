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
  <Layout title="ChatPDF">
    <Container>
      <Title>
        ChatPDF <Badge>2024</Badge>
      </Title>
      <P>
        {' '}
        A revolutionary AI-powered PDF interaction platform that transforms
        static documents into interactive conversations. Built with cutting-edge
        AI technology, this full-stack application combines OpenAI&apos;s
        GPT-3.5-turbo, vector embeddings, and modern web development practices
        to create an intuitive document analysis tool with enterprise-grade
        features.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/chatpdf">
            https://github.com/insertfahim/chatpdf <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Full-Stack) / AI-Powered SaaS</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>
            Next.js 13, TypeScript, Radix UI, Tailwind CSS, TanStack Query
          </span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Next.js API Routes, PostgreSQL, Drizzle ORM, Edge Runtime</span>
        </ListItem>
        <ListItem>
          <Meta>AI & Services</Meta>
          <span>OpenAI GPT-3.5, Pinecone Vector DB, Langchain, Clerk Auth</span>
        </ListItem>
        <ListItem>
          <Meta>Cloud Services</Meta>
          <span>Vercel, AWS S3, Stripe Payments</span>
        </ListItem>
      </List>

      <WorkImage src="/images/chatpdf.png" alt="ChatPDF Main Interface" />

      <Heading as="h4" fontSize={16} my={6}>
        Revolutionary AI Features
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Intelligent PDF Processing:</strong> Advanced PDF parsing with
          vector embeddings for semantic search, smart text extraction with
          metadata preservation, and context-aware document understanding
        </ListItem>
        <ListItem>
          <strong>AI-Powered Chat Interface:</strong> Real-time streaming
          responses with OpenAI GPT-3.5-turbo, context-aware conversations that
          understand document content, and persistent chat history management
        </ListItem>
        <ListItem>
          <strong>Vector Search Technology:</strong> Documents converted to
          searchable vector representations using OpenAI embeddings, Pinecone
          database for high-performance similarity search, and intelligent
          context retrieval for accurate responses
        </ListItem>
        <ListItem>
          <strong>Multi-Document Support:</strong> Create separate conversations
          for different PDF documents, manage multiple document contexts
          simultaneously, and organize chat history by document
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/chatpdf 2.png"
        alt="PDF Processing and Chat Interface"
      />

      <Heading as="h4" fontSize={16} my={6}>
        Enterprise-Grade Platform
      </Heading>

      <P>
        ChatPDF is built as a comprehensive SaaS platform with robust user
        management, subscription handling, and scalable cloud architecture. The
        application features secure authentication through Clerk, seamless
        payment processing with Stripe, and enterprise-ready data management
        with PostgreSQL and AWS S3 integration.
      </P>

      <UnorderedList my={4}>
        <ListItem>
          <strong>User Authentication & Management:</strong> Clerk-powered
          authentication with social login options, personalized user
          experiences with data isolation, and secure session management
        </ListItem>
        <ListItem>
          <strong>Subscription & Monetization:</strong> Stripe integration for
          seamless payment processing, pro tier with enhanced capabilities,
          real-time webhook handling for subscription updates, and customer
          portal for billing management
        </ListItem>
        <ListItem>
          <strong>Scalable Data Architecture:</strong> PostgreSQL database with
          Drizzle ORM for type-safe operations, AWS S3 for secure file storage,
          normalized database schema with proper relationships
        </ListItem>
        <ListItem>
          <strong>Performance Optimization:</strong> Edge runtime for fast API
          responses, streaming text for real-time user experience, and optimized
          vector search with Pinecone database
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/chatpdf 3.png"
        alt="User Dashboard and Subscription Management"
      />

      <Heading as="h4" fontSize={16} my={6}>
        Technical Innovation
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Advanced AI Integration:</strong> OpenAI GPT-3.5-turbo for
          contextual understanding, text-embedding-ada-002 for document
          vectorization, and Langchain for AI workflow orchestration
        </ListItem>
        <ListItem>
          <strong>Modern Full-Stack Architecture:</strong> Next.js 13 with App
          Router and Server Components, TypeScript for type safety, and Edge
          Runtime for optimal performance
        </ListItem>
        <ListItem>
          <strong>Vector Database Technology:</strong> Pinecone for
          high-performance vector similarity search, semantic document
          understanding, and intelligent context retrieval
        </ListItem>
        <ListItem>
          <strong>Real-Time Features:</strong> Streaming AI responses for live
          interaction, real-time chat updates, and instant document processing
          feedback
        </ListItem>
        <ListItem>
          <strong>Enterprise Security:</strong> Secure file handling with AWS
          S3, encrypted data transmission, user data isolation, and compliance
          with data protection standards
        </ListItem>
        <ListItem>
          <strong>Responsive Design:</strong> Mobile-first approach with
          Tailwind CSS, Radix UI components for accessibility, and seamless
          cross-device experience
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        Key Capabilities
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Document Upload & Processing:</strong> Drag & drop interface
          with visual feedback, support for PDFs up to 10MB, automatic text
          extraction and vectorization
        </ListItem>
        <ListItem>
          <strong>Intelligent Querying:</strong> Natural language questions
          about document content, contextual answers based on document sections,
          citation and reference tracking
        </ListItem>
        <ListItem>
          <strong>Subscription Tiers:</strong> Free tier with 3 PDF uploads per
          month, Pro tier with unlimited uploads and advanced features, seamless
          upgrade process through Stripe
        </ListItem>
        <ListItem>
          <strong>Performance Metrics:</strong> Sub-2-second response times,
          30-second processing for 100-page PDFs, support for 1000+ simultaneous
          users, 99.9% uptime availability
        </ListItem>
      </UnorderedList>

      <P>
        ChatPDF represents a paradigm shift in document interaction technology,
        demonstrating expertise in AI integration, full-stack development, and
        SaaS platform architecture. The application showcases advanced vector
        search capabilities, real-time AI processing, and enterprise-grade
        scalability, making it a comprehensive solution for AI-powered document
        analysis and interaction.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
