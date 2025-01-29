import AboutImg from '../assets/about.png'

export default function About(){
    return(
        <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 justify-center items-center'>
            <div className='w-full md:w-1/2 py-5'>
                <img src={AboutImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[160px]'>About Me</h1>
                    <p className='pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p className='pb-5'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </section>
    )
}