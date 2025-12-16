import location from "../../assets/location.webp";
import map from "../../assets/wanminMap.png";

import "./contact-styles.css";

export default function contact() {
    const content = document.getElementById('content');

    const about = document.createElement('div');
    let greeting = document.createElement('h2');
    let description = document.createElement('p');

    content.append(about);
    about.append(greeting);
    about.append(description);

    greeting.textContent = "Here where to find us!";
    description.textContent = "We are located at Chihu Rock, Liyue Harbor!";

    // Map
    let locationContainer = document.createElement('div');
    content.append(locationContainer);
    locationContainer.id = "locationContainer";

    let image2 = document.createElement('img');

    locationContainer.append(image2);
    image2.src = map;
    image2.width = 700;

    let image = document.createElement('img');
    locationContainer.append(image);
    image.src = location;
    image.width = 500;


    return;
}