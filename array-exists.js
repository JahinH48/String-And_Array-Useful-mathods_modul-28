function megaFriends() {
    if (Array.isArray(friends) == false) {
        return 'Enter Array';
    }
    let mega = friends[1];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', ' Limon', 'Shamol', 'sabbir'];
const myBig = megaFriends(friends);
console.log(myBig);

if (friends.indexOf('fox') != -1) {
    console.log('Lion exists');
}
if (friends.includes('Lion')) {
    console.log('is Here');
}





/* function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy); */