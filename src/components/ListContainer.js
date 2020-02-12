import React from "react";
import { getImages } from "../store/images/action";
import { connect } from "react-redux";
import List from "./List";
class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    return (
      <ul>
        {this.props.images &&
          this.props.user &&
          this.props.images.map(currentImage => {
            return (
              <List
                key={currentImage.id}
                title={currentImage.title}
                url={currentImage.url}
              />
            );
          })}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
