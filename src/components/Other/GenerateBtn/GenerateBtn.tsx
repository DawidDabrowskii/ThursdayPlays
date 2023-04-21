import { useSelector, useDispatch } from 'react-redux';
import { choosenPlayersView } from '../../../store/reducers/choosenPlayersSlice';
import { add, resetPrevTeams } from '../../../store/reducers/teamsSlice';
import { reset } from '../../../store/reducers/choosenPlayersSlice';
import { teamPlayersView } from '../../../store/reducers/teamsSlice';

import { useNavigate } from 'react-router-dom';
import { setTeamsAmount } from '../../../store/reducers/teamsAmountSlice';

const GenerateBtn = () => {
  const dispatch = useDispatch();
  const choosenPlayersList = useSelector(choosenPlayersView);
  const teamList = useSelector(teamPlayersView);
  const navigate = useNavigate();

  const handleGenerateTeam = (teamsAmount: number) => {
    // Reset previous teams
    dispatch(resetPrevTeams(teamList));

    // Set teams to choosen number
    dispatch(setTeamsAmount(teamsAmount));

    // Add choosen players
    dispatch(add(choosenPlayersList));

    // Reset choosen players
    dispatch(reset(choosenPlayersList));

    // Navigate to teams tab
    navigate('/teams');
  };

  return (
    <div className='flex gap-8 mr-8'>
      <button
        onClick={() => handleGenerateTeam(2)}
        className='bg-primary rounded p-2 disabled:bg-gray-500 hover:scale-105 duration-300 whitespace-nowrap'
        disabled={choosenPlayersList.length < 10}>
        Generate 2 teams
      </button>
      <button
        onClick={() => handleGenerateTeam(3)}
        className='bg-primary rounded p-2 disabled:bg-gray-500 hover:scale-105 duration-300 whitespace-nowrap'
        disabled={choosenPlayersList.length < 14}>
        Generate 3 teams
      </button>
      <button
        onClick={() => handleGenerateTeam(4)}
        className='bg-primary rounded p-2 disabled:bg-gray-500 hover:scale-105 duration-300 whitespace-nowrap'
        disabled={choosenPlayersList.length < 17}>
        Generate 4 teams
      </button>
    </div>
  );
};

export default GenerateBtn;
