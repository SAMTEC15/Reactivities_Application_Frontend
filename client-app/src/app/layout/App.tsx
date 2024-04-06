import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActvityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false); // Corrected variable name from ssetEditModel to setEditMode

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
    setEditMode(false); // Reset edit mode when selecting an activity
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
    setEditMode(false); // Reset edit mode when cancelling selection
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true); // Set edit mode to true when opening the form
  }

  function handleFormClose() {
    setEditMode(false); // Reset edit mode when closing the form
  }
  function handleCreateOrEditActivity(activity: Activity){
    activity.id ?
     setActivities([...activities.filter(u => u.id !== activity.id), activity])
     : setActivities([...activities, activity]);
     setEditMode(false);
     setSelectedActivity(activity);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActvityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
        />
      </Container>
    </>
  );
}

export default App;
