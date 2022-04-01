import React from "react";
import contact1 from "../../images/porjects/contact1.png";
// import {Form, Button} from "react-bootstrap"
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkylroo");

  return (
    <div className="myContainer">
      <header className="block__header">
        <h2>Contact</h2>
        <p>If You Need Some Help, You Can Contact With Us....</p>
      </header>

      <div className="mainContact">
        <div className="contact">
          <div className=" contactImage">
            <img src={contact1} alt="" />
          </div>
          <div className="contactServicer">
            <h4>Faisal Ahamed</h4>
            <p>Chief Operating Officer</p>
            <p>
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <p>
              <span>Phone :</span>+008 1747 332 262
            </p>
            <p>
              <span>Email :</span>souravnath1245@gamil.com
            </p>

            <p>Find With Me</p>
          </div>
        </div>
        <div className="contactFormSection">
          <div className="formSection">
            {state.succeeded ? <p>Thanks For Your Information..</p> : ""}
            <form onSubmit={handleSubmit}>
              <label className="inputText" htmlFor="text">
                Enter Your Name
              </label>
              <br />
              <input className="inputField" id="name" type="text" name="name" />

              <label className="inputText" htmlFor="number">
                Enter Your Number
              </label>
              <br />
              <input
                className="inputField"
                id="mobile"
                type="number"
                name="mobile"
              />
              <br />
              <label className="inputText" htmlFor="email">
                Email Address
              </label>
              <br />
              <input
                className="inputField"
                id="email"
                type="email"
                name="email"
              />
              <br />
              <label className="inputText" htmlFor="subject">
                Subject
              </label>
              <br />
              <input
                className="inputField"
                id="subject"
                type="text"
                name="subject"
              />
              <br />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label className="inputText" htmlFor="subject">
                Type Your Message
              </label>
              <br />
              <textarea
                class="
               form-control
               block
               w-full
               px-3
               py-1.5
               text-xl
               font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
             "
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Your message"
              />
              <br />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="formSubmit text-2xl hover:bg-gray-400 text-black-800 font-bold py-3 px-6 rounded inline-flex items-center my-4"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
