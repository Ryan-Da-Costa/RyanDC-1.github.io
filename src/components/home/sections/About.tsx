import { useMemo } from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import { Typography } from 'antd'
import dayjs from 'dayjs'

interface Props extends Pick<React.ComponentProps<typeof SectionLayout>, 'onVisibleChange'> {
    id: string
}

export default function About(props: Props) {

    const { id, ...rest } = props

    const yearsOfExp = useMemo(() => {
        const startDay = dayjs("07-09-2020")
        return Math.floor(dayjs().diff(startDay, 'year'))
    }, [])

    return (
        <SectionLayout id={id} title="ABOUT ME" className='about-section' {...rest}>
            <Typography.Paragraph className='font-16'>
                I'm a <b>Fullstack developer</b> with a passion for crafting efficient and user-friendly web applications.
                With over {yearsOfExp} years of experience, I've honed my skills in <b>React and .NET</b>,
                consistently <b>delivering high-quality solutions</b> that meet and exceed expectations.
            </Typography.Paragraph>
            <Typography.Paragraph className='font-16'>
                I thrive on tackling complex challenges and finding creative solutions and am driven by a desire to improve efficiency
                and optimize performance. I've successfully <b>reduced API load times</b> by implementing 
                Redis caching and <b>Reduced web bundle size by up to 60%</b> using code splitting techniques and chunking common code and
                libraries into separate bundles using Webpack, <b>enhancing application performance</b> and load times.
            </Typography.Paragraph>
            <Typography.Paragraph className='font-16'>
                When I'm not coding, you can find me exploring the world through my camera lens or jamming out on my guitar. Just like in coding, 
                I'm constantly seeking new ways to express myself and create something unique.
            </Typography.Paragraph>
        </SectionLayout>
    )
}