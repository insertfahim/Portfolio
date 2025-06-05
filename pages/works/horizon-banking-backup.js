import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
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
      </Title>      <P>
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
        The platform leverages Plaid's robust financial data APIs to provide comprehensive 
        account connectivity and real-time transaction monitoring. Users can seamlessly 
        link multiple bank accounts, credit cards, and financial institutions while 
        maintaining complete security and data privacy.
      </P>

      <UnorderedList my={4}>
        <ListItem>
          <strong>Account Linking:</strong> Secure integration with 10,000+ financial 
          institutions through Plaid's verified connection system
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
        Built with Dwolla's ACH payment network, the platform enables secure, fast, and 
        cost-effective money transfers between accounts. The system supports both instant 
        and standard transfer options with comprehensive transaction tracking and receipt 
        generation.
      </P>

      <UnorderedList my={4}>
        <ListItem>
          <strong>ACH Transfers:</strong> Secure bank-to-bank transfers using Dwolla's 
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
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>Next.js 14, TypeScript, TailwindCSS, Radix UI</span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Appwrite, Node.js, Server Actions</span>
        </ListItem>
        <ListItem>
          <Meta>Financial APIs</Meta>
          <span>Plaid API, Dwolla API, Real-time Banking</span>
        </ListItem>
        <ListItem>
          <Meta>Data Visualization</Meta>
          <span>Chart.js, React Chart.js 2</span>
        </ListItem>
      </List>

      <WorkImage src="/images/bank.png" alt="Horizon Banking Platform Dashboard" />
      
      <Heading as="h4" fontSize={16} my={6}>
        Core Banking Features
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

      <WorkImage src="/images/bank 2.png" alt="Multi-Bank Account Integration" />
      
      <Heading as="h4" fontSize={16} my={6}>
        Authentication & Security
      </Heading>
      
      <P>
        The platform implements enterprise-grade security with comprehensive KYC 
        validation, multi-factor authentication, and role-based access control. 
        All sensitive data is encrypted using industry-standard protocols and 
        stored securely through Appwrite's backend infrastructure.
      </P>

      <WorkImage src="/images/bank 3.png" alt="Secure Authentication System" />
      
      <Heading as="h4" fontSize={16} my={6}>
        Payment Processing Architecture
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
          Plaid API integration for secure bank account connection and data retrieval
        </ListItem>
        <ListItem>
          Dwolla ACH payment processing for instant fund transfers
        </ListItem>
        <ListItem>
          Real-time transaction verification with encrypted routing protocols
        </ListItem>
        <ListItem>
          Transfer status tracking with optimistic UI patterns
        </ListItem>
        <ListItem>
          Compliance with banking regulations and security standards
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/bank 4.png" alt="Payment Transfer Interface" />
      
      <Heading as="h4" fontSize={16} my={6}>
        Financial Analytics Dashboard
      </Heading>
      
      <P>
        The platform features comprehensive financial analytics with interactive 
        Chart.js visualizations. Users can track spending patterns, view balance 
        trends, analyze transaction categories, and gain insights into their 
        financial behavior through beautiful, responsive charts and graphs.
      </P>

      <WorkImage src="/images/bank 5.png" alt="Financial Analytics and Insights" />
      
      <Heading as="h4" fontSize={16} my={6}>
        Technical Innovation
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
          Next.js 14 App Router for optimal performance and SEO
        </ListItem>
        <ListItem>
          Server-side rendering with real-time data synchronization
        </ListItem>
        <ListItem>
          Type-safe development with TypeScript and Zod validation
        </ListItem>
        <ListItem>
          Responsive design following WCAG accessibility guidelines
        </ListItem>
        <ListItem>
          Performance monitoring with Sentry integration
        </ListItem>
        <ListItem>
          Progressive enhancement with optimistic UI patterns
        </ListItem>
      </UnorderedList>
      
      <Heading as="h4" fontSize={16} my={6}>
        Impact & Innovation
      </Heading>
      
      <P>
        Horizon Banking Platform represents a significant advancement in fintech 
        applications, combining modern web technologies with robust financial APIs 
        to create a seamless banking experience. The platform demonstrates how 
        cutting-edge development practices can be applied to create secure, 
        scalable financial applications that prioritize both user experience and 
        regulatory compliance.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
