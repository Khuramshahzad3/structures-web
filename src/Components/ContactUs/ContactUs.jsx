import React from "react";
import ContactForm from "./ContackForm";
import v2 from "../../assets/v2.mp4";
const ContactUs = () => {
  return (
    <div>
      <div className="">
      <div className="bg-black max-sm:h-[500px]">
            <video
              muted="muted"
              autoPlay={true}
              className="z-10 opacity-40 object-cover w-full h-full 2xl:w-screen"
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
