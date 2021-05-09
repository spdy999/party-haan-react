import { usePartyContext } from '../context/party/PartyProvider';
import PartyCard from './party/PartyCard';
import { IParty, IPartyUser } from '../context/party/state';
import Typography from '@material-ui/core/Typography';
import { Box, Container, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { RouteComponentProps } from 'react-router';
import { useAppContext } from '../context/AppProvider';
import { useEffect } from 'react';
import { SET_APP_BAR_NAME } from '../context/action-types';

export default function Party(props: RouteComponentProps<any>) {
  const { dispatch: appDispatch } = useAppContext();
  const { state: partyState } = usePartyContext();
  const userId = parseInt(localStorage.getItem('userId') || '0', 10);
  useEffect(() => {
    appDispatch({
      type: SET_APP_BAR_NAME,
      payload: { appBarTitle: 'ปาร์ตี้ทั้งหมด', lastPage: '' },
    });
  }, [appDispatch]);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          onClick={() => {
            props.history.push('/parties/create');
          }}
        >
          <Add />
        </IconButton>
      </Box>
      {partyState.parties.map((party: IParty) => {
        const userJoined = party.partiesUsers.find(
          (pu: IPartyUser) => pu.userId === userId,
        );
        return (
          <PartyCard
            key={party.id}
            party={party}
            userJoined={userJoined ? true : false}
          />
        );
      })}
    </Container>
  );
}
