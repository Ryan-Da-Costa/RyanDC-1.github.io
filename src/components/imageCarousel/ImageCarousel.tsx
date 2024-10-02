import { useState } from 'react'
import { Carousel, Flex, Image, Typography } from 'antd'
import { isEmpty } from 'lodash'

type Props = {
    images: {
        src: string,
        description?: string
    }[]
}

export default function ImagePreview(props: Props) {

    const { images } = props

    const [carouselIndex, setCarouselIndex] = useState(0)
    const [previewSlideIndex, setPreviewSlideIndex] = useState<number | undefined>(undefined)


    return (
        !isEmpty(images) &&
        <div className='image-carousel-container'>
            <Image.PreviewGroup
                preview={{
                    current: previewSlideIndex ?? carouselIndex,
                    onChange: (currentSlide) => {
                        setPreviewSlideIndex(currentSlide)
                    },
                    afterOpenChange(open) {
                        !open && setPreviewSlideIndex(undefined)
                    },
                    footer: (
                        <Typography.Text>
                            {images[previewSlideIndex ?? carouselIndex]?.description}
                        </Typography.Text>
                    )
                }}
                items={
                    images.map(image => (
                        {
                            src: image.src,
                        }
                    ))
                }
            >
                <Carousel
                    afterChange={(currentSlide) => {
                        setCarouselIndex(currentSlide)
                    }}
                    className='image-carousel'
                    arrows={images.length > 1}
                    adaptiveHeight={false}
                >
                    {
                        images.map((image, index) => (
                            <Image
                                src={image.src}
                                key={index}
                            />
                        ))
                    }
                </Carousel>
                <Flex justify='center'>
                    <Typography.Text strong type='secondary'>
                        {images[carouselIndex]?.description}
                    </Typography.Text>
                </Flex>
            </Image.PreviewGroup>
        </div>
    )
}