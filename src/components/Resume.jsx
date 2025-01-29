import ResumeImg from '../assets/resume.jpg'

export default function Resume(){
    return(
        <section id='resume' className='flex flex-row bg-secondary px-5 justify-center items-center'>
            <div className='w-1/3 py-5 flex justify-center'>
                <img className='w-[300px]' src={ResumeImg}/>
            </div>
            <div className='w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[130px]'>Resume</h1>
                    <p className='md:pb-5'>Check out my resume. <a className='btn' href='#'>Download</a> </p>
                </div>
            </div>
        </section>
    )
}