import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import Home from './pages/home/Home'
import Browser from './pages/browser/Browser'
import Login from './pages/login/Login'

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
            }
        ]
    }
])

export default router;