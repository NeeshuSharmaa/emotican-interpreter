import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "🙂": "Evil Smil Facee",
  "😇": "Smiling Face with Halo",
  "🤪": "Zany Face",
  "🤫": "Shushing Face"
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
