let ConnectionPool  = require('tedious-connection-pool');
let Request         = require('tedious').Request;

require('dotenv').config();
const { 
    NODE_ENV,
    URL_HOST_PRO,
    URL_HOST_DEV,
    URL_FRONT_PRO,
    URL_FRONT_DEV,
    URL_IMAGE_PRO,
    URL_IMAGE_DEV,
    SQL_DATABASE_SERVER_DEVELOP,
	SQL_DATABASE_SERVER_PRODUCTION,
	PASSWORD_SERVER,
	USER_SERVER
} = process.env;

let url, SQL_DATABASE_SERVER, SQL_SERVER;

if (NODE_ENV === 'production') {
    SQL_DATABASE_SERVER = SQL_DATABASE_SERVER_PRODUCTION
    url = URL_HOST_PRO
    urlRedirect = URL_FRONT_PRO
    urlImage = URL_IMAGE_PRO
} else {
    SQL_DATABASE_SERVER = SQL_DATABASE_SERVER_DEVELOP;
    url = URL_HOST_DEV
    urlRedirect = URL_FRONT_DEV
    urlImage = URL_IMAGE_DEV
}

SQL_SERVER = {
    userName: USER_SERVER,
    password: PASSWORD_SERVER,
    server: SQL_DATABASE_SERVER
}

let poolConfig = {
    min: 2,
    max: 8,
    log: false
};
let pool = new ConnectionPool(poolConfig, SQL_SERVER);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    shareWithoutDB(req,res){
        res.render('share-without-db',{
            textDisplay: 'Please wait ...',
            url: url,
            urlRedirect : urlRedirect+'100473',
            urlImage : urlImage+'100473[0].png',
            titleProduct : 'FOX Lem Banteng KW 1',
            descriptionProduct : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        });
    },
    shareWithDB(req,res){
        let db = 'SENTRALTUKANG';
        let id = req.params.id;
		let rows = [];

		pool.acquire((err, connection)=> {
			if (err) {
				console.error(err);
				return;
			}
			var request = new Request(`SELECT [No_] as 'no' ,[Description] as 'desc' ,[Description 2] as 'desc2' FROM [${db}].[dbo].[${db}$Item] WHERE No_ = '${id}'` , (err, rowCount)=> {
                if(err) throw err;
                let data = rows[0];
                res.render('share-with-db',{
                    textDisplay: 'Please wait ...',
                    url: url,
                    urlRedirect : urlRedirect+id,
                    urlImage : urlImage+id+'[0].png',
                    titleProduct : data['desc']+' '+data['desc2'],
                    descriptionProduct : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                });
				connection.release();
			});

			request.on('row', (columns)=> {
				var row = {};
				columns.forEach((column)=> {
					row[column['metadata']['colName']] = column['value'];
				});
				rows.push(row);
			});
			connection.execSql(request);
		});
    }
}