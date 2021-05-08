import { usePartyContext } from '../context/party/PartyProvider';
import PartyCard from './party/PartyCard';
export default function Party() {
  const { partyMessage, parties } = usePartyContext();

  return (
    <div>
      <h1>{partyMessage}</h1>
      <h1>{JSON.stringify(parties)}</h1>
      <PartyCard imgUrl={parties[0].imgUrl} />
    </div>
  );
}
