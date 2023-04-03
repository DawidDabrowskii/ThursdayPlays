import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../../utils/motion';

const TeamTable = ({ title, team }: { title: string; team: any }) => {
  interface Player {
    id: number;
    name: string;
    position: string;
    skillRate: number;
  }

  const calcSkillRate =
    team
      .map((player: Player) => player.skillRate)
      .reduce((acc: number, curr: number) => acc + curr) / team.length;

  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}>
      <motion.div
        variants={fadeIn('up', 'tween', 0.1, 0.7)}
        className='flex flex-col items-center gap-4 mt-12 xl-mt-0 '>
        <h4 className='text-3xl font-semibold border-b-2 shadow-xl'>{title}</h4>
        <ul className='shadow-xl rounded-xl'>
          <h6 className='text-center text-xl shadow-sm'>
            Average Skillrate: {calcSkillRate.toFixed(2)}
          </h6>
          {team.map((player: Player, index: number) => (
            <li
              key={player.id}
              className='flex gap-4 border-t p-6 justify-between  text-xl relative'>
              <p>{index + 1}.</p>
              <p>{player.name}</p>
              <p>{player.position}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TeamTable;
