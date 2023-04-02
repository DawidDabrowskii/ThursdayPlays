import { useSelector, useDispatch } from 'react-redux';
import { choosenPlayersView } from '../../../store/choosenPlayersSlice';
import { add, resetPrevTeams } from '../../../store/teamsSlice';
import { reset } from '../../../store/choosenPlayersSlice';
import { teamPlayersView } from '../../../store/teamsSlice';

import { setTeamsAmount } from '../../../store/teamsAmountSlice';

const GenerateBtn = () => {
  const dispatch = useDispatch();
  const choosenPlayersList = useSelector(choosenPlayersView);
  const teamList = useSelector(teamPlayersView);

  const handleGenerateTeam = (teamsAmount: number) => {
    // Reset previous teams
    dispatch(resetPrevTeams(teamList));

    // Set teams to choosen number
    dispatch(setTeamsAmount(teamsAmount));

    // Add choosen players
    dispatch(add(choosenPlayersList));

    // Reset choosen players
    dispatch(reset(choosenPlayersList));
  };

  console.log(teamList);

  return (
    <div className='flex gap-8 mr-8'>
      <button
        onClick={() => handleGenerateTeam(2)}
        className='bg-primary rounded p-2 disabled:bg-gray-500'
        disabled={choosenPlayersList.length < 10}>
        Generate 2 teams
      </button>
      <button
        onClick={() => handleGenerateTeam(3)}
        className='bg-primary rounded p-2 disabled:bg-gray-500'
        disabled={choosenPlayersList.length < 14}>
        Generate 3 teams
      </button>
      <button
        onClick={() => handleGenerateTeam(4)}
        className='bg-primary rounded p-2 disabled:bg-gray-500'
        disabled={choosenPlayersList.length < 17}>
        Generate 4 teams
      </button>
    </div>
  );
};

export default GenerateBtn;
