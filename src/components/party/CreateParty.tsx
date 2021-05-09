import { RouteComponentProps } from 'react-router';
import { useAppContext } from '../../context/AppProvider';
import { useEffect } from 'react';
import { SET_APP_BAR_NAME } from '../../context/action-types';

const CreateParty = (props: RouteComponentProps<any>) => {
  const { dispatch: appDispatch } = useAppContext();

  useEffect(() => {
    appDispatch({
      type: SET_APP_BAR_NAME,
      payload: { appBarTitle: 'สร้างปาร์ตี้' },
    });
  }, [appDispatch]);
  return <div>Create Party</div>;
};

export default CreateParty;
