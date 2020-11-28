import React from "react";
import PropTypes from "prop-types";
import { Card, ButtonIcon } from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faAirFreshener as faHeart,
} from "@fortawesome/free-solid-svg-icons";

const GiftGridItem = ({ title, url }) => {
  return (
    <>
      <Card
        title={title}
        className="card animate__animated animate__fadeIn"
        footer={
          <div className="rainbow-align-content_space-between">
            <div className="rainbow-flex">
              <ButtonIcon
                icon={<FontAwesomeIcon icon={faHeart} />}
                className="rainbow-m-right_xx-small"
              />
              <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
            </div>
          </div>
        }
      >
        <figure>
          <img style={{ flex: 1 }} src={url} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </Card>
    </>
  );
};
GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GiftGridItem;
