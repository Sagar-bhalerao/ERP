import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from "formik"
import * as Yup from "yup";
import { IoEyeOffOutline, IoEyeOutline,  } from "react-icons/io5";
import axios from 'axios';

const Register = () => {
    const [changePass, setPasschange] = useState(true);
    const [changeCPass,setCPasschange] = useState(true)
    const changeIcon = changePass === true ? false : true;
    const changeCIcon = changeCPass === true ? false : true;
    const formik = useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
  
      validationSchema: Yup.object({
        firstname: Yup.string()
          .required("first name is required")
          .matches(/^[a-zA-Z0-9_]+$/, 'Please enter valid first name')
          .min(3, "first name must be at least 3 characters"),
          lastname: Yup.string()
          .required("last name is required")
          .matches(/^[a-zA-Z0-9_]+$/, 'Please enter valid last name')
          .min(3, "last name must be at least 3 characters"),
  
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
  
        phone: Yup.string()
          .required("Phone number is required")
          .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  
  
        password: Yup.string()
          .required('Password is required')
          .min(8, "Password must be at least 8 characters "),
  
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), ], "Password must be match")
          .required("conFirm Password is required"),
  
         
      }),
    
      onSubmit: async(values) => {
        let body = {
          firstname:values.firstname,
          lastname:values.lastname,
          email:values.email,
          phone:values.phone,
          password:values.password,
          // confirmPassword:values.confirmPassword,  
        }
        try{
             const responce =  await axios.post("http://192.168.179.25:5002/sign-up",body);
             if(responce.status === 200){
              alert("User created successfully");
             }
        }catch(error){
          console.log("Error fetching data",error);
        }
        console.log(values);
    
      },
    },)
  
  return (
    <>
    <div className="hero bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-[60rem] max-w-sm shadow-2xl">
      
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={formik.handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label flex">
              <span className="label-text font-semibold text-sm ">Username *</span>
            </label>
            <div className="flex space-x-4">
              <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} name='firstname' id='firstname' placeholder="First Name" className="input input-sm input-bordered w-full" />
              <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} name='lastname' id='lastname' placeholder="Last Name" className="input input-sm input-bordered w-full" />
            </div>
            <div className='flex space-x-4'>
            { formik.errors.firstname && formik.touched.firstname  ? (<div className='text-red-600 text-sm w-full '>{formik.errors.firstname}</div>) : null}
            {formik.touched.lastname && formik.errors.lastname ? (<div className='text-red-600 text-sm w-full  flex justify-end '>{formik.errors.lastname}</div>) : null}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">Email *</span>
            </label>
            <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' id='email' placeholder="email" className="input input-sm input-bordered" />
            {formik.touched.email && formik.errors.email ? (<div className='text-red-600 flex text-sm justify-center'>{formik.errors.email}</div>) : null}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-sm">Mobile No *</span>
            </label>
            <input type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' id='phone' placeholder="Mobile no" className="input input-sm input-bordered" />
            {formik.touched.phone && formik.errors.phone ? (<div className='text-red-600 flex text-sm justify-center '>{formik.errors.phone}</div>) : null}
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-sm">Password *</span>
            </label>
            <input onPaste={(e)=>e.preventDefault()} type={changePass ? "password" : "text"} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password' id='password' placeholder="Password" className="input input-sm input-bordered"  />
            <span className='absolute right-2 top-10 py-1' onClick={() => setPasschange(changeIcon)}  > {changeIcon ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}</span>
            {formik.touched.password && formik.errors.password ? (<div className='text-red-600 flex text-sm justify-center'>{formik.errors.password}</div>) : null}
          </div>


          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-sm"> Confirm Password * </span>
            </label>
            <input onPaste={(e)=>e.preventDefault()}  onChange={formik.handleChange} onBlur={formik.handleBlur} type={changeCPass ? "password" : "text"} name='confirmPassword' id='confirmPassword' placeholder="Confirm Password" className="input input-sm input-bordered"/>
            <span className='absolute right-2 top-10 py-1' onClick={() => setCPasschange(changeCIcon)}  > {changeCIcon ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}</span>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className='text-red-600 flex justify-center'>{formik.errors.confirmPassword}</div>):null}
          </div>

          <div className='flex justify-around'>
            <label className="label ">
              <a href="#" className="label-text-alt link link-hover text-sm">Forgot password?</a>
            </label>
            <label className="label flex justify-end">
              <Link to="/Login" className="label-text-alt link link-hover text-sm">Already have an Account?</Link>
            </label>
          </div>

          <div className="form-control mt-2">
            <button type='submit' className="btn btn-sm btn-primary">Register</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Register;
