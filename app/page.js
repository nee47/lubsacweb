import Image from 'next/image'
import Navigation from './Components/Navigation'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center '>
        <img  src=" bg1.jpg" alt="aceite" className=' w-full' />
      </div>

      <div className='flex flex-col gap-3 m-auto pt-20 pb-20 w-3/4'>
        <p className='text-3xl font-bold text-yellow-500'>Lubricantes especiales del Perú</p>
        <h2 className=' font-bold'>COMBINAMOS EXPERIENCIA E INNOVACION</h2>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem odio, maximus at luctus a, ultrices a augue. Nulla nunc turpis, mattis eu lacus at, laoreet porta risus. Fusce tempus, purus at convallis tempus, dui ipsum tincidunt velit, quis tincidunt metus arcu ac tortor. Proin iaculis velit dolor, at facilisis neque varius nec. Pellentesque diam neque, ornare ut metus nec, pretium maximus dolor. </p>
      </div>

      <div className='relative h-96 w-full'>
        <img src="bg2.jpg" className=' w-full h-full object-cover filter brightness-50'  alt="" />
        <div className='flex flex-col gap-6 absolute top-24 left-28 z-100 text-white text-2xl'>
          <p className='font-bold' >NUESTROS SERVICIOS</p>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem odio, maximus at luctus a, ultrices a augue. Nulla nunc turpis, mattis eu lacus at, laoreet porta risus.</p>
        </div>
      </div>
    </div>
    
  )
} 
