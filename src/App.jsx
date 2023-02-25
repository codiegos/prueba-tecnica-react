import { useCatUrl } from './hooks/useCatUrl'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { catFact, refreshCatFact, error: catFactError } = useCatFact()
  const { catImageUrl, error: catImageUrlError } = useCatUrl({ catFact })

  const handleClick = () => {
    refreshCatFact()
  }

  return (
    <main className='flex flex-col items-center min-h-screen bg-gradient-to-t from-blue-900 to-slate-900 font-mono text-white'>
      <div className='flex flex-col justify-center items-center gap-12 p-20'>
        <button
          className='bg-purple-900 hover:bg-purple-800 border border-purple-600 p-2 rounded-md text-xl hover:scale-105 duration-300 outline-none'
          onClick={handleClick}
        >
          Generate Cat
        </button>
        {catFact && <p className='text-lg max-w-lg text-center'>{catFact}</p>}
        {catFactError && <span className='text-red-500'>{catFactError}</span>}
        <img src={catImageUrl} alt='random cat image generated with fact text' className='border border-purple-600 rounded-md' />
        {catImageUrlError && <span className='text-red-500'>{catImageUrlError}</span>}
      </div>
    </main>
  )
}

export default App
