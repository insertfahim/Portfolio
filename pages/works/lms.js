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
  <Layout title="University LMS">
    <Container>
      <Title>
        University LMS <Badge>2024</Badge>
      </Title>{' '}
      <P>
        Full-stack Library Management System for BRAC University featuring
        advanced admin panel, real-time book tracking, automated email
        workflows, and modern UI/UX. Handles user authentication, book
        borrowing, return notifications, and analytics dashboard.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/LMS">
            https://github.com/insertfahim/LMS <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, TypeScript, PostgreSQL, Tailwind CSS, Drizzle ORM
          </span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Admin Panel, Email Automation, Analytics, PDF Generation</span>
        </ListItem>
      </List>
      <WorkImage src="/images/LMS.png" alt="University LMS Dashboard" />
      <WorkImage src="/images/LMS 2.png" alt="Library Book Management" />
      <WorkImage src="/images/LMS 3.png" alt="User Management Interface" />
      <WorkImage src="/images/LMS 4.png" alt="Book Details and Borrowing" />
      <WorkImage src="/images/LMS 5.png" alt="Analytics Dashboard" />
      <WorkImage src="/images/LMS 6.png" alt="Email Notifications System" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Authentication & Onboarding:</strong> Secure user registration
          with email verification and personalized welcome workflows
        </ListItem>
        <ListItem>
          <strong>Advanced Book Management:</strong> Complete CRUD operations
          with search, filtering, pagination, and availability tracking
        </ListItem>
        <ListItem>
          <strong>Smart Borrowing System:</strong> Automated book borrowing with
          PDF receipt generation and due date management
        </ListItem>
        <ListItem>
          <strong>Email Automation:</strong> Comprehensive notification system
          for reminders, overdue books, and account updates using Resend
        </ListItem>
        <ListItem>
          <strong>Admin Dashboard:</strong> Complete analytics, user management,
          role assignment, and system monitoring
        </ListItem>
        <ListItem>
          <strong>Modern UI/UX:</strong> Built with Tailwind CSS and ShadCN
          components for responsive and accessible design
        </ListItem>
        <ListItem>
          <strong>Performance Optimization:</strong> Redis caching with Upstash,
          rate limiting, and DDoS protection
        </ListItem>
        <ListItem>
          <strong>Media Management:</strong> ImageKit integration for optimized
          image and video processing
        </ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 14, TypeScript, Tailwind CSS,
          ShadCN UI
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Next.js API Routes, NextAuth.js for
          authentication
        </ListItem>
        <ListItem>
          <strong>Database:</strong> PostgreSQL with Neon, Drizzle ORM for
          database operations
        </ListItem>
        <ListItem>
          <strong>Caching:</strong> Upstash Redis for performance optimization
        </ListItem>
        <ListItem>
          <strong>Email Service:</strong> Resend for automated email
          communications
        </ListItem>
        <ListItem>
          <strong>Media Processing:</strong> ImageKit for image optimization and
          transformations
        </ListItem>
        <ListItem>
          <strong>Deployment:</strong> Vercel for seamless deployment and
          hosting
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
