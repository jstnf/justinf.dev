import React from "react";

export const ProjectThumb = (props) => {
  return (
    <div><p>{props.data[props.id].name}</p></div>
  );
};

export default ProjectThumb;