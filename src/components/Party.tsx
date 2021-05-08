import { usePartyContext } from '../context/party/PartyProvider';
export default function Party() {
  const { partyMessage, parties } = usePartyContext();

  return (
    <div>
      <h1>{partyMessage}</h1>
      <h1>{JSON.stringify(parties)}</h1>
    </div>
  );
}
