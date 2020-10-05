
module.exports ={
    shareWithoutDB(req,res){
       res.render('shareWithoutDB',{
            textDisplay: 'Please wait ...',
            url: 'http://localhost:3000/',
            urlRedirect : 'https://sales.uapps.id/products/detail/100473'
       });
    },
    shareWithDB(req,res){
        console.log('Halo');
    }
}