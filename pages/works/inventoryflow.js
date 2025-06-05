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
  <Layout title="InventoryFlow Pro">
    <Container>
      <Title>
        InventoryFlow Pro <Badge>2024</Badge>
      </Title>{' '}
      <P>
        Modern full-stack inventory management system featuring real-time
        analytics, comprehensive product tracking, and intelligent expense
        monitoring. Built with scalable cloud architecture and interactive
        visualizations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/inventory-management">
            https://github.com/insertfahim/inventory-management{' '}
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
            Next.js 14, TypeScript, Tailwind CSS, Material-UI, Redux Toolkit
          </span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Node.js, Express, Prisma ORM, PostgreSQL, PM2</span>
        </ListItem>
        <ListItem>
          <Meta>Cloud Services</Meta>
          <span>AWS EC2, AWS RDS, AWS Amplify, AWS S3</span>
        </ListItem>
        <ListItem>
          <Meta>Key Features</Meta>
          <span>
            Real-time Analytics, Interactive Dashboards, Product Management,
            Financial Tracking
          </span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/Inventory.png"
        alt="InventoryFlow Pro Dashboard Overview"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Core Features
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Comprehensive Dashboard:</strong> Multi-metric overview cards
          with trend analysis, interactive sales and purchase summaries, and
          real-time expense tracking with category breakdowns
        </ListItem>
        <ListItem>
          <strong>Advanced Product Management:</strong> Dynamic product catalog
          with search functionality, real-time inventory tracking, product
          rating system, and bulk operations
        </ListItem>
        <ListItem>
          <strong>Business Intelligence:</strong> Sales performance analytics
          with time-series data, purchase trend analysis, expense
          categorization, and KPI monitoring
        </ListItem>
        <ListItem>
          <strong>Financial Analytics:</strong> Expense tracking by category
          with visual breakdowns, revenue vs. expenditure analysis, and profit
          margin calculations
        </ListItem>
        <ListItem>
          <strong>User Management:</strong> Comprehensive user directory with
          role-based access control foundation and user activity tracking
          capabilities
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/Inventory 2.png"
        alt="Product Management Interface"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>
      <P>
        InventoryFlow Pro features a modern full-stack architecture with Next.js
        14 frontend utilizing App Router and Server Components, coupled with a
        robust Express.js backend. The application leverages PostgreSQL with
        Prisma ORM for type-safe database operations, AWS services for cloud
        infrastructure, and Redux Toolkit for efficient state management.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 14 with TypeScript, Tailwind CSS
          with Material-UI components, Redux Toolkit with RTK Query, and
          Recharts for data visualization
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Node.js with Express, Prisma ORM for
          database operations, RESTful API design, and PM2 for process
          management
        </ListItem>
        <ListItem>
          <strong>Database:</strong> PostgreSQL with Prisma migrations and
          seeding capabilities
        </ListItem>
        <ListItem>
          <strong>Cloud Infrastructure:</strong> AWS EC2 for server hosting, AWS
          RDS for database, AWS Amplify for frontend deployment, and AWS S3 for
          file storage
        </ListItem>
        <ListItem>
          <strong>Development Tools:</strong> TypeScript compilation, ESLint
          configuration, and Concurrently for parallel development processes
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/Inventory 3.png" alt="Analytics Dashboard" />
      <WorkImage src="/images/Inventory 4.png" alt="Financial Tracking" />
      <Heading as="h4" fontSize={16} my={6}>
        User Interface Highlights
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Responsive Grid System:</strong> Adaptive layouts that work
          seamlessly across all devices with modern card design and consistent
          spacing
        </ListItem>
        <ListItem>
          <strong>Interactive Visualizations:</strong> Real-time data charts
          with hover effects and animations using Recharts library
        </ListItem>
        <ListItem>
          <strong>Intuitive Navigation:</strong> Collapsible sidebar with
          contextual icons and smooth loading animations with skeleton screens
        </ListItem>
        <ListItem>
          <strong>Modern Design System:</strong> Clean, shadowed components with
          user-friendly error handling and fallback states
        </ListItem>
        <ListItem>
          <strong>Performance Optimized:</strong> Server-side rendering with
          optimized API queries and efficient state management
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/Inventory 5.png" alt="User Management System" />
      <Heading as="h4" fontSize={16} my={6}>
        Key Innovations
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Real-time Analytics:</strong> Live dashboard updates with
          instant data synchronization and interactive charts providing
          actionable business insights
        </ListItem>
        <ListItem>
          <strong>Type-Safe Architecture:</strong> End-to-end TypeScript
          implementation ensuring reliability and maintainability across the
          entire application stack
        </ListItem>
        <ListItem>
          <strong>Scalable Cloud Infrastructure:</strong> Full AWS deployment
          with EC2, RDS, and Amplify integration for enterprise-grade
          scalability
        </ListItem>
        <ListItem>
          <strong>Advanced State Management:</strong> Redux Toolkit with RTK
          Query for efficient data fetching, caching, and synchronization
        </ListItem>
        <ListItem>
          <strong>Business Intelligence Focus:</strong> Comprehensive analytics
          beyond simple CRUD operations, providing meaningful insights for
          business decision-making
        </ListItem>
        <ListItem>
          <strong>Mobile-First Design:</strong> Fully responsive interface that
          maintains functionality and aesthetics across all device sizes
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/Inventory 6.png" alt="Expense Analytics" />
      <P>
        InventoryFlow Pro represents a significant advancement in inventory
        management technology, combining enterprise-grade functionality with
        modern web development practices. The application demonstrates expertise
        in full-stack development, cloud architecture, real-time data
        processing, and business intelligence, making it more than just another
        CRUD application—it&apos;s a comprehensive business solution.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
