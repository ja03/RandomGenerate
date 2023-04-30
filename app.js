const button = document.querySelectorAll("button")
const input = document.querySelector("input")
const output = document.querySelector("#output")
const p = document.querySelector("#description")
const img = document.querySelector("img")
const form = document.querySelector('form');
listItems = ["Waffel", "Pizza", "Burger", "Donuts", "Bakery", "Watermelon"]
button[1].style.opacity = 0
const descriptions = {
    "Waffel": "Waffle - A pancake's crispy cousin that always brings a smile to your face with its delicious little square pockets just waiting to be filled with syrup and butter.",
    "Pizza": "Pizza - A magical circle of love and cheese that brings people together, unless you're lactose intolerant, in which case it brings you closer to a toilet.",
    "Burger": "Burger - A delicious stack of hope that promises happiness with every bite, until you realize you're now too full to do anything other than take a nap.",
    "Donuts": "Donuts - A sugary ring of happiness that can make even the grumpiest person smile, unless of course, they're the type who thinks sprinkles are a crime against desserts.",
    "Bakery": "Bakery - The magical land where flour and sugar become works of art that make you want to forget your diet and dive in face first.",
    "Watermelon": "Watermelon - The fruit that promises a refreshing treat on a hot summer day, until you start spitting out all the seeds and look like a machine gunner at a fruit stand."
};
const descriptionImg = {
    "Waffel": "./waffel.png",
    "Pizza": "./pizza.png",
    "Burger": "./burger.png",
    "Donuts": "./donuts.png",
    "Bakery": "./bakery.png",
    "Watermelon": "./watermelon.png"
};
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function (match) {
        return match.toUpperCase();
    });
}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function buttonAnimation() {
    button[0].style.boxShadow = '0 .1cm 1px 0px red';
    button[0].style.transform = 'translateY(-.03cm) skew(1deg)';
    setTimeout(function () {
        button[0].style.boxShadow = '0 .19cm 1px 0px red';
        button[0].style.transform = 'translateY(-.09cm) skew(1deg)';
    }, 250);
}
function buttonAnimation1() {
    button[1].style.boxShadow = '0 .1cm 1px 0px white';
    button[1].style.transform = 'translateY(-.03cm) skew(1deg)';
    setTimeout(function () {
        button[1].style.boxShadow = '0 .19cm 1px 0px white';
        button[1].style.transform = 'translateY(-.09cm) skew(1deg)';
    }, 250);
}

function Generate() {
    buttonAnimation()
    inputValue = input.value
    inputValue = toTitleCase(inputValue)
    console.log(inputValue)
    setTimeout(() => {
        element = getRandomElement(listItems)
        output.innerHTML = `your element is ${inputValue}'s ${element}`
        p.innerHTML = `${descriptions[element]}`
        img.src = `${descriptionImg[element]}`
        button[1].style.opacity = 1
    }, 10);
}
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
});
button[0].addEventListener("click", Generate)
button[1].addEventListener("click", Generate)
button[1].addEventListener("click", buttonAnimation1);
