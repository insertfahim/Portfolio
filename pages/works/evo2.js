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
  <Layout title="Evo2 Variant Analysis">
    <Container>
      <Title>
        Variant Analysis Evo2 <Badge>2024</Badge>
      </Title>{' '}
      <P>
        Genomic variant analysis platform powered by the Evo2 DNA language model.
        Tackled GPU cost problem ($3.50/hr H100) by building serverless inference
        on Modal with cold-start optimization, cutting per-inference cost from $0.12
        to $0.05 (60% FinOps savings) while enabling 1K+ variant analyses/hour for
        genomics researchers.
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
          <span>Web (Next.js) / Serverless GPU (Modal)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Python, Modal (Serverless GPU), FastAPI</span>
        </ListItem>
        <ListItem>
          <Meta>Cost Savings</Meta>
          <span>60% FinOps savings ($0.12 → $0.05 per inference)</span>
        </ListItem>
        <ListItem>
          <Meta>Data Availability</Meta>
          <span>99.5% uptime via circuit breaker + fallback cache</span>
        </ListItem>
        <ListItem>
          <Meta>Throughput</Meta>
          <span>1K+ variant analyses/hour, auto-scaling 0→50 replicas</span>
        </ListItem>
      </List>
      <WorkImage src="/images/evo.png" alt="Evo2 Variant Analysis Platform" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key SRE & Infrastructure Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Serverless GPU Computing:</strong> Built serverless inference on Modal
          with cold-start optimization (model weight caching), auto-scaling 0→50 replicas
          based on demand
        </ListItem>
        <ListItem>
          <strong>Cost Optimization:</strong> Tackled $3.50/hr H100 GPU costs—cut
          per-inference cost from $0.12 to $0.05 through intelligent scheduling and
          batch processing (60% FinOps savings)
        </ListItem>
        <ListItem>
          <strong>Circuit Breaker Pattern:</strong> Integrated ClinVar/NCBI APIs with
          circuit breaker pattern and local fallback cache for resilience against
          upstream failures
        </ListItem>
        <ListItem>
          <strong>High Availability:</strong> Maintained 99.5% data availability despite
          upstream rate limits through intelligent caching and retry strategies
        </ListItem>
        <ListItem>
          <strong>Throughput:</strong> Enabled 1K+ variant analyses/hour for genomics
          researchers with horizontal auto-scaling
        </ListItem>
        <ListItem>
          <strong>Real-Time Processing:</strong> Instant analysis with GPU acceleration
          and optimized cold-start times
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/evo 2.png" alt="Gene Search Interface" />
      <WorkImage src="/images/evo 3.png" alt="Variant Analysis Results" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technical Architecture</Center>
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
        <Center>Technical Achievements</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>60% cost reduction</strong> through serverless GPU optimization
          and intelligent workload scheduling
        </ListItem>
        <ListItem>
          <strong>99.5% data availability</strong> via circuit breaker pattern
          with local fallback caching
        </ListItem>
        <ListItem>
          <strong>Auto-scaling infrastructure</strong> supporting 0→50 replicas
          based on real-time demand
        </ListItem>
        <ListItem>
          <strong>Cold-start optimization</strong> through model weight caching
          and pre-warming strategies
        </ListItem>
        <ListItem>
          <strong>1K+ analyses/hour</strong> throughput for production genomics
          research workloads
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
