const furniture = require('../models/furniture');
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

exports.furniture_create_post = async function(req, res) {
    console.log(req.body)
    let document = new furniture();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.furniture_name = req.body.furniture_name;
    document.furniture_specification = req.body.furniture_specification;
    document.furniture_cost = req.body.furniture_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// VIEWS
// Handle a show all view
exports.furniture_view_all_Page = async function(req, res) {
    try{
    theFurnitures = await furniture.find();
    res.render('furniture', { title: 'Furniture Search Results', results: theFurnitures });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    