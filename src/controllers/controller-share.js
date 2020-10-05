
module.exports ={
    shareWithoutDB(req,res){
        let id = req.params.id;
        res.render('share-without-db',{
            textDisplay: 'Please wait ...',
            url: 'http://localhost:3000/',
            urlRedirect : `https://sales.uapps.id/products/detail/${id}`,
            urlImage : `https://sales.uapps.id/assets/image/SENTRALTUKANG/detail/${id}[0].png`,
        });
    },
    shareWithDB(req,res){
        let id = req.params.id;
        console.log(id);
    }
}