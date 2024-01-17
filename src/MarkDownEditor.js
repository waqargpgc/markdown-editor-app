import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
const MarkDownEditor = () => {
  const text = `
  # Hello how to used markdown

  #### Emphasis: Italics
  This is *emphasized* _text_. This is very heavily **emphasized** __text__.
  #### Links: Inline with title
  This is an [example link](http://example.com/ "With a Title").

  + One
  - Two
  * Three

  + One
  + Two
  + Three
    - Nested One
    - Nested Two
  `
    const [markdownInput, setMarkdownInput] = useState(text);
  return (
      <>
      <h3 className="text-heading"><a href="https://markdown-guide.readthedocs.io/en/latest/basics.html#lists-nested" target="_blank">Markdown Guide</a></h3>
      <h2 className="text-heading">This should cover 99% of your Markdown needs.</h2>
        <div className="markpage">
          <div className="wrapper">
            <div className="head">MARKDOWN</div>
            <textarea
              autoFocus
              className="textarea"
              value={markdownInput}
              onChange={(e) => setMarkdownInput(e.target.value)}
            ></textarea>
          </div>
          <div className="wrapper">
            <div className="head">LIVE PREIVEW</div>
            <ReactMarkdown>{markdownInput}</ReactMarkdown>
          </div>
        </div>
      </>
  );
};

export default MarkDownEditor;
