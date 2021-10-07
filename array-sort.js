const numbers = [4, 5, 5, 6, 2, 8, 6, 4, 6, 4];
const sorteNumbers = numbers.sort();
// console.log(sorteNumbers);
const friend = ['kabli ', 'josim', 'razzak', 'anwar', 'kasem', 'dipjol'];
// const sortFriends = friend.sort();
// console.log(sortFriends);

// Reverse Number 

const sortFriends = friend.sort().reverse();
console.log(sortFriends);

// number sorting fun

const bigNumber = [66, 52, 81, 92, 9, 6, 37, 12, 2];
const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber);