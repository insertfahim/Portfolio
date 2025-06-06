import { Container, Box, Heading, Link, Button, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Resume = () => {
  return (
    <Layout title="Resume">
      <Container maxW="container.xl">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg="whiteAlpha.200"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          My professional experience and qualifications
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
          <Heading as="h3" fontSize={20} mb={4}>
            Tasnimul Mohammad Fahim - Resume
          </Heading>
          <Paragraph>
            Here you can view or download my complete resume with details about
            my education, work experience, skills, and projects.
          </Paragraph>
        </Box>
        <Center mb={6}>
          <Button
            as={Link}
            href="/resume/Tasnimul_Mohammad_Fahim_Resume.pdf"
            target="_blank"
            colorScheme="teal"
            rightIcon={<ChevronRightIcon />}
            mr={4}
          >
            View Resume
          </Button>
          <Button
            as={Link}
            href="/resume/Tasnimul_Mohammad_Fahim_Resume.pdf"
            download
            colorScheme="blue"
            rightIcon={<DownloadIcon />}
          >
            Download PDF
          </Button>
        </Center>{' '}
        <Section delay={0.1}>
          <Box
            borderRadius="lg"
            borderWidth="1px"
            p={0}
            mb={6}
            overflow="hidden"
            height="90vh"
            position="relative"
            maxW="100%"
            w="100%"
          >
            <iframe
              src="/resume/Tasnimul_Mohammad_Fahim_Resume.pdf"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              title="Tasnimul Mohammad Fahim Resume"
            />
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume
export { getServerSideProps } from '../components/chakra'
