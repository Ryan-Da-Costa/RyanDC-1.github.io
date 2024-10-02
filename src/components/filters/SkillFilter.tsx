import { useMemo } from 'react'
import { difference } from 'lodash'
import { Button, Checkbox, Dropdown, Flex, Space, Typography } from 'antd'
import { BackEndSkill, FrontEndSkill, OtherSkills, ProgrammingLanguage } from '../../utils/constants'
import { FilterOutlined } from '@ant-design/icons'

type Props = {
    allowedFilters: string[]
}

interface SkillSectionProps {
    title: string,
    entries: Record<string, string>,
    exclude: string[]
}

const SkillSection = ({ title, entries, exclude }: SkillSectionProps) => {

    return (
        <div onClick={(event) => event.stopPropagation()}>
            <Space direction='vertical'>
                <Typography.Text type='secondary' strong>
                    {title}
                </Typography.Text>
                <Checkbox.Group
                    style={{ flexDirection: 'column' }}
                    options={
                        Object.entries(entries)
                        .filter(([_key, value]) => !exclude.includes(value))
                        .map(([key, value]) => ({ label: value, value: key }))}
                />
            </Space>
        </div>
    )
}

const skillSections = [
    {
        title: 'Programming Languages',
        entries: ProgrammingLanguage
    },
    {
        title: 'Front End Skills',
        entries: FrontEndSkill
    },
    {
        title: 'Back End Skills',
        entries: BackEndSkill
    },
    {
        title: 'Miscellaneous',
        entries: OtherSkills
    }
]

const getExcludedFilters = (allowedFilters: string[]) => {
    const allFilters = skillSections.map(skill => ([...Object.values(skill.entries)])).flat()
    return difference(allFilters, allowedFilters)
}

export default function SkillFilter({ allowedFilters }: Props) {

    const excludedFilters = useMemo(() => getExcludedFilters(allowedFilters), [allowedFilters])

    return (
        <Dropdown
            trigger={['click']}
            placement='bottomRight'
            menu={{
                items: [
                    {
                        key: '0',
                        label: (
                            <Space direction='vertical'>
                                <Flex justify='end'>
                                    <Button
                                        type='text'
                                    >
                                        Clear
                                    </Button>
                                </Flex>
                                <Flex justify='center' gap={42}>
                                    {
                                        skillSections.map((skills) => (
                                            <SkillSection
                                                key={skills.title}
                                                exclude={excludedFilters}
                                                {...skills}
                                            />
                                        ))
                                    }
                                </Flex>
                            </Space>
                        )
                    }
                ]
            }}
        >
            <Button
                icon={<FilterOutlined />}
                type='text'
                size='large'
            >
                Filter
            </Button>
        </Dropdown>
    )
}