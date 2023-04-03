import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className='w-full flex items-center selection flex-col gap-12'>
      <div className='w-full flex justify-center text-white text-3xl  mt-24 '>
        <Link
          to='/'
          className='rounded-xl p-2 border border-gray-600 shadow-xl bg-primary hover:scale-105 duration-300'>
          {' '}
          Go Back
        </Link>
      </div>
      <div className='w-full flex justify-center'>
        <h2 className='text-2xl sm:text-5xl text-white border-b'>
          Error 404 - Page Not Found
        </h2>
      </div>
    </main>
  );
};

export default PageNotFound;
