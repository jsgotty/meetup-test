import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const history = useHistory();

    function goHome() {

      return history.replace('/'); 
    }

  function addMeetupHandler(meetupData) {
   fetch(
     'https://premier-projet-react-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
            'Content-Type': 'application/json'
        },
      }
    ).then(() => {
      goHome()
    });
  }

    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;