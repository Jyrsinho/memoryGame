import getRandomInt from './getRandomInt.js';
import pickAndDeleteFromArray from "./pickAndDeleteFromArray.js";

/**
 * Shuffles the given array to a random order
 */
export default function shuffleArray(originalDeck) {

    let shuffledDeck = [];
    let randomNumber;

    for (let i = 0; i < originalDeck.length; i++) {

        randomNumber = getRandomInt(0, originalDeck.length - 1);
        // pick a card from the randomNumber pointed index from the original
        // deck. Remove that card from the array
        let pickedCard = pickAndDeleteFromArray(originalDeck);
        // add the chosen card to the shuffled deck.
        shuffledDeck.push(pickedCard);
    }

    return shuffledDeck;
}
