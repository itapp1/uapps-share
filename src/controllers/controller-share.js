
module.exports ={
    shareWithoutDB(req,res){
       res.render('shareWithoutDB',{
            textDisplay: 'Please wait ...',
            url: 'http://localhost:3000/',
            urlRedirect : ''
       });
    },
    shareWithDB(req,res){
        console.log('Halo');
    }
}