import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const BookDetails = Loadable(lazy(() => import('views/BookDetails/index')));

// utilities routing
const Romance = Loadable(lazy(() => import('views/BookType/Romance')));
const Kid = Loadable(lazy(() => import('views/BookType/Kids')));
const Thrillers = Loadable(lazy(() => import('views/BookType/Thrillers')));
const Textbooks = Loadable(lazy(() => import('views/BookType/Textbooks')));

// sample page routing
const AboutUs = Loadable(lazy(() => import('views/sample-page/AboutUs')));
const SearchSection = Loadable(lazy(() => import('views/sample-page/Search/index')));

const Profile = Loadable(lazy(() => import('views/Profile/index')));

// ==============================|| MAIN ROUTING ||============================== //

//render the element when route
const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'bookType',
            children: [
                {
                    path: 'type-romance',
                    element: <Romance />
                }
            ]
        },
        {
            path: 'bookType',
            children: [
                {
                    path: 'type-kids',
                    element: <Kid />
                }
            ]
        },
        {
            path: 'bookType',
            children: [
                {
                    path: 'type-thrillers',
                    element: <Thrillers />
                }
            ]
        },
        {
            path: 'bookType',
            children: [
                {
                    path: 'type-textbooks',
                    element: <Textbooks />
                }
            ]
        },
        {
            path: 'other/about-us',
            element: <AboutUs />
        },
        {
            path: 'other/search',
            element: <SearchSection />
        },
        {
            path: 'book/:id',
            element: <BookDetails />
        },
        {
            path: 'user/social-profile/posts',
            element: <Profile />
        }
    ]
};

export default MainRoutes;
