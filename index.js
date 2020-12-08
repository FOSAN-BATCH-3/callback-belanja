const beli = require("./beli")

//your Program in here
beli(12000,{item : "Meezone",harga: 6000,waktu: 1000},function(belanja){
    // console.log(belanja)
    beli(belanja,{item : "Mentos",harga: 2000,waktu: 800},function(belanja){
        // console.log(belanja)
        beli(belanja,{item : "Tisu",harga: 3500,waktu: 1200},function(belanja){
            // console.log(belanja)
            beli(belanja,{item : "Masker",harga: 10000,waktu: 2000},function(belanja){
                // console.log(belanja)
                beli(belanja,{item : "Bungkus Plastik",harga: 500,waktu: 1000},function(belanja){
                    // console.log(belanja)
                });           
            });           
        });           
    });           
});           
console.log(`menjalankan program`)
