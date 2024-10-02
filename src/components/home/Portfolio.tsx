import { useRef, useState } from 'react'
import { Menu } from 'antd'
import { GithubOutlined, IdcardOutlined } from '@ant-design/icons'
import MainLayout from '../layouts/MainLayout'
import { About, Awards, Certifications, Projects } from './sections'
import { AwardOutlined, CertificateOutlined } from '../icons'
import { scrollToElement } from '../../utils/helpers'
import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type Props = {}

enum MenuKey {
    ABOUT = 'about',
    SKILLS = 'skills',
    PROJECTS = 'projects',
    AWARDS = 'awards',
    CERTIFICATIONS = 'certifications'
}

export default function Portfolio({ }: Props) {

    const [selectedMenu, setSelectedMenu] = useState(MenuKey.ABOUT)
    const isSectionsLoaded = useRef(false)
    const isMenuLoaded = useRef(false)

    useIntersectionObserver({
        id: 'menu',
        callback: (isVisible) => {
            if (isVisible && !isMenuLoaded.current) {
                const menuItems = document.getElementById('menu')?.querySelectorAll('.ant-menu-item')!
                let increment = 0.2
                for(let item of menuItems) {
                    gsap.to(item, { opacity: 1, delay: 0 + increment, duration: 0.4, x: '0%', ease: 'power4.in' })
                    increment += 0.2
                }

                isMenuLoaded.current = true
            }
        },
        bottom: -200
    })

    useIntersectionObserver({
        id: 'sections-container',
        callback: (isVisible) => {
            if (isVisible && !isSectionsLoaded.current) {
                gsap.to('#sections-container', {
                    opacity: 1,
                    duration: 0.4,
                    x: '0%',
                    ease: 'power4.in',
                    onComplete: () => {
                        gsap.set('#sections-container', { clearProps: 'transform' })
                        isSectionsLoaded.current = true
                    }
                })
            }
        },
        bottom: -200
    })

    useGSAP(() => {
        const menuItems = document.getElementById('menu')?.querySelectorAll('.ant-menu-item')!
        for(let item of menuItems) {
            gsap.set(item, { opacity: 0, x: '-30%' })
        }
        gsap.set('#sections-container', { opacity: 0, x: '100%' })
    })

    return (
        <MainLayout
            sider={
                <Menu
                    id='menu'
                    mode='inline'
                    selectedKeys={[selectedMenu]}
                    onClick={(event) => {
                        setSelectedMenu(event.key as MenuKey)
                        scrollToElement({ id: event.key })
                    }}
                    items={[
                        {
                            key: MenuKey.ABOUT,
                            icon: <IdcardOutlined />,
                            label: 'ABOUT ME'
                        },
                        // {
                        //     key: MenuKey.SKILLS,
                        //     icon: <ToolOutlined />,
                        //     label: 'SKILLS'
                        // },
                        {
                            key: MenuKey.PROJECTS,
                            icon: <GithubOutlined />,
                            label: 'PROJECTS'
                        },
                        {
                            key: MenuKey.AWARDS,
                            icon: <AwardOutlined />,
                            label: 'AWARDS'
                        },
                        {
                            key: MenuKey.CERTIFICATIONS,
                            icon: <CertificateOutlined />,
                            label: 'CERTIFICATIONS'
                        }
                    ]}
                />
            }
        >
            <div id='sections-container' className='sections-container' style={{ overflow: 'hidden' }}>
                <About
                    id={MenuKey.ABOUT}
                    onVisibleChange={(isVisible) => isVisible && setSelectedMenu(MenuKey.ABOUT)}
                />

                {/* <Skills 
                    id={MenuKey.SKILLS}
                    onVisibleChange={(isVisible) => isVisible && setSelectedMenu(MenuKey.SKILLS)}
                /> */}

                <Projects
                    id={MenuKey.PROJECTS}
                    onVisibleChange={(isVisible) => isVisible && setSelectedMenu(MenuKey.PROJECTS)}
                    transitions={false}
                />

                <Awards
                    id={MenuKey.AWARDS}
                    onVisibleChange={(isVisible) => isVisible && setSelectedMenu(MenuKey.AWARDS)}
                />

                <Certifications
                    id={MenuKey.CERTIFICATIONS}
                    onVisibleChange={(isVisible) => isVisible && setSelectedMenu(MenuKey.CERTIFICATIONS)}
                    transitions={false}
                />
            </div>
        </MainLayout>
    )
}