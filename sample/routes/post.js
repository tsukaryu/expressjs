exports.index = function(req, res){
	res.render('index.ejs', {title: 'PGG'});

};
exports.login =  function(req, res){
        res.render('login');
};
exports.main = function(req, res){
        res.render('main',{pid: req.body.pid, payment: req.body.payment});	
};
