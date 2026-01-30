import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const inter = Inter({ subsets: ['latin'] })

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} className={inter.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tasnimul Mohammad Fahim - SRE-focused Software Engineer specializing in cloud infrastructure, observability, and fault-tolerant systems" />
        <meta name="author" content="Tasnimul Mohammad Fahim" />
        <meta name="keywords" content="SRE, Software Engineer, Kubernetes, Prometheus, Grafana, Cloud Infrastructure, DevOps, Observability" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tasnimul Mohammad Fahim - SRE-focused Software Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@beingfaahim" />
        <meta name="twitter:creator" content="@beingfaahim" />
        <meta name="twitter:image" content="/images/fahim.jpg" />
        <meta name="twitter:description" content="SRE-focused Software Engineer building observable, fault-tolerant systems | Kubernetes, Prometheus, AWS" />
        <meta property="og:site_name" content="Tasnimul Mohammad Fahim" />
        <meta name="og:title" content="Tasnimul Mohammad Fahim - SRE-focused Software Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/fahim.jpg" />
        <meta property="og:description" content="SRE-focused Software Engineer building observable, fault-tolerant systems | Kubernetes, Prometheus, AWS" />
        <title>Tasnimul Mohammad Fahim - SRE-focused Software Engineer</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
