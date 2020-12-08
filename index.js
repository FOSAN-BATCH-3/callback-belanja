
//your Program in here
let jajan = require ("./beli.js")

jajan(5000000, {item: 'Tas', harga: 900000, waktu: 3000}, function(susuk) {
    jajan(susuk, {item: 'Sepatu', harga: 1500000, waktu: 2000}, function(susuk) {
        jajan(susuk, {item: 'Jam Tangan', harga: 2000000, waktu: 1500}, function(susuk) {
            jajan(susuk, {item: 'Kacamata', harga: 500000, waktu: 2000}, function(susuk) {
                jajan(susuk, {item: 'Handphone', harga: 3500000, waktu: 4000}, function() {
                })
            })
        })
    })
})

console.log(`menjalankan program`)
