import PageLayout from '../../layouts/PageLayout'
import { Projects } from '../../home/sections'

type Props = {}

export default function ProjectsPage({ }: Props) {
  return (
    <PageLayout
      title='PERSONAL PROJECTS'
    >
      <Projects
        id='projects'
        showFeatured={false}
        hideTitle
        // enableFilters
      />
    </PageLayout>
  )
}