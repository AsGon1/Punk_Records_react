import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import Home from './pages/home/Home'
import Browser from './pages/browser/Browser'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import MediaDetails from './pages/mediaDetails/MediaDetails';

import {getMediaById} from './utils/api/functions'


const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/browser",
                element: <Browser />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/media/:media_id",
                element: <MediaDetails />,
                loader: ({params}) => getMediaById(params.media_id)
            }
        ]
    }
])

export default router;