import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeBg = useColorModeValue('grassTeal', 'grassTeal')
  const activeColor = useColorModeValue('#202023', '#202023')
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.200')
  
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={3}
      bg={active ? activeBg : 'transparent'}
      color={active ? activeColor : inactiveColor}
      target={target}
      borderRadius="md"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: active ? activeBg : hoverBg,
        transform: 'translateY(-1px)'
      }}
      fontWeight={active ? 'bold' : 'medium'}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const bgColor = useColorModeValue('#ffffff80', '#20202380')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      css={{ backdropFilter: 'blur(20px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={1}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/resume" path={path}>
            Resume
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/insertfahim/Portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={3}
            pr={3}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="md"
                _hover={{
                  bg: useColorModeValue('gray.100', 'whiteAlpha.200')
                }}
              />
              <MenuList
                bg={useColorModeValue('white', 'gray.800')}
                borderColor={borderColor}
              >
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={MenuLink} href="/resume">
                  Resume
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/insertfahim/Portfolio"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
