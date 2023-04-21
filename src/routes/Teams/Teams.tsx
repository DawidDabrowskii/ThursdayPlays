import TeamTable from '../../components/Other/TeamTable/TeamTable';
import { useSelector } from 'react-redux';
import { teamPlayersView } from '../../store/reducers/teamsSlice';
import { teamsAmountView } from '../../store/reducers/teamsAmountSlice';
import { CurrentPrice } from '../../constants/Other/Data';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { Player } from '../../utils/Types';

const Teams = () => {
  const teamList = useSelector(teamPlayersView);
  const teamsAmount = useSelector(teamsAmountView);

  let team1: Player[] = [];
  let team2: Player[] = [];
  let team3: Player[] = [];
  let team4: Player[] = [];

  // 2 Teams
  if (teamsAmount === 2) {
    team1 = teamList.filter((_: Player, index: number) => index % 2 === 0);
    team2 = teamList.filter((_: Player, index: number) => index % 2 !== 0);
  }

  // 3 Teams
  if (teamsAmount === 3) {
    [0, 3, 6, 9, 12, 15].forEach(index => {
      if (index < teamList.length) {
        team1.push(teamList[index]);
      }
    });
    [1, 4, 7, 10, 13, 16].forEach(index => {
      if (index < teamList.length) {
        team2.push(teamList[index]);
      }
    });
    [2, 5, 8, 11, 14, 17].forEach(index => {
      if (index < teamList.length) {
        team3.push(teamList[index]);
      }
    });
  }

  // 4 Teams
  if (teamsAmount === 4) {
    [0, 4, 8, 12, 16, 20, 24].forEach(index => {
      if (index < teamList.length) {
        team1.push(teamList[index]);
      }
    });
    [1, 5, 9, 13, 17, 21, 25].forEach(index => {
      if (index < teamList.length) {
        team2.push(teamList[index]);
      }
    });
    [2, 6, 10, 14, 18, 22, 26].forEach(index => {
      if (index < teamList.length) {
        team3.push(teamList[index]);
      }
    });
    [3, 7, 11, 15, 19, 23, 27].forEach(index => {
      if (index < teamList.length) {
        team4.push(teamList[index]);
      }
    });
  }

  return (
    <main className='w-full text-white mt-24 '>
      {teamList.length > 0 && (
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='w-full flex justify-center'>
          <motion.h4
            variants={fadeIn('right', 'tween', 0.2, 0.6)}
            className='border-b text-2xl'>{`Price per player: ${Math.round(
            CurrentPrice / teamList.length
          )}`}</motion.h4>
        </motion.div>
      )}
      {!teamList.length && (
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex justify-center'>
          <motion.h4
            variants={fadeIn('right', 'tween', 0.2, 0.6)}
            className='text-4xl p-4 border-b'>
            There are no teams currently
          </motion.h4>
        </motion.div>
      )}
      {teamsAmount === 2 && (
        <div className='grid sm:grid-cols-2 justify-center '>
          <TeamTable title='Team 1' team={team1} />
          <TeamTable title='Team 2' team={team2} />
        </div>
      )}
      {teamsAmount === 3 && (
        <div className='grid min-[920px]:grid-cols-3 justify-center '>
          <TeamTable title='Team 1' team={team1} />
          <TeamTable title='Team 2' team={team2} />
          <TeamTable title='Team 3' team={team3} />
        </div>
      )}
      {teamsAmount === 4 && (
        <div className='grid md:grid-cols-2 xl:grid-cols-4 justify-center'>
          <TeamTable title='Team 1' team={team1} />
          <TeamTable title='Team 2' team={team2} />
          <TeamTable title='Team 3' team={team3} />
          <TeamTable title='Team 4' team={team4} />
        </div>
      )}
    </main>
  );
};

export default Teams;
