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
  <Layout title="AI Thumbnail Generator">
    <Container>
      <Title>
        AI Thumbnail Generator <Badge>2024</Badge>
      </Title>{' '}
      <P>
        AI-powered thumbnail generator that automatically removes backgrounds
        and creates stunning thumbnails with customizable text overlays.
        Leverages cutting-edge AI technology to solve time-consuming thumbnail
        creation for content creators.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/ai-thumbnail-generator">
            https://github.com/insertfahim/ai-thumbnail-generator{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application (Next.js)</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>Next.js 14, TypeScript, Tailwind CSS, Radix UI</span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Next.js API Routes, Prisma ORM, PostgreSQL, NextAuth.js</span>
        </ListItem>
        <ListItem>
          <Meta>AI Technology</Meta>
          <span>@imgly/background-removal, HTML5 Canvas API</span>
        </ListItem>
        <ListItem>
          <Meta>External Services</Meta>
          <span>Stripe Payments, AWS S3, NextAuth.js</span>
        </ListItem>
      </List>{' '}
      <WorkImage
        src="/images/thumbnail-gen.png"
        alt="AI Thumbnail Generator Interface"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Core Features
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>AI-Powered Background Removal:</strong> Automatically extracts
          subjects from images using advanced machine learning with real-time
          preview
        </ListItem>
        <ListItem>
          <strong>Professional Text Overlays:</strong> Dynamic text rendering
          with multiple font options (Arial, Inter, Domine) and styling presets
        </ListItem>
        <ListItem>
          <strong>Credit-Based System:</strong> Flexible pricing tiers with
          Stripe integration for 10, 25, and 100 credit packages
        </ListItem>
        <ListItem>
          <strong>Cloud Storage Integration:</strong> Seamless AWS S3
          integration with presigned URLs for secure file management
        </ListItem>
        <ListItem>
          <strong>Enterprise Authentication:</strong> NextAuth.js with secure
          user registration, login, and session management
        </ListItem>
        <ListItem>
          <strong>Real-time Processing:</strong> Instant preview with canvas
          rendering and high-quality output optimization{' '}
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/thumbnail 2.png"
        alt="AI Background Removal Process"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>
      <P>
        The application features a modern full-stack architecture with Next.js
        14 and TypeScript. The AI processing happens client-side using the
        @imgly/background-removal library, while the backend handles
        authentication, payment processing, and cloud storage through secure API
        routes.
      </P>
      <WorkImage
        src="/images/thumbnail 3.png"
        alt="Text Customization Interface"
      />
      <Heading as="h4" fontSize={16} my={6}>
        User Experience Highlights
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          Drag-and-drop image upload interface with instant processing feedback
        </ListItem>
        <ListItem>
          Three professional styling presets for different thumbnail types
        </ListItem>
        <ListItem>
          Real-time text customization with dynamic font sizing adaptation
        </ListItem>
        <ListItem>
          One-click download functionality with automatic cloud backup
        </ListItem>
        <ListItem>
          Recent thumbnails gallery for easy access to previous creations
        </ListItem>
        <ListItem>
          Responsive design that works flawlessly across all devices{' '}
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/thumbnail 4.png"
        alt="Payment Integration Dashboard"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Payment & Business Model
      </Heading>
      <P>
        The platform uses a credit-based system powered by Stripe for secure
        payment processing. New users receive 1 free credit, with additional
        credits available through one-time purchases. The system includes
        webhook handling for real-time payment verification and automatic credit
        allocation.
      </P>
      <WorkImage
        src="/images/thumbnail 5.png"
        alt="Thumbnail Gallery and Export Features"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Innovation & Impact
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          First to integrate client-side AI background removal with professional
          thumbnail creation
        </ListItem>
        <ListItem>
          Reduces thumbnail creation time from hours to seconds for content
          creators
        </ListItem>
        <ListItem>
          Combines multiple complex technologies into a seamless user experience
        </ListItem>
        <ListItem>
          Demonstrates practical application of AI in everyday content creation
          workflows
        </ListItem>
      </UnorderedList>
      <P>
        This project represents a significant advancement in democratizing
        professional design tools, making high-quality thumbnail creation
        accessible to content creators worldwide regardless of their design
        experience or budget constraints.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
