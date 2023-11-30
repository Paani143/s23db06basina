var express = require('express');
const furniture_controllers= require('../controllers/furniture');
var router = express.Router();

/* GET furniture */
router.get('/', furniture_controllers.furniture_view_all_Page );
/* GET detail costume page */
router.get('/detail', furniture_controllers.furniture_view_one_Page);
/* GET create furniture page */
router.get('/create', furniture_controllers.furniture_create_Page);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET create update page */
router.get('/update', secured,furniture_controllers.furniture_update_Page);
router.get('/delete', secured,furniture_controllers.furniture_delete_Page);
router.get('/detail', secured,furniture_controllers.furniture_detail);

module.exports = router;
