import Icon from "@ant-design/icons"
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon"
//@ts-expect-error - vite svgr paths
import awardSVG from './svg/award.svg?react'
//@ts-expect-error - vite svgr paths
import certificateSVG from './svg/cerificate.svg?react'
//@ts-expect-error - vite svgr paths
import controlsSVG from './svg/controls.svg?react'

type IconGeneratorProps = Partial<CustomIconComponentProps> & {
    size?: number
}

type Component = React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps>

const IconGenerator = (
    component: Component,
    props: IconGeneratorProps
) => {
    const { style = {}, ...rest } = props
    return <Icon component={component} {...rest} style={{ fontSize: props.size, ...style }} />
}

const generateIcon = (component: Component) => (props: IconGeneratorProps) => IconGenerator(component, props)

export const AwardOutlined = generateIcon(awardSVG)
export const CertificateOutlined = generateIcon(certificateSVG)
export const ControlsOutlined = generateIcon(controlsSVG)