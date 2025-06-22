import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, AspectRatio, Skeleton } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useState } from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Box
      w="100%"
      textAlign="center"
      h="100%"
      display="flex"
      flexDirection="column"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'translateY(-2px)' }}
    >
      <LinkBox cursor="pointer" h="100%" display="flex" flexDirection="column">
        <AspectRatio ratio={16 / 9} w="100%" mb={3}>
          <Skeleton isLoaded={imageLoaded} borderRadius="lg">
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ 
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </Skeleton>
        </AspectRatio>
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontWeight="semibold" fontSize="lg" lineHeight="tight">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} flex={1} color="gray.600" _dark={{ color: 'gray.300' }}>
          {children}
        </Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Box 
      w="100%" 
      textAlign="center"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'translateY(-2px)' }}
    >
      <LinkBox
        as={NextLink}
        href={`/${category}/${id}`}
        scroll={false}
        cursor="pointer"
      >
        <AspectRatio ratio={16 / 9} w="100%" mb={3}>
          <Skeleton isLoaded={imageLoaded} borderRadius="lg">
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ 
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </Skeleton>
        </AspectRatio>
        <LinkOverlay as="div" href={`/${category}/${id}`}>
          <Text mt={2} fontSize={20} fontWeight="bold" lineHeight="tight">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} color="gray.600" _dark={{ color: 'gray.300' }}>
          {children}
        </Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 8px;
        transition: transform 0.2s ease-in-out;
      }
      .grid-item-thumbnail:hover {
        transform: scale(1.01);
      }
    `}
  />
)
