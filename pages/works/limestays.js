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
  <Layout title="LimeStays">
    <Container>
      <Title>
        LimeStays <Badge>2024-2025</Badge>
      </Title>
      <P>
        Full-featured short-term rental SaaS platform built with Next.js 14,
        offering flexible accommodations for business travelers and extended stays
        across London, Paris, and Algiers. Features multi-language support,
        multiple payment gateways, and real-time property management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Production SaaS Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 14, TypeScript, Supabase, Stripe, Razorpay, Redis
          </span>
        </ListItem>
        <ListItem>
          <Meta>Scale</Meta>
          <span>5 Languages, 3 Currencies, 20+ API Endpoints</span>
        </ListItem>
        <ListItem>
          <Meta>Integrations</Meta>
          <span>Hostaway, Stripe, Razorpay, Google Translate, Close.io CRM</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/limestays.png" alt="LimeStays Platform" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Multi-Language Support:</strong> 5 languages (English, French,
          Spanish, Arabic, Chinese) with real-time Google Translate API and hybrid
          caching
        </ListItem>
        <ListItem>
          <strong>Multiple Payment Gateways:</strong> Stripe and Razorpay
          integration for global payment processing
        </ListItem>
        <ListItem>
          <strong>Property Management:</strong> Real-time Hostaway integration
          with dynamic pricing and availability checking
        </ListItem>
        <ListItem>
          <strong>Advanced Booking:</strong> Length-of-stay discounts, coupon
          codes, and multi-currency support
        </ListItem>
        <ListItem>
          <strong>CRM Integration:</strong> Close.io integration for lead
          management and customer tracking
        </ListItem>
        <ListItem>
          <strong>SEO Optimization:</strong> JSON-LD structured data, sitemap
          generation, and Open Graph tags
        </ListItem>
        <ListItem>
          <strong>Performance:</strong> ISR with strategic revalidation, Redis
          caching, and rate limiting
        </ListItem>
        <ListItem>
          <strong>Admin Dashboard:</strong> Translation cache management,
          newsletter subscribers, and analytics
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 14 (App Router), TypeScript, Tailwind
          CSS, Radix UI, Framer Motion
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Next.js API Routes, React Hook Form + Zod
          validation
        </ListItem>
        <ListItem>
          <strong>Database:</strong> Supabase (PostgreSQL) with real-time features
        </ListItem>
        <ListItem>
          <strong>Caching:</strong> Redis via ioredis for sessions and performance
        </ListItem>
        <ListItem>
          <strong>Content:</strong> MDX support for blog with ISR (1-hour
          revalidation)
        </ListItem>
        <ListItem>
          <strong>Maps:</strong> Google Maps API with custom styling and
          clustering
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
