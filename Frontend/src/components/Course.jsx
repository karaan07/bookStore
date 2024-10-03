// Inside Course.jsx
import React from 'react';
import list from '/public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-10 item-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl">
            We are delighted that you are <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut velit orci.
            Vivamus vehicula volutpat lacus, id auctor mauris consequat et. Aliquam ultricies magna quis risus semper, ut placerat risus vehicula.
            Nunc eu ipsum finibus, aliquet sem et, condimentum libero. Aliquam hendrerit erat lorem, sit amet semper tellus faucibus eu.
            Morbi vulputate sit amet justo et interdum. Duis justo nibh, tincidunt eu blandit vitae, feugiat vel augue.
          </p>
          <Link to='/'>
         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
         Back
         </button>
         </Link>
        </div>
        <div className= "mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
        </div>
      </div>
    </>
  );
};

export default Course;
