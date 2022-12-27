import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import PillList from './PillList'
import PillSelection from './PillSelection'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (
    <div className="App">
	<PillList />

	<QueryClientProvider client={queryClient}>
        <PillSelection />
      </QueryClientProvider>
    </div>
  )
}

export default App
