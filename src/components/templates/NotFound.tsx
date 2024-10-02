import { Button, Result, Typography } from 'antd'
import { HomeOutlined, LinkedinFilled } from '@ant-design/icons'
import { AppRoutes } from '../../utils/constants'

export default function NotFound() {

    return (
        <Result
            title={"Page Not Found"}
            icon={<img src='/images/404.svg' width='50%'/>}
            subTitle={
                <Typography.Text>
                    This page may not be available but, I am!
                    connect with me on <LinkedinFilled style={{ color: '#0a66c2' }} /> <a target='_blank' href='https://linkedin.com/in/ryandc1' rel="nofollow noopener">Linkedin</a>
                </Typography.Text>
            }
            extra={
                <Button
                    type='primary'
                    href={AppRoutes.home}
                    icon={<HomeOutlined />}
                >
                    Home
                </Button>
            }
        />
    )
}