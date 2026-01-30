import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import Newsletter from '../components/newsletter'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Engineer at <Link href="https://theflex.co.uk/" target="_blank">The Flex</Link> & <Link href="https://base360.ai/" target="_blank">base360.ai</Link>, based in Bangladesh.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tasnimul Mohammad Fahim
          </Heading>
          <p>SRE-focused Software Engineer | Cloud & Observability</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/fahim.jpg"
              alt="Profile image"
              width="100"
              height="100"
              priority
              sizes="100px"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          <strong>Tasnimul Mohammad Fahim</strong> is an SRE-focused Software Engineer
          with hands-on experience building observable, fault-tolerant systems for
          multi-tenant applications handling 15K+ daily transactions. Specialized in
          cloud infrastructure, deployment automation, and incident management—delivering
          10x latency improvements and 80%+ reductions in detection/recovery time.
          His stack spans Python, Go, TypeScript, FastAPI, PostgreSQL, Redis, and
          Kubernetes, with deep expertise in Prometheus, Grafana, and SLO-driven
          reliability practices. He architects micro-frontend systems, implements
          defense-in-depth security (OAuth 2.0 PKCE, JWT rotation, RBAC), and builds
          CI/CD pipelines with blue-green deployments. When not engineering reliable
          systems, he explores algorithmic problem-solving on LeetCode.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021–2025</BioYear>
          B.Sc. in Computer Science and Engineering, BRAC University, Dhaka.
        </BioSection>
        <BioSection>
          <BioYear>Sep 2025–Present</BioYear>
          Software Engineer at The Flex & base360.ai (Remote, UK).
        </BioSection>
        <BioSection>
          <BioYear>Jun 2023–Feb 2024</BioYear>
          Full Stack Developer at Doin Tech (Remote).
        </BioSection>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/resume"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            variant="outline"
          >
            View My Resume
          </Button>
        </Box>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Technical Skills
        </Heading>
        <List spacing={2}>
          <ListItem>
            <strong>Cloud & Infrastructure:</strong> AWS (EC2, S3, Lambda), GCP, Docker, Kubernetes, Terraform, Nginx, CI/CD
          </ListItem>
          <ListItem>
            <strong>Observability & SRE:</strong> Prometheus, Grafana, OpenTelemetry, SLO/SLI, Error Budgets, MTTR/MTTD
          </ListItem>
          <ListItem>
            <strong>Languages:</strong> Python, Go, Java, TypeScript, JavaScript, SQL, Bash
          </ListItem>
          <ListItem>
            <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, Query Optimization, Connection Pooling
          </ListItem>
          <ListItem>
            <strong>Frameworks:</strong> FastAPI, React, Next.js, Node.js, Express.js, GraphQL, gRPC
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Site Reliability Engineering, Cloud Infrastructure, Observability, Problem Solving, Open Source
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/insertfahim" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @insertfahim
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://x.com/beingfaahim" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @beingfaahim
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/insertfahim/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @insertfahim
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://insertfahim.vercel.app/"
            title="Portfolio"
            thumbnail="/ubuntuthemeportfolio.png"
          >
            Ubuntu Themed Portfolio
          </GridItem>
          <GridItem
            href="https://leetcode.com/u/insert_fahim/"
            title="LeetCode Profile"
            thumbnail="/leetcode.png"
          >
            Problem Solving & Competitive Programming
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me for insights on SRE practices, observability patterns, and
          building reliable distributed systems.
        </p>

        <Box my={4}>
          <Newsletter />
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
