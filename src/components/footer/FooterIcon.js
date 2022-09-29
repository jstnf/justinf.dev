import React from "react";

import footer_data from "../../assets/footer.json";

export const FooterIcon = (props) => {
  return (
    <div className="footer-icon" id={"footer-icon-" + props.id}>
      <a href={footer_data[props.id].url} target="_blank" rel="noreferrer">
        <img src={props.img} alt={props.alt}/>
      </a>
    </div>
  );
}

export default FooterIcon;