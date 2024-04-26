import React, { useState } from "react";

// styles
import "./style.css";
import SuccesModal from "../SuccesModal";

const Registration = () => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleSurveyForm = (e) => {
    e.preventDefault();
    setLoader(true);

    let formData = new FormData(e.target); // Use event.target to reference the form
    fetch(
      "https://script.google.com/macros/s/AKfycbw4oHhXyCQZMcp9ebXgGjtLAg9vhWvk38lsRVhZoBWGLCdtmYr0bR-ad6ilwGcQWza4sg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setModal(true);
        e.target.reset();
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <>
      <div className="site-container flex justify-center items-center">
        <div className="w-[50rem] bg-white border-y-[1rem] border-[#F58634] rounded-[1rem] py-[6rem] px-[2rem] shadow-md">
          <h2 className="text-center text-[3rem] font-medium mb-[1rem]">
            Ro'yhatdan o'tish
          </h2>
          <form id="surveyForm" onSubmit={(e) => handleSurveyForm(e)}>
            <label htmlFor="name">Ismingiz:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="To'liq ismingiz"
              required
              className="w-full border mt-[0.5rem] mb-[1.5rem] px-[1.2rem] py-[1rem] outline-none rounded-[0.6rem]"
            />
            <label htmlFor="phoneNumber">Telefon raqamingiz:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Telefon raqamingiz"
              required
              className="w-full border mt-[0.5rem] mb-[1.5rem] px-[1.2rem] py-[1rem] outline-none rounded-[0.6rem]"
            />
            <label htmlFor="course">Kursni tanlang:</label>
            <select
              name="course"
              id="course"
              className="w-full bg-transparent border mt-[0.5rem] mb-[1.5rem] px-[1.2rem] py-[1rem] outline-none rounded-[0.6rem]"
            >
              <option value="Kursni tanlang">Kursni tanlang</option>
              <option value="basic">Basic</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="graphicdesign">Grafik dizayn</option>
            </select>
            <label htmlFor="comment">Izoh:</label>
            <textarea
              name="comment"
              id="comment"
              rows="4"
              cols="50"
              className="w-full h-[50%] bg-transparent border mt-[0.5rem] mb-[1.5rem] px-[1.2rem] py-[1rem] outline-none rounded-[0.6rem]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#F58634] flex justify-center items-center gap-[1rem] text-white w-full py-[1rem] px-[4rem] rounded-[0.6rem] border-none cursor-pointer"
            >
              Yuborish {loader && <span class="loader"></span>}
            </button>
          </form>
        </div>
      </div>
      {modal && <SuccesModal />}
    </>
  );
};

export default Registration;
