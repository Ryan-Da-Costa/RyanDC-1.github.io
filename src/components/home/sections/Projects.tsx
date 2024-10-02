import React from 'react'
import { Typography } from 'antd'
import SectionLayout from '../../layouts/SectionLayout'
import { PreviewCardGrid, PreviewCardType } from '../../previewCard'
import { AppRoutes, BackEndSkill, FrontEndSkill, OtherSkills, ProgrammingLanguage } from '../../../utils/constants'
import { useNavigate } from 'react-router-dom'

interface Props extends Pick<React.ComponentProps<typeof SectionLayout>, 'onVisibleChange'> {
    id: string,
    /**
     * Shows only the featured certificates
     * @default true
     */
    showFeatured?: boolean,
    hideTitle?: boolean,
    enableFilters?: boolean,
    transitions?: boolean
}

const Cover = ({ src } :{src: string}) => (
    <div
        className='backdrop'
        style={{
            background: `url(${src})`,
            backgroundPosition: 'center',
            display: 'flex',
            backdropFilter: 'blur(4px)'
        }}
    >
        <img src={src} style={{ margin: '0 auto' }}/> 
    </div>
)


const projects: PreviewCardType[] = [
    {
        priority: 1,
        title: 'TADASHI - Generative AI',
        cover: <Cover src='/images/TADASHI-Cover.jpg' />,
        description: (
            <Typography.Text>
                TADASHI is a generative AI chat application 
                built with React and Node.js. It can understand 
                and respond to requests, solve problems, perform basic tasks and translate languages.
            </Typography.Text>
        ),
        tags: [
            OtherSkills.GEN_AI,
            OtherSkills.AI,
            OtherSkills.NLP,
            FrontEndSkill.REACT,
            FrontEndSkill.TYPESCRIPT,
            ProgrammingLanguage.JAVASCRIPT,
            BackEndSkill.NODEJS
        ],
        link: '/projects/e765623c-8508-4e82-a19a-c3cb1a427246'
    },
    {
        priority: 2,
        title: 'Natural Language Q&A',
        cover: <Cover src='/images/NLP-Cover.jpg' />,
        description: (
            <Typography.Text>
                A Natural Language Processing question and answer module 
                built using React and TensorFlow JS that can search for and 
                extract answers from a given paragraph using the BERT model.
            </Typography.Text>
        ),
        tags: [
            OtherSkills.NLP,
            FrontEndSkill.REACT,
            ProgrammingLanguage.JAVASCRIPT
        ],
        link: '/projects/c8349f9d-2ba6-4bad-ac45-54883860c49c'
    },
    {
        priority: 3,
        title: 'Speech Command Recognition',
        cover: <Cover src='/images/Speech-Recognition-Cover.jpg' />,
        description: (
            <Typography.Text>
                A Speech Command Recognition module built using React, 
                TensorFlow JS and the Web Audio API that can recognize 
                spoken commands and perform actions on the web such as 
                submitting a form.
            </Typography.Text>
        ),
        tags: [
            OtherSkills.NLP,
            FrontEndSkill.REACT,
            ProgrammingLanguage.JAVASCRIPT
        ],
        link: '/projects/15fec622-ade8-44bd-8de8-64d81d0967f0'
    },
    // {
    //     title: 'Smart Vision',
    //     cover: <Cover src='/images/Smart-Vision-Cover.png' />,
    //     description: (
    //         <Typography.Text>
    //             Built a device using Raspberry PI and Computer Vision which 
    //             can help visually impaired individuals navigate 
    //             their surroundings by recognizing objects, detecting obstacles, 
    //             and identifying faces.
    //         </Typography.Text>
    //     ),
    //     tags: [
    //         OtherSkills.COMPUTER_VISION,
    //         ProgrammingLanguage.PYTHON,
    //         OtherSkills.MACHINE_LEARNING,
    //         OtherSkills.AI
    //     ],
    //     link: '/projects/72ceecb8-62f5-449c-8c91-34c9f4f0f78f'
    // }
]

export default function Projects(props: Props) {

    const { id, showFeatured = true, hideTitle = false, enableFilters = false, transitions = true, ...rest } = props

    const navigate = useNavigate()

    return (
        <SectionLayout className='projects-section' id={id} title={hideTitle ? undefined : 'PERSONAL PROJECTS'} {...rest}>
            <PreviewCardGrid
                items={projects}
                showAllText='Show all Projects'
                onShowAllClick={() => navigate(AppRoutes.projects)}
                showFeatured={showFeatured}
                enableFilters={enableFilters}
                transitions={transitions}
            />
        </SectionLayout>
    )
}