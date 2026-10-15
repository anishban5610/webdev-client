import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import "./MediaQueriesDemo.css";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This sample paragraph uses the style attribute for a purple background and white text.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow"}}>
        Hey little train we are jumping on, the train that goes through 
        the kingdom. We happy maa, we are having fun, beyond our wildest 
        expectations. 
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph uses its own ID selector for a teal background and white text.
        </p>
        <p id="wd-id-selector-3">
          And here&apos;s a third paragraph using yet another ID and a different look and feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This sample paragraph shares a class with the heading below.
        </p>
        <h4 className="wd-ai-class-selector">
          This sample heading uses the same class as the paragraph above.
        </h4>
        <p className="wd-your-class">
          New Class Selector.
        </p>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific
              styles depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This sample span uses a descendant selector for a navy background and yellow text.
              </span>
              <br />
              <span className="wd-selector-5">
                Another nested element
                <span className="wd-selector-6">
                  This text changes color based on the selector.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <p id="wd-ai-cascade" className="wd-ai-cascade">
        The ID selector wins over the class and tag selectors, giving this sample a red background.
      </p>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <p>
      <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
    </div>
  );
}
