import { useMemo, useRef } from 'react'
import { Button, Flex, Space } from 'antd'
import { PreviewCard, PreviewCardType } from '../previewCard'
import { SkillFilter } from '../filters'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface Props {
    items: PreviewCardType[]
    /**
     * Shows only the featured certificates
     * @default true
    */
    showFeatured?: boolean,
    enableFilters?: boolean,
    /**
     * Enables on initial load card transitions
     * @default true
     */
    transitions?: boolean,
    showAllText?: string,
    onShowAllClick?: () => void
}

export default function PreviewCardGrid(props: Props) {

    const {
        showFeatured = true,
        enableFilters = false,
        transitions = true,
        items = [],
        onShowAllClick,
        showAllText
    } = props

    const limit = document.body.clientWidth < 1650 ? 6 : 8

    const cardContainerRef = useRef(null!)

    useGSAP(() => {
        if (transitions) {
            const cards: HTMLElement[] = gsap.utils.toArray('.preview-card')
            let increment = 0.4
            for (let card of cards) {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: '100%' },
                    { opacity: 1, y: 0, delay: 0.3, duration: 0.1 + increment, ease: 'sine.in' }
                )

                gsap.set(
                    card,
                    { opacity: 0, y: '100%' }
                )

                increment = increment === 1 ? 0.2 : (increment + 0.1)
            }
        }
    }, { scope: cardContainerRef })


    const allowedFilters = useMemo(() => {
        return items.map(item => (
            [...(item.tags ?? [])]
        )).flat().filter(tag => !!tag)
    }, [])

    return (
        <Space direction='vertical' size={24}>
            {
                enableFilters &&
                <Flex justify='end'>
                    <SkillFilter
                        allowedFilters={allowedFilters}
                    />
                </Flex>
            }
            {
                <Space ref={cardContainerRef} size={38} className='preview-card-grid' wrap>
                    {
                        items
                            .slice(0, showFeatured ? limit : items.length)
                            .sort((a, b) => {
                                if (a.priority === undefined) {
                                    return 1
                                } else if (b.priority === undefined) {
                                    return -1
                                } else {
                                    return a.priority - b.priority
                                }
                            })
                            .map((item, id) => (
                                <PreviewCard
                                    key={id}
                                    id={`${id}`}
                                    item={item}
                                />
                            ))
                    }
                </Space>
            }
            {
                showFeatured && items.length > limit &&
                <Flex justify='center'>
                    <Button
                        type='link'
                        onClick={onShowAllClick}
                    >
                        {showAllText}
                    </Button>
                </Flex>
            }
        </Space>
    )
}