import { Bell, Settings, LogOut } from "lucide-react";
import Cgpa from "./Cgpa";
import Attendence from "./Attendence";
import RoomChecker from "./RoomChecker";
import {
  Menu,
  X,
  BarChart,
  Home,
  FileText,
  MessageSquare,
  // Settings,
  // LogOut,
} from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "../Profile";


const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/attendence" element={<Attendence/>} />
        <Route path="/cgpa" element={<Cgpa/>} />
      </Routes>
      {/* Sidebar */}
      <aside className="w-64 bg-[#8d0000] text-white flex flex-col py-6 px-4 shadow-md">
        <div className="text-center mb-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="Student Avatar"
            className="rounded-full w-24 h-24 mx-auto border-4 border-white"
          />
          <h2 className="mt-4 text-xl font-semibold">Muhammad Imran</h2>
          <p className="text-sm text-crimson-100">Student ID: 2025-CS-001</p>
        </div>
        <nav className="p-4 space-y-4 text-white font-medium">
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <Home size={18} /> Dashboard
          </a>
          <Link to="/profile" className="flex items-center gap-2 hover:text-gray-200">
            <FileText size={18} /> profile
          </Link>
          <Link to="/attendence" className="flex items-center gap-2 hover:text-gray-200">
            <BarChart size={18} /> attendance
          </Link>
          <Link to="/cgpa" className="flex items-center gap-2 hover:text-gray-200">
            <MessageSquare size={18} /> CGPA
          </Link>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <Settings size={18} /> Settings
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-200">
            <LogOut size={18} /> Logout
          </a>
        </nav>
        <button className="mt-6 flex items-center gap-2 px-4 py-2 hover:bg-crimson-700 rounded-md">
          <LogOut size={16} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-crimson">Welcome back, Imran!</h1>
          <div className="flex items-center gap-4">
            <button className="text-crimson hover:text-crimson-700">
              <Bell />
            </button>
            <button className="text-crimson hover:text-crimson-700">
              <Settings />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Application Status */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-crimson">Application Status</h2>
            <p>Your application is <span className="font-bold text-green-600">under review</span>.</p>
          </div>

          {/* Merit List */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-crimson">Merit Result</h2>
            <p>You are <span className="font-bold text-blue-600">Rank #3</span> in Computer Science.</p>
          </div>

          {/* Profile Summary */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2 text-crimson">Profile Summary</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Program:</strong> BSc Computer Science</li>
              <li><strong>Semester:</strong> 5th</li>
              <li><strong>Email:</strong> mimran11600@gmail.com</li>
            </ul>
          </div>
        </div>
          <Profile/>
          <Cgpa/>
          <Attendence/>
          <RoomChecker/>
      </main>
    </div>
  );
};

export default StudentDashboard;
