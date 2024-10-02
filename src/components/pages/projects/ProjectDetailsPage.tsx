import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../../layouts/PageLayout'
import { Button, Space, Tag, Typography } from 'antd'
import { AppRoutes, BackEndSkill, FrontEndSkill, OtherSkills, ProgrammingLanguage } from '../../../utils/constants'
import { useEffect, useMemo } from 'react'
import { ImageCarousel } from '../../imageCarousel'
import { GithubFilled, GlobalOutlined } from '@ant-design/icons'

type Props = {}

interface ProjectDetails {
  [key: string]: {
    title: string,
    description: React.ReactNode,
    images: {
      description?: string,
      src: string
    }[],
    githubUrl: string,
    demoUrl?: string,
    tags?: string[]
  }
}

const description = {
  'e765623c-8508-4e82-a19a-c3cb1a427246': (
    <>
      <Typography.Paragraph>
        TADASHI redefines the way we interact with technology.
        By seamlessly integrating advanced AI capabilities into a user-friendly chat interface,
        it empowers users with instant access to information, insights, and assistance.
        Whether you need to <b>translate a document</b> from a foreign language, <b>summarize content</b> into
        simple and easy readable text, or simply brainstorm ideas, TADASHI is your ever-present
        AI companion, ready to assist with a wide range of tasks.
      </Typography.Paragraph>

      <Typography.Paragraph>
        TADASHI is built using <b>React JS</b> and a <b>Node JS</b> backend and can respond to user prompts,
        solve logical problems with reasoning, perform basic tasks and has a knowledge base of multiple languages
        that can be used for translation. It supports image prompts and can be used to <b>extract data from images</b> and
        can even be used for <b>optical character recognition (OCR)</b> functionality which involved recognizing and extracting
        text from an image, this enables a user to translate an image such as the departure timings displayed at an airport into a
        table format without having to manually input or write down the data.
      </Typography.Paragraph>
    </>
  ),
  'c8349f9d-2ba6-4bad-ac45-54883860c49c': (
    <>
      <Typography.Paragraph>
        Accurately extracting answers from textual data is a challenge that traditional keyword-based approaches
        often fail to address. Recognizing the need for a more sophisticated solution, I developed a <b>Natural Language Processing</b> (NLP)
        Question & Answer module using <b>React</b> and <b>TensorFlow JS.</b> This module leverages the power of Google's  <b>Bidirectional Encoder
          Representations from Transformers</b> (BERT) model, enabling it to understand the context of questions
        and extract precise answers from provided paragraphs.
      </Typography.Paragraph>

      <Typography.Paragraph>
        The module's intuitive user interface, built with React, allows users to seamlessly input paragraphs
        of text and pose related questions. Behind the scenes, TensorFlow JS integrates the pre-trained BERT model,
        empowering the module to operate entirely within the browser for a fast and responsive experience.
        BERT's unique architecture, utilizing transformers and mechanisms like positional encoding, attention,
        and self-attention, enables the module to discern the relationships between
        words and pinpoint the most accurate answer within the given paragraph.
      </Typography.Paragraph>
    </>
  ),
  '15fec622-ade8-44bd-8de8-64d81d0967f0': (
    <>
      <Typography.Paragraph>
        Imagine controlling web applications with the power of your voice. 
        That's the vision behind this project, a Speech Command Recognition 
        module built using <b>React</b> and <b>TensorFlow JS.</b> This innovative 
        module allows users to interact with interfaces seamlessly using spoken commands, 
        adding a new dimension of intuitiveness and accessibility to web experiences.
      </Typography.Paragraph>
      <Typography.Paragraph>
        The module leverages the browser's built-in WebAudio API to capture audio directly from the user's microphone. 
        This raw audio is then preprocessed to reduce noise and highlight features essential for accurate speech recognition. 
        The speech recognition model, implemented using TensorFlow JS, analyzes the processed audio and 
        converts it into text in real-time. This recognized text is then matched against a set of commands, 
        and if a match is found, the corresponding action is executed within the application.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Taking customization to the next level, the module empowers users to train their own commands and link them to specific actions.
      </Typography.Paragraph>
    </>
  )
}

