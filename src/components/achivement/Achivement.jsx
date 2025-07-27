import {useEffect,useState} from 'react'
import './Achivement.css'


// import bgImage from '../../assets/images/counter-bg.jpg'

const Achivement = () => {

 const [count, setCount] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);
 const [count4, setCount4] = useState(0);


   useEffect(() => {
     const interval = setInterval(() => {
       setCount(prev => {
         if (prev < 10) {
           return prev + 1;
         } 

         return prev;
       });
     }, 100);
 
     const interval2 = setInterval(() => {
       setCount2(prev => {
         if (prev < 40) {
           return prev + 1;
         } 

         return prev;
       });
     }, 100);
 
     const interval3 = setInterval(() => {
       setCount3(prev => {
         if (prev < 300) {
           return prev + 1;
         } 

         return prev;
       });
     }, 10);
 
     const interval4 = setInterval(() => {
       setCount4(prev => {
         if (prev < 3) {
           return prev + 1;
         } 

         return prev;
       });
     }, 1000);
 

     
     return () =>{ clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
     }
   }, []);




  return (
    <div className='counter-bg' style={{border:'1px solid black',width:'80%',height:'240px',margin:'0 auto',
        borderRadius:'15px',display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',padding:'50px',
    }}>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'80px',fontWeight:'500',borderRight:'1px solid grey'}} >{`${count}K`}</div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'80px',fontWeight:'500',borderRight:'1px solid grey'}}>{`${count2}K`}</div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'80px',fontWeight:'500',borderRight:'1px solid grey'}}>{`${count3}K`}</div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'80px',fontWeight:'500',borderRight:'1px solid grey',border:'none'}}>{`${count4}K`}</div>
     
    </div>
  )
}



export default Achivement