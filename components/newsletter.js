import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  Input,
  useToast,
  VStack
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Replace with your email service provider's API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      toast({
        title: 'Success!',
        description: 'You have been subscribed to the newsletter.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setEmail('')
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={6}
      borderRadius="lg"
      bg="whiteAlpha.200"
      backdropFilter="blur(10px)"
    >
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            bg="whiteAlpha.300"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          leftIcon={<EmailIcon />}
          isLoading={isLoading}
          loadingText="Subscribing..."
        >
          Subscribe
        </Button>
      </VStack>
    </Box>
  )
}

export default Newsletter 