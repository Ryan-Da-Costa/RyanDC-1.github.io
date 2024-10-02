import { useEffect, useRef } from "react";
import { Button, Space, Typography } from "antd";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { Typewriter } from "../typewiter";
import { DownOutlined } from "@ant-design/icons";
import { numberInRange, scrollToElement } from "../../utils/helpers";

export default function LandingPage() {

    const containerRef = useRef<HTMLDivElement>(null!)
    const contentRef = useRef<HTMLDivElement>(null!)

    const scrollToMainLayout = () => scrollToElement({ id: 'main-layout' })

    useGSAP(
        () => {
            const intro: HTMLElement[] = gsap.utils.toArray('.intro')
            let increment = 0
            for (const element of intro) {
                increment += 1
                gsap.timeline()
                    .fromTo(
                        element,
                        { opacity: 0 },
                        { opacity: 1, duration: 1 + increment, ease: 'power4.inOut' }
                    )
            }
            gsap.fromTo('.nav-btn', { opacity: 0 }, { opacity: 0.5, delay: 3, ease: 'elastic.in' })
        },
        { scope: containerRef }
    )

    useEffect(() => {
        const onScroll = () => {
            const { y: scrollTop, height } = containerRef.current.getBoundingClientRect()

            if(scrollTop > height) {
                return
            }

            if(scrollTop < -100) {
                gsap.to(contentRef.current, { opacity: 0, y: scrollTop })
            } else {
                gsap.to(contentRef.current, { opacity: 1, y: 0, delay: 0.2, duration: 0.4, ease: 'power2.inOut' })
            }

            return scrollTop
        }

        const onScrollEnd = () => {
            const scrollTop = onScroll()

            if(scrollTop && numberInRange(scrollTop, -800, -250)) {
                scrollToMainLayout()
            }
        }

        document.addEventListener('scroll', onScroll)
        document.addEventListener('scrollend', onScrollEnd)

        return () => {
            document.removeEventListener('scroll', onScroll)
            document.removeEventListener('scrollend', onScrollEnd)
        }
    }, [])

    return (
        <div id='landing' className="landing gradient-background" ref={containerRef}>
            <Space 
                direction='vertical' 
                className="intro-container" 
                size={0} 
                ref={contentRef}
            >
                <Typography.Title className="intro font-42">
                    Welcome to my digital abode
                </Typography.Title>
                <Typography.Title className="intro font-42">
                    I'm Ryan Da Costa
                </Typography.Title>
                <Typewriter
                    startDelay={1.8}
                    text={[
                        'A FullStack Software Engineer',
                        'An Innovative Problem Solver',
                        'A FrontEnd Developer',
                        'A Strategic Planner',
                        'A BackEnd Developer',
                        'A Creative Thinker',
                    ]}
                />
            </Space>
            <Button
                className="nav-btn"
                shape='circle'
                size='large'
                type='text'
                icon={<DownOutlined style={{ color: 'gray' }} />}
                onClick={scrollToMainLayout}
            />
        </div>
    )
}