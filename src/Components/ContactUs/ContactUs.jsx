import React from "react";
import ContactForm from "./ContackForm";
import v2 from "../../assets/v2.mp4";
const ContactUs = () => {
  return (
    <div>
      <div className="">
        <div className="bg-black ">
          <video
            muted="muted"
            autoPlay={true}
            className="z-10 opacity-30 w-screen"
          >
            <source src={v2} type="video/mp4" />
          </video>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
