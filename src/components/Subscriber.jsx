import { useState } from "react";

export default function Subscriber() {
  const [name, setName] = useState("");

  function onSubscribe(event) {
    event.preventDefault();
    alert(`Hey ${name}! Veggies love you`);
  }

  function onName(event) {
    setName(event.target.value);
  }

  return (
    <div className="subscriber">
      <form onSubmit={onSubscribe}>
        <input value={name} onChange={(event) => onName(event)} />
          <button className="button">Subscribe us</button>
      </form>
    </div>
  );
}
