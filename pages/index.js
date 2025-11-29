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
        Hello, I&apos;m a Software Engineer at <Link href="http://base360.ai/" target="_blank">Base360.ai</Link>, based in Bangladesh.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tasnimul Mohammad Fahim
          </Heading>
          <p>Digital Craftsman (Full-Stack Software Engineer / Designer)</p>
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
          <strong>Tasnimul Mohammad Fahim</strong> is a full-stack software engineer
          who architects and ships enterprise-scale platforms from the ground up.
          He has single-handedly built multiple production SaaS products—including
          property management systems with 100+ API endpoints, 550+ React components,
          and real-time multi-tenant architectures serving 500+ properties across
          London, Paris, and Algiers. His stack spans React, Next.js 14, TypeScript,
          FastAPI, PostgreSQL, Redis, and Docker, with deep integrations into Stripe,
          Hostaway, and Google Cloud APIs. He delivers end-to-end: system design,
          database architecture, payment processing, internationalization (5 languages
          with RTL support), and deployment pipelines. When not engineering software,
          he explores the world through street photography.
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
          <BioYear>2002</BioYear>
          Born in Dhaka, Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Graduated with a B.Sc. in Computer Science from Brac University.
        </BioSection>
        <BioSection>
          <BioYear>2025–Present</BioYear>
          Software Engineer at Base360.ai.
        </BioSection>
        <BioSection>
          <BioYear>2024–2025</BioYear>
          Full-stack Developer at Glamour Technologies (Remote).
        </BioSection>
        <BioSection>
          <BioYear>2023–2024</BioYear>
          Junior Web Developer at Doin Inc., Dhaka.
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Problem solving,Web Development, Movie, Travelling
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
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
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
