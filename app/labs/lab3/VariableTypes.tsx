export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let numberV = 456;
  let stringVar = "Anish";
  let isNum = typeof numberV;
  let isStr = typeof stringVar;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      numberV = {numberV}                         <br />
      stringVar = {stringVar}                     <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      isNum = {isNum}                             <br />
      isStr = {isStr}                             <br />
      sampleCount = {sampleCount}                 <br />
      sampleCountType = {sampleCountType}         <br />
      sampleLabel = {sampleLabel}                 <br />
      sampleLabelType = {sampleLabelType}
      <hr />
    </div>
  );
}
