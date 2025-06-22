import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Box
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export const ImagePreviewModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        maxW="90vw"
        maxH="90vh"
        mx="auto"
        my="auto"
      >
        <ModalCloseButton
          color="white"
          bg="blackAlpha.500"
          _hover={{ bg: 'blackAlpha.700' }}
          zIndex={10}
        />
        <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
          <Box
            position="relative"
            maxW="100%"
            maxH="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              maxW="100%"
              maxH="90vh"
              objectFit="contain"
              borderRadius="lg"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              opacity={isLoading ? 0 : 1}
              transition="opacity 0.3s ease-in-out"
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export const useImagePreview = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState({ src: '', alt: '' })

  const openPreview = (src, alt) => {
    setPreviewImage({ src, alt })
    setIsOpen(true)
  }

  const closePreview = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    previewImage,
    openPreview,
    closePreview
  }
} 