import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router'

import { store } from './stores/store'
import App from './app/App.tsx'

import './styles/globals.css'
import './root.css'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
