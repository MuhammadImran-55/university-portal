// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import './Counter.css';

// const Counter = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const stats = [
//     { number: 1000, label: 'Subscribers' },
//     // { number: 500, label: 'Videos' },
//     // { number: 120, label: 'Matches Analyzed' },
//     // { number: 80, label: 'Cricket Facts' },
//   ];

//   return (
//     <section className="counter-section" ref={ref}>
//       <div className="counter-container">
//         {stats.map((item, index) => (
//           <div key={index} className="counter-item">
//             {inView && (
//               <h2>
//                 <CountUp end={item.number} duration={2} />
//               </h2>
//             )}
//             <p>{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Counter;





import React, { useEffect, useState } from 'react';
import '../about/About.css'


const AutoCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 50) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
   
    <div  className='counter-container'>
      <span  className='counter'>{count}</span>
      <h1 className='counter-text'>Years of <br /> Experience</h1>
    </div>
  );
};


export default AutoCounter;
