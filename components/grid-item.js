import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, AspectRatio } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    w="100%"
    textAlign="center"
    h="100%"
    display="flex"
    flexDirection="column"
  >
    <LinkBox cursor="pointer" h="100%" display="flex" flexDirection="column">
      <AspectRatio ratio={1.8 / 1} w="100%">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </AspectRatio>
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontWeight="semibold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14} flex={1}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <AspectRatio ratio={1.8 / 1} w="100%">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </AspectRatio>
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 6px;
      }
    `}
  />
)
