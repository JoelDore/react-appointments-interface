import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  const [apptList, setApptList] = useState([]);
  const [query, setQuery] = useState("");

  const filteredApptList = apptList.filter(
    (item) =>
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
  );

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setApptList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search
        query={query}
        onQueryChange={(currQuery) => setQuery(currQuery)}
      />
      <ul className="divide-y divide-gray-200">
        {filteredApptList.map((appt) => (
          <AppointmentInfo
            key={appt.id}
            appointment={appt}
            onDeleteAppt={(apptId) =>
              setApptList(apptList.filter((appt) => appt.id !== apptId))
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
