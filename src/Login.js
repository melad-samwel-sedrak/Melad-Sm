
import logo from "./logo.svg";
import { Link , useLocation } from 'react-router-dom';
import React, { useState } from 'react'


const Login = () => {

  

  const location = useLocation();

  const [email ,setEmail]=useState("");
  const [password ,setPassword] = useState("");
  const [error ,setError] =useState(false);

  const handleSubmit=()=>{
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)||password.length<8){
            setError(true)
        }
        else{
                setError(false)
        
        }
    }


  return (
    < >
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>

      <div className='conteaner-login'>
            <div className='card'> 
            <h2>مرحباً بك</h2>
            <p>ابدأ بادارة قاعاتك بكل الاحترافية</p>
            </div>


            <div className='register'>
            
                   <div className={`l ${location.pathname === "/" ? "active" : ""}`}>
                        <Link to="/">حساب جديد</Link>
                  </div>
            
                  <div className={`r ${location.pathname === "/login" ? "active" : ""}`}>
                        <Link to="/login">تسجيل الدخول</Link>
                  </div>

            </div>
      <form className="form-login"> 
            <div className='form-l '>
                    <label htmlFor='email'>البريد الإلكترونى:</label>
                    <input id='email'
                     type='email' 
                     placeholder='name@example.com'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     className={error ? "error-input":""}
                     />
              </div>


                <div className='form-l ,form-2'>
                    <label htmlFor='password'>كلمة المرور:</label>
                    <input 
                    id='password'
                    type='password' 
                    placeholder='ادخل كلمة المرور'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className={error ? "error-input":""}
                    />
                  </div>
              
           </form>

              {error && ( <p className='error'>البريد الإلكترونى أو كلمة المرور غير صحيحة</p>)}
              <div className='button' onClick={handleSubmit}>
                    <Link>تسجيل دخول</Link>
              </div>
            
      </div>

    </>
  )
}

export default Login
