const Home = () => {
  return (
    <main className='w-full  text-white'>
      <div className='h-[60%] w-full lg:w-[80%] mx-auto flex flex-col items-center xl:items-end justify-center mt-32 '>
        <div className='lg:w-[40%] flex flex-col justify-center items-center'>
          <h2 className='text-6xl font-extrabold whitespace-nowrap'>
            Thursday Plays
          </h2>
          <p className='p-4 '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            omnis saepe commodi, magnam ex accusantium, distinctio quam
            voluptates veritatis ipsum quisquam sint tempora! Commodi, sunt.
          </p>
        </div>
        <div className='flex justify-center w-[45%] Mont-bold text-3xl mt-8'>
          <p>Till next match:</p>
        </div>
        <div className='flex text-xl w-[45%] mt-12 justify-center gap-16'>
          <div className='flex flex-col items-center'>
            <p className='text-3xl Mont-medium'>1</p>
            <p className='text-sm'>days</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-3xl Mont-medium'>10</p>
            <p className='text-sm'>hr</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-3xl Mont-medium'>15</p>
            <p className='text-sm'>min</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-3xl Mont-medium'>35</p>
            <p className='text-sm'>sec</p>
          </div>
        </div>
        <div className='w-[45%] pt-12 flex gap-6 mt-12 justify-center'>
          <button className='bg-[#ee1e46] rounded py-3 px-6  Mont-medium'>
            Participate
          </button>
          <button className='Mont-medium '>Learn more</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
