import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbLMS from '../public/images/LMS.png'
import thumbAILearningJourney from '../public/images/ailms.png'
import thumbInventoryFlow from '../public/images/Inventory.png'
import thumbEvo from '../public/images/evo.png'
import thumbTranslator from '../public/images/translator.png'
import thumbPropertyFlow from '../public/images/propertyflow.png'
import thumbIntelliMail from '../public/images/intellimail.png'
import thumbThumbnailGen from '../public/images/thumbnail-gen.png'
import thumbCarDealer from '../public/images/car.png'
import thumbHorizonBanking from '../public/images/bank.png'
import thumbPrepWise from '../public/images/prep.png'
import thumbAura from '../public/images/aura.png'
import thumbChatPDF from '../public/images/chatpdf.png'
import thumbQuizmify from '../public/images/quiz.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="lms" thumbnail={thumbLMS} title="University LMS">
            Full-stack library management system with admin panel, book
            tracking, and automated email workflows
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="ai-learning-journey"
            thumbnail={thumbAILearningJourney}
            title="AI Learning Journey"
          >
            AI-powered educational platform generating courses with YouTube
            integration and interactive quizzes
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="inventoryflow"
            thumbnail={thumbInventoryFlow}
            title="InventoryFlow Pro"
          >
            Modern inventory management system with real-time analytics and
            cloud architecture
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="evo2"
            thumbnail={thumbEvo}
            title="Evo2 Variant Analysis"
          >
            Genomic variant analysis platform powered by Evo2 AI model for
            genetic variant pathogenicity prediction
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="vlog-translator"
            thumbnail={thumbTranslator}
            title="VlogTranslator"
          >
            AI-powered YouTube video transcription and translation to Japanese
            using OpenAI Whisper and GPT
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="propertyflow"
            thumbnail={thumbPropertyFlow}
            title="PropertyFlow"
          >
            Real estate rental platform with dual dashboards for property
            managers and tenants
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="intellimail"
            thumbnail={thumbIntelliMail}
            title="IntelliMail"
          >
            AI-powered email client with intelligent composition and RAG search
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="ai-thumbnail-generator"
            thumbnail={thumbThumbnailGen}
            title="AI Thumbnail Generator"
          >
            AI-powered thumbnail generator with background removal and Stripe
            payment integration
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="car-dealer-website"
            thumbnail={thumbCarDealer}
            title="Car Dealer Website"
          >
            Automotive marketplace with AI-powered classified generation and
            admin dashboard
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="horizon-banking"
            thumbnail={thumbHorizonBanking}
            title="Horizon Banking Platform"
          >
            Fintech banking platform with multi-bank integration and real-time
            transfers using Plaid and Dwolla
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="prepwise"
            thumbnail={thumbPrepWise}
            title="PrepWise"
          >
            AI-powered mock interview platform with realistic simulations and
            performance analytics
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem id="aura" thumbnail={thumbAura} title="Aora">
            React Native video sharing platform with AI-powered content
            discovery and cross-platform compatibility
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem id="chatpdf" thumbnail={thumbChatPDF} title="ChatPDF">
            AI-powered PDF interaction platform using OpenAI GPT-3.5-turbo and
            vector embeddings
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="quizmify"
            thumbnail={thumbQuizmify}
            title="Quizmify"
          >
            AI-powered quiz platform transforming topics into engaging learning
            experiences with analytics
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
