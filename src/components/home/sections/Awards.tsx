import React from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import { Flex, Timeline, Typography } from 'antd'

interface Props extends Pick<React.ComponentProps<typeof SectionLayout>, 'onVisibleChange'> {
    id: string
}

export default function Awards(props: Props) {

    const { id, ...rest } = props

    return (
        <SectionLayout className='awards-section' id={id} title='AWARDS' {...rest}>
            <Timeline
                items={[
                    {
                        children: (
                            <>
                                <Flex justify='space-between'>
                                    <Typography.Text strong>
                                        On-Time Performer <Typography.Text type='secondary'> | Teknorix Technologies Pvt. Ltd.</Typography.Text>
                                    </Typography.Text>
                                    <Typography.Text type='secondary'>December 2023</Typography.Text>
                                </Flex>
                                <Typography.Text>
                                    Recognized for efficiently producing high-quality software, consistently <b>meeting deadlines</b>, and achieving
                                    a <b>100% on-time delivery rate</b> for all assigned projects in the past year. Successfully delivered complex
                                    features such as an authentication module with third-party OAuth providers ahead of schedule leveraging both frontend
                                    and backend development skills which contributed to <b>seamless product
                                        launches</b> and <b>increased customer satisfaction.</b>
                                </Typography.Text>
                            </>
                        )
                    },
                    {
                        children: (
                            <>
                                <Flex justify='space-between'>
                                    <Typography.Text strong>
                                        The Prompt Pundit <Typography.Text type='secondary'> | Teknorix Technologies Pvt. Ltd.</Typography.Text>
                                    </Typography.Text>
                                    <Typography.Text type='secondary'>December 2022</Typography.Text>
                                </Flex>
                                <Typography.Text>
                                    Awarded for excellent <b>task management</b> and <b>innovative problem-solving skills</b>, demonstrated by
                                    my ability to rapidly design and evaluate Proof of Concepts (POCs), enabling the team to confidently select
                                    the most effective solution and significantly <b>reducing overall development time.</b>
                                </Typography.Text>
                            </>
                        )
                    },
                    {
                        children: (
                            <>
                                <Flex justify='space-between'>
                                    <Typography.Text strong>
                                        Rockstar Rookie <Typography.Text type='secondary'> | Teknorix Technologies Pvt. Ltd.</Typography.Text>
                                    </Typography.Text>
                                    <Typography.Text type='secondary'>December 2021</Typography.Text>
                                </Flex>
                                <Typography.Text>
                                    Received for <b>outstanding performance</b> and consistently exceeding expectations, notably for quickly learning and
                                    implementing new technologies to develop a real-time report and usage monitoring system using <b>SignalR</b>, <b>.NET</b>,
                                    and <b>React</b> leading to an <b>increase in user engagement.</b>
                                </Typography.Text>
                            </>
                        )
                    },
                ]}
            />
        </SectionLayout>
    )
}