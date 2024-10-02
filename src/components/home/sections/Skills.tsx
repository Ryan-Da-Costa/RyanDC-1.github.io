import { Col, Row, Space, Tag, Typography } from 'antd'
import SectionLayout from '../../layouts/SectionLayout'
import { BackEndSkill, FrontEndSkill, ProgrammingLanguage } from '../../../utils/constants'

interface Props extends Pick<React.ComponentProps<typeof SectionLayout>, 'onVisibleChange'> {
    id: string
}

interface Skill {
    name: string,
    usage?: {
        description: string,
        link: string
    }[]
}

interface Section {
    name: string,
    skills: Skill[]
}

const programmingLanguages: Skill[] = [
    {
        name: ProgrammingLanguage.JAVASCRIPT
    },
    {
        name: ProgrammingLanguage['C#']
    },
    {
        name: ProgrammingLanguage.PYTHON
    },
    {
        name: ProgrammingLanguage.JAVA
    },
    {
        name: ProgrammingLanguage.DART
    }
]


const frontEndDevelopmentSkills: Skill[] = [
    {
        name: FrontEndSkill.REACT
    },
    {
        name: FrontEndSkill.TYPESCRIPT
    },
    {
        name: FrontEndSkill.NEXTJS
    },
    {
        name: FrontEndSkill.FLUTTER
    },
    {
        name: FrontEndSkill.HTML
    },
    {
        name: FrontEndSkill.CSS
    },
]

const backendDevelopmentSkills: Skill[] = [
    {
        name: BackEndSkill.DOTNET
    },
    {
        name: BackEndSkill.NODEJS
    },
    {
        name: BackEndSkill.EXPRESSJS
    },
    {
        name: BackEndSkill.SQL
    },
    {
        name: BackEndSkill.MONGODB
    },
    {
        name: BackEndSkill.GRAPHQL
    },
    {
        name: BackEndSkill.AWS
    },
]

const sections: Section[] = [
    {
        name: 'Programming Languages',
        skills: programmingLanguages
    },
    {
        name: 'Front End Development',
        skills: frontEndDevelopmentSkills,
    },
    {
        name: 'Back End Development',
        skills: backendDevelopmentSkills
    }
]

export default function Skills(props: Props) {

    const { id, ...rest } = props

    return (
        <SectionLayout id={id} title='SKILLS' className='skills-section' {...rest}>
            <Space direction='vertical'>
                {
                    sections.map(section => (
                        <div key={section.name}>
                            <Row gutter={[8, 8]}>
                                <Col>
                                    <Typography.Text className='font-16'>
                                        {section.name}:
                                    </Typography.Text>
                                </Col>
                                <Col className='skill-tags'>
                                    <Space wrap size={4}>
                                        {
                                            section.skills.map(skill => (
                                                <Tag key={skill.name} className='skill-tag'>
                                                    {skill.name}
                                                </Tag>
                                            ))
                                        }
                                    </Space>
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </Space>
        </SectionLayout>
    )
}