
import img from '../assets/laptop.jpg'
const Content1 = () => {
  return (
    <div className='h-full w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={img} alt="/" />
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Trouvez votre emploi idéal dès maintenant</h1>
                <p className=''>Notre site offre une expérience utilisateur unique et vous permet de trouver facilement et rapidement les offres d'emploi qui vous correspondent.</p>
                <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>En savoir plus</button>
                
            </div>
        </div>
      
    </div>
  )
}

export default Content1
