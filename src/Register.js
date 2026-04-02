import React, { useState } from 'react'
import logo from "./logo.svg";
import { Link , useLocation } from 'react-router-dom';

 
const Register = () => {

     
    const location = useLocation();

    const [name ,setName] = useState("");
    const [phone ,setPhone] = useState("");
    const [email ,setEmail]=useState("");
    const [password ,setPassword] = useState("");
    const [passwordR ,setPasswordR] = useState("");
    const [error ,setError] =useState(false);

    

    const handleSubmit=()=>{
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)||password.length<8||password!==passwordR){
            setError(true)
        }
        else{
                setError(false)
        
        }
    }



  return (
    <>
       <div className='logo'>
            <img src={logo} alt='logo'/>
       </div>

       <div className='conteaner'>

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


            <form className='form'>
                <div className='form-1'>
                    <label htmlFor='name'>الاسم كاملاً:</label>
                    <input 
                    id='name'
                     type='text' 
                     placeholder='ادخل الاسم كامل'
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     className={error ? "error-input":""}
                     />
                </div>

                <div className='form-1'>
                    <label htmlFor='phone'>رقم الهاتف:</label>
                    <input 
                    id='phone'
                     type='text' 
                     placeholder='ادخل رقم الهاتف'
                     value={phone}
                     onChange={(e)=>setPhone(e.target.value)}
                     className={error ? "error-input":""}
                     />
                </div>

                <div className='form-1'>
                    <label htmlFor='email'>البريد الإلكترونى:</label>
                    <input id='email'
                     type='email' 
                     placeholder='name@example.com'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     className={error ? "error-input":""}
                     />
                </div>

                <div className='form-1'>
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

                <div className='form-1'>
                    <label htmlFor='passwordR'>تأكيد كلمة المرور:</label>
                    <input 
                    id='passwordR' 
                    type='password' 
                    placeholder='ادخل كلمة المرور مرة آخرى'
                    value={passwordR}
                    onChange={(e)=>setPasswordR(e.target.value)}
                    className={error ? "error-input":""}
                    />
                </div>

            </form>
                 {error && 
                 (<p className='error'>البريد الإلكترونى أو رقم الهاتف أو كلمة المرور غير صالحة</p>
                    )}
             <div className='button' onClick={handleSubmit}>
             <Link>تسجيل دخول</Link>
            </div>
             
       </div>
    </>
  )
}

export default Register
