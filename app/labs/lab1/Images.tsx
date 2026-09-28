export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA00405/PIA00405~orig.jpg"
        width="200px"
        alt="Earth from space"
      />
      <br />
      Loading a picture of Boston's skyline from my personal collection:
      <br />
      <img
        id="wd-your-image"
        src="/images/Boston.jpeg"
        height="400px"
        alt="My first look at Boston from the airplane window as I landed at Logan International Airport."
        />
    </div>
  );
}
