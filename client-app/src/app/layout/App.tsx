import React, { useEffect} from 'react';
import NavBar from './NavBar';
import ActvityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
activityStore.loadActivities();

  }, [activityStore]);


  
  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
  return (
    <>
      <NavBar  />
      <Container style={{ marginTop: '7em' }}>
        <ActvityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
