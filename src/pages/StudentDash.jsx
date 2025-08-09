import {
  Menu,
  X,
  BarChart,
  Home,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const cgpaData = [
  { semester: "1st", cgpa: 3.2 },
  { semester: "2nd", cgpa: 3.4 },
  { semester: "3rd", cgpa: 3.6 },
  { semester: "4th", cgpa: 3.5 },
  { semester: "5th", cgpa: 3.7 },
];

const attendanceData = [
  { month: "Jan", attendance: 90 },
  { month: "Feb", attendance: 85 },
  { month: "Mar", attendance: 92 },
  { month: "Apr", attendance: 88 },
  { month: "May", attendance: 94 },
];

export default function StudentDash() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#8d0000] text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="p-6 border-b border-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Student Panel</h2>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="p-4 space-y-4 text-white font-medium">
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <Home size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <FileText size={18} /> Application
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <BarChart size={18} /> Merit List
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <MessageSquare size={18} /> Messages
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <Settings size={18} /> Settings
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <LogOut size={18} /> Logout
          </a>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Top bar */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <button className="md:hidden text-crimson" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <h1 className="text-xl font-bold text-crimson">Welcome, Imran!</h1>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-crimson"
          />
        </header>

        {/* Main content */}
        <main className="p-6 overflow-auto space-y-6">
          {/* CGPA Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-crimson mb-4">CGPA Progress</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={cgpaData}>
                <Line type="monotone" dataKey="cgpa" stroke="#DC143C" strokeWidth={3} />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="semester" />
                <YAxis domain={[0, 4]} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-crimson mb-4">Monthly Attendance</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={attendanceData}>
                <Line type="monotone" dataKey="attendance" stroke="#DC143C" strokeWidth={3} />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}
