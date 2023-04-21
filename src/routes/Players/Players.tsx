import { useSelector } from 'react-redux';
import { useState } from 'react';
import { playersView } from '../../store/reducers/playersSlice';
import AttackerImage from '../../assets/images/bg_2.jpg';
import DefenderImage from '../../assets/images/img_1.jpg';
import GoalKeeperImage from '../../assets/images/img_2.png';
import { ChangeEvent } from 'react';
import { Player } from '../../utils/Types';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';

const Players = () => {
  const playersList = useSelector(playersView);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const playersPerPage = 10;
  const [searchValue, setSearchValue] = useState('');

  // Pagination Logic
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  const currentPlayers = playersList.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer
  );

  // Choose image according to position
  const chooseImage = (position: string) => {
    if (position === 'A') return AttackerImage;
    if (position === 'D') return DefenderImage;
    if (position === 'G') return GoalKeeperImage;
  };

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
    <motion.main
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='w-full  text-white justify-center items-center flex mt-6'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <div className='flex items-center justify-center py-2  '>
          <input
            onChange={handleSearch}
            type='text'
            className='block p-2 pl-4 text-sm  border  rounded-lg w-80 bg-gray-50 text-black'
            placeholder='Search for players'
          />
        </div>
        {searchValue.length > 0 ? (
          // If search input is not empty
          <>
            <div className='flex justify-between px-4 pb-2 border-b '>
              <button
                onClick={handlePrevSearchPage}
                disabled={currentSearchPage === 1}
                className='disabled:text-gray-700'>
                Previous
              </button>
              <p className='text-lg'>{currentSearchPage}</p>
              <button
                onClick={handleNextSearchPage}
                disabled={
                  currentSearchPage ===
                  Math.floor(currentSearchedPlayers.length / playersPerPage) + 1
                }
                className='disabled:text-gray-700'>
                Next
              </button>
            </div>
            <table className='w-full text-sm text-left '>
              <thead className='text-xs  uppercase '>
                <tr>
                  <th scope='col' className='p-4'></th>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Position
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Skillrate
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentSearchedPlayers.map((player: Player) => (
                  <tr className='border-b' key={player.id}>
                    <td className='w-4 p-2'></td>
                    <th
                      scope='row'
                      className='flex items-center px-6 py-3  whitespace-nowrap '>
                      <img
                        className='w-10 h-10 rounded-full'
                        src={chooseImage(player.position)}
                        alt='position logo'
                      />
                      <div className='pl-3'>
                        <p className=' text-base font-semibold'>
                          {player.name}
                        </p>
                      </div>
                    </th>
                    <td className='px-6 py-4 text-center'>{player.position}</td>
                    <td className='px-6 py-4 text-center'>
                      {player.skillRate}
                    </td>
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
                  <th scope='col' className='p-4 '></th>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Position
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Skillrate
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPlayers.map((player: Player) => (
                  <tr className=' border-b ' key={player.id}>
                    <td className='w-4 p-2'></td>
                    <th
                      scope='row'
                      className='flex items-center px-6 py-3  whitespace-nowrap '>
                      <img
                        className='w-10 h-10 rounded-full'
                        src={chooseImage(player.position)}
                        alt='Jese image'
                      />
                      <div className='pl-3'>
                        <p className=' text-base font-semibold'>
                          {player.name}
                        </p>
                      </div>
                    </th>
                    <td className='px-6 py-4 text-center'>{player.position}</td>
                    <td className='px-6 py-4 text-center'>
                      {player.skillRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </motion.div>
    </motion.main>
  );
};

export default Players;
