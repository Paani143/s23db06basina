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
exports.furniture_detail = async function(req, res) {console.log("detail" + req.params.id)
    try {
    result = await Furniture.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.furniture_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Furniture.findById( req.params.id)
    // Do updates of properties
    if(req.body.furniture_type)
    toUpdate.furniture_type = req.body.furniture_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }   
};

exports.furniture_create_post = async function(req, res) {
    console.log(req.body)
    let document = new furniture();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"furniture_type":"goat", "cost":12, "size":"large"}
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
    
    