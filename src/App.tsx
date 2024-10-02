import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import { Homepage } from './components/home'
import { AppRoutes } from './utils/constants'
import { NotFound } from './components/templates'
import { ConfigProvider, theme } from 'antd'
import { CertificationsPage, ProjectDetailsPage, ProjectsPage } from './components/pages'


const ScrollRestore = ScrollRestoration

const Route = ({ element }: { element: React.ReactNode }) => (
  <>
    <ScrollRestore
      getKey={(location) => {
        return location.pathname === AppRoutes.home ?
        location.pathname
        :
        location.key
      }}
    />
    {element}
  </>
)

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <Route element={<Homepage />} />
  },
  {
    path: AppRoutes.certifications,
    element: <Route element={<CertificationsPage />} />
  },
  {
    path: AppRoutes.projects,
    element: <Route element={<ProjectsPage />} />
  },
  {
    path: AppRoutes.projectDetails,
    element: <Route element={<ProjectDetailsPage />} />
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/'})

function App() {
  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: "#50CC10",
      },
      components: {
        Tag: {
          colorText: "#50CC10",
          colorBgContainer: '#162312',
          colorBorder: '#274916'
        },
        Typography: {
          fontSize: 16
        },
        Button: {
          colorLink: "rgb(80,204,16)",
          colorLinkActive: "rgb(80,204,16)",
          colorLinkHover: "rgb(60,159,10)"
        }
      }
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
