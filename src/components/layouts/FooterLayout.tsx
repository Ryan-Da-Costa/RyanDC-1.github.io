import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'
import { Button, Layout, message as antMessage, Space, Flex, Typography } from 'antd'

type Props = {}

export default function FooterLayout({ }: Props) {

    const [message, messageContext] = antMessage.useMessage()

    return (
        <Layout.Footer className='footer-layout'>
            {messageContext}
            <Flex justify='center' className='mb-4'>
                <Typography.Text type='secondary' className='font-14'>
                    Designed and built by Ryan Da Costa
                </Typography.Text>
            </Flex>

            <Flex justify='center' className='mt-4'>
                <Space>
                    <Button
                        icon={<MailFilled />}
                        type='link'
                        size='large'
                        href='mailto:ryan.l.dacosta@gmail.com'
                        target='_blank'
                        onClick={() => {
                            message.success("EmailId copied to clipboard")
                            navigator.clipboard.writeText('ryan.l.dacosta@gmail.com')
                        }}
                    >
                        Email
                    </Button>
                    <Button
                        icon={<LinkedinFilled />}
                        type='link'
                        size='large'
                        href='https://www.linkedin.com/in/ryandc1'
                        target='_blank'
                    >
                        LinkedIn
                    </Button>
                    <Button
                        icon={<GithubFilled />}
                        type='link'
                        size='large'
                        href='https://github.com/RyanDC1'
                        target='_blank'
                    >
                        GitHub
                    </Button>
                </Space>
            </Flex>
        </Layout.Footer>
    )
}