import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from '../utils/Store';
import {Login,Browse,MovieInfo,ErrorPage} from './components';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
let approuter=createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[{
        path:"/",
        element:<Login/>
      },
    {
      path:"/browse",
      element:<Browse/>,
    
    },
    {
        path:"/browse/movieInfo",
        element:<MovieInfo/>,
    }
  ]},
    {
      path:'*',
      element:<ErrorPage/>
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>

    <RouterProvider router={approuter}/>
</Provider>

)
