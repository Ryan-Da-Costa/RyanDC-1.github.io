import React from 'react'
import { Typography } from 'antd'
import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver'

interface Props {
    id: string,
    children?: React.ReactNode,
    title?: React.ReactNode,
    className?: string,
    /**
     * Callback triggered when a section title is in view.
     * is visible will be true when the title of the section is
     * in the topmost region of the screen
     */
    onVisibleChange?: (isVisible: boolean) => void
}

export default function SectionLayout(props: Props) {

    const { id, title, children, className, onVisibleChange } = props

    useIntersectionObserver({
        id,
        callback: (isVisible) => onVisibleChange?.(isVisible)
    })

    return (
        <>
            <Typography.Title id={id} className='section-title' hidden={title == null}>
                {title}
            </Typography.Title>
            <span className={'section-content'.concat(className ? ` ${className}` : '')}>
                {children}
            </span>
        </>
    )
}