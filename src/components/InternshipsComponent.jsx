import FrontEnd from "../img/services/FrontEnd.jpeg";
import cloud from "../img/services/cloud.jpg";
import BackendDev from "../img/services/BackendDevelopment.jpeg";
import chatbot from "../img/services/chatbotDevelopment.jpeg";
import DataScience from "../img/services/DataScience.jpeg";
import hack from "../img/services/hack.jpeg";
import logoDesigner from "../img/services/logo-designer-working-computer-desktop.jpg";
import ML from "../img/services/Machine Learning.jpeg";
import marketing from "../img/services/marketing-assistant.jpg";
import mobileApp from "../img/services/Mobile App Developer.jpeg";
import potrait from "../img/services/portrait-woman-customer-service-worker.jpg";
import youngWoman from "../img/services/young-woman-teaching-english-lessons.jpg";

const InternshipsComponent = ({ heading = "Recent Internships", para }) => {
  return (
    <>
      <div className="responsive-container px-5">
        <h1 className="text-black text-2xl sm:text-5xl font-semibold">
          {heading}
        </h1>
        <p className="text-sm sm:text-lg w-1/2">{para ? para : null}</p>
        <div className="main gap-5 w-full m-auto my-10 grid-cols-3 grid">
          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={FrontEnd} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Front End Dev
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={cloud} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Cloud Computing
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={BackendDev} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Back End Dev
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={chatbot} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">Chatbot Dev</h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={DataScience} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Data Scientist
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={hack} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Cyber Security
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={logoDesigner} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Graphic Designing
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={ML} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Machine Learning
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={marketing} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Digital Marketing
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={mobileApp} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Mobile App Dev
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={potrait} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Video Editing
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 my-2 hover:shadow-sm hover:shadow-slate-400 shadow-">
            <div className="uppper-box">
              <img src={youngWoman} alt="" className="rounded-t-3xl" />
            </div>
            <div className="lower-box flex flex-col gap-4 h-1/2 p-4 relative">
              <h2 className="text-black text-3xl font-semibold">
                Technical Writing
              </h2>
              <div className="mini-box flex gap-2 font-thin text-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-geo-alt inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p>Remote</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-clock ml-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p>1 Months</p>
              </div>
              <hr />
              <button className="rounded-3xl text-xl bg-purple-primary text-white hover:bg-green-primary px-4 py-2 w-36 ml-auto">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipsComponent;
