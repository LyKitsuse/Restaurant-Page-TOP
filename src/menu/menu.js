let food = ["Chicken Mushroom Skewer", "Fisherman Toast", "Teyvat Fried Egg"];
let foodImport = [chickenSkewer, FishermanToast, TeyvatEgg];
let prices = [400, 1025, 200];

import chickenSkewer from "../../assets/Item_Chicken-Mushroom_Skewer.webp";
import FishermanToast from "../../assets/Item_Fisherman%27s_Toast.webp";
import TeyvatEgg from "../../assets/Item_Teyvat_Fried_Egg.webp";

import "./menu-styles.css";

export default function menu() {
    const content = document.getElementById('content');

    const about = document.createElement('div');
    let greeting = document.createElement('h2');
    let description = document.createElement('p');
    let container = document.createElement('div');

    content.append(about);
    about.append(greeting);
    about.append(description);
    about.append(container);
    container.id = "container";

    greeting.textContent = "Take a look at our Menu!";
    description.textContent = "Have Great Food at Wanmin Restaurant!";

    // Menu Items
    
    food.forEach((item, index) => {
        let foodItem = document.createElement('div');
        let image = document.createElement('img');
        let Itemtitle = document.createElement('h3');
        let desc = document.createElement('p');

        // console.log(`Index ${index} for ${item} with ID of ${foodImport[index]}`);
        
        container.append(foodItem);
        foodItem.className = "food-item";

        foodItem.append(image);
        image.src = foodImport[index];
        image.className = "image"
        image.style.maxWidth = 200;

        foodItem.append(Itemtitle);
        Itemtitle.textContent = item;

        foodItem.append(desc);
        desc.textContent = `${prices[index]} Mora`;
    });
    return;
}