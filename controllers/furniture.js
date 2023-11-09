var Furniture = require('../models/furniture');
// List of all furnitures
exports.furniture_list = async function(req, res) {
try{
theFurnitures = await Furniture.find();
res.send(theFurnitures);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific Furniture.
exports.furniture_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Furniture detail: ' + req.params.id);
};
// Handle Furniture create on POST.
exports.furniture_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Furniture create POST');
};
// Handle Furniture delete form on DELETE.
exports.furniture_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Furniture delete DELETE ' + req.params.id);
};
// Handle Furniture update form on PUT.
exports.furniture_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Furniture update PUT' + req.params.id);
};