export interface IPartyUser {
  id: number;
}
export interface IParty {
  capacity: number;
  id: number;
  imgUrl: string;
  name: string;
  partiesUsers: IPartyUser[];
}

export interface IPartyState {
  parties: IParty[];
  partyMessage: string;
}

const partyInitialState: IPartyState = {
  parties: [],
  partyMessage: 'Party msg initial state!',
};

export default partyInitialState;
