function revealCards(deck) {
 let stack = deck.sort((a, b) => b - a); // Sorting the deck in decending order.
    // Deck will look like  : [17, 13, 11, 7, 5, 3, 2]
    let queue = [stack.shift()]; // Adding first element of stack in queue.
    // At this level :
    // Stack : [ 13, 11, 7, 5, 3, 2 ] 
    // Queue : [ 17 ]
        
    while (stack.length > 0) { // Loop to travering stack and queue.
        queue.unshift(queue.pop()); // Taking last element of the queue and adding it to the front of the queue. Revealing the last card.
        queue.unshift(stack.shift()); // Taking out first element of the stack and adding it the front of the queue.
        // In this way top card will added to the queue.
    }
    return queue; // Returning the resulting queue.

  

}


console.log(revealCards([17,13,11,2,3,5,7]));