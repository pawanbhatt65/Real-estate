import React from "react";
import classes from "./Location.module.css";

const Location = () => {
  return (
    <section className={classes.location}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13929.360839051315!2d79.50940478767659!3d29.213545993542567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1646554854803!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;
