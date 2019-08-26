var friend1 = {
    name: 'truong',
    sothich: 'haman'
}
var friend2 = {
    name: 'tien',
    sothich: 'xl'
}
var dog = {
    type: 'chongu'
}
var twofriend = [friend1, friend2];
twofriend[2] = dog;
console.log(twofriend);