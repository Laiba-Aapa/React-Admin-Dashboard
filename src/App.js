import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css';

import { Navbar, Footer, Sidebar, ThemeseSetting } from './components'
import { Ecommerce, Line, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorMapping, ColorPicker, Editor } from './pages'
import { StateContext } from './contexts/ContextProvider';

function App() {

  const { activeMenu } = useContext(StateContext)

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4 ' style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings" position='top'>
              <button type='button' className='text-3xl hover:drop-shadow-xl p-3 hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}><FiSettings /></button>
            </TooltipComponent>
          </div>
          {/* sidebar */}
          {activeMenu ? (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"><Sidebar /></div>) : (<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>)}
          {/* main nav*/}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full  ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'><Navbar />


              <Routes>
                {/* dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/* pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/Kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />
                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />


              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
