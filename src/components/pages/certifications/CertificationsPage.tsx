import PageLayout from '../../layouts/PageLayout'
import { Certifications } from '../../home/sections'

type Props = {}

export default function CertificationsPage({ }: Props) {
  return (
    <PageLayout
      title='CERTIFICATIONS'
    >
      <Certifications
        id='certifications'
        showFeatured={false}
        hideTitle
        // enableFilters
      />
    </PageLayout>
  )
}