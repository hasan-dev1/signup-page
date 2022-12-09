import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [country, setCountry] = useState([]);
    const [alertBorder, setAlerBorder] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`https://restcountries.com/v2/all`)
        .then((res) => res.json())
        .then((data) => setCountry(data));
    }, []);

    const handleform = (e) => {
      e.preventDefault();
      const form = e.target;

      const firstname = form.firstname.value;
      const lastname = form.lastname.value;
      const email = form.email.value;
      const countryname = form.countryname.value;
      const terms = form.terms.checked;
      const privacy = form.privacy.checked;

      const formdata = {
        firstname,
        lastname,
        email,
        countryname,
        terms,
        privacy,
      };
      setAlerBorder(formdata);

      if (!firstname) {
        setAlerBorder(formdata);
        alert("Please enter a valid first name.");
        return
      }
      if (!lastname) {
        setAlerBorder(formdata);
        alert("Please enter a valid last name.");
        return
      }
      if (!email) {
        setAlerBorder(formdata);
        alert("Please enter a valid email name.");
        return
      }
      if (countryname === "country") {
        setAlerBorder(formdata);
        alert("Please enter a valid Country name.");
        return
      }
      if (!terms || !privacy) {
        setAlerBorder(formdata);
        alert("Please Check Terms and Privacy!");
        return 
      }

      navigate('/home')

    };
    return (
      <div className="App">
        <div className="flex text-white h-[100vh]">
          <div className=" w-[424px] bg-[#173B3F]">
            <h3>
              <img
                className="w-1/2 mx-auto mt-[4.5rem] mb-[2rem]"
                src="	https://signup.andela.com/static/andela-logo-white-d18ee5006242e31c929763a5db88a634.png"
                alt=""
              />
              <img
                className="w-[70%] mx-auto"
                src="https://signup.andela.com/static/talent-guy-1-48a0a876998025c9c184a2366f70fcf1.png"
                alt=""
              />
            </h3>
            <div className="mx-2">
              <h3 className="text-neutral text-[32px] my-[1rem] font-serif">
                Reliable Jobs
              </h3>
              <p className="text-[16px] max-w-[22rem] mx-auto font-sen-serife">
                We only work with trusted, vetted companies. Our team works
                globally to eliminate fraud or illegal activity, ensuring the
                jobs you apply for are safe and secure.
              </p>

              <div className="flex justify-center items-center mt-[2rem]">
                <div className="bg-amber-400 p-0 m-1 rounded-full w-[0.5rem] h-[0.5rem]"></div>
                <div className="bg-white p-0 m-1 rounded-full w-[0.375rem] h-[0.375rem]"></div>
                <div className="bg-white p-0 m-1 rounded-full w-[0.375rem] h-[0.375rem]"></div>
                <div className="bg-white p-0 m-1 rounded-full w-[0.375rem] h-[0.375rem]"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="max-w-[45rem] mx-auto flex justify-between mt-[2.175rem] mb-[4rem]">
              <div className="w-full h-[6px] rounded-lg  bg-green-500"></div>
              <div className="w-full h-[6px] rounded-lg  bg-slate-200 mx-1"></div>
              <div className="w-full h-[6px] rounded-lg  bg-slate-200 mx-1"></div>
              <div className="w-full h-[6px] rounded-lg  bg-slate-200 mx-1"></div>
            </div>
            <h3 className="text-accent text-[22px] font-serif leading-8">
              Becoming a{" "}
              <em className="text-green-500">part of our global comunity </em>{" "}
              has <br /> never been easier
            </h3>
            <div className=" max-w-[36.5rem] mx-auto mt-[2rem]">
              <form onSubmit={handleform} className="text-slate-400">
                <div className="text-start relative">
                  <label
                    className=" block text-slate-400 font-semibold mt-[1rem] ml-[0.75rem]"
                    htmlFor="First Name"
                  >
                    First Name
                  </label>
                  <input
                    className={`input input-bordered ${
                      alertBorder.firstname === "" ? "border-red-500" : ""
                    } w-full px-8 py-7 mt-[0.75rem] text-[16px]`}
                    type="text"
                    name="firstname"
                    id=""
                  />
                  <FaUser className="absolute text-slate-200 top-[58px] left-3"></FaUser>
                </div>
                <div className="text-start relative">
                  <label
                    className=" block text-slate-400 font-semibold mt-[1rem] ml-[0.75rem]"
                    htmlFor="Last Name"
                  >
                    Last Name
                  </label>
                  <input
                    className={`input input-bordered ${
                      alertBorder.lastname === "" ? "border-red-500" : ""
                    } w-full px-8 py-7 mt-[0.75rem] text-[16px]`}
                    type="text"
                    name="lastname"
                    id=""
                  />
                  <FaUser className="absolute text-slate-200 top-[58px] left-3"></FaUser>
                </div>
                <div className="text-start relative">
                  <label
                    className=" block text-slate-400 font-semibold mt-[1rem] ml-[0.75rem]"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <input
                    className={`input input-bordered ${
                      alertBorder.email === "" ? "border-red-500" : ""
                    } w-full px-8 py-7 mt-[0.75rem] text-[16px]`}
                    type="text"
                    name="email"
                    id=""
                  />
                  <FaEnvelope className="absolute text-slate-200 top-[58px] left-3"></FaEnvelope>
                </div>
                <div className="text-start relative">
                  <label
                    className="text-slate-400 font-semibold block mt-[1rem] mb-2 ml-[0.75rem]"
                    htmlFor="Country"
                  >
                    Country
                  </label>
                  <select
                    className={`px-8 w-full py-4 border ${
                      alertBorder.countryname !== "country"
                        ? "border-slate-300"
                        : "border-red-600"
                    } rounded-[5px] focus:outline-none`}
                    name="countryname"
                  >
                    <option value={"country"}>Country</option>
                    {country?.map((item, idx) => (
                      <option key={idx}>{item.name}</option>
                    ))}
                  </select>
                  <FaMapMarkerAlt className="absolute text-slate-200 top-[48px] left-3"></FaMapMarkerAlt>
                </div>

                <div className="max-w-[33.5rem] my-[2rem] text-start">
                  <div className="flex items-center justify-start mx-[1rem] text-[12px]">
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      id=""
                    />
                    I agree to Andela's{" "}
                    <a className="text-black" href="/">
                      Terms & Conditions
                    </a>
                  </div>

                  <div className="mx-[1rem] text-[12px] fontchange leading-6">
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="privacy"
                      id=""
                    />
                    I understand that Andela will process my information in
                    accordance with their{" "}
                    <a className="text-black" href="/">
                      Privacy Policy.
                    </a>{" "}
                    I may withdraw my consent through unsubscribe links at any
                    time.
                    <p className="text-red-500 text-[16px]">
                      {!alertBorder.terms === true ||
                      !alertBorder.privacy === true
                        ? "Please check terms and privacy"
                        : ""}
                    </p>
                  </div>
                </div>

                <button className="px-[1rem] py-[0.5rem] bg-green-400 rounded-[48px] text-white font-semibold mt-[2rem] ">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;