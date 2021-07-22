import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  const [apptList, setApptList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredApptList = apptList
    .filter(
      (item) =>
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      let order = sortOrder === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

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
        sortOrder={sortOrder}
        onSortOrderChange={(mySort) => setSortOrder(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
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
