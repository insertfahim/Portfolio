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
  <Layout title="The Flex PMS">
    <Container>
      <Title>
        The Flex PMS <Badge>2024-2025</Badge>
      </Title>
      <P>
        Enterprise-grade Property Management System built from the ground up for
        short-term rental operations across London, Paris, and Algiers. Features
        101+ RESTful API endpoints, 554+ React components, real-time multi-tenant
        architecture, and comprehensive integrations with Hostaway, Stripe, and
        Google Cloud APIs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Enterprise SaaS Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React 18, TypeScript, FastAPI, PostgreSQL, Redis, Docker, Supabase
          </span>
        </ListItem>
        <ListItem>
          <Meta>Scale</Meta>
          <span>101+ API Endpoints, 554+ Components, 500+ Properties</span>
        </ListItem>
        <ListItem>
          <Meta>Integrations</Meta>
          <span>Hostaway, Stripe, SendGrid, Google Maps, OpenAI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/the-flex-pms.png" alt="The Flex PMS Dashboard" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Multi-Tenant Architecture:</strong> Complete tenant isolation
          with Row-Level Security (RLS) policies and role-based access control
        </ListItem>
        <ListItem>
          <strong>Real-Time Operations:</strong> WebSocket notifications and
          Supabase subscriptions for live updates across the platform
        </ListItem>
        <ListItem>
          <strong>Property Management:</strong> Full CRUD for 500+ properties with
          real-time Hostaway synchronization and availability tracking
        </ListItem>
        <ListItem>
          <strong>Reservation System:</strong> End-to-end booking management with
          automated workflows and guest communication
        </ListItem>
        <ListItem>
          <strong>Cleaning Operations:</strong> Task assignment, scheduling, and
          tracking with cleaner performance analytics
        </ListItem>
        <ListItem>
          <strong>Maintenance Tracking:</strong> Request handling with approval
          workflows and vendor management
        </ListItem>
        <ListItem>
          <strong>Guest Portal:</strong> Pre-check-in, ID verification, and upsell
          management for enhanced guest experience
        </ListItem>
        <ListItem>
          <strong>Financial Analytics:</strong> Revenue tracking, occupancy rates,
          and comprehensive reporting dashboards
        </ListItem>
        <ListItem>
          <strong>Smart Views:</strong> Advanced filtered data views with Redis
          caching for optimized performance
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> React 18, TypeScript, Vite, TanStack Query,
          Tailwind CSS, Chart.js, React Big Calendar
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> FastAPI (Python), SQLAlchemy, Pydantic,
          async/await architecture
        </ListItem>
        <ListItem>
          <strong>Database:</strong> PostgreSQL via Supabase with real-time
          subscriptions and RLS policies
        </ListItem>
        <ListItem>
          <strong>Caching:</strong> Redis for session management and query
          optimization
        </ListItem>
        <ListItem>
          <strong>DevOps:</strong> Docker, Kamal deployment, GitHub Actions CI/CD,
          Nginx reverse proxy
        </ListItem>
        <ListItem>
          <strong>External APIs:</strong> Hostaway (PMS), Stripe (payments),
          SendGrid (email), Google Maps, OpenAI
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Architecture Highlights</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>API Optimization:</strong> Multiple endpoint variations
          (ultra-fast, lightning-fast, streaming) for different performance needs
        </ListItem>
        <ListItem>
          <strong>Automated Workflows:</strong> Cron jobs for property sync,
          availability checks, and notification scheduling
        </ListItem>
        <ListItem>
          <strong>Rich Text Editor:</strong> Tiptap integration with table and
          image support for content management
        </ListItem>
        <ListItem>
          <strong>Internationalization:</strong> i18next framework for
          multi-language support
        </ListItem>
        <ListItem>
          <strong>Error Tracking:</strong> Comprehensive crash reporting and
          structured logging with correlation IDs
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
