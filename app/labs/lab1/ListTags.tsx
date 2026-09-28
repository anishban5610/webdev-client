export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>

      My Favorite Recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Peel and cube 2 potatoes.</li>
        <li>In a bowl add: <ul id="wd-your-favorite-recipe-ingredients">
            <li> Cubed Potatoes</li>
            <li> Salt</li>
            <li> Pepper</li>
            <li> Vegetable Oil</li>
            <li> Paprika</li>
            <li> Cumin Powder</li>
            <li> Corriander Powder</li>
            <li> Red Chilli Powder</li>
            <li> Turmeric Powder</li>
            </ul> </li>
        <li> Mix the ingredients well and rest it for 5 minutes</li>
        <li> Put the marinated potatoes in an air fryer and fry for ~15 minutes depending on the color you prefer</li>
        <li> Mix the potatoes with some fine chopped shallot and lime juice and enjoy!</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your Favorite Books (in no particular order)
      <ul id="wd-your-books">
        <li>The Tortured Poets Department</li>
        <li>Harry Potter and the Prisoner of Azkaban</li>
        <li>Folklore</li>
        </ul>

      <h5>HTML Tags</h5>
      <ul id="wd-ai-html-tags">
        <li>h1 — main page heading</li>
        <li>p — paragraph block</li>
        <li>ol — numbered list</li>
        <li>ul — bulleted list</li>
        <li>table — data grid</li>
        <li>img — embedded image</li>
      </ul>

    </div>
  );
}