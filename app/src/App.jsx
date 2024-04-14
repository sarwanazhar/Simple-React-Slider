import React from 'react'
import Slider from './components/Slider'

function App() {
  const arrayOfImagesThatITookFromUnsplash = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D'
  ]
  return (
    <>
    <div className='bg-slate-600 h-screen lg:h-auto'>
    <div className="txt-container py-5">
    <h1 className="text-center font-bold text-xl lg:text-4xl text-white ">Hope You Like This</h1>
    <h1 className='text-center font-bold text-neutral-400'>made by me sarwan and responsive as a bonus 😊</h1>
    </div>
      <Slider images={arrayOfImagesThatITookFromUnsplash}/>
    </div>
    </>
  )
}

export default App