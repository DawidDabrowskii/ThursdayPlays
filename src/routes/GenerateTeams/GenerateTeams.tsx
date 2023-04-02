import PlayersSelector from '../../components/Other/PlayersSelector/PlayersSelector';
import ChoosenPlayers from '../../components/Other/ChoosenPlayers/ChoosenPlayers';

const GenerateTeams = () => {
  return (
    <main className='flex w-full items-center text-white'>
      <section className='w-full flex flex-col lg:flex-row justify-around mt-16 xl:px-48'>
        <PlayersSelector />
        <ChoosenPlayers />
      </section>
    </main>
  );
};

export default GenerateTeams;
