import React from 'react'
import { Provider } from "react-redux";
import store from './store'

import Sidebar from './components/Sidebar'
import Video from './components/Video'
import Feed from './components/Feed'
import Carshop from './components/CarShop'


const App = () => {
  return (
    <div>
      <Provider store={ store }>
            <Video />
           <Sidebar />
           <Feed />
           <Carshop />
      </Provider>
    </div>
  )
}

export default App
