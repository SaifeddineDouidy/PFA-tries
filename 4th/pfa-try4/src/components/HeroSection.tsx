import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className='text-white bg-[#000300]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>GROW YOUR CAREER WITH US</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 m-1'>Develop your career.</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl m:text-4xl text-xl font-bold py-4'>Faster and Easier.</p>
            <ReactTyped className='md:text-5xl m:text-4xl text-xl font-bold pl-2 text-[grey]' strings={['IT','Data Science','Cybersecurity']} typeSpeed={50} backSpeed={70} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Search for oppurtunities, from all around the globe!</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default HeroSection
