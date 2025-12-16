export default function contact() {
    const content = document.getElementById('content');

    const about = document.createElement('div');
    let greeting = document.createElement('h2');
    let description = document.createElement('p');

    content.append(about);
    about.append(greeting);
    about.append(description);

    greeting.textContent = "Here where to find us!";
    description.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam asperiores placeat perferendis!";

    return;
}