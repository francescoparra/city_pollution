const multerError = (err, req, res, next) => {
    if(err){
      return res.render("newPost", {error: err});
    }else{
        next();
    }
  }
module.exports = multerError;