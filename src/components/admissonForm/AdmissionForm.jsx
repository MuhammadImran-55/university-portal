import React, { useState } from 'react'
import './AdmissionForm.css'
 import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const URL='http://localhost:5000/api/user-register/'

const AdmissionForm = () => {
 
  const navigate=useNavigate();
 const [studentForm, setStudentForm] = useState({
  firstName:'',
  lastName:'',
  email:'',
  dob:'',
  phone:'',
  matricObtain:'',
  matricTotal:'',
  fscObtain:'',
  fscTotal:'',
  department:'',
  duration:'',
  cnic:'',
  password:''
 })

 const changeHandler=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
     
       setStudentForm({
        ...studentForm,
        [name]:value
       })
      }
      const submitHandler=async(e)=>{
        e.preventDefault();
        const response=await fetch(URL,{
          method:'POST',
          body:JSON.stringify(studentForm),
          headers:{"Content-Type":"application/json"}
        })
        if(response.ok){
          toast.success('form submitted successfully');
            setTimeout(() => {
              navigate('/studentDashboard');
            }, 2000);
          setStudentForm({
  firstName:'',
  lastName:'',
  email:'',
  dob:'',
  phone:'',
  matricObtain:'',
  matricTotal:'',
  fscObtain:'',
  fscTotal:'',
  department:'',
  duration:'',
  cnic:'',
  password:''
 })
        }
      }

  return (
    <div className='admision-form'>
      <ToastContainer />
        <h2 style={{fontSize:'22px'}}>Ready to find out what sets us apart?</h2>
        <h1 style={{fontSize:'60px',fontWeight:'bold'}}>Start your Application</h1>
   
         <form onSubmit={submitHandler} className='a-form'>
             <label style={{fontSize:'30px',fontWeight:'600'}}>Application Detail</label>

             <div className='wrapper' style={{marginTop:'30px'}}>
          
                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>First Name</label><br />
                <input type="text" name='firstName' value={studentForm.firstName} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                <div className="input-field" style={{width:'50%'}}>
                <label>Last Name</label><br />
                <input type="text" name='lastName' value={studentForm.lastName} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                <div className="input-field" style={{width:'100%'}}>
                <label>Email Address</label><br />
                <input type="text" name='email' value={studentForm.email} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>

                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Date of Birth</label><br />
                <input type="dob" name='dob' value={studentForm.dob} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>  
                <div className="input-field" style={{width:'50%'}}>
                <label>Phone Number</label><br />
                <input type="text" name='phone' value={studentForm.phone} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>
      
            <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Education Record</h1>
            
            <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Metric Obtain Marks</label><br />
                <input type="number" name='matricObtain' value={studentForm.matricObtain} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                <label>Metric Total Marks</label><br />
                <input type="number" name='matricTotal' value={studentForm.matricTotal} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>FSc/Ics/FA Obtain Marks</label><br />
                <input type="number" name='fscObtain' value={studentForm.fscObtain} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                 <label>FSc/Ics/Fa Total Marks</label><br />
                <input type="text" name='fscTotal' value={studentForm.fscTotal} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>
              
              <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Education Details</h1>

                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Select Area of Study</label><br />
                <select name="department" id="degree" value={studentForm.department} onChange={changeHandler} style={{width:'100%' ,marginRight:'2%'}}>
                  <option value=""></option>
                  <option value="bsse">BS Software Engineering</option>
                  <option value="bscs">BS Computer Science</option>
                  <option value="bsit">BS Information Technology</option>
                  <option value="bsds">BS Data science</option>
                </select>
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                 <label>Degree Level</label><br />
                <input type="text" name='duration' value={FormData.duration} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                 <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Documentations</h1>
                 <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Enter CNIC</label><br />
                <input type="text" name='cnic' value={FormData.cnic} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                 <label>Set Password</label><br />
                <input type="password" name='password' value={FormData.password} onChange={changeHandler} required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                 <div className="input-field" style={{width:'100%'}}>
                <input type="checkbox" required style={{ marginRight:'2%',marginLeft:'10px',padding:'10px'}} />
                 <label style={{fontSize:'14px'}}>By submitting this form, you agree to the Acadia University privacy notice.</label><br />
                </div>
     
             </div>
             <button type='submit' className='form-btn' style={{color:'white',borderRadius:'5px',padding:'20px',margin:'20px',cursor:'pointer',background:'#ab0c2f'}}>Submit Application</button>
         </form>

         {/* <div className="wrapper">
  <div className="header">Header</div>
  <div className="sidebar">Sidebar</div>
  <div className="content">Content</div>
  <div className="footer">Footer</div>
</div> */}
    </div>
 )}

export default AdmissionForm