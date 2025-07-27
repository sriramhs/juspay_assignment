import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './layout/ErrorBoundary.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </Provider>
  </StrictMode>,
)
