import React from 'react'
import './AdmissionForm.css'

const AdmissionForm = () => {
  return (
    <div className='admision-form'>
        <h2 style={{fontSize:'22px'}}>Ready to find out what sets us apart?</h2>
        <h1 style={{fontSize:'60px',fontWeight:'bold'}}>Start your Application</h1>
   
         <form action="" className='a-form'>
             <label style={{fontSize:'30px',fontWeight:'600'}}>Application Detail</label>

             <div className='wrapper' style={{marginTop:'30px'}}>
          
                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>First Name</label><br />
                <input type="text" required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                <div className="input-field" style={{width:'50%'}}>
                <label>Last Name</label><br />
                <input type="text" required style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                <div className="input-field" style={{width:'100%'}}>
                <label>Email Address</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>

                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Zip code</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>  
                <div className="input-field" style={{width:'50%'}}>
                <label>Phone Number</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>
                
                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Date of Birth</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                <label>Student Type</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>
            
            <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Education Record</h1>
            
            <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>School</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                <label>Year of completion</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Highest Qualification</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                 <label>Current Status</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>
              
              <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Education Details</h1>

                <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Select Area of Study</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                 <label>Degree Level</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                 <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Documentations</h1>
                 <div style={{display:'flex',gap:'20px'}}>
                <div className="input-field" style={{width:'50%'}}>
                <label>Upload CNIC</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>               
                <div className="input-field" style={{width:'50%'}}>
                 <label>Upload CV or Resume</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>
                </div>

                <h1 style={{fontSize:'30px',fontWeight:'600',margin:'20px 0'}}>Additional Details</h1>
                 <div className="input-field" style={{width:'100%'}}>
                 <label>Application Full Name</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>

                 <div className="input-field" style={{width:'100%'}}>
                 <label>Additional Information</label><br />
                <input type="text" style={{width:'100%' ,marginRight:'2%'}} />
                </div>



                 <div className="input-field" style={{width:'100%'}}>
                <input type="checkbox" style={{ marginRight:'2%',marginLeft:'10px',padding:'10px'}} />
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
 )
}

export default AdmissionForm