import Timer from '../../components/Other/Timer/Timer';

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
        <Timer />
        <div className='w-[45%] pt-12 flex gap-6 mt-12 justify-center'>
          <button className='bg-primary rounded py-3 px-6  Mont-medium'>
            Participate
          </button>
          <button className='Mont-medium '>Learn more</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
