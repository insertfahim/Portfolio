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
  <Layout title="Horizon Banking Platform">
    <Container>
      <Title>
        Horizon Banking Platform <Badge>2024</Badge>
      </Title>
      
      <P>
        Fintech banking platform that redefines modern banking experiences. Features multi-bank integration, real-time transaction monitoring, and secure fund transfers—all in an intuitive, responsive interface.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/horizon-banking">
            https://github.com/insertfahim/horizon-banking <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application (Next.js 14)</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>Next.js 14, React, TypeScript, Tailwind CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Backend Services</Meta>
          <span>Appwrite, Plaid API, Dwolla API</span>
        </ListItem>
        <ListItem>
          <Meta>UI Components</Meta>
          <span>ShadCN/UI, Chart.js, React Hook Form</span>
        </ListItem>
        <ListItem>
          <Meta>Security</Meta>
          <span>Server-side Authentication, Encrypted Transactions</span>
        </ListItem>
      </List>

      <WorkImage src="/images/bank.png" alt="Horizon Banking Platform Dashboard" />

      <Heading as="h4" fontSize={16} my={6}>
        Core Banking Features
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Multi-Bank Integration:</strong> Connect and manage multiple bank accounts 
          from different financial institutions in one unified platform
        </ListItem>
        <ListItem>
          <strong>Real-time Account Overview:</strong> Comprehensive dashboard displaying 
          account balances, recent transactions, and financial summaries
        </ListItem>
        <ListItem>
          <strong>Secure Fund Transfers:</strong> Transfer money between connected accounts 
          with bank-grade security and real-time processing
        </ListItem>
        <ListItem>
          <strong>Transaction History:</strong> Detailed transaction tracking with advanced 
          filtering, search, and categorization capabilities
        </ListItem>
        <ListItem>
          <strong>Payment Processing:</strong> Seamless payment functionality with multiple 
          payment methods and transaction verification
        </ListItem>
        <ListItem>
          <strong>Financial Analytics:</strong> Interactive charts and spending analysis 
          to track financial patterns and budgeting insights
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/bank 2.png" alt="Multi-Bank Account Integration" />

      <Heading as="h4" fontSize={16} my={6}>
        Advanced Financial Management
      </Heading>

      <P>
        The platform leverages Plaid&apos;s robust financial data APIs to provide comprehensive 
        account connectivity and real-time transaction monitoring. Users can seamlessly 
        link multiple bank accounts, credit cards, and financial institutions while 
        maintaining complete security and data privacy.
      </P>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Account Linking:</strong> Secure integration with 10,000+ financial 
          institutions through Plaid&apos;s verified connection system
        </ListItem>
        <ListItem>
          <strong>Balance Monitoring:</strong> Real-time account balance updates with 
          automatic synchronization across all connected accounts
        </ListItem>
        <ListItem>
          <strong>Transaction Categorization:</strong> Intelligent categorization of 
          expenses with customizable labels and merchant identification
        </ListItem>
        <ListItem>
          <strong>Spending Analytics:</strong> Visual representation of spending patterns 
          with monthly comparisons and budget tracking
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/bank 3.png" alt="Transaction Management Interface" />

      <Heading as="h4" fontSize={16} my={6}>
        Payment & Transfer System
      </Heading>

      <P>
        Built with Dwolla&apos;s ACH payment network, the platform enables secure, fast, and 
        cost-effective money transfers between accounts. The system supports both instant 
        and standard transfer options with comprehensive transaction tracking and receipt 
        generation.
      </P>

      <UnorderedList my={4}>
        <ListItem>
          <strong>ACH Transfers:</strong> Secure bank-to-bank transfers using Dwolla&apos;s 
          verified payment network with low transaction fees
        </ListItem>
        <ListItem>
          <strong>Instant Transfers:</strong> Real-time money movement between supported 
          accounts with immediate balance updates
        </ListItem>
        <ListItem>
          <strong>Payment Scheduling:</strong> Set up recurring transfers and future-dated 
          payments with automated execution
        </ListItem>
        <ListItem>
          <strong>Transfer History:</strong> Complete audit trail of all transactions with 
          status tracking and digital receipts
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/bank 4.png" alt="Payment Transfer Interface" />

      <Heading as="h4" fontSize={16} my={6}>
        Security & Authentication
      </Heading>

      <P>
        The platform implements enterprise-grade security measures including server-side 
        authentication through Appwrite, encrypted data transmission, and secure session 
        management. All financial data is handled in compliance with banking regulations 
        and industry security standards.
      </P>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Secure Authentication:</strong> Multi-layer authentication system with 
          secure session management and user verification
        </ListItem>
        <ListItem>
          <strong>Data Encryption:</strong> End-to-end encryption for all financial data 
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

      <WorkImage src="/images/bank 5.png" alt="Security Dashboard and Settings" />

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
