import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnbc.com%2F2019%2F10%2F05%2Fapple-ceo-steve-jobs-technology-is-nothing-heres-what-it-takes-to-achieve-great-success.html&psig=AOvVaw2r7gkWWqLofCIJAmVHuRgy&ust=1600716731380000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi_ttW8-OsCFQAAAAAdAAAAABAD",
    },
    {
      name: "mark zuckerberg",
      url:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FZmCGGjS0zJgCe7l-2hHOpIDP6ag%3D%2F0x0%3A2040x1360%2F1200x800%2Ffilters%3Afocal(857x517%3A1183x843)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F67419919%2Fnstatt_170418_1624_0052.0.0.jpg&imgrefurl=https%3A%2F%2Fwww.theverge.com%2Finterface%2F2020%2F9%2F16%2F21439741%2Fmark-zuckerberg-facebook-connect-oculus-ar-vr-glasses-quest-apple-watch&tbnid=oaNz9ouxcgwq6M&vet=12ahUKEwiC0fe7vPjrAhUmRFMKHY-CDWEQMygEegUIARDWAQ..i&docid=6PdV6hoAIB-GAM&w=1200&h=800&itg=1&q=mark%20zuckerberg&ved=2ahUKEwiC0fe7vPjrAhUmRFMKHY-CDWEQMygEegUIARDWAQ",
    },
  ]);

  return (
    <div>
      <h1>tinder cards</h1>
      div.tinderCards__cardContainer
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div 
          style={{ backgroundImage: 'url(${person.url})' }}
           className="card"
           >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
