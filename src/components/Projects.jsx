import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'

export default function Projects(){
    return(
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full pb-10">
                <div className="flex justify-center">
                    <h1 className="text-4xl border-b-4 border-secondary w-[130px]">Projects</h1>
                </div>
                <p className='flex justify-center pt-4'>Check out some of my best projects.</p>
            </div>
            <div className="w-full flex justify-center">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    <div className='relative'>
                        <img className='h-[200px] w-[350px]' src={websiteImg1}/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-90'>
                            <p className='text-center py-5'>Ecommerce website built with MERN stack</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[350px]' src={websiteImg2}/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-90'>
                            <p className='text-center py-5'>An alternate for Swiggy, built with Angular</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[350px]' src={websiteImg3}/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-90'>
                            <p className='text-center py-5'>Blog site, built with NextJS and MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}