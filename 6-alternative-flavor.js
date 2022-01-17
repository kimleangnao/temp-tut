

module.exports.items = ['item1', 'item2'];
const person = {
    name: 'Baz',
};
module.exports.randomInt = () => {
    let randomNum = Math.random() * 100;
    return randomNum;
}
module.exports.person = person;