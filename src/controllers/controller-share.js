
module.exports ={
    shareWithoutDB(req,res){
       res.render('shareWithoutDB',{
            title: 'Halo'
       });
    },
    shareWithDB(req,res){
        console.log('Halo');
    }
}