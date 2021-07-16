import { BiArchive } from 'react-icons/bi'

function App() {
  return (
    <div className="App" >
      <h1 style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
        <BiArchive style={{ marginBottom: '0.2rem' }} />Your Appointments
      </h1>
    </div>
  );
}

export default App;
