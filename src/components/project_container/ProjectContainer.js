import React from "react";

import ProjectThumb from "./ProjectThumb";
import FilterContainer from './FilterContainer';

import selected from "../../assets/projects/selected_works.json";

export const ProjectContainer = (props) => {
  const [filter, setFilter] = React.useState("Selected");

  // Changes when modifying the filter
  React.useEffect(() => {
    console.log("Filter => " + filter);
  }, [filter]);

  function isSelected(project_id) {
    if (filter === "Selected") {
      return selected.works.includes(project_id);
    } else {
      return filter === props.data[project_id].language;
    }
  }

  return (
    <div>
      <FilterContainer data={props.data} change_function={setFilter} />
      <div className="project-thumbnail-container">
        {Object.keys(props.data).map((key) => isSelected(key) && <ProjectThumb data={props.data} id={key} />)}
      </div>
    </div>
  );
};

export default ProjectContainer;