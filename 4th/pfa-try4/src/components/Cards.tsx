import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <h1 className=' h-[200px] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 m-1 text-black flex justify-center'>You are ?</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl dlex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Employee</h2>
                <p className='text-center text-3xl font-bold'>Searching for job</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                </div>
                <button className='flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start exploring</button>

            </div>
            <div className="w-full shadow-xl dlex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Company</h2>
                <p className='text-center text-3xl font-bold'>Searching for interns</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                </div>
                <button className='flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start exploring</button>

            </div>
            <div className="w-full shadow-xl dlex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Students</h2>
                <p className='text-center text-3xl font-bold'>Searching for internships</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                </div>
                <button className='flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start exploring</button>

            </div>

        </div>
      
    </div>
  )
}

export default Cards
