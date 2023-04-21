import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from '../../../store/reducers/choosenPlayersSlice';
import { playersView } from '../../../store/reducers/playersSlice';
import { choosenPlayersView } from '../../../store/reducers/choosenPlayersSlice';
import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../../utils/motion';
import { Player } from '../../../utils/Types';

const PlayersSelector = () => {
  const dispatch = useDispatch();
  const playersList = useSelector(playersView);
  const choosenPlayersList = useSelector(choosenPlayersView);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const playersPerPage = 10;
  const [searchValue, setSearchValue] = useState('');

  // Remove player from possible choices if he is already added
  const choosenIDs = choosenPlayersList.map((player: Player) => player.id);
  const handleAddDisable = (id: number) => {
    return choosenIDs.some((choosenIDs: number) => choosenIDs === id);
  };
  // Add to present logic
  const handleAdd = (id: number) => {
    const choosenPlayer = playersList.filter(
      (player: Player) => player.id === id
    );
    dispatch(add(choosenPlayer));
  };

  // Pagination Logic
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  const currentPlayers = playersList.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer
  );

  // Moving between pages logic
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNextSearchPage = () => {
    setCurrentSearchPage(currentSearchPage + 1);
  };
  const handlePrevSearchPage = () => {
    setCurrentSearchPage(currentSearchPage - 1);
  };

  // Search logic
  const searchedPlayers = playersList.filter(({ name }: { name: string }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  // Search pagination Logic
  const indexOfLastSearchedPlayer = currentSearchPage * playersPerPage;
  const indexOfFirstSearchedPlayer = indexOfLastSearchedPlayer - playersPerPage;

  const currentSearchedPlayers = searchedPlayers.slice(
    indexOfFirstSearchedPlayer,
    indexOfLastSearchedPlayer
  );

  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='  text-white items-center flex justify-center '>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        className='relative overflow-x-auto shadow-xl sm:rounded-lg mt-4'>
        <div className='flex items-center justify-center py-2  '>
          <input
            onChange={handleSearch}
            type='text'
            className='block p-2 pl-4 text-sm  border  rounded-lg w-80 bg-gray-50 text-black '
            placeholder='Search for players'
          />
        </div>
        {searchValue.length > 0 ? (
          // If search input is not empty
          <>
            <div className='flex justify-between px-4 pb-2 border-b'>
              <button
                onClick={handlePrevSearchPage}
                disabled={currentSearchPage === 1}
                className='disabled:text-gray-700 hover:scale-105 duration-300'>
                Previous
              </button>
              <p className='text-lg '>{currentSearchPage}</p>
              <button
                onClick={handleNextSearchPage}
                disabled={
                  currentSearchPage ===
                  Math.floor(currentSearchedPlayers.length / playersPerPage) + 1
                }
                className='disabled:text-gray-700 hover:scale-105 duration-300'>
                Next
              </button>
            </div>
            <table className='w-full text-sm text-left '>
              <thead className='text-xs  uppercase '>
                <tr>
                  <th scope='col' className='px-2 py-1'>
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentSearchedPlayers.map((player: Player) => (
                  <tr className=' border-b ' key={player.id}>
                    <th
                      scope='row'
                      className='flex justify-between items-center px-2 py-1  whitespace-nowrap '>
                      <div className='pl-3'>
                        <p className=' text-base font-semibold'>
                          {player.name}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleAdd(player.id)}
                          className='bg-green-700 p-1 rounded hover:scale-105 duration-200 disabled:bg-gray-700 disabled:hover:scale-100 disabled:duration-0'
                          disabled={handleAddDisable(player.id)}>
                          {handleAddDisable(player.id) ? 'Added' : 'Add'}
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          // If search input is empty
          <>
            <div className='flex justify-between px-4 pb-2 border-b'>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className='disabled:text-gray-700 hover:scale-105 duration-300'>
                Previous
              </button>
              <p className='text-lg'>{currentPage}</p>
              <button
                onClick={handleNextPage}
                disabled={
                  currentPage ===
                  Math.floor(playersList.length / playersPerPage) + 1
                }
                className='disabled:text-gray-700 hover:scale-105 duration-300'>
                Next
              </button>
            </div>
            <table className='w-full text-sm text-left '>
              <thead className='text-xs  uppercase '>
                <tr>
                  <th scope='col' className='px-2 py-1'>
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPlayers.map((player: Player) => (
                  <tr className=' border-b ' key={player.id}>
                    <th
                      scope='row'
                      className='flex justify-between items-center px-2 py-2  whitespace-nowrap '>
                      <div className='pl-3'>
                        <p className=' text-base font-semibold'>
                          {player.name}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleAdd(player.id)}
                          className='bg-green-700 p-1 rounded hover:scale-105 duration-200 disabled:bg-gray-700 disabled:hover:scale-100 disabled:duration-0'
                          disabled={handleAddDisable(player.id)}>
                          {handleAddDisable(player.id) ? 'Added' : 'Add'}
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PlayersSelector;
