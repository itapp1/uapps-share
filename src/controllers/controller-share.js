
module.exports ={
    shareWithoutDB(req,res){
        let id = req.params.id;
        res.render('share-without-db',{
            textDisplay: 'Please wait ...',
            url: 'http://localhost:3000/',
            urlRedirect : `https://sales.uapps.id/products/detail/${id}`,
            urlImage : `https://sales.uapps.id/assets/image/SENTRALTUKANG/detail/${id}[0].png`,
            titleProduct : 'FOX Lem Banteng KW 1',
            descriptionProduct : 'Fox Lem Banteng Kualitas KW 1 Harga boleh di adu.'
        });
    },
    shareWithDB(req,res){
        let id = req.params.id;
        console.log(id);
    }
}