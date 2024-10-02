import React from 'react'
import { Flex, Tooltip, Typography } from 'antd'
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

interface CertificateTitle {
    title: string,
    issuer: {
        title: string,
        imgSrc: string
    }
}

const CertificateTitle = ({ title, issuer }: CertificateTitle) => (
    <Flex gap={8}>
        <Tooltip title={issuer.title}>
            <img style={{ objectFit: 'contain', background: '#FFF' }} width={28} src={issuer.imgSrc} />
        </Tooltip>
        <Typography.Text>{title}</Typography.Text>
    </Flex>
)

const Issuer = {
    AWS: {
        title: 'Amazon Web Services',
        imgSrc: '/images/AWS-logo.jpg'
    } as CertificateTitle['issuer'],
    HELSINKI: {
        title: 'University of Helsinki',
        imgSrc: '/images/University-Helsinki.png'
    } as CertificateTitle['issuer'],
    KAGGLE: {
        title: 'Kaggle',
        imgSrc: '/images/Kaggle-Logo.png'
    } as CertificateTitle['issuer'],
    LINKEDIN: {
        title: 'Linkedin',
        imgSrc: '/images/Linkedin-Logo.png'
    } as CertificateTitle['issuer'],
    UDEMY: {
        title: 'Udemy',
        imgSrc: '/images/Udemy-Logo.png'
    } as CertificateTitle['issuer'],
}

