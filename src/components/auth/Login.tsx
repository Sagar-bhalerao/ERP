import { FormEvent, useState } from "react";
import { StoreUserData } from "../../features/auth/auhtSlice"
import { useDispatch } from "react-redux";
import { login } from "../../Services/authApi/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IoPersonCircleOutline } from "react-icons/io5";
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await login(user);
            navigate("/");
            dispatch(StoreUserData({ data: response }));
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    const handleInput = (e: FormEvent) => {
        const { name, value }: any = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    return (
        <div className="hero mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-[60rem] max-w-sm shadow-2xl">
                    <div className="flex justify-center mt-5"> <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-36 rounded-full">
                        <IoPersonCircleOutline  size={47} className="w-full bg-primary dark:text-white" />
                        </div>
                    </div></div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email<span className="text-red-600 ml-1">*</span></span>
                            </label>
                            <input onChange={handleInput} name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password<span className="text-red-600 ml-1">*</span></span>
                            </label>    
                            <input onChange={handleInput} name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <div className="flex justify-around">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label flex justify-end">
                                <Link to="/register" className="label-text-alt link link-hover">Don't have an account?</Link>
                            </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
