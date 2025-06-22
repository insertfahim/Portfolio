import { Image } from '@chakra-ui/react'
import { useImagePreview, ImagePreviewModal } from './image-preview-modal'

export const BlogImage = ({ src, alt, ...props }) => {
  const { isOpen, previewImage, openPreview, closePreview } = useImagePreview()

  const handleImageClick = () => {
    openPreview(src, alt)
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        cursor="pointer"
        transition="transform 0.2s ease-in-out"
        _hover={{ transform: 'scale(1.02)' }}
        onClick={handleImageClick}
        {...props}
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