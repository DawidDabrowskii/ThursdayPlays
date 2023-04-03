import { useSelector, useDispatch } from 'react-redux';
import { choosenPlayersView } from '../../../store/choosenPlayersSlice';
import { remove } from '../../../store/choosenPlayersSlice';
import GenerateBtn from '../GenerateBtn/GenerateBtn';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../../utils/motion';

const ChoosenPlayers = () => {
  const dispatch = useDispatch();
  const choosenPlayersList = useSelector(choosenPlayersView);

  interface Player {
    id: number;
    name: string;
    position: string;
    skillRate: number;
  }

  const handleRemove = (id: number) => {
    dispatch(remove({ id }));
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
        className=' flex flex-col relative p-4 mt-48 lg:mt-0 h-full shadow-xl rounded-lg'>
        <h5 className='text-3xl text-center pb-8'>Choosen Players</h5>
        {choosenPlayersList.length > 0 ? (
          <h6 className='text-2xl text-center pb-8'>
            {`Players: ${choosenPlayersList.length}`}
          </h6>
        ) : (
          ''
        )}
        {choosenPlayersList.length > 0 ? (
          <div className='grid grid-cols-2 gap-4 px-2 '>
            {choosenPlayersList.map((player: Player, index: number) => (
              <div
                className='flex gap-2 justify-between border-b mx-1'
                key={player.id}>
                <p>{index + 1}.</p>
                <p>{player.name}</p>
                <button
                  onClick={() => handleRemove(player.id)}
                  className='bg-primary rounded p-1 text-sm font-semibold mb-1'>
                  Remove
                </button>
              </div>
            ))}
          </div>
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
