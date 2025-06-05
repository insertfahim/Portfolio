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
  <Layout title="VlogTranslator">
    <Container>
      <Title>
        VlogTranslator <Badge>2024</Badge>
      </Title>{' '}
      <P>
        AI-powered web application that automatically transcribes YouTube videos
        and translates them into Japanese using OpenAI Whisper and GPT. Bridges
        language barriers in video content with modern web technologies.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/vlog-translator">
            https://github.com/insertfahim/vlog-translator{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Next.js) / Desktop / Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>Next.js 13+, TypeScript, Stitches CSS, Radix UI</span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Next.js API Routes, Node.js, Python, Shell Scripts</span>
        </ListItem>
        <ListItem>
          <Meta>AI Services</Meta>
          <span>OpenAI Whisper API, OpenAI GPT API, yt-dlp</span>
        </ListItem>
        <ListItem>
          <Meta>Output Format</Meta>
          <span>SRT Subtitles, Real-time Progress Streaming</span>
        </ListItem>
      </List>
      <WorkImage src="/images/translator.png" alt="VlogTranslator Interface" />
      <Heading as="h4" fontSize={16} my={6}>
        Core Features
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>YouTube Integration:</strong> Direct video URL processing from
          any YouTube video with high-quality audio extraction using yt-dlp
        </ListItem>
        <ListItem>
          <strong>AI Transcription:</strong> OpenAI Whisper-powered
          speech-to-text conversion with industry-leading accuracy
        </ListItem>
        <ListItem>
          <strong>Smart Translation:</strong> Context-aware Japanese translation
          with formal tone using OpenAI GPT API
        </ListItem>
        <ListItem>
          <strong>Real-time Processing:</strong> Live progress tracking with
          streaming responses and user-friendly status updates
        </ListItem>
        <ListItem>
          <strong>SRT Export:</strong> Standard subtitle format output ready for
          video editing and professional use
        </ListItem>
        <ListItem>
          <strong>Responsive Design:</strong> Modern UI that works seamlessly on
          desktop, tablet, and mobile devices
        </ListItem>
      </UnorderedList>
      <WorkImage
        src="/images/translator 2.png"
        alt="Video URL Input Interface"
      />
      <WorkImage
        src="/images/translator 3.png"
        alt="Real-time Processing Progress"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Processing Pipeline
      </Heading>
      <P>
        The application follows a sophisticated 5-step processing pipeline: URL
        Input → Audio Extraction → AI Transcription → Translation → SRT Output.
        Each step is optimized for performance and accuracy, with real-time
        progress updates throughout the entire process.
      </P>
      <WorkImage
        src="/images/translator 4.png"
        alt="Japanese Translation Results"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Use Cases & Applications
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Content Creators:</strong> Add professional Japanese subtitles
          to vlogs, tutorials, and educational content
        </ListItem>
        <ListItem>
          <strong>Language Learning:</strong> Generate accurate transcriptions
          and translations for study materials and comprehension practice
        </ListItem>
        <ListItem>
          <strong>Accessibility:</strong> Create subtitles for hearing-impaired
          viewers to improve content accessibility
        </ListItem>
        <ListItem>
          <strong>Documentation:</strong> Convert video content to searchable,
          indexed text for reference and archival purposes
        </ListItem>
        <ListItem>
          <strong>Translation Services:</strong> Professional Japanese
          localization for international content distribution
        </ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        Technical Innovation
      </Heading>
      <P>
        This platform showcases advanced integration of multiple AI services
        with a modern web architecture. The combination of OpenAI&apos;s Whisper
        for transcription and GPT for translation, coupled with efficient audio
        processing and real-time streaming, demonstrates sophisticated
        full-stack development capabilities and AI service orchestration.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
