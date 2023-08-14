import {
  Accordion,
  AccordionItemButton,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "./../../utils/accordion";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./img/value.png" alt="" />
          </div>
        </div>
        {/* right */}
        <div className="flexColStart v-rigth">
          <h3 className="orangeText">Our Value</h3>
          <h2 className="primaryText">Value We Give to You</h2>
          <p className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </p>
          <Accordion className="accodion" allowMultipleExpanded={false} preExpanded={[0]}>
            <Acc />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

function Acc() {
  return (
    <>
      {data.map((el, i) => {
        return (
          <AccordionItem className={`accordionItem`} key={i} uuid={i}>
            <AccordionItemHeading>
              <AccordionItemButton className="flexCenter accordionButton">
                <div className="flexCenter icon">{el.icon}</div>
                <h2 className="primaryText">{el.heading}</h2>
                <div className="flexCenter icon">
                  <MdOutlineArrowDropDown size={"20px"} />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="secondaryText">{el.detail}</p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </>
  );
}

export default Value;
