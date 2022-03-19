import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
  fetch(
    'http://127.0.0.1:8006/meetup'
  )
  return (
    <div>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={DUMMY_DATA} />
      </ul>
    </div>
  );
}

export default AllMeetupsPage;
