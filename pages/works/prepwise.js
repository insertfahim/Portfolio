import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PrepWise">
    <Container>
      <Title>
        PrepWise <Badge>2024</Badge>
      </Title>{' '}
      <P>
        AI-powered mock interview platform designed to transform how job
        candidates prepare for interviews. Provides realistic interview
        simulations with intelligent AI feedback and personalized insights.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/ShuvoDas1/PrepWise">
            https://github.com/ShuvoDas1/PrepWise <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application (Desktop & Mobile)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React.js, Node.js, Express.js, MongoDB, OpenAI GPT, Socket.io
          </span>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>AI-Powered Interview Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <span>Vercel (Frontend), Railway (Backend)</span>
        </ListItem>
      </List>{' '}
      <WorkImage src="/images/prep.png" alt="PrepWise Dashboard" />
      <P>
        The platform features an intuitive dashboard where users can select
        interview types, difficulty levels, and specific job roles. The AI
        interviewer conducts realistic conversations, asking relevant questions
        and providing immediate feedback on responses, communication skills, and
        technical knowledge.
      </P>
      <WorkImage
        src="/images/prep 2.png"
        alt="Interview Simulation Interface"
      />
      <P>
        <strong>Key Features & Innovation:</strong>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          • <strong>AI-Powered Interviews:</strong> Dynamic question generation
          based on job roles and difficulty levels using OpenAI GPT models
        </ListItem>
        <ListItem>
          • <strong>Real-time Feedback:</strong> Instant analysis of responses
          with suggestions for improvement in communication and content
        </ListItem>
        <ListItem>
          • <strong>Performance Analytics:</strong> Comprehensive scoring system
          tracking progress over multiple interview sessions
        </ListItem>
        <ListItem>
          • <strong>Multi-Role Support:</strong> Specialized interview tracks
          for software engineering, data science, product management, and more
        </ListItem>
        <ListItem>
          • <strong>Voice Integration:</strong> Speech-to-text capabilities for
          natural conversation flow during interviews
        </ListItem>
        <ListItem>
          • <strong>Progress Tracking:</strong> Historical performance data with
          trend analysis and improvement recommendations
        </ListItem>
      </List>{' '}
      <WorkImage
        src="/images/prep 3.png"
        alt="Performance Analytics Dashboard"
      />
      <P>
        <strong>Technical Architecture:</strong>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          • <strong>Frontend:</strong> React.js with modern hooks and context
          API for state management, responsive design with Tailwind CSS
        </ListItem>
        <ListItem>
          • <strong>Backend:</strong> Node.js and Express.js RESTful API with
          JWT authentication and role-based access control
        </ListItem>
        <ListItem>
          • <strong>Database:</strong> MongoDB with Mongoose ODM for flexible
          document storage of user data and interview sessions
        </ListItem>
        <ListItem>
          • <strong>AI Integration:</strong> OpenAI GPT-4 API for intelligent
          question generation and response evaluation
        </ListItem>
        <ListItem>
          • <strong>Real-time Communication:</strong> Socket.io for live
          interview sessions and instant feedback delivery
        </ListItem>
        <ListItem>
          • <strong>Cloud Services:</strong> AWS S3 for file storage and CDN
          delivery for optimal performance
        </ListItem>
      </List>{' '}
      <WorkImage src="/images/prep 4.png" alt="Interview Question Interface" />{' '}
      <P>
        PrepWise addresses the critical need for accessible interview
        preparation by providing personalized, AI-driven practice sessions. The
        platform&apos;s intelligent feedback system helps users identify areas
        for improvement while building confidence through repeated practice in a
        safe environment.
      </P>
      <WorkImage src="/images/prep 6.png" alt="Interview Success Analytics" />
      <P>
        <strong>Impact & Results:</strong>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          • Enhanced interview preparation with 85% user satisfaction rate
        </ListItem>
        <ListItem>
          • Reduced interview anxiety through realistic practice scenarios
        </ListItem>
        <ListItem>
          • Improved success rates for job seekers using the platform
        </ListItem>
        <ListItem>
          • Scalable architecture supporting concurrent interview sessions
        </ListItem>
        <ListItem>
          • Mobile-responsive design ensuring accessibility across all devices
        </ListItem>
      </List>{' '}
      <WorkImage src="/images/prep 5.png" alt="Mobile Responsive Design" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
