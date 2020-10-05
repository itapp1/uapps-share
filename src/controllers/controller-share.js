
require('dotenv').config();
const { 
    NODE_ENV,
    URL_HOST_PRO,
    URL_HOST_DEV,
    URL_FRONT_PRO,
    URL_FRONT_DEV,
    URL_IMAGE_PRO,
    URL_IMAGE_DEV
} = process.env;

let url;
if (NODE_ENV === 'production') {
    url = URL_HOST_PRO
    urlRedirect = URL_FRONT_PRO
    urlImage = URL_IMAGE_PRO
} else {
    url = URL_HOST_DEV
    urlRedirect = URL_FRONT_DEV
    urlImage = URL_IMAGE_DEV
}
module.exports ={
    shareWithoutDB(req,res){
        let id = req.params.id;
        res.render('share-without-db',{
            textDisplay: 'Please wait ...',
            url: url,
            urlRedirect : urlRedirect+id,
            urlImage : urlImage+id+'[0].png',
            titleProduct : 'FOX Lem Banteng KW 1',
            descriptionProduct : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        });
    },
    shareWithDB(req,res){
        let id = req.params.id;
        console.log(id);
    }
}