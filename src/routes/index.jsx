import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// layouts
import MainLayout from '../layouts/main';

// ----------------------------------------------------------------------------------------------------

const Loadable = (Component) => {
  const SuspensedComponent = (props) => {
    // const { pathname } = useLocation();

    return (
      <Suspense
        // fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')}/>
        fallback={<div>Loading...</div>}
      >
        <Component {...props} />
      </Suspense>
    );
  };

  return SuspensedComponent;
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Home />, index: true },
        { path: 'how-it-works', element: <HowItWorks /> },
        { path: 'proof-of-reserve', element: <ProofOfReserve /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'rxau', element: <Rxau /> },
        { path: 'royal', element: <Royal /> },
        { path: 'news', element: <News /> },
      ],
    },
  ]);
}

// PAGES
const Home = Loadable(lazy(() => import('../pages/Home')));
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')));
const ProofOfReserve = Loadable(lazy(() => import('../pages/ProofOfReserve')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const HowItWorks = Loadable(lazy(() => import('../pages/HowItWorks')));
const Rxau = Loadable(lazy(() => import('../pages/Rxau')));
const Royal = Loadable(lazy(() => import('../pages/Royal')));
const News = Loadable(lazy(() => import('../pages/News')));
