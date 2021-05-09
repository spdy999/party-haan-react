import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IParty } from '../../context/party/state';
import { usePartyContext } from '../../context/party/PartyProvider';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 140,
    margin: 5,
  },
  media: {
    height: 140,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

interface IPartyCardProps {
  key: any;
  party: IParty;
  userJoined: boolean;
}

const PartyCard = (props: IPartyCardProps) => {
  const { joinParty } = usePartyContext();
  const classes = useStyles();
  const { party, userJoined } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={party.imgUrl}
          title={party.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {party.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" disabled>
          {party.partiesUsers.length}/{party.capacity}
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={party.partiesUsers.length >= party.capacity || userJoined}
          onClick={async () => {
            await joinParty({ partyId: party.id });
          }}
        >
          Join
        </Button>
      </CardActions>
    </Card>
  );
};

export default PartyCard;
