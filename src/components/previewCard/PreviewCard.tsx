import { useNavigate } from 'react-router-dom'
import { Card, Popover, Space, Tag, Typography } from 'antd'
import { isEmpty } from 'lodash'
import React from 'react'
import { isAbsoluteURL } from '../../utils/helpers'
import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver'

type Props = {
    id: string,
    item: PreviewCardType,
    /**
     * callback triggered when the card is visible in the viewport
     */
    onVisible?: (id: string) => void
}

export interface PreviewCardType {
    title: React.ReactNode,
    cover: React.ReactNode,
    description?: React.ReactNode,
    tags?: string[],
    link?: string,
    priority?: number
}

export default function PreviewCard(props: Props) {

    const { id, item, onVisible } = props

    const navigate = useNavigate()
    
    useIntersectionObserver({
        id: `preview-card-${id}`,
        callback: (isVisible) => { isVisible && onVisible?.(`preview-card-${id}`) },
        top: 0,
        bottom: 200,
    })

    return (
        <Card
            id={`preview-card-${id}`}
            className='preview-card'
            hoverable
            style={{ width: 320 }}
            cover={item.cover}
            onClick={() => {
                if (item.link) {
                    isAbsoluteURL(item.link) ?
                        window.open(item.link, '_blank', 'noreferrer noopener')
                        :
                        navigate(item.link)
                }
            }}
        >
            <Card.Meta
                title={item.title}
                description={(
                    <>
                        {
                            item.description &&
                            <Typography.Text className='preview-card-description'>
                                {item.description}
                            </Typography.Text>
                        }
                        {
                            !isEmpty(item.tags) &&
                            <Space size={4} className='preview-card-skills' wrap>
                                {
                                    item.tags?.slice(0, 2).map(tag => (
                                        <Tag key={tag} className='skill-tag'>
                                            {tag}
                                        </Tag>
                                    ))
                                }
                                {
                                    item.tags!.length > 2 &&
                                    <Popover
                                        overlayInnerStyle={{ maxWidth: 280 }}
                                        content={
                                            item.tags?.slice(2, item.tags.length).map(tag => (
                                                <Tag key={tag} className='skill-tag mb-4'>
                                                    {tag}
                                                </Tag>

                                            ))
                                        }
                                    >
                                        <Tag>
                                            {`+ ${item.tags!.length - 2}`}
                                        </Tag>
                                    </Popover>
                                }
                            </Space>
                        }
                    </>
                )}
            />
        </Card>
    )
}