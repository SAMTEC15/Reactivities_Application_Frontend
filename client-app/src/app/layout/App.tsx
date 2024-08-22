import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import ModelContainer from '../common/form/models/ModelContainer';

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

useEffect(() => {
  if(commonStore.token){
    userStore.getUser().finally(() => commonStore.setAppLoaded())
  }else{
    commonStore.setAppLoaded()
  }
}, [commonStore, userStore])

if(!commonStore.setAppLoaded) return <LoadingComponent content='Loading app...'/>

  return (
    <>
    <ModelContainer/>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}

    </>
  );
}

export default observer(App);
