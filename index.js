let shopping = require ("./beli.js")

let list = [
    {
        item: 'Butterfly',
        harga: 4800,
        waktu: 2000
    },
    {
        item: 'Aghanim',
        harga: 8000,
        waktu: 5000
    },
    {
        item: 'Sange & Yahsa',
        harga: 5600,
        waktu: 7000
    },
    {
        item: 'Dagon',
        harga: 1000000,
        waktu: 8000
    },
    {
        item: 'Empty Bottle',
        harga: 3750,
        waktu: 1000
    }
]

shopping(50000,list[0], function (sisa){
    shopping(sisa,list[1], function (sisa){
        shopping(sisa,list[2], function (sisa){
            shopping(sisa,list[3], function (sisa){
                shopping(sisa,list[4], function (sisa){

                })
            })
        })
    })
})
//your Program in here

console.log(`menjalankan program`)
