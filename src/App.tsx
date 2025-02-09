import {useState} from 'react'

import {VerticalSidebar} from './pages/sidebar/VerticalSidebar.tsx'
import Content from './components/layout/Content.tsx'
import {useResize} from './hooks/resize.ts'

import './App.css'

function App() {
  // TODO: replace this with RTK
  const [size, setSize] = useState(0)

  // @ts-ignore
  const [targetRefLeft, sizeLeft, actionLeft] = useResize(
    size,
    'left',
    setSize,
  )

  return (
    <main className="container">
      <VerticalSidebar/>
      <div>Inner Sidebar</div>
      <Content style={{ marginLeft: sizeLeft }}>
        <div>
          The main content goes in here!
        </div>
      </Content>
    </main>
  )
}

export default App
