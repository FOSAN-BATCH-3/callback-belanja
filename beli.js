function beli(uang, obj, cb){
  setTimeout(function(){
    if(obj.item!="donasi"){
    console.log(`Saya pergi membeli ${obj.item}`)
    }
    let kembalian = uang - obj.harga*obj.jumlah
    if (kembalian >= 0 && obj.item!="donasi") {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }
    else if(obj.item=="donasi"){
      console.log(`Saya ber ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }
    else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;
