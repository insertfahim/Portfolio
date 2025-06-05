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
  <Layout title="Car Dealer Website">
    <Container>
      <Title>
        Car Dealer Website <Badge>2024</Badge>
      </Title>{' '}
      <P>
        Full-stack car dealership platform built with Next.js 15 and modern web
        technologies. Features AI-powered classified generation, comprehensive
        admin dashboard, and seamless customer experience for inventory and
        relationship management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/car-dealer-website">
            https://github.com/insertfahim/car-dealer-website{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application (Full-Stack)</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>
            Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
          </span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Next.js API Routes, Prisma ORM, PostgreSQL, Redis</span>
        </ListItem>
        <ListItem>
          <Meta>AI & Services</Meta>
          <span>OpenAI GPT-4, AWS S3, Imgix, NextAuth.js, Stripe</span>
        </ListItem>
        <ListItem>
          <Meta>Security</Meta>
          <span>
            2FA Authentication, Rate Limiting, Content Security Policy
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/car.png" alt="Car Dealer Website Homepage" />
      <Heading as="h4" fontSize={16} my={6}>
        Core Functionality
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Vehicle Inventory Management:</strong> Complete CRUD
          operations for classified listings with comprehensive vehicle
          specifications
        </ListItem>
        <ListItem>
          <strong>Advanced Search & Filtering:</strong> Multi-parameter search
          with real-time results across make, model, year, price, and features
        </ListItem>
        <ListItem>
          <strong>AI-Powered Classified Creation:</strong> Generate detailed
          listings from vehicle images with automatic specification detection
        </ListItem>
        <ListItem>
          <strong>Customer Management:</strong> Lead tracking, lifecycle
          management, and comprehensive customer relationship tools
        </ListItem>
        <ListItem>
          <strong>Favorites System:</strong> User-friendly wishlist
          functionality with persistent storage and notifications
        </ListItem>
        <ListItem>
          <strong>Analytics Dashboard:</strong> Sales tracking, conversion
          metrics, and performance analytics for business insights
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/car 2.png" alt="Vehicle Inventory Management" />
      <Heading as="h4" fontSize={16} my={6}>
        AI & Automation Features
      </Heading>
      <P>
        The platform leverages OpenAI GPT-4 to revolutionize vehicle listing
        creation. By simply uploading a vehicle image, the AI analyzes and
        extracts comprehensive details including make, model, variant
        identification, year detection, feature descriptions, and price
        estimation suggestions.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Smart Data Extraction:</strong> Automatic detection of vehicle
          specifications from uploaded images
        </ListItem>
        <ListItem>
          <strong>Intelligent Categorization:</strong> AI-driven classification
          of make, model, and variant information
        </ListItem>
        <ListItem>
          <strong>Content Generation:</strong> Automated descriptions and
          comprehensive feature detection
        </ListItem>
        <ListItem>
          <strong>Price Intelligence:</strong> AI-powered price estimation based
          on market analysis and vehicle specifications
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/car 3.png" alt="AI-Powered Listing Creation" />
      <Heading as="h4" fontSize={16} my={6}>
        Admin Dashboard & Analytics
      </Heading>
      <P>
        The comprehensive admin dashboard provides complete control over the
        dealership operations with real-time analytics, customer management, and
        advanced inventory control capabilities.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Sales Analytics:</strong> Revenue tracking, conversion
          metrics, and detailed performance monitoring
        </ListItem>
        <ListItem>
          <strong>Inventory Control:</strong> Bulk operations, status
          management, and automated workflow processing
        </ListItem>
        <ListItem>
          <strong>Image Management:</strong> Multi-upload capabilities with AWS
          S3 integration and Imgix optimization
        </ListItem>
        <ListItem>
          <strong>Customer Insights:</strong> Lead tracking, conversion
          analysis, and customer lifecycle management
        </ListItem>
        <ListItem>
          <strong>Data Export:</strong> Comprehensive reporting with
          customizable export options for business intelligence
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/car 4.png" alt="Admin Dashboard Analytics" />
      <Heading as="h4" fontSize={16} my={6}>
        Security & Performance
      </Heading>
      <P>
        Built with enterprise-grade security featuring NextAuth.js integration,
        two-factor authentication via email, Redis-powered rate limiting, and
        comprehensive content security policies.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Authentication System:</strong> Secure user management with
          database-backed sessions and 2FA verification
        </ListItem>
        <ListItem>
          <strong>Rate Limiting:</strong> Redis-powered protection against abuse
          and automated attacks
        </ListItem>
        <ListItem>
          <strong>Performance Optimization:</strong> Server-side rendering,
          Redis caching, and optimized database queries
        </ListItem>
        <ListItem>
          <strong>Image Processing:</strong> AWS S3 storage with Imgix CDN for
          optimized delivery and blur hash generation
        </ListItem>
        <ListItem>
          <strong>Scalable Architecture:</strong> Built for high-traffic
          environments with efficient caching strategies
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/car 5.png" alt="Customer Interface & Search" />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Innovation
      </Heading>
      <P>
        This platform showcases the latest in web development technology,
        combining Next.js 15 with React 19&apos;s concurrent features,
        TypeScript for type safety, and a modern stack optimized for performance
        and scalability. The integration of AI capabilities with traditional
        e-commerce functionality represents a significant advancement in
        automotive retail technology.
      </P>
      <P>
        The project demonstrates expertise in full-stack development, cloud
        architecture, AI integration, and modern web technologies, delivering a
        complete solution for automotive businesses looking to modernize their
        digital presence and operations.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
