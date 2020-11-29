import React from "react";
import PropTypes from "prop-types";
import { Card, ButtonIcon } from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faAirFreshener as faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <div className="rainbow-align-content_space-between">
    <div className="rainbow-flex">
      <ButtonIcon
        icon={<FontAwesomeIcon icon={faHeart} />}
        className="rainbow-m-right_xx-small"
      />
      <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
    </div>
  </div>
);

const GiftGridItem = ({ title, url, small, medium, hideImage }) => {
  let style = { margin: "24px", maxWidth: 600 };
  if (small) {
    style = { margin: "24px", maxWidth: 100 };
  }
  if (medium) {
    style = { margin: "24px", maxWidth: 450 };
  }
  return (
    <Card
      title={title}
      style={{
        // ...style,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className={"card animate__animated animate__fadeIn"}
    >
      <figure>
        {!hideImage && (
          <img style={{ flex: 1, width: "100%" }} src={url} alt={title} />
        )}
        <figcaption>{title}</figcaption>
      </figure>
    </Card>
  );
};
GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  hideImage: PropTypes.bool,
};
GiftGridItem.defaultProps = {
  small: false,
  medium: false,
  hideImage: false,
};
export { GiftGridItem, Footer };
export default GiftGridItem;
