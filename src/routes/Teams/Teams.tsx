import { useSelector } from 'react-redux';
import { teamPlayersView } from '../../store/teamsSlice';
import { teamsAmountView } from '../../store/teamsAmountSlice';

const Teams = () => {
  const teamList = useSelector(teamPlayersView);
  const teamsAmount = useSelector(teamsAmountView);

  interface Player {
    id: number;
    name: string;
    position: string;
    skillRate: number;
  }

  // console.log(teamList.filter((_: Player, index: number) => index % 2 === 0));
  // console.log(teamList.filter((_: Player, index: number) => index % 2 !== 0));

  console.log(teamsAmount);
  console.log(teamList);

  return (
    <main className='w-full text-white mt-24'>
      <div className='grid grid-cols-4 '>
        <div className='flex flex-col items-center justify-center shadow-xl gap-4'>
          <h4>Team1</h4>
          <div>Players:</div>
          <ul>{}</ul>
        </div>
        <div className='flex flex-col items-center justify-center shadow-xl gap-4'>
          <h4>Team2</h4>
          <div>Players:</div>
        </div>
        <div className='flex flex-col items-center justify-center shadow-xl gap-4'>
          <h4>Team3</h4>
          <div>Players:</div>
        </div>
        <div className='flex flex-col items-center justify-center shadow-xl gap-4'>
          <h4>Team4</h4>
          <div>Players:</div>
        </div>
      </div>
    </main>
  );
};

export default Teams;
