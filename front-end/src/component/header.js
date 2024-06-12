import React, { useState } from "react";
import axios from "axios";
import "./component_css/header.css";

export default function Header() {
  const [task, settask] = useState("");
  const [date, setdate] = useState("");
  const complete = "uncomplete";

  const handlesubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${window.location.origin}/givingtask`, {
      task,
      date,
      complete,
    });
    settask("");
    setdate("");

    let x = document.getElementsByClassName("link");
    x[0].style.color = "black";
    x[0].style.textDecoration = "solid 10px underline";
    x[1].style.color = "blue";
    x[1].style.textDecorationLine = "none";
    x[2].style.color = "blue";
    x[2].style.textDecorationLine = "none";

    window.location.reload();
  };
  return (
    <>
      <h1 id="heading">To-Do List</h1>

      <form onSubmit={handlesubmit} id="form">
        <input
          type="text"
          placeholder="Type your Task"
          id="text"
          value={task}
          onChange={(evt) => {
            settask(evt.target.value);
          }}
          required
        />
        <input
          type="date"
          id="date"
          value={date}
          onChange={(evt) => {
            setdate(evt.target.value);
          }}
          required
        />
        <button type="submit" id="add">
          Add
        </button>
      </form>

      <div id="links">
        <button className="link def" onClick={alll}>
          All
        </button>
        <button className="link" onClick={pend}>
          Pending
        </button>
        <button className="link" onClick={comp}>
          Complete
        </button>
      </div>
    </>
  );
}

let style = {
  height: "23rem",
  "overflow-y": "auto",
  border: "5px solid yellow",
};

function alll() {
  let x = document.getElementsByClassName("link");
  x[0].style.color = "black";
  x[0].style.textDecoration = "solid 10px underline";
  x[1].style.color = "blue";
  x[1].style.textDecorationLine = "none";
  x[2].style.color = "blue";
  x[2].style.textDecorationLine = "none";

  let main1 = document.getElementById("ma1");
  let main2 = document.getElementById("ma2");
  let main3 = document.getElementById("ma3");

  main1.style.display = "contents";
  main2.style.display = "none";
  main3.style.display = "none";
  main1.style = style;
  main2.style = style;
  main3.style = style;
}
function pend() {
  let x = document.getElementsByClassName("link");
  x[1].style.color = "black";
  x[1].style.textDecoration = "solid 10px underline";
  x[0].style.color = "blue";
  x[0].style.textDecorationLine = "none";
  x[2].style.color = "blue";
  x[2].style.textDecorationLine = "none";

  let main1 = document.getElementById("ma1");
  let main2 = document.getElementById("ma2");
  let main3 = document.getElementById("ma3");

  main1.style.display = "none";
  main2.style.display = "contents";
  main3.style.display = "none";
  main1.style = style;
  main2.style = style;
  main3.style = style;
}
function comp() {
  let x = document.getElementsByClassName("link");
  x[2].style.color = "black";
  x[2].style.textDecoration = "solid 10px underline";
  x[1].style.color = "blue";
  x[1].style.textDecorationLine = "none";
  x[0].style.color = "blue";
  x[0].style.textDecorationLine = "none";

  let main1 = document.getElementById("ma1");
  let main2 = document.getElementById("ma2");
  let main3 = document.getElementById("ma3");

  main1.style.display = "none";
  main2.style.display = "none";
  main3.style.display = "contents";
  main1.style = style;
  main2.style = style;
  main3.style = style;
}
