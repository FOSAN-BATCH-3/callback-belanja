const beli = require("./beli")

//your Program in here
beli(30200,{item: "keripik kusuka",harga: 12000,jumlah: 1,waktu: 400},function(belanja){
    beli(belanja,{item: "Es Krim Paddle pop",harga: 3000,jumlah: 2,waktu: 800},function(belanja){
        beli(belanja,{item: "frestea",harga:6000,jumlah: 2,waktu: 600},function(belanja){
            beli(belanja,{item:"mie sedap goreng",harga:2500,jumlah: 1,waktu: 700},function(belanja){
                beli(belanja,{item: "donasi",harga: 200,jumlah: 1,waktu: 900},function(belanja){

                });
            });
        });
    });
});
console.log(`menjalankan program`)
