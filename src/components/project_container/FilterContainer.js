import React from 'react';

export const FilterContainer = (props) => {
  const [filter, setFilter] = React.useState("Selected");

  function changeFilter(newFilter) {
    setFilter(newFilter);
    props.change_function(newFilter);
  }

  function sortedFilters() {
    let filters = ["Selected"];
    let counts = {};
    // Use the props to determine the most frequent languages
    Object.keys(props.data).forEach((key) => {
      if (!counts[props.data[key].language]) {
        counts[props.data[key].language] = 1;
      } else {
        counts[props.data[key].language]++;
      }
    });

    // Now insert sorted counts into filters array
    Object.keys(counts).sort((a,b) => counts[b] - counts[a]).forEach((key) => filters.push(key));
    return filters;
  };

  return (
    <div className='filter-container'>
      {sortedFilters().map((button_filter) => <FilterButton class={button_filter === filter ? "filter-button-selected" : "filter-button"} language={button_filter} change_function={changeFilter}/>)}
    </div>
  );
}

const FilterButton = (props) => {
  function selectFilter() {
    props.change_function(props.language);
  }
  
  return (
    <div>
      <button className={props.class} onClick={selectFilter}>{props.language}</button>
    </div>
  );
}

export default FilterContainer;