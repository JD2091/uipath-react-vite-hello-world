import { useState } from 'react'
import { UiPath } from '@uipath/uipath-typescript/core'

const sdk = new UiPath()

function App() {
  const [status, setStatus] = useState('UiPath SDK is not initialized.')

  async function initializeUiPathSdk() {
    setStatus('Initializing the UiPath SDK...')

    try {
      await sdk.initialize()
      setStatus('UiPath SDK initialized successfully.')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      setStatus(`Initialization failed: ${message}`)
    }
  }

  return (
    <main>
      <h1>Hello World!!</h1>
      <p>This React app is compiled by Vite and can initialize the UiPath TypeScript SDK.</p>
      <button type="button" onClick={initializeUiPathSdk}>
        Initialize UiPath SDK
      </button>
      <p role="status">{status}</p>
    </main>
  )
}

export default App
