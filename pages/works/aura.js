import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Aora">
    <Container>
      <Title>
        Aora <Badge>2024</Badge>
      </Title>
      <P>
        Aora is a revolutionary AI-powered video sharing platform that
        transforms creativity into limitless possibilities. Built with React
        Native and Expo, this modern mobile application delivers native
        performance across iOS, Android, and web platforms with sophisticated
        features for seamless user experience and AI-driven content discovery.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/aora">
            https://github.com/insertfahim/aora <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross-Platform Mobile App (iOS, Android, Web)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React Native, Expo SDK, TypeScript, Appwrite, NativeWind, React
            Native Reanimated
          </span>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>AI-Powered Video Sharing Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Backend</Meta>
          <span>Appwrite BaaS, Cloud Storage, Real-time Database</span>
        </ListItem>
      </List>

      <WorkImage src="/images/aura.png" alt="Aora Main Dashboard" />
      <P>
        The platform represents the convergence of modern mobile development and
        AI-powered content creation. Aora features an intuitive dashboard with
        trending content showcase, smooth horizontal scrolling, and personalized
        recommendations powered by intelligent algorithms that adapt to user
        preferences and viewing patterns.
      </P>

      <WorkImage src="/images/aura 2.png" alt="Video Discovery Interface" />
      <P>
        <strong>Intelligent Content Discovery:</strong>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          • <strong>AI-Powered Recommendations:</strong> Smart content
          suggestion engine that learns from user interactions and viewing
          history
        </ListItem>
        <ListItem>
          • <strong>Real-time Search:</strong> Instant search results with
          dynamic suggestions and content filtering capabilities
        </ListItem>
        <ListItem>
          • <strong>Trending Showcase:</strong> Horizontal scrolling carousel
          featuring popular and trending video content
        </ListItem>
        <ListItem>
          • <strong>Category Filtering:</strong> Intelligent content
          organization by topics, creators, and AI-generated tags
        </ListItem>
        <ListItem>
          • <strong>Personalized Feed:</strong> Customized content delivery
          based on user preferences and engagement patterns
        </ListItem>
      </List>

      <WorkImage src="/images/aura 3.png" alt="Content Creation Interface" />
      <P>
        <strong>Seamless Content Creation:</strong> The upload interface
        provides professional-grade video publishing capabilities with thumbnail
        generation, AI prompt integration for automated content categorization,
        and optimized media processing that ensures cross-platform compatibility
        and fast loading times.
      </P>

      <WorkImage src="/images/aura 4.png" alt="User Authentication System" />
      <P>
        <strong>Secure User Management:</strong>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          • <strong>Authentication System:</strong> Secure sign-up and sign-in
          with email validation and session persistence
        </ListItem>
        <ListItem>
          • <strong>Profile Customization:</strong> User avatar management and
          profile information with content library access
        </ListItem>
        <ListItem>
          • <strong>Content Ownership:</strong> Creator attribution system with
          user-generated content tracking and analytics
        </ListItem>
        <ListItem>
          • <strong>Session Management:</strong> Secure logout functionality
          with proper session cleanup and data protection
        </ListItem>
      </List>

      <WorkImage src="/images/aura 5.png" alt="Mobile User Experience" />
      <P>
        <strong>Technical Architecture & Innovation:</strong>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          • <strong>Cross-Platform Framework:</strong> React Native 0.73.6 with
          Expo SDK 50 for unified development and native performance
        </ListItem>
        <ListItem>
          • <strong>Modern Styling:</strong> NativeWind implementation bringing
          Tailwind CSS utility-first approach to React Native
        </ListItem>
        <ListItem>
          • <strong>Advanced Animations:</strong> React Native Reanimated 3.6
          for smooth micro-interactions and page transitions
        </ListItem>
        <ListItem>
          • <strong>File-based Routing:</strong> Expo Router 3.4 for intuitive
          navigation structure and deep linking support
        </ListItem>
        <ListItem>
          • <strong>State Management:</strong> React Context API with custom
          hooks for global state and user session management
        </ListItem>
        <ListItem>
          • <strong>Backend Services:</strong> Appwrite cloud infrastructure for
          authentication, database, and file storage solutions
        </ListItem>
      </List>

      <P>
        <strong>User Experience Excellence:</strong> Aora delivers a polished
        mobile experience with dark-themed interface, pull-to-refresh
        functionality, responsive design adapting to all screen sizes, and
        gesture navigation with intuitive user interactions. The platform
        includes loading states, error handling, and optimized video playback
        with native controls for seamless content consumption.
      </P>

      <P>
        <strong>Impact & Innovation:</strong> The platform demonstrates modern
        mobile development best practices while incorporating AI-driven features
        that enhance content discovery and user engagement. Aora showcases the
        potential of cross-platform development with React Native and Expo,
        delivering a production-ready application that performs natively across
        iOS, Android, and web environments with a single codebase.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
