import React from "react";
import gradients from "../styles/customGradient.module.css";
import cool from "../styles/track.module.css";

const Sponsor = () => {
  return (
    <div className={`py-20 ${gradients.homePage} text-black`}>
      <div className="mt-6 p-2">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold">
          <span className="border-b-4 border-orange-400 pb-2 px-2 md:px-8">
            Welcome Message
          </span>
        </h2>
        <div className="p-2 pt-8 lg:text-lg lg:px-16">
          <p className="text-justify">
            The IEEE International Conference on Microwave, Antenna, and
            Communications (MAC 2024) is a premier 3-days event bringing
            together nearly 1,000 researchers, engineers, and industry leaders
            from around the world to exchange knowledge, share insights, and
            explore the latest advancements in microwave engineering, antenna
            technologies, and communication systems. MAC 2024 expects
            participation from various countries along with Indian organizations
            like ISRO, BARC, DRDO, CSIR, DST-SERB, IPR, and academic institutes
            like IISc, IITs, NITs, IIITs, etc.
          </p>
          <br />
          <p className="text-justify">
            MAC 2024 provides an ideal platform to showcase state-of-the-art
            technologies, measurement facilities, and modeling tools available
            in the Microwave, Antenna, and Communications industries. This
            international event offers an outstanding opportunity for companies
            to exhibit their products/services and applications to a vibrant and
            engaged audience, providing access to hundreds of key
            decision-makers.
          </p>
          <br />
          <p className="text-justify">
            On behalf of the Executive Committee of MAC 2024, it is my great
            pleasure to invite you to be a valued sponsor at the event. We
            believe that your organisation has the expertise and resources to
            make a significant contribution to the success of MAC 2024.
          </p>
          <br />
          <p className="text-justify">
            We offer a variety of sponsorship levels, including{" "}
            <span className="font-semibold">
              Spotlight, Diamond, Platinum, Gold, Silver, and Start-UPs
            </span>{" "}
            tiers. Each level provides unique benefits tailored to your specific
            marketing objectives.
          </p>
          <br />
          <p className="text-center italic">
            Looking forward to seeing you in the MAC 2024, at Dehradun.
          </p>
        </div>
      </div>

      <div className="mt-6 p-2">
        <h1 className="font-extrabold text-2xl md:text-3xl text-center">
          <span className=" border-b-4 border-blue-800 px-0 md:px-8 pb-2">
            Level Of <span className="text-blue-800">Sponsorships</span>
          </span>
        </h1>

        <div className="lg:px-16 flex flex-col items-center">
          <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
            <h2 className="text-xl lg:text-2xl font-bold p-2">
              <span className="text-blue-800">Signature</span> sponsor:{" "}
              <span className="text-blue-800">INR 5.0 Lakh</span>
            </h2>
            <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
              <li>10 Complimentary delegate passes</li>
              <li>
                20 minutes Banquet Keynote presentation slot and 1 Hour Workshop
                Slot
              </li>
              <li>
                Acknowledgement during Inaugural, Awards, Banquet and
                Valedictory functions
              </li>
              <li>Complimentary exhibit booths at Ultra Prime Location</li>
              <li>
                Prominent display of logo on all printed material, backdrop and
                website
              </li>
              <li>Permission to keep Company brochure in registration Kit</li>
            </ul>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8 justify-between">
            <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span className="text-blue-800">Diamond</span> sponsor:{" "}
                <span className="text-blue-800">INR 3.0 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>5 Complimentary delegate passes</li>
                <li>15 minutes presentation slot</li>
                <li>Acknowledgement during Awards and Valedictory functions</li>
                <li>Complimentary exhibit booths at Prime Location</li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>

            <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span className="text-blue-800">Platinum</span> sponsor:{" "}
                <span className="text-blue-800">INR 2 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>4 Complimentary delegate passes</li>
                <li>10 minutes presentation slot</li>
                <li>Acknowledgement during Awards and Valedictory functions</li>
                <li>2 Complimentary exhibit booths at Prime Location</li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8 justify-between">
            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span className="text-blue-800">Gold</span> sponsor:{" "}
                <span className="text-blue-800">INR 1.5 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>3 Complimentary delegate passes</li>
                <li>5 minutes presentation slot</li>
                <li>Acknowledgement during Awards and Valedictory functions</li>
                <li>Complimentary exhibit booths </li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>

            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span className="text-blue-800">Silver/Start-Ups</span> sponsor:{" "}
                <span className="text-blue-800">INR 1.0 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>2 Complimentary delegate passes</li>
                <li>2 minutes pre-recorded video presentation slot</li>
                <li>Acknowledgement during Valedictory functions</li>
                <li>Complimentary exhibit booth</li>
                <li>Display of logo on all printed material and website</li>
                <li>Permission to keep Company brochure in registration Kit</li>
                <li>
                  15-minute Interaction Session slot especially for Start-Ups
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
