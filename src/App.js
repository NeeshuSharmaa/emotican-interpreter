import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Evil Smil Facee",
  "ð": "Smiling Face with Halo",
  "ðĪŠ": "Zany Face",
  "ðĪŦ": "Shushing Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "skyblue" }}>Emoji Interpretor</h1>
      <input onChange={emojiInputHandler} />
      <h4>
        <em>{meaning}</em>
      </h4>
      <h2>emojis we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return <span key={emoji}> {emoji} </span>;
      })}
    </div>
  );
}
