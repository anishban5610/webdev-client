export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This long sentence wraps across several lines and overflows the box to show its declared width of 120px and height of 60px.
        </div>
        <div className="wd-dimension-my wd-bg-color-green wd-fg-color-white">
          My Dimension My Dimension My Dimension My Dimension
          My Dimension My Dimension My Dimension My Dimension
          My Dimension My Dimension My Dimension My Dimension
          My Dimension My Dimension My Dimension My Dimension

          </div>
      </div>
    </div>
  );
}
