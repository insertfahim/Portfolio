import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  UnorderedList,
  Meta
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Horizon Banking Platform">
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="whiteAlpha.200"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        A modern banking platform with real-time financial management
      </Box>

      <WorkImage src="/images/bank.png" alt="Horizon Banking Platform Dashboard" />

      <List my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js 14, TypeScript, TailwindCSS, Appwrite</span>
        </ListItem>
        <ListItem>
          <Meta>Financial APIs</Meta>
          <span>Plaid, Dwolla</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        Project Overview
      </Heading>

      <P>
        Horizon Banking Platform is a comprehensive financial management solution
        that enables users to connect multiple bank accounts, track transactions,
        analyze spending patterns, and manage their finances in real-time. The
        platform combines modern web technologies with robust financial APIs to
        deliver a seamless banking experience.
      </P>

      <WorkImage src="/images/bank 2.png" alt="Multi-Bank Account Integration" />

      <Heading as="h4" fontSize={16} my={6}>
        Key Features
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Multi-Bank Integration:</strong> Connect and manage multiple bank
          accounts via Plaid API with real-time synchronization
        </ListItem>
        <ListItem>
          <strong>Secure Fund Transfers:</strong> Instant money transfers powered by
          Dwolla payment processing with encrypted routing
        </ListItem>
        <ListItem>
          <strong>Real-Time Analytics:</strong> Interactive dashboards with Chart.js
          visualizations and spending analysis
        </ListItem>
        <ListItem>
          <strong>Enterprise Security:</strong> Multi-layered authentication with
          Appwrite backend and encrypted data storage
        </ListItem>
        <ListItem>
          <strong>Transaction Management:</strong> Complete transaction history with
          advanced filtering and categorization
        </ListItem>
        <ListItem>
          <strong>Account Monitoring:</strong> Real-time balance updates and
          transaction notifications
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/bank 3.png" alt="Secure Authentication System" />

      <Heading as="h4" fontSize={16} my={6}>
        Security & Compliance
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Authentication:</strong> Multi-factor authentication and secure
          session management
        </ListItem>
        <ListItem>
          <strong>Data Protection:</strong> End-to-end encryption for all financial
          and sensitive user information
        </ListItem>
        <ListItem>
          <strong>Compliance:</strong> Adherence to banking regulations and financial
          industry security standards
        </ListItem>
        <ListItem>
          <strong>API Security:</strong> Secure integration with financial APIs using
          encrypted connections and authenticated requests
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/bank 4.png" alt="Payment Transfer Interface" />

      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>

      <P>
        Built with modern web technologies, the platform utilizes Next.js 14 for
        server-side rendering and optimal performance, TypeScript for type safety,
        and Tailwind CSS for responsive design. The component library is based on
        ShadCN/UI for consistent, accessible user interfaces.
      </P>

      <P>
        The backend architecture leverages Appwrite for user authentication and
        database management, while integrating with Plaid for financial data
        aggregation and Dwolla for payment processing. This combination creates
        a robust, scalable platform capable of handling enterprise-level
        financial operations.
      </P>

      <WorkImage src="/images/bank 5.png" alt="Security Dashboard and Settings" />

      <Heading as="h4" fontSize={16} my={6}>
        Innovation & Impact
      </Heading>

      <P>
        Horizon Banking Platform represents the future of digital banking, combining
        multiple financial services into a single, user-friendly interface. The
        platform addresses the growing need for consolidated financial management
        while maintaining the highest standards of security and user experience.
      </P>

      <P>
        This project demonstrates advanced full-stack development capabilities,
        complex API integrations, and expertise in fintech development, delivering
        a production-ready banking solution that rivals established financial
        institutions.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
