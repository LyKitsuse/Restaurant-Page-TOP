import xiangling from "../../assets/Xiangling.webp"
import "./home-styles.css"

export default function home() {
    const content = document.getElementById('content');

    const about = document.createElement('div');
    let container = document.createElement('div');
    let greeting = document.createElement('h2');
    let description = document.createElement('span');
    let image = document.createElement('img');

    about.id = 'about';
    greeting.id = 'greeting';
    description.id = 'description';
    container.id = 'container';
    

    content.append(about);
    about.append(greeting);
    
    about.append(container);
    container.append(description);
    container.append(image);

    image.src = xiangling;
    image.id = 'xiangling';
    greeting.textContent = "Welcome to Wanmin Restaurant!";
    description.textContent = "Wanmin Restaurant is a restaurant that serves delectable Liyue Cuisine. The establishment is ran by Chef Mao, Xiangling's father, where they cook and sell delicious food as well as raw cooking ingridients and cooking recipes.";

    return;
}