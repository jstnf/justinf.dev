// https://stackoverflow.com/questions/52447828/is-there-a-way-to-modify-the-page-title-with-react-router-v4
import React from "react";

/* 
 * Component which serves the purpose of a "root route component". 
 */
class Page extends React.Component {
  /**
   * Here, we define a react lifecycle method that gets executed each time 
   * our component is mounted to the DOM, which is exactly what we want in this case
   */
  componentDidMount() {
    document.title = this.props.title;
  }
  
  /**
   * Here, we use a component prop to render 
   * a component, as specified in route configuration
   */
  render() {
    const PageComponent = this.props.component;

    return (
      <PageComponent />
    )
  }
}

export default Page;