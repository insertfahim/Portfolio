import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useImagePreview, ImagePreviewModal } from './image-preview-modal'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => {
  const { isOpen, previewImage, openPreview, closePreview } = useImagePreview()

  const handleImageClick = () => {
    openPreview(src, alt)
  }

  return (
    <>
      <Image 
        borderRadius="lg" 
        w="full" 
        src={src} 
        alt={alt} 
        mb={4} 
        objectFit="contain"
        cursor="pointer"
        transition="transform 0.2s ease-in-out"
        _hover={{ transform: 'scale(1.02)' }}
        onClick={handleImageClick}
      />
      <ImagePreviewModal
        isOpen={isOpen}
        onClose={closePreview}
        imageSrc={previewImage.src}
        imageAlt={previewImage.alt}
      />
    </>
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
