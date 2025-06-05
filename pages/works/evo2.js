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
  <Layout title="Evo2 Variant Analysis">
    <Container>
      <Title>
        Evo2 Variant Analysis Platform <Badge>2024</Badge>
      </Title>{' '}
      <P>
        Genomic variant analysis platform powered by the revolutionary Evo2 DNA
        language model. Enables researchers and clinicians to predict genetic
        variant pathogenicity with unprecedented accuracy using 1M+ base pair
        context modeling.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/insertfahim/variant-analysis-evo2">
            https://github.com/insertfahim/variant-analysis-evo2{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Next.js) / GPU Cloud Computing (Modal)</span>
        </ListItem>
        <ListItem>
          <Meta>Frontend Stack</Meta>
          <span>Next.js 15, TypeScript, Tailwind CSS, Radix UI</span>
        </ListItem>
        <ListItem>
          <Meta>Backend Stack</Meta>
          <span>Python, FastAPI, Modal Serverless, Evo2 AI Model</span>
        </ListItem>
        <ListItem>
          <Meta>AI/ML</Meta>
          <span>
            Evo2 DNA Language Model, StripedHyena Architecture, H100 GPUs
          </span>
        </ListItem>
        <ListItem>
          <Meta>Data Sources</Meta>
          <span>NCBI Gene API, ClinVar, UCSC Genome Browser</span>
        </ListItem>
      </List>
      <WorkImage src="/images/evo.png" alt="Evo2 Variant Analysis Platform" />
      <Heading as="h4" fontSize={16} my={6}>
        Key Features
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>AI-Powered Variant Prediction:</strong> Leverages Evo2&apos;s
          deep learning model for accurate pathogenicity assessment with
          confidence scoring
        </ListItem>
        <ListItem>
          <strong>Multi-Genome Support:</strong> Compatible with hg19, hg38, and
          other genome assemblies for comprehensive analysis
        </ListItem>
        <ListItem>
          <strong>Real-Time Processing:</strong> Instant analysis with GPU
          acceleration via Modal serverless infrastructure
        </ListItem>
        <ListItem>
          <strong>Interactive Visualization:</strong> Color-coded nucleotide
          display with positional mapping and sequence viewer
        </ListItem>
        <ListItem>
          <strong>Clinical Integration:</strong> ClinVar database integration
          with known variant classifications and clinical significance
        </ListItem>
        <ListItem>
          <strong>Intelligent Search:</strong> NCBI-powered gene discovery with
          autocomplete and chromosome browsing capabilities
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/evo 2.png" alt="Gene Search Interface" />
      <WorkImage src="/images/evo 3.png" alt="Variant Analysis Results" />
      <Heading as="h4" fontSize={16} my={6}>
        Technical Architecture
      </Heading>
      <P>
        The platform features a full-stack architecture with a modern Next.js
        frontend and a high-performance Python backend. The AI inference is
        powered by Modal&apos;s serverless GPU infrastructure, providing
        auto-scaling compute resources for the Evo2 model processing.
      </P>
      <WorkImage src="/images/evo 4.png" alt="Variant Comparison Analysis" />
      <WorkImage src="/images/evo 5.png" alt="Known Variants Database" />
      <Heading as="h4" fontSize={16} my={6}>
        Innovation Highlights
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          First platform to implement Evo2&apos;s 1M+ base pair context modeling
          for genomic analysis
        </ListItem>
        <ListItem>
          Revolutionary StripedHyena hybrid attention-convolution architecture
          integration
        </ListItem>
        <ListItem>
          Serverless GPU computing with pay-per-use H100 GPU acceleration
        </ListItem>
        <ListItem>
          Real-time genomic sequence analysis with clinical-grade accuracy
        </ListItem>
        <ListItem>
          Comprehensive API integration with major genomic databases
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/evo 6.png" alt="Clinical Analysis Dashboard" />
      <P>
        This platform represents a significant advancement in making
        cutting-edge genomic AI accessible to researchers and clinicians
        worldwide, bridging the gap between state-of-the-art machine learning
        research and practical clinical applications.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
