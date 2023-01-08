import React from 'react';
import course from '../../../assets/course.jpg'

const Course = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500  text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Course</h1>
                </div>
            <div className="hero mt-10">
  <div className="hero-content gap-40 flex-col lg:flex-row-reverse">
    <img src={course} className="max-h-[400px] rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-4xl font-bold">About Course</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam<br/> facere at quo eos tempore unde delectus tempora nostrum impedit<br/> incidunt, beatae, ipsam sit ea error corrupti iste<br/><br/> rerum, consectetur earum voluptates provident cupiditate. Amet blanditiis<br/>facere at quo eos tempore unde delectus tempora nostrum impedit<br/> velit exercitationem quos consequatur nostrum?</p>
      <button className="btn btn-accent text-white">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;