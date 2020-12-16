import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
export default function App() {
  const [draft, setDraft] = React.useState("");

  let words = [];
  let i = 0;

  function sort() {
    if (words.length <= 0) {
      alert("No words to sort! Please update the list.");
    } else {
      if (document.getElementById("radio1").checked) {
        words.sort(
          Intl.Collator(undefined, { numeric: true, sensitivity: "base" })
            .compare
        );
        document.getElementById("out").value = words;
      } else if (document.getElementById("radio2").checked) {
        words
          .sort(
            Intl.Collator(undefined, { numeric: true, sensitivity: "base" })
              .compare
          )
          .reverse();
        document.getElementById("out").value = words;
      } else {
        alert("Pick a sorting option!");
      }
    }
  }

  function reset() {
    document.getElementById("out").value = "";
    document.getElementById("in").value = "";
    document.getElementById("text-input").value = "";
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    words = [];
  }

  function sanitize() {
    if (words.length <= 0) {
      alert("No words to sort! Please update the list.");
    } else {
      //Filter sanitize words
      words = words.filter((word) => word.includes("<script>") !== true);
      words = words.filter((word) => word.includes("<javascript") !== true);
      words = words.filter((word) => word.includes("onLoad") !== true);
      document.getElementById("in").value = words;
    }
  }

  function unique() {
    if (words.length <= 0) {
      alert("No words to sort! Please update the list.");
    } else {
      //Create a set from the words
      words = [...new Set(words)];
      document.getElementById("in").value = words;
    }
  }

  function update(draft) {
    words = draft.split(",");
    for (i in words) {
      words[i] = words[i].split(" ").join("");
    }
    if (draft === "") alert("Input is empty!");
    document.getElementById("in").value = words;
  }

  return (
    <div class="body">
      <h1> Nkoteb's Final</h1>
      <p>
        <b>Instructions:</b> Input as many words as you like seperated by commas
        and press the update list button. You may then sort, sanitize, or make
        inputs unique. Sorting can be done in ascending and descending order!
      </p>
      <p class="warning">
        <b>[Any spaces will be removed automatically.]</b>
      </p>
      <div class="input-add">
        <div class="input-group">
          <textarea
            placeholder="Please Enter Words Here..."
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            type="text"
            id="text-input"
            class="form-control"
          />
          <div class="input-group-append">
            <button
              onClick={() => update(draft)}
              type="button"
              class="btn btn-success"
            >
              Update List
            </button>
          </div>
        </div>
      </div>
      <br />

      <textarea placeholder="Word List" id="in" disabled></textarea>

      <textarea placeholder="Sorted Words" id="out" disabled></textarea>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="radio">
        <input id="radio1" type="radio" value="ascend" name="sort" /> Ascending
        <br />
        <input id="radio2" type="radio" value="descend" name="sort" /> Decending
      </div>

      <br />

      <button id="in" class="btn btn-success" onClick={() => sort()}>
        Sort
      </button>

      <button id="btn-out" class="btn btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <button id="btn-out" class="btn btn-warning" onClick={() => unique()}>
        Unique
      </button>
      <button id="btn-out" class="btn btn-primary" onClick={() => sanitize()}>
        Sanitize
      </button>

      <br />
      <br />
      <br />
      <br />
      <h4> Thank you for a great semester proffessor!</h4>
      <img
        src="https://assets.stickpng.com/images/5845e0f37733c3558233c0e9.png"
        alt="maybe"
      />
      <p class="bottom">
        Nooreldean Koteb<sup>©</sup> 2020. All Rights (NOT) Reserved.....
        maybe.... perhaps
      </p>
    </div>
  );
}
