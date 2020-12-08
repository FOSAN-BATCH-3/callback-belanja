
//your Program in here
let jajan = require ("./beli.js")

let shopping = [
    {
        item: 'Tas',
        harga: 900000,
        waktu: 3000
    },
    {
        item: 'Sepatu',
        harga: 1500000,
        waktu: 2000
    },
    {
        item: 'Jam Tangan',
        harga: 2000000,
        waktu: 1500
    },
    {
        item: 'Kacamata',
        harga: 500000,
        waktu: 2000
    },
    {
        item: 'Handphone',
        harga: 3500000,
        waktu: 4000
    }
]

jajan(5000000, shopping[0], function(susuk) {
    jajan(susuk, shopping[1], function(susuk) {
        jajan(susuk, shopping[2], function(susuk) {
            jajan(susuk, shopping[3], function(susuk) {
                jajan(susuk, shopping[4], function() {
                })
            })
        })
    })
})

console.log(`menjalankan program`)
