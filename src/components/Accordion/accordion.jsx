import propTypes from "prop-types";
import { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import classNames from "classnames";
import "./accordion.css";
const Accordion = ({ data }) => {
  return (
    <div className="accordion-section">
      {Array.isArray(data) &&
        data.map((d) => (
          <AccordionItem key={d.title} title={d.title} content={d.content} />
        ))}
    </div>
  );
};
Accordion.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({ title: propTypes.string, content: propTypes.string })
  ),
};

const AccordionItem = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  const contentElm = useRef(null);
  return (
    <div className="accordion-item">
      <div
        className={classNames("accordion-title", { active: isActive })}
        role="button"
        onClick={(e) => setActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div className="icon">
          {isActive ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>

      <div
        ref={contentElm}
        className={classNames("accordion-content", { active: isActive })}
        style={{
          height: isActive ? contentElm.current.scrollHeight : "0px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
