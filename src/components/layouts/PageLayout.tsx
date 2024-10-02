import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Button, Card, Col, Layout, Row, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../utils/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FooterLayout from './FooterLayout'

type Props = {
  children: React.ReactNode,
  className?: string,
  title?: React.ReactNode,
  extra?: React.ReactNode,
  transitionDuration?: number
}

export default function PageLayout(props: Props) {

  const { children, title, extra, className, transitionDuration = 0.2 } = props

  const navigate = useNavigate()

  useGSAP(() => {
    gsap.fromTo(
      '#page-layout',
      { opacity: 0, y: '-50%' },
      { opacity: 1, duration: transitionDuration, y: 0, ease: 'power3.inOut' }
    )
  })

  return (
    <Layout id='page-layout' className={'page-layout'.concat(className ? ` ${className}` : '')}>
      <Layout className='gradient-background'>
        <Card className='page-layout-header'>
          <Row>
            <Col span={2} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <Button
                type='text'
                shape='circle'
                size='large'
                icon={<LeftOutlined />}
                onClick={() => {
                  navigate(AppRoutes.home, { preventScrollReset: true })
                }}
              />
            </Col>

            <Col span={19} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography.Title className='page-layout-title' level={2}>
                {title}
              </Typography.Title>
            </Col>

            <Col span={3} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              {extra}
            </Col>
          </Row>
        </Card>
        <Layout.Content>
          {
            children
          }
        </Layout.Content>
        <FooterLayout />
      </Layout>

    </Layout>
  )
}