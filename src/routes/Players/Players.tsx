import { useSelector } from 'react-redux';
import { useState } from 'react';
import { playersView } from '../../store/playersSlice';
import JeetImage from '../../assets/images/Jeet.png';

const Players = () => {
  const playersList = useSelector(playersView);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;

  interface Player {
    id: number;
    name: string;
    position: string;
    skillRate: number;
  }

  // Pagination Logic
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;

  const currentPlayers = playersList.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer
  );

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  console.log(playersList);

  return (
    <main className='w-full  text-white justify-center items-center flex'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-[-32px]'>
        <div className='flex items-center justify-center py-2  '>
          <input
            type='text'
            className='block p-2 pl-10 text-sm  border  rounded-lg w-80 bg-gray-50'
            placeholder='Search for players'
          />
        </div>
        <div className='flex justify-between px-4 pb-2 border-b'>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <p>{currentPage}</p>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage ===
              Math.floor(playersList.length / playersPerPage) + 1
            }>
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
            {currentPlayers.map((player: Player) => (
              <tr className=' border-b ' key={player.id}>
                <td className='w-4 p-4'></td>
                <th
                  scope='row'
                  className='flex items-center px-6 py-4  whitespace-nowrap '>
                  <img
                    className='w-10 h-10 rounded-full'
                    src={JeetImage}
                    alt='Jese image'
                  />
                  <div className='pl-3'>
                    <p className=' text-base font-semibold'>{player.name}</p>
                  </div>
                </th>
                <td className='px-6 py-4 text-center'>{player.position}</td>
                <td className='px-6 py-4 text-center'>{player.skillRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Players;
