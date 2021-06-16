import React from "react";
//import { useEffect } from "react";
//useState

// Note: `user` comes from the URL, courtesy of our router
const About = ({ user }) => {
  //const [time, setTime] = useState(Date.now());
  //const [count, setCount] = useState(10);
/*
  useEffect(() => {
    let timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
*/
  return (
    <div className="profile">
      <h1 tx="title">About this site</h1>
      <p>
        Welcome to the Glitch React starter, where you can instantly create a{" "}
        React site that's fully customizable.
      </p>
      <p>
        This page is a great spot to tell the world a few details about the new{" "}
        React app you built on Glitch! The content is defined in the router.{" "}
        Check out the <code>readme</code> file to learn more about how to customize it.
      </p>
      <ul>
        <li>
          🎉 Right now, your site is <strong>live on the web</strong> 🌐 with a real URL{" "}
          (a secure HTTPS address!) that updates as soon as you make changes.
        </li>
        <li>
          💥 <strong>Add a domain</strong> to your new Glitch project! Just go to the{" "}
          <strong>Tools</strong> menu in the Glitch editor, and click on "Custom Domains"
        </li>
        <li>
          🌈 Use the <strong>Share</strong> button in the Glitch editor to{" "}
          invite others in to edit your new project by typing in their email or Glitch username.
          <br />
          (<strong>Tip:</strong> 👀 Make your code or your app private to just those you invite, just by{" "}
          <a href="https://glitch.com/pricing">upgrading your Glitch account</a>.)
        </li>
      </ul>
    </div>
  );
};

/*
<p>This is the user profile for a user named {user}.</p>

<div>Current time: {new Date(time).toLocaleString()}</div>

<p>
  <button onClick={() => setCount((count) => count + 1)}>Click Me</button>{" "}
  Clicked {count} times.
</p>
*/

export default About;
