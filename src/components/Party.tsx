import { usePartyContext } from '../context/party/PartyProvider';
import PartyCard from './party/PartyCard';
import { IParty } from '../context/party/state';
import Typography from '@material-ui/core/Typography';
import { Box, Container, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
export default function Party() {
  const { state } = usePartyContext();

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">ปาร์ตี้ทั้งหมด</Typography>
        <IconButton
          onClick={() => {
            alert('click!');
          }}
        >
          <Add />
        </IconButton>
      </Box>
      {state.parties.map((party: IParty) => (
        <PartyCard key={party.id} party={party} />
      ))}
    </Container>
  );
}
