import { usePartyContext } from '../context/party/PartyProvider';
import PartyCard from './party/PartyCard';
import { IParty } from '../context/party/state';
export default function Party() {
  const { partyMessage, parties } = usePartyContext();

  return (
    <div>
      {parties.map((party: IParty) => (
        <PartyCard key={party.id} imgUrl={party.imgUrl} />
      ))}
    </div>
  );
}
