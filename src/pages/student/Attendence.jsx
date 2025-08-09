import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Attendence = () => {
    const attendanceData = [
  { month: "Jan", attendance: 90 },
  { month: "Feb", attendance: 85 },
  { month: "Mar", attendance: 92 },
  { month: "Apr", attendance: 88 },
  { month: "May", attendance: 94 },
];

  return (
    <div>
         {/* Attendance Chart */}
          <main className="p-6 overflow-auto space-y-6">
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
  )
}

export default Attendence