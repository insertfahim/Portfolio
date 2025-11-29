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
  <Layout title="West Holidays">
    <Container>
      <Title>
        West Holidays <Badge>2024-2025</Badge>
      </Title>
      <P>
        Enterprise multi-tenant rental platform with sophisticated payment routing
        across 3 Stripe accounts managing 126+ properties. Built with Next.js 14,
        featuring server-side rendering, 5-language internationalization, and
        comprehensive property management for London, Paris, and Algiers markets.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Enterprise Multi-Tenant SaaS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 14, React 19, TypeScript, Supabase, Stripe, Redis
          </span>
        </ListItem>
        <ListItem>
          <Meta>Scale</Meta>
          <span>126+ Properties, 3 Stripe Accounts, 5 Languages</span>
        </ListItem>
        <ListItem>
          <Meta>Integrations</Meta>
          <span>Hostaway, Stripe (multi-account), Google Translate, Close.io</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/westholidays.png" alt="West Holidays Platform" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Multi-Account Stripe:</strong> Intelligent payment routing to 3
          separate Stripe accounts (West Holidays: 34, LAS: 75, OPS: 17 properties)
        </ListItem>
        <ListItem>
          <strong>Multi-Tenant Architecture:</strong> Separate configurations per
          tenant/brand with API key management and feature flags
        </ListItem>
        <ListItem>
          <strong>Server-Side Rendering:</strong> SSR homepage with pixel-perfect
          design parity and no-JavaScript fallback support
        </ListItem>
        <ListItem>
          <strong>5-Language Translation:</strong> Hybrid caching (localStorage +
          Supabase) with brand-specific glossary preservation
        </ListItem>
        <ListItem>
          <strong>Real-Time Properties:</strong> Hostaway integration with dynamic
          pricing and availability across 126+ listings
        </ListItem>
        <ListItem>
          <strong>Advanced Booking:</strong> Coupon codes, length-of-stay
          discounts, and multi-currency conversion
        </ListItem>
        <ListItem>
          <strong>CRM Integration:</strong> Close.io for lead management and
          customer relationship tracking
        </ListItem>
        <ListItem>
          <strong>Landlord Tools:</strong> Property portfolio management, holiday
          let tools, and Airbnb management features
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 14+, React 19, TypeScript 5.2,
          Tailwind CSS 3.3, Radix UI, Framer Motion
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Next.js API Routes with 25+ endpoints
        </ListItem>
        <ListItem>
          <strong>Database:</strong> Supabase (PostgreSQL) with migration system
        </ListItem>
        <ListItem>
          <strong>Caching:</strong> Redis for performance, React Query for
          client-side
        </ListItem>
        <ListItem>
          <strong>Email:</strong> Gmail service account for transactional
          notifications
        </ListItem>
        <ListItem>
          <strong>Performance:</strong> ISR revalidation, image optimization
          (WebP/AVIF), rate limiting
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technical Achievements</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Intelligent payment routing directing transactions to correct Stripe
          account based on property ownership
        </ListItem>
        <ListItem>
          Hybrid translation system with multi-tier caching for optimal
          performance
        </ListItem>
        <ListItem>
          Enterprise security with environment protection, service account auth,
          and input validation
        </ListItem>
        <ListItem>
          Infinite scroll with React Query for seamless property browsing
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
