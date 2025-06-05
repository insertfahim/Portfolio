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
  <Layout title="PropertyFlow">
    <Container>
      <Title>
        PropertyFlow <Badge>2024</Badge>
      </Title>{' '}
      <P>
        Enterprise-grade real estate rental platform with dual-role architecture
        featuring separate dashboards for property managers and tenants.
        Combines modern web technologies with intelligent design for seamless
        rental experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/PropertyFlow">
            https://github.com/insertfahim/PropertyFlow{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Full-Stack) / AWS Cloud Services</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>
            Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Redux Toolkit
          </span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>
            Node.js, Express, Prisma ORM, PostgreSQL, JWT Authentication
          </span>
        </ListItem>
        <ListItem>
          <Meta>Cloud Services</Meta>
          <span>AWS Cognito, AWS S3, Mapbox API, PostGIS</span>
        </ListItem>
        <ListItem>
          <Meta>Key Features</Meta>
          <span>
            Dual Dashboards, Interactive Maps, Real-time Notifications, Document
            Management
          </span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/propertyflow.png"
        alt="PropertyFlow Platform Overview"
      />
      <Heading as="h4" fontSize={16} my={6}>
        For Property Managers
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Property Management Dashboard:</strong> Comprehensive overview
          of all managed properties with real-time analytics and performance
          metrics
        </ListItem>
        <ListItem>
          <strong>Application Processing:</strong> Review, approve, or deny
          rental applications with one-click actions and automated notifications
        </ListItem>
        <ListItem>
          <strong>Tenant Management:</strong> Track current tenants, lease
          agreements, payment status, and communication history
        </ListItem>
        <ListItem>
          <strong>Financial Tracking:</strong> Monitor rental income, payment
          history, and comprehensive financial analytics with reporting tools
        </ListItem>
        <ListItem>
          <strong>Property Listing Creation:</strong> Rich property listing
          creation with photo uploads, detailed information, and interactive
          maps
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/propertyflow 2.png"
        alt="Property Manager Dashboard"
      />
      <Heading as="h4" fontSize={16} my={6}>
        For Tenants
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Advanced Property Search:</strong> Multi-filter search with
          location, price range, amenities, property type, and interactive map
          visualization
        </ListItem>
        <ListItem>
          <strong>Interactive Property Listings:</strong> Detailed property
          views with high-resolution photo galleries, virtual tours, and
          neighborhood information
        </ListItem>
        <ListItem>
          <strong>Application Submission:</strong> Streamlined rental
          application process with real-time status tracking and automated
          updates
        </ListItem>
        <ListItem>
          <strong>Personal Dashboard:</strong> Manage current residences, track
          applications, view payment history, and access important documents
        </ListItem>
        <ListItem>
          <strong>Favorites System:</strong> Save and manage favorite properties
          with persistent storage and comparison tools
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/propertyflow 3.png"
        alt="Property Search Interface"
      />
      <WorkImage src="/images/propertyflow 4.png" alt="Property Details View" />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>
      <P>
        PropertyFlow features a modern full-stack architecture with Next.js 15
        frontend utilizing App Router and Server Components, coupled with a
        robust Express.js backend. The application leverages PostgreSQL with
        PostGIS for geographical data, AWS services for authentication and file
        storage, and Mapbox for advanced mapping capabilities.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 15 with TypeScript, Tailwind CSS,
          Framer Motion animations, and Redux Toolkit for state management
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Node.js with Express, Prisma ORM for
          type-safe database operations, and comprehensive RESTful API design
        </ListItem>
        <ListItem>
          <strong>Database:</strong> PostgreSQL with PostGIS extension for
          geographical queries and spatial data operations
        </ListItem>
        <ListItem>
          <strong>Authentication:</strong> AWS Cognito integration with JWT
          tokens and role-based access control
        </ListItem>
        <ListItem>
          <strong>File Storage:</strong> AWS S3 for scalable property image
          storage with CloudFront CDN integration
        </ListItem>
        <ListItem>
          <strong>Maps & Geocoding:</strong> Mapbox API for interactive maps,
          location search, and property visualization
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/propertyflow 5.png" alt="Tenant Dashboard" />
      <Heading as="h4" fontSize={16} my={6}>
        Key Innovations
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Dual-Role Architecture:</strong> Seamlessly switches between
          property manager and tenant interfaces with role-based feature sets
        </ListItem>
        <ListItem>
          <strong>Real-time Communication:</strong> Instant notifications for
          application status changes, payment reminders, and important updates
        </ListItem>
        <ListItem>
          <strong>Intelligent Search:</strong> Location-based search with Mapbox
          geocoding, advanced filtering, and map-integrated property discovery
        </ListItem>
        <ListItem>
          <strong>Enterprise Security:</strong> AWS Cognito authentication,
          encrypted data transmission, and secure file upload handling
        </ListItem>
        <ListItem>
          <strong>Performance Optimization:</strong> Server-side rendering,
          image optimization, efficient data fetching, and caching strategies
        </ListItem>
        <ListItem>
          <strong>Modern UI/UX:</strong> Responsive design with smooth
          animations, intuitive navigation, and accessibility-first approach
        </ListItem>
      </UnorderedList>
      <P>
        PropertyFlow represents a significant advancement in real estate
        technology, combining enterprise-grade functionality with user-friendly
        design to create a platform that serves both property managers and
        tenants effectively. The application demonstrates expertise in
        full-stack development, cloud architecture, and modern web technologies.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
