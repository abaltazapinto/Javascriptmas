import { addresses } from './addresses.js'
/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/

const labelsContainer = document.querySelector('.labels-container')



function createPostHTML(address, addressLine1) {
    return `
        <div class="container-postcard">
            <div class"emoji"> 
                <img src="icons/bauble.png" id="first-icon">
            <div class="information">
                <h1>${address.name}</h1>
                <h3>${addressLine1}</h3>
                <h4>${address.town}</h4>
                <h4>${address.state}</h4>
                <h6>${address.country}</h6>
            </div>
                <img src="icons/stocking.png" id="second-icon">
        </div>
    `;
}

function renderPosts() {
    addresses.forEach(address => {
        const addressLine1 = address["address line 1"];
        if (address.isOnChristmasList) {
            labelsContainer.innerHTML += createPostHTML(address, addressLine1)
        } 
    });
}

renderPosts()