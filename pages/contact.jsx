import Content from "../components/Content";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { FiMail, FiPhone, FiHome } from "react-icons/fi";

const defaultCenter = { lat: 40.97037, lng: 29.2013223 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "400px" };
const mapElementStyle = { height: "100%" };

const Contact = () => {
  useEffect(() => {
    return () => {
      function initMap() {
        // The location of Uluru
        const uluru = { lat: 40.97037, lng: 29.2013223 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
    };
  });
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto mt-28 min-h-screen">
        <RegularMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTARcgPmhNN50U5wgc8ynbR-9bMPq94xM"
          loadingElement={<div style={loadingElementStyle} />}
          containerElement={<div style={containerElementStyle} />}
          mapElement={<div style={mapElementStyle} />}
        />
        <div className="flex md:space-x-8 my-8 flex-col-reverse md:flex-row mx-4 md:mx-0">
          <form className="form md:w-3/4 flex flex-col space-y-4">
            <h3 className="text-3xl">Contact Us</h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name and surname"
              className="w-full border-2 border-blue-400 outline-none p-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@domain.com"
              className="w-full border-2 border-blue-400 outline-none p-2 rounded-md"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="your message..."
              className="w-full border-2 border-blue-400 outline-none p-2 rounded-md"
            ></textarea>
            <button className="w-full rounded-md bg-blue-400 hover:bg-blue-500 focus:bg-blue-400 p-2 text-white">
              Submit
            </button>
          </form>
          <div className="informations md:w-1/4 flex flex-col space-y-4 mb-8">
            <h3 className="text-3xl">Contact Info</h3>
            <h5 className="text-lg flex space-x-2 items-center">
              <FiMail />
              <a href="mailto:info@proberlogistics.com">
                info@proberlogistics.com
              </a>
            </h5>
            <h5 className="text-lg flex space-x-2 items-center">
              <FiPhone />
              <a href="tel:0212-123-1212">0212 123 12 12</a>
            </h5>
            <h5 className="text-lg flex space-x-2 items-start">
              <FiHome className="mt-1" />
              <p>
                Büyükbakkalköy Mh. <br /> Samandıra Yolu Sk. <br /> No: 24 34858{" "}
                <br /> Maltepe / İSTANBUL
              </p>
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
