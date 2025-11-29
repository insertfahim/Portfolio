import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The Flex Extension">
    <Container>
      <Title>
        The Flex Extension <Badge>2024-2025</Badge>
      </Title>
      <P>
        Production-grade property booking extension platform enabling guests to
        extend their rental stays (pre-stay or post-stay) through a seamless
        multi-step booking flow. Features Stripe payment processing, Hostaway
        integration, and 4-language internationalization with RTL support.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Production Booking Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React 18, TypeScript, Node.js, Express, PostgreSQL, Stripe
          </span>
        </ListItem>
        <ListItem>
          <Meta>Scale</Meta>
          <span>5,400+ Lines Backend, 67+ Components, 15+ API Endpoints</span>
        </ListItem>
        <ListItem>
          <Meta>Integrations</Meta>
          <span>Hostaway (multi-account), Stripe, SendGrid</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/the-flex-extension.png" alt="The Flex Extension Platform" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Multi-Step Booking Flow:</strong> Property details, date
          selection, availability checking, user information, payment processing,
          and confirmation
        </ListItem>
        <ListItem>
          <strong>Pre/Post Stay Extensions:</strong> Guests can extend before or
          after their existing reservations with real-time availability
        </ListItem>
        <ListItem>
          <strong>Stripe Payment Processing:</strong> Payment intent creation,
          multi-currency support (EUR, GBP, USD, AED, DZD), and webhook handling
        </ListItem>
        <ListItem>
          <strong>Multi-Account Hostaway:</strong> Support for UK, Algiers, and
          Paris accounts with distinct JWT tokens and custom field handling
        </ListItem>
        <ListItem>
          <strong>4-Language Support:</strong> English, French, Spanish, Arabic
          with full RTL (right-to-left) support
        </ListItem>
        <ListItem>
          <strong>Automated Reservations:</strong> Direct booking creation in
          Hostaway with retry logic and exponential backoff
        </ListItem>
        <ListItem>
          <strong>Email Notifications:</strong> Localized confirmation emails via
          SendGrid with booking details
        </ListItem>
        <ListItem>
          <strong>Currency Conversion:</strong> Real-time rates with database
          caching and automatic refresh
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> React 18, TypeScript, Vite, shadcn/ui (Radix
          UI), Tailwind CSS, Framer Motion, TanStack Query
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Node.js, Express.js, TypeScript with tsx
          runtime
        </ListItem>
        <ListItem>
          <strong>Database:</strong> PostgreSQL via Neon serverless with Drizzle
          ORM
        </ListItem>
        <ListItem>
          <strong>Payments:</strong> Stripe SDK with payment intents and webhook
          handling
        </ListItem>
        <ListItem>
          <strong>Email:</strong> SendGrid for transactional emails
        </ListItem>
        <ListItem>
          <strong>i18n:</strong> i18next with HTTP backend and RTL support
        </ListItem>
        <ListItem>
          <strong>DevOps:</strong> Docker containerization, Kamal deployment
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Architecture Highlights</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Optimistic Records:</strong> Creates extension records before
          payment confirmation to handle async webhook flows
        </ListItem>
        <ListItem>
          <strong>Structured Logging:</strong> JSON logging with correlation IDs,
          separate files for APIs, webhooks, and errors
        </ListItem>
        <ListItem>
          <strong>Error Notifications:</strong> Automated emails to operations
          team for Hostaway failures with full context
        </ListItem>
        <ListItem>
          <strong>URL-Based Routing:</strong> Query parameter-driven for direct
          linking from property management systems
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
