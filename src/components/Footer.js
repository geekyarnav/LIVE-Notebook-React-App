import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      
      <p><a href="https://github.com/geekyarnav">Geekyarnav</a>&nbsp;&nbsp;Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
