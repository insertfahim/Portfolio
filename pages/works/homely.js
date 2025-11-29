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
  <Layout title="Homely">
    <Container>
      <Title>
        Homely <Badge>2024-2025</Badge>
      </Title>
      <P>
        Modern multilingual short-term rental platform serving business travelers,
        relocations, and extended stays across London, Paris, and Algiers. Built
        with Next.js 14, featuring real-time property listings, Stripe payment
        processing, and a sophisticated 5-language translation system with hybrid
        caching.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Production SaaS Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 14, React 19, TypeScript, Supabase, Stripe, Tailwind CSS
          </span>
        </ListItem>
        <ListItem>
          <Meta>Scale</Meta>
          <span>500+ Properties, 5 Languages, 25+ API Endpoints</span>
        </ListItem>
        <ListItem>
          <Meta>Integrations</Meta>
          <span>Hostaway, Stripe, Google Translate, Google Maps, Gmail API</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/homely.png" alt="Homely Platform" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Real-Time Translation:</strong> 5-language support (English,
          French, Spanish, Arabic, Chinese) with hybrid caching system combining
          client localStorage and server-side Supabase
        </ListItem>
        <ListItem>
          <strong>Property Discovery:</strong> Integration with Hostaway for 500+
          live property listings with dynamic pricing and availability
        </ListItem>
        <ListItem>
          <strong>Advanced Booking:</strong> Multi-step checkout with Stripe
          payments, coupon codes, and length-of-stay discounts
        </ListItem>
        <ListItem>
          <strong>Interactive Maps:</strong> Google Maps integration with custom
          styling and clustered property markers
        </ListItem>
        <ListItem>
          <strong>Multi-Currency Support:</strong> Real-time currency conversion
          for international guests
        </ListItem>
        <ListItem>
          <strong>Content Management:</strong> Blog system with MDX support and
          SEO optimization using JSON-LD structured data
        </ListItem>
        <ListItem>
          <strong>Admin Dashboard:</strong> Translation cache management,
          performance monitoring, and analytics
        </ListItem>
        <ListItem>
          <strong>Landlord Portal:</strong> Property portfolio management and
          guaranteed rent scheme information
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> Next.js 14 (App Router), React 19, TypeScript,
          Tailwind CSS, Radix UI, Framer Motion
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> Next.js API Routes, server-only modules for
          security
        </ListItem>
        <ListItem>
          <strong>Database:</strong> Supabase (PostgreSQL) with real-time
          subscriptions
        </ListItem>
        <ListItem>
          <strong>Translation:</strong> Google Cloud Translation API with
          intelligent glossary system
        </ListItem>
        <ListItem>
          <strong>Payments:</strong> Stripe integration with payment intent
          management
        </ListItem>
        <ListItem>
          <strong>Deployment:</strong> Cloudflare Pages with edge deployment via
          Open Next
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Performance Optimizations</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>ISR Strategy:</strong> Blog pages (1-hour), city pages
          (15-minute), homepage (1-hour) revalidation
        </ListItem>
        <ListItem>
          <strong>Image Optimization:</strong> WebP/AVIF formats with responsive
          sizing
        </ListItem>
        <ListItem>
          <strong>Translation Caching:</strong> Multi-tier caching with 30+ day
          expiration and automatic cleanup
        </ListItem>
        <ListItem>
          <strong>API Timeouts:</strong> 45-second timeouts on external API calls
          with graceful fallbacks
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