const certificates: PreviewCardType[] = [
    {
        priority: 7,
        title: (
            <CertificateTitle
                title='AWS - Cloud Computing 101'
                issuer={Issuer.AWS}
            />
        ),
        cover: <img src='/images/AWS-CloudComputing-badge.png' />,
        tags: [BackEndSkill.AWS, BackEndSkill.CLOUD_COMPUTING],
        link: 'https://www.credly.com/badges/bfffb0d4-558d-46f4-87ee-c1366cea616f/public_url'
    },
    {
        priority: 1,
        title: (
            <CertificateTitle
                title='AWS - Elastic Compute Cloud'
                issuer={Issuer.AWS}
            />
        ),
        cover: <img src='/images/AWS-EC2-badge.png' />,
        tags: [BackEndSkill.AWS, BackEndSkill.CLOUD_COMPUTING],
        link: 'https://www.credly.com/badges/83965ca6-a8d1-4d54-b982-3a9829e9edc6/public_url'
    },
    {
        priority: 2,
        title: (
            <CertificateTitle
                title='AWS - Cloud Storage'
                issuer={Issuer.AWS}
            />
        ),
        cover: <img src='/images/AWS-CloudStorage.png' />,
        tags: [BackEndSkill.AWS, BackEndSkill.CLOUD_COMPUTING],
        link: 'https://www.credly.com/badges/2b4ed3ed-3eed-4f7d-a8f6-2acd96145178/public_url',
    },
    {
        priority: 6,
        title: (
            <CertificateTitle
                title='AWS Networking'
                issuer={Issuer.AWS}
            />
        ),
        cover: <img src='/images/AWS-Networking-badge.png' />,
        tags: [BackEndSkill.AWS, BackEndSkill.CLOUD_COMPUTING],
        link: 'https://www.credly.com/badges/3edb6bd5-6a90-4c0c-a2f4-fd9d61bddf6d/public_url'
    },
    {
        priority: 5,
        title: (
            <CertificateTitle
                title='AWS Databases'
                issuer={Issuer.AWS}
            />
        ),
        cover: <img src='/images/AWS-Databases-badge.png' />,
        tags: [BackEndSkill.AWS, BackEndSkill.CLOUD_COMPUTING],
        link: 'https://www.credly.com/badges/773fba3e-040e-41c5-91ae-0aced82f9788/public_url'
    },
    {
        priority: 4,
        title: (
            <CertificateTitle
                title='Full Stack Open'
                issuer={Issuer.HELSINKI}
            />
        ),
        cover: <img src='/images/Certificate-Fullstack.png' />,
        tags: [
            FrontEndSkill.REACT,
            BackEndSkill.NODEJS,
            FrontEndSkill.TYPESCRIPT,
            BackEndSkill.EXPRESSJS,
            BackEndSkill.MONGODB,
            FrontEndSkill.REDUX,
            ProgrammingLanguage.JAVASCRIPT,
            BackEndSkill.REST_APIS,
            FrontEndSkill.HTML,
            FrontEndSkill.CSS
        ],
        // link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/ba8b5aded18fc33a664919c3501e4ebc'
        link: `${location.origin}/images/Certificate-Fullstack.png`
    },
    {
        priority: 3,
        title: (
            <CertificateTitle
                title='GraphQL'
                issuer={Issuer.HELSINKI}
            />
        ),
        cover: <img src='/images/Certificate-GraphQL.png' />,
        tags: [
            BackEndSkill.GRAPHQL,
            BackEndSkill.MONGODB,
            BackEndSkill.NODEJS,
            BackEndSkill.EXPRESSJS,
            ProgrammingLanguage.JAVASCRIPT
        ],
        // link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/1f5aadb011e57ab5aad71aa096f79148'
        link: `${location.origin}/images/Certificate-GraphQL.png`
    },
    {
        priority: 8,
        title: (
            <CertificateTitle
                title='Machine Learning'
                issuer={Issuer.KAGGLE}
            />
        ),
        cover: <img src='/images/Certificate-Machine-Learning.png' />,
        tags: [
            OtherSkills.MACHINE_LEARNING,
            OtherSkills.AI
        ],
        link: 'https://www.kaggle.com/learn/certification/ryandacosta/intro-to-machine-learning'
    },
    {
        title: (
            <CertificateTitle
                title='Computer Vision'
                issuer={Issuer.KAGGLE}
            />
        ),
        cover: <img src='/images/Certificate-Computer-Vision.png' />,
        tags: [
            OtherSkills.COMPUTER_VISION,
            OtherSkills.AI,
            OtherSkills.MACHINE_LEARNING
        ],
        link: 'https://www.kaggle.com/learn/certification/ryandacosta/computer-vision'
    },
    {
        title: (
            <CertificateTitle
                title='SQL and Databases'
                issuer={Issuer.KAGGLE}
            />
        ),
        cover: <img src='/images/Certificate-SQL.png' />,
        tags: [
            BackEndSkill.SQL,
            OtherSkills.DATABASE
        ],
        link: 'https://www.kaggle.com/learn/certification/ryandacosta/intro-to-sql'
    },
    {
        title: (
            <CertificateTitle
                title='Flutter Widgets'
                issuer={Issuer.LINKEDIN}
            />
        ),
        cover: <img src='/images/Certificate-Flutter-Widgets.jpg' />,
        tags: [
            ProgrammingLanguage.DART,
            FrontEndSkill.FLUTTER
        ],
        link: 'https://www.linkedin.com/learning/certificates/dc6e9876f45f45f16bae7ed5f7b58331bc9e885bc8db90e8f9649b9202ff1230?trk=share_certificate'
    },
    {
        title: (
            <CertificateTitle
                title='Flutter and Dart Packages'
                issuer={Issuer.LINKEDIN}
            />
        ),
        cover: <img src='/images/Certificate-Flutter-Dart.jpg' />,
        tags: [
            ProgrammingLanguage.DART,
            FrontEndSkill.FLUTTER
        ],
        link: 'https://www.linkedin.com/learning/certificates/68d971bb7a2a332febddde07e507afc8e6cc3104a8414c7543b120c0e0e50424?trk=share_certificate'
    },
    {
        title: (
            <CertificateTitle
                title='Flutter UI'
                issuer={Issuer.LINKEDIN}
            />
        ),
        cover: <img src='/images/Certificate-Flutter-UI.jpg' />,
        tags: [
            ProgrammingLanguage.DART,
            FrontEndSkill.FLUTTER
        ],
        link: 'https://www.linkedin.com/learning/certificates/e4981cd24f9c9334df3c38a9fc9c0eb06a6d2d895d95dde8d60f8e1a4601634b?trk=share_certificate'
    },
    {
        title: (
            <CertificateTitle
                title='Webpack'
                issuer={Issuer.UDEMY}
            />
        ),
        cover: <img src='/images/Certificate-Webpack.jpg' />,
        tags: [
            FrontEndSkill.WEBPACK,
            ProgrammingLanguage.JAVASCRIPT
        ],
        link: 'https://www.udemy.com/certificate/UC-bb76da13-a88a-4dcb-8375-934ec0ffdf6f/'
    },
    {
        title: (
            <CertificateTitle
                title='Elements Of AI'
                issuer={Issuer.HELSINKI}
            />
        ),
        cover: <img src='/images/Certificate-Elements-AI.png' />,
        tags: [
            OtherSkills.AI,
            OtherSkills.MACHINE_LEARNING
        ],
        link: `${location.origin}/images/Certificate-Elements-AI.png`
    },
    {
        title: (
            <CertificateTitle
                title='Deep Learning with Python'
                issuer={Issuer.UDEMY}
            />
        ),
        cover: <img src='/images/Certificate-Machine-Learning-Python.jpg' />,
        tags: [
            ProgrammingLanguage.PYTHON,
            OtherSkills.MACHINE_LEARNING,
            OtherSkills.AI,
        ],
        link: 'https://www.udemy.com/certificate/UC-f95d9e4c-006b-4d6e-b617-c7eae35033d7/'
    }
]

export default function Certifications(props: Props) {

    const { id, showFeatured = true, hideTitle = false, enableFilters = false, transitions = true, ...rest } = props

    const navigate = useNavigate()

    return (
        <SectionLayout className='certifications-section' id={id} title={hideTitle ? undefined : 'CERTIFICATIONS'} {...rest}>
            <PreviewCardGrid
                items={certificates}
                showAllText='Show all Certificates'
                onShowAllClick={() => navigate(AppRoutes.certifications)}
                showFeatured={showFeatured}
                enableFilters={enableFilters}
                transitions={transitions}
            />
        </SectionLayout>
    )
}