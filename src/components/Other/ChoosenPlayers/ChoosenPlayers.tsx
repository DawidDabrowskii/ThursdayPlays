import { useSelector, useDispatch } from 'react-redux';
import { choosenPlayersView } from '../../../store/reducers/choosenPlayersSlice';
import { remove, reset } from '../../../store/reducers/choosenPlayersSlice';
import GenerateBtn from '../GenerateBtn/GenerateBtn';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../../utils/motion';
import { Player } from '../../../utils/Types';

const ChoosenPlayers = () => {
  const dispatch = useDispatch();
  const choosenPlayersList = useSelector(choosenPlayersView);

  const handleRemove = (id: number) => {
    dispatch(remove({ id }));
  };

  const handleRemoveAll = () => {
    dispatch(reset(choosenPlayersList));
  };

  return (
    <motion.div
      className='min-h-[581px] '
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.6)}
        className=' flex flex-col relative p-4 mt-48 lg:mt-0 h-full shadow-xl rounded-lg min-w-[542px]'>
        <h5 className='text-3xl text-center pb-8'>Choosen Players</h5>
        {choosenPlayersList.length > 0 ? (
          <h6 className='text-2xl text-center '>
            {`Players: ${choosenPlayersList.length}`}
          </h6>
        ) : (
          ''
        )}
        {choosenPlayersList.length > 0 ? (
          <>
            <div className='flex justify-end'>
              <button
                onClick={handleRemoveAll}
                className='px-2 py-1 font-semibold bg-primary rounded text-lg mb-6 hover:scale-105 duration-300'>
                Clear All
              </button>
            </div>
            <div className='grid grid-cols-2 gap-4 px-2 '>
              {choosenPlayersList.map((player: Player, index: number) => (
                <div
                  className='flex gap-2 justify-between border-b mx-1'
                  key={player.id}>
                  <p>{index + 1}.</p>
                  <p>{player.name}</p>
                  <button
                    onClick={() => handleRemove(player.id)}
                    className='border-2 bg-gray-800 border-primary rounded-md p-1 text-sm font-semibold mb-1 hover:scale-105 duration-300'>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h4 className='text-center'>Currently no added players</h4>
          </>
        )}
        <div className='absolute bottom-[-5rem] flex justify-center items-center w-full p-2 '>
          <GenerateBtn />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChoosenPlayers;
