export default function Destructing() {
  const person = { name: "John", age: 25, gender: "Male", city: "Boston" };
  const { name, age, gender, city } = person;
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125; <br /> <br />
      name = {name}     <br />
      age = {age}       <br />
      city = {city}     <br />
      gender = {gender}
      <h3>Array Destructing</h3>
      const [first, second, third] = ["one","two","three"] <br /> <br />
      first = {first}   <br />
      second = {second} <br />
      third = {third}
      <hr />
    </div>
  );
}
