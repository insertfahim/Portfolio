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
        The Flex PMS <Badge>Sep 2025-Present</Badge>
      </Title>
      <P>
        Enterprise-grade Property Management System serving 500+ properties with 15K+
        daily transactions across London, Paris, and Algiers. Built with micro-frontend
        architecture, real-time multi-tenant isolation, and production-grade observability
        stack that reduced MTTD from 45min to 8min and MTTR from 2hr to 25min.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Enterprise SaaS Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, FastAPI, PostgreSQL, Redis, Docker, Kubernetes
          </span>
        </ListItem>
        <ListItem>
          <Meta>Scale</Meta>
          <span>500+ Properties, 15K+ Daily Transactions, 3M+ Monthly Transactions</span>
        </ListItem>
        <ListItem>
          <Meta>SRE Metrics</Meta>
          <span>P99 400ms, 99.7% Message Delivery, MTTD 8min, MTTR 25min</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/the-flex-pms.png" alt="The Flex PMS Dashboard" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>SRE & Infrastructure</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Tenant Data Isolation:</strong> Designed PostgreSQL Row-Level Security
          policies with PgBouncer connection pooling, eliminating cross-tenant data leaks
          and reducing auth overhead by 70%
        </ListItem>
        <ListItem>
          <strong>Performance Optimization:</strong> Diagnosed P95 latency spikes (800ms+)
          caused by N+1 queries; implemented Redis write-through cache with 15-min TTL and
          batch prefetching, dropping P95 to 85ms and cutting database load by 45%
        </ListItem>
        <ListItem>
          <strong>Observability Stack:</strong> Built structured JSON logging → Loki → Grafana
          dashboards with 12 SLI panels tracking error rates, latency percentiles, and
          saturation against defined SLOs
        </ListItem>
        <ListItem>
          <strong>WebSocket Reliability:</strong> Debugged connection drops under load
          (TCP keepalive misconfiguration); redesigned with heartbeat mechanism, exponential
          backoff reconnection, and Supabase Realtime channels—achieved 99.7% message delivery
        </ListItem>
        <ListItem>
          <strong>CI/CD Pipeline:</strong> Led toil reduction initiative; built GitHub Actions
          pipeline with parallel test execution, Docker layer caching, and blue-green
          deployment—now ship 3x daily with zero rollbacks
        </ListItem>
        <ListItem>
          <strong>Micro-Frontend Architecture:</strong> Split monolith into 5 independently
          deployable modules behind Nginx ingress controller with path-based routing—enabled
          parallel team development, reduced deploy conflicts by 90%
        </ListItem>
        <ListItem>
          <strong>Database Optimization:</strong> Optimized schema design with composite indexes
          on (tenant_id, created_at), query result pagination, and Redis cache warming on
          login—dropped P99 load time to 400ms for 3M+ monthly transactions
        </ListItem>
        <ListItem>
          <strong>Security Implementation:</strong> Implemented defense-in-depth: OAuth 2.0
          PKCE flow, JWT with 15-min expiry + refresh rotation, RBAC with 8 granular
          permissions, and immutable audit log (append-only table)—passed SOC 2 Type I readiness
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technology Stack</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Frontend:</strong> React, TypeScript, Vite, TanStack Query,
          Tailwind CSS, Chart.js
        </ListItem>
        <ListItem>
          <strong>Backend:</strong> FastAPI (Python), SQLAlchemy, Pydantic,
          async/await architecture
        </ListItem>
        <ListItem>
          <strong>Database:</strong> PostgreSQL with Row-Level Security,
          PgBouncer connection pooling, composite indexes
        </ListItem>
        <ListItem>
          <strong>Caching:</strong> Redis write-through cache with TTL,
          batch prefetching, cache warming strategies
        </ListItem>
        <ListItem>
          <strong>Infrastructure:</strong> Docker, Kubernetes, Nginx ingress
          controller, GitHub Actions CI/CD
        </ListItem>
        <ListItem>
          <strong>Observability:</strong> Prometheus, Grafana, Loki,
          OpenTelemetry, structured JSON logging
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Metrics</Center>
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          <strong>Latency:</strong> P95 dropped from 800ms to 85ms (10x improvement)
        </ListItem>
        <ListItem>
          <strong>MTTD:</strong> Reduced from 45min to 8min (82% improvement)
        </ListItem>
        <ListItem>
          <strong>MTTR:</strong> Reduced from 2hr to 25min (79% improvement)
        </ListItem>
        <ListItem>
          <strong>Auth Overhead:</strong> Reduced by 70% with RLS + connection pooling
        </ListItem>
        <ListItem>
          <strong>Database Load:</strong> Reduced by 45% through caching strategies
        </ListItem>
        <ListItem>
          <strong>Deploy Frequency:</strong> 3x daily with zero rollbacks
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
