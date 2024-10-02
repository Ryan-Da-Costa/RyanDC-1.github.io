import { Layout } from 'antd'
import React from 'react'
import FooterLayout from './FooterLayout';

type Props = {
  children: React.ReactNode,
  sider: React.ReactNode
}

const siderStyle: React.CSSProperties = {
  height: '100vh',
  position: 'sticky',
  top: 0,
  bottom: 0
};

export default function MainLayout({ children, sider }: Props) {
  return (
    <Layout id='main-layout' className='main-layout'>
      <Layout>

        <Layout.Sider
          breakpoint="lg"
          collapsedWidth="75"
          width={212}
          style={siderStyle}
        >
          {sider}
        </Layout.Sider>

        <Layout.Content>
          {children}
        </Layout.Content>

      </Layout>

      <FooterLayout />
    </Layout>
  )
}