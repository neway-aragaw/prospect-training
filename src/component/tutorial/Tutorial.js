import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import './Tutorial.css'; // Import your CSS for styling

const Tutorial = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const history = useNavigate();

  const sections = [
    {
      title: "Security Checkpoint",
      content: (
        <>
          <h2>Security Checkpoint</h2>
          <img className="section-image" src="https://i.redd.it/gch93j50iqlb1.jpg" alt="Security Checkpoint Image" />
          <p>
            Airport security checkpoints are designated areas where passengers and their belongings undergo thorough screening by security personnel. These checkpoints ensure a safe and secure travel experience for everyone by identifying and removing any prohibited items that could pose a threat to the aircraft and passengers.
          </p>
        </>
      )
    },
    {
      title: "Baggage Claim",
      content: (
        <>
          <h2>Baggage Claim</h2>
          <img className="section-image" src="https://bwiairport.com/wp-content/uploads/2022/06/RELEASE-CCA.png" alt="Baggage Claim Image" />
          <p>
            Baggage claim is where passengers retrieve their luggage upon arrival. PSA personnel assist passengers in identifying their baggage carousels, retrieving bags, and providing any necessary aid. Clear signage and procedural knowledge ensure efficient service.
          </p>
        </>
      )
    },
    {
      title: "Lobby",
      content: (
        <>
          <h2>Lobby</h2>
          <img className="section-image" src="https://foxbaltimore.com/resources/media2/16x9/full/1024/center/80/a6522294-94c2-4f69-8a57-3b15191c791d-large16x9_bwisouthwestairlines.png" alt="Lobby Image" />
          <p>
            The airport lobby serves as a hub for passenger arrivals and departures. PSA personnel understand the layout, guiding passengers to designated drop-off points and assisting with directions to check-in counters and security areas. Providing clear information enhances passenger experience.
          </p>
        </>
      )
    },
    {
      title: "Gates",
      content: (
        <>
          <h2>Gates</h2>
          <img className="section-image" src="https://media.bizj.us/view/img/6205421/a-gates-april-2013-2*1200xx3304-2478-394-0.jpg" alt="Gates Image" />
          <p>
            Gates are crucial points where passengers board and disembark from flights. PSA personnel assist passengers in locating their departure gates, providing timely information, and ensuring smooth boarding procedures. Clear communication and gate navigation enhance passenger satisfaction.
          </p>
        </>
      )
    },
    {
      title: "Restroom",
      content: (
        <>
          <h2>Restroom</h2>
          <img className="section-image" src="https://wtop.com/wp-content/uploads/2023/04/Restroom-lobby-April-2023-2-SM-480x320.jpg" alt="Restroom Image" />
          <p>
            Restrooms are essential facilities for passengers' comfort and convenience. PSA personnel ensure restroom facilities are accessible and maintained, assisting passengers with directions and facilities as needed. Clean and well-maintained restrooms contribute to a positive airport experience for passengers.
          </p>
        </>
      )
    },
    {
      title: "Food cort",
      content: (
        <>
          <h2>Food & Beverage Areas</h2>
          <img className="section-image foodimg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/bf/3c/7a/dining-area.jpg?w=1200&h=-1&s=1" alt="Restroom Image" />
          <p>
          Food and beverage areas in an airport include various eateries, cafes, and restaurants offering a range of food and drink options for passengers. These areas often feature fast food outlets, sit-down restaurants, coffee shops, and bars. They are typically located throughout the terminal, both before and after security checkpoints       </p>
        </>
      )
    }
  ];

  const nextSection = () => {
    setCurrentSection(prev => prev + 1);
  };

  const prevSection = () => {
    setCurrentSection(prev => prev - 1);
  };

  const finishTutorial = () => {
    history.push('/next');
  };

  return (
    <div className="tutorial-container">
      {/* Display Current Section */}
      <div className="section">
        <h1>PSA Training at BWI Airport</h1>
        {sections[currentSection].content}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={prevSection} disabled={currentSection === 0}>Previous</button>
        {currentSection === sections.length - 1 ? (
          <button className="finish-button" onClick={finishTutorial}>Finish</button>
        ) : (
          <button onClick={nextSection} disabled={currentSection === sections.length - 1}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Tutorial;