const projectDetails: ProjectDetails = {
  'e765623c-8508-4e82-a19a-c3cb1a427246': {
    title: 'TADASHI - Generative AI',
    images: [
      {
        description: 'Ability to summarize text and generate code',
        src: '/demos/tadashi/Text_Summarization.png'
      },
      {
        description: 'Translation and understanding of foreign languages and text',
        src: '/demos/tadashi/Translation.png'
      },
      {
        description: 'Ability to generate content',
        src: '/demos/tadashi/Content_Generation.png'
      },
      {
        description: 'Semantic extraction and task Execution',
        src: '/demos/tadashi/Semantic_Extraction.png'
      },
      {
        description: 'Image prompts',
        src: '/demos/tadashi/Image_Prompts.png'
      },
      {
        description: 'OCR functionality using image prompts',
        src: '/demos/tadashi/OCR.png'
      }
    ],
    description: description['e765623c-8508-4e82-a19a-c3cb1a427246'],
    githubUrl: 'https://github.com/RyanDC1/Tadashi-Generative-AI',
    demoUrl: 'https://tadashi-ai.onrender.com/',
    tags: [
      OtherSkills.GEN_AI,
      OtherSkills.AI,
      OtherSkills.NLP,
      FrontEndSkill.REACT,
      FrontEndSkill.TYPESCRIPT,
      ProgrammingLanguage.JAVASCRIPT,
      BackEndSkill.NODEJS
    ]
  },
  'c8349f9d-2ba6-4bad-ac45-54883860c49c': {
    title: 'Natural Language Processing Q&A',
    images: [
      {
        description: 'Natural Language Processing and answer retrieval',
        src: '/demos/NLP_QA/NLP_Demo.png'
      }
    ],
    description: description['c8349f9d-2ba6-4bad-ac45-54883860c49c'],
    githubUrl: 'https://github.com/RyanDC1/React-QnA-NLP-Module',
    tags: [
      OtherSkills.NLP,
      FrontEndSkill.REACT,
      ProgrammingLanguage.JAVASCRIPT
    ]
  },
  '15fec622-ade8-44bd-8de8-64d81d0967f0': {
    title: 'Speech Command Recognition',
    images: [
      {
        description: 'Speech Command Recognition Demo',
        src: '/demos/speechRecognition/Speech_Recognition_Demo.png'
      },
      {
        description: 'Module Training on commands and speech recognition',
        src: '/demos/speechRecognition/Module_Training.png'
      }
    ],
    description: description['15fec622-ade8-44bd-8de8-64d81d0967f0'],
    githubUrl: 'https://github.com/RyanDC1/Speech-Command-Recognition',
    tags: [
      OtherSkills.NLP,
      OtherSkills.MACHINE_LEARNING,
      FrontEndSkill.REACT,
      ProgrammingLanguage.JAVASCRIPT
    ]
  }
}

export default function ProjectDetailsPage({ }: Props) {

  const { projectId } = useParams()
  const navigate = useNavigate()

  const project = projectDetails[projectId ?? '']

  useEffect(() => {
    if (!project) {
      navigate(AppRoutes.notFound)
    }
  }, [])

  if (!project) {
    return
  }

  const actions = useMemo(() => {
    return (
      <Space className='project-details-actions' direction='vertical'>
        {
          project.githubUrl &&
          <Button
            icon={<GithubFilled />}
            href={project.githubUrl}
            target='_blank'
            size='large'
            type='link'
          >
            View on GitHub
          </Button>
        }
        {
          project.demoUrl &&
          <Button
            icon={<GlobalOutlined />}
            href={project.demoUrl}
            target='_blank'
            size='large'
            type='link'
          >
            Launch Demo
          </Button>
        }
      </Space>
    )
  }, [project])

  return (
    <PageLayout
      title={project.title}
      className='project-details-layout'
      extra={actions}
      transitionDuration={0.8}
    >

      <div className='project-content'>
        <ImageCarousel
          images={project.images}
        />

        {project.description}

        <div className='mt-16'>
          <Space size={4} className='preview-card-skills' wrap>
            {
              project.tags?.map(tag => (
                <Tag key={tag} className='skill-tag'>
                  {tag}
                </Tag>
              ))
            }
          </Space>
        </div>

      </div>

      {actions}
    </PageLayout>
  )
}