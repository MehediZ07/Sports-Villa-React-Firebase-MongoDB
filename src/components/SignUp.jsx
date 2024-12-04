import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createNewUser, setUser, updateUserProfile, handleGoogleLogin } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      toast.error("Follow the requerment!", {
        position: "top-center",
        autoClose: 2000,
      });
      setError({ ...error, name: "name should be more then 5 character" });
      return;
    }
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/;
    if (!passwordValidation.test(password)) {
      toast.error("Follow the requerment!", {
        position: "top-center",
        autoClose: 2000,
      });
      setError({
        ...error,
        password:
          "Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter.",
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success(`Registration Successful!`, {
              position: "top-center",
              autoClose: 2000,
            });
            navigate("/");
          })
          .catch((err) => {
            toast.error("Enter valid email and password!", {
              position: "top-center",
              autoClose: 2000,
            });
            setError({ ...error, err });
          });
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { email, createdAt, name, photo };
        // save new user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user created in db");
            }
          });
      })
      .catch((error) => {
        setError({ ...error, error });
      });
  };

  const handleSubmitGoogle = () => {
    handleGoogleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Extract user information
        const name = user.displayName;
        const email = user.email;
        const createdAt = user?.metadata?.creationTime;
        const lastSignInTime = user?.metadata?.lastSignInTime;

        const loginInfo = { name, email, createdAt, lastSignInTime };

        // Update user information in the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Google sign-in info updated in db", data);
          });

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: "Envalid Email Password!" });
        toast.error("Envalid Email Password!", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex  justify-center items-center mb-12">
      <Helmet>
        <title>{`Register | Career Consult`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10 border-2 border-gray-200 solid">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          {/* email input  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute  top-[3.25rem] right-4 text-gray-500"
              style={{ border: "none", background: "transparent" }}
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          {error.password && (
            <label className="label text-xs text-red-500">
              {error.password}
            </label>
          )}

          <div className="form-control mt-6">
            <button className="btn bg-[#faa2a0] hover:bg-[#f99796] text-white rounded-none">
              Register
            </button>
          </div>
        </form>
        <div className="form-control max-w-lg px-8 -mt-6">
          <button
            className="btn bg-[#bbe6dd] hover:bg-[#b5eade] text-gray-500 rounded-none mb-4"
            onClick={() => {
              handleSubmitGoogle();
            }}
          >
            Google login
          </button>
        </div>
        <p className="text-center font-semibold">
          Allready Have An Account ?{" "}
          <Link className="text-red-500" to="/signin">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
