import { usePartyContext } from '../context/party/PartyProvider';
import PartyCard from './party/PartyCard';
import { IParty } from '../context/party/state';
import Typography from '@material-ui/core/Typography';
export default function Party() {
  const { state } = usePartyContext();

  return (
    <div>
      <Typography variant="h6">ปาร์ตี้ทั้งหมด</Typography>
      {state.parties.map((party: IParty) => (
        <PartyCard key={party.id} party={party} />
      ))}
    </div>
  );
}
