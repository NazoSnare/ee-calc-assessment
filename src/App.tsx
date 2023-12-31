import './App.css'

import { CalculateHome } from './pages';
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './utils/themes';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <CalculateHome />
    
      </ThemeProvider>  )
}

export default App
