// import React, { useState } from "react";

// export default function BasicForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const [error, setError] = useState("");

//   function onSubmit(e) {
//     e.preventDefault();
//     e.stopPropagation();

//     fetch("https://formcarry.com/s/4cI93bSJrlV", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, message }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.code === 200) {
//           alert("We received your submission, thank you!");
//         } else if (response.code === 422) {
//           // Field validation failed
//           setError(response.message);
//         } else {
//           // other error from formcarry
//           setError(response.message);
//         }
//       })
//       .catch((error) => {
//         // request related error.
//         setError(error.message ? error.message : error);
//       });
//   }

//   return (
//     <div className="contact-main">
//       <div className="contact-form-container">
//         <form onSubmit={(e) => onSubmit(e)}>
//           <div className="formcarry-block">
//             <input
//               className="name-input form-input"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               id="name"
//               placeholder="Your first and last name"
//             />
//           </div>

//           <div className="formcarry-block">
//             <input
//               className="email-input form-input"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               id="email"
//               placeholder="john@doe.com"
//             />
//           </div>

//           <div className="formcarry-block">
//             <textarea
//               className="message-input form-input"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               id="message"
//               placeholder="Enter your message..."
//             ></textarea>
//           </div>

//           <div className="formcarry-block">
//             <button type="submit" className="btn1">Send</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/4cI93bSJrlV", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");

          // Clear the input fields after successful submission
          setName("");
          setEmail("");
          setMessage("");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="contact-main">
      <div className="contact-form-container">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="formcarry-block">
            <input
              className="name-input form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Your first and last name"
            />
          </div>

          <div className="formcarry-block">
            <input
              className="email-input form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="john@doe.com"
            />
          </div>

          <div className="formcarry-block">
            <textarea
              className="message-input form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              placeholder="Enter your message..."
            ></textarea>
          </div>

          <div className="formcarry-block">
            <button type="submit" className="btn1">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
