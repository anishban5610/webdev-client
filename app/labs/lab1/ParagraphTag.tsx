export default function ParagraphTag() {
  return (
  <div id="wd-p-tag">
    <h4>Paragraph Tag</h4>
    <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
    </p>
    <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
    </p>
    <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
    </p>
    <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
    </p>
    <p id="wd-ai-p">
        Wrapping text in a paragraph tag gives each block its own vertical spacing,
        so the browser renders separate lines of content instead of a single flowing block.
    </p>
    <p id="wd-p-your-1">
        I am from Kolkata, India. My city is known as the "City of Joy" and is famous 
        for its rich cultural heritage, literature, and art. My favorite time of the year
        is the Durga Puja festival, which is recognized as a UNESCO Intangible Cultural Heritage of Humanity. 
    </p>
    <p id="wd-p-your-2">
        From CS 5610 I hope to hone my skills in web development and gain practical experience in building modern web applications.
        I am especially looking forward to learning about front-end development since it is my weakest area. 
    </p>

    </div>
  );
}