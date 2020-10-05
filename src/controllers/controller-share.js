
module.exports ={
    shareWithoutDB(req,res){
       res.render('shareWithoutDB',{
            textDisplay: 'Please wait ...',
            url: 'http://localhost:3000/',
            urlRedirect : 'https://sales.uapps.id/products/detail/100473',
            urlImage : 'https://sales.uapps.id/assets/image/SENTRALTUKANG/detail/100473[0].png'
       });
    },
    shareWithDB(req,res){
        console.log('Halo');
    }
}