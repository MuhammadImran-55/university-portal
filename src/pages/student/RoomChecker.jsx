import { useState } from "react";

// Sample room timetable
const timetable = {
  Room1: [
    { start: "08:30", end: "10:00" },
    { start: "13:00", end: "14:30" },
  ],
  Room2: [
    { start: "09:00", end: "10:30" },
    { start: "15:00", end: "16:30" },
  ],
  Room3: [
    { start: "11:00", end: "12:30" },
    { start: "16:00", end: "17:30" },
  ],
  Room4: [
    { start: "08:30", end: "10:00" },
    { start: "14:30", end: "16:00" },
  ],
  Room5: [],
};

// Utility: convert HH:MM string to total minutes
const timeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
};

const RoomChecker = () => {
  const [time, setTime] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);

  const checkAvailability = () => {
    if (!time) return; // prevent empty input

    const userTime = timeToMinutes(time);
    const freeRooms = [];

    Object.entries(timetable).forEach(([room, slots]) => {
      const isBusy = slots.some(({ start, end }) => {
        const startMin = timeToMinutes(start);
        const endMin = timeToMinutes(end);
        return userTime >= startMin && userTime < endMin;
      });

      if (!isBusy) {
        freeRooms.push(room);
      }
    });

    setAvailableRooms(freeRooms);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold text-crimson mb-4">Room Availability Checker</h2>

      <label className="block mb-2 text-gray-700">Enter desired time:</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />

      <button
        onClick={checkAvailability}
        className="bg-crimson text-white px-4 py-2 rounded hover:bg-crimson-700 transition"
      >
        Check Availability
      </button>

      {time && (
        <div className="mt-6">
          {availableRooms.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold text-green-600">Available Rooms at {time}:</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-800">
                {availableRooms.map((room) => (
                  <li key={room}>{room}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-red-600">No rooms are free at {time}.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RoomChecker;
