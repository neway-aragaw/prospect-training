import React from 'react';
import { Link } from 'react-router-dom';

function Agate() {
  return (
    <div className="domestic-from-lobby">  {/* Consider using "agate-instructions" */}
      <h2>Domestic Flights - From A gate to baggage claim</h2>
      <p>
        {/* Replace with instructions for starting from the lobby */}
        Here are the instructions for starting your domestic flight journey from the lobby.
        <br />
        1. When you arrive at the gate, make sure you have scanned the gate as shown in the following picture.
        <br />
        <img
          src="./IMG_8405.JPG"
          alt="Scanning the Gate"
          style={{ maxWidth: '60vw'}}  />
        <br />
        2. When the plane arrives and passengers disembark, please welcome them and ask their names. Start a service on the tablet and ask if they need to use the restroom.
        <br />
        3. To go to baggage claim, follow the green signs.
        <br />
        <img
          src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/37607838_1553404471430267_3114863484542648320_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R0s85F4VVHwQ7kNvgEqP6dn&_nc_ht=scontent-iad3-2.xx&oh=00_AYDWBfluxwD6UC0Jb2SYL0W0wYW699GhNxj8QFIsTwWl5A&oe=669BF85D"
          alt=""
          style={{ maxWidth: '80vw' }}   />
        Once you arrive, look on the screen to find where the baggage will be coming out.
        <br />
        4. After assisting them, ask them to sign on the tablet and rate your customer service. Then, finish the service. (It's advisable to bring the wheelchair back to the lobby after finishing the service.)
      </p>
      <nav className="navigation">
        <Link to="/">
          <button className="home-button">Home Page</button>
        </Link>
      </nav>
    </div>
  );
}

export default Agate;
