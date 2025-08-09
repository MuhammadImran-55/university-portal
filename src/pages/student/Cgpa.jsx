import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";


const Cgpa = () => {

  const cgpaData = [
  { semester: "1st", cgpa: 3.7 },
  { semester: "2nd", cgpa: 3.6 },
  { semester: "3rd", cgpa: 3.5 },
  { semester: "4th", cgpa: 3.3 },
  { semester: "5th", cgpa: 3.36 },
  { semester: "6th", cgpa: 3.4 },
  { semester: "7th", cgpa: 3.5 },
];

  return (
    <div>
         {/* CGPA Chart */}
         <main className="p-6 overflow-auto space-y-6">
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
          </main>        
    </div>
  )
}

export default Cgpa