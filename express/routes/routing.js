const express = require('express')
const control = require('./../controllers/foodControl');
const appConfig=require('./../config/appConfig')
const example = require('./../middlewares/example')


let setRouter = (app) => {

    let baseUrl=appConfig.apiVersion+'/foods';

app.get(baseUrl+'/food-display', control.allRecipeDisplay);

/**
* @api {get} /api/v1/foods/food-display All Recipe Display
* @apiversion 0.0.1
* @apiGroup All Recipe Dispaly
*
*
* @apiSuccessExample {json} Success-Response:
        *{"error": false,
    "message": "All Recipe Details Found",
    "status": 200,
    "data": [
        {
            "name": "Biriyani",
            "description": "finely cooked meat with long grain rice",
            "image": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "ingredients": [
                "750 grams chicken, cut into 1 inch pieces on bone",
                "1½ cups Daawat Biryani Basmati Rice",
                "½ cup yogurt",
                "Salt to taste",
                "1½ tablespoons ginger-garlic paste",
                "1 teaspoon green chilli paste",
                "1 teaspoon red chilli powder",
                "1 bay leaf",
                "1 black cardamom",
                "5 green cardamoms",
                "1 inch cinnamon",
                "12-16 cloves",
                "3 tablespoons oil",
                "1 teaspoon caraway seeds (shahi jeera)",
                "1 medium onion, sliced",
                "1 tablespoon coriander powder",
                "1 tablespoon cumin (jeera) powder",
                "½ cup fried onions + for garnishing",
                "Few fresh mint leaves",
                "1 inch ginger, cut into strips",
                "1 tablespoon saffron milk",
                "Ghee for drizzling",
                "Garam masala powder for sprinkling",
                "Whole wheat flour (atta) dough for sealing",
                "Fresh mint sprig for garnishing"
            ],
            "instructions": [
                "Put chicken pieces in a bowl. ",
                "Add yogurt, salt, 1 tablespoon ginger-garlic paste, green chilli paste and chilli powder, mix well and set aside to marinate for 1 hour.",
                "Soak Daawat Biryani Basmati Rice in sufficient water for 30 minutes.",
                "Heat 3 cups water in a deep non-stick pan.",
                "Add bay leaf, black cardamom, green cardamoms, cinnamon, cloves, salt and drained Daawat Biryani Basmati Rice",
                "cover and cook till 3/4th done.",
                "Heat oil in another deep non-stick pan. Add caraway seeds and onion and sauté.",
                "Add remaining ginger-garlic paste, coriander powder and cumin powder, mix well and sauté for a minute.",
                "Add marinated chicken pieces, mix well, cover and cook for 2-3 minutes.",
                "Strain the Daawat Biryani Basmati Rice in a colander and set aside.",
                "Transfer half the chicken to another deep non-stick pan on heat. Spread half the strained",
                "Daawat Biryani Basmati Rice on top. Add ¼ cup fried onions, mint leaves and half the ginger strips.",
                "Drizzle ½ tablespoon saffron milk, some ghee and sprinkle some garam masala powder.",
                "Spread the remaining chicken on top and layer with the remaining strained Daawat Biryani",
                "Basmati Rice. Top with remaining fried onions, some mint leaves, drizzle some ghee, remaining saffron milk and sprinkle some garam masala powder.",
                "Add remaining ginger strips and cover.",
                "Place the pan on a hot non-stick tawa, seal the edges of the pan with wheat flour dough and cook on low heat for 15-20 minutes.",
                "Garnish with fried onions and mint sprig and serve hot.`"
            ],
            "recipeId": "Ijd79j62"
        },
        {
            "name": "Pulao",
            "description": "finely cooked vegetables with long grain rice",
            "image": "https://image.shutterstock.com/image-photo/indian-food-tawa-pulao-rice-260nw-1261881601.jpg",
            "ingredients": [
                "1/2 cup Basmati Rice (long grained rice),",
                "1 medium Onion, finely chopped",
                "1 small Tomato, finely chopped",
                "1/4 cup Green Peas (mutter), fresh or frozen",
                "3 tablespoons finely chopped French Beans",
                "1/4 cup finely chopped Carrot",
                "1 small piece of Bay Leaf",
                "1-inch piece of Cinnamon",
                "2 Cloves",
                "1/4 teaspoon Garam Masala Powder",
                "1/8 teaspoon Turmeric Powder",
                "1/2 teaspoon Red Chilli Powder",
                "2 tablespoons finely chopped Coriander Leaves",
                "2 tablespoons Oil",
                "1 teaspoon Ghee",
                "1 cup Water",
                "Salt to taste"
            ],
            "instructions": [
                "Wash rice and soak it in water for 15-20 minutes.",
                "Drain and keep aside until needed.",
                "Heat ghee and oil together in a pressure cooker (2-liter capacity, stainless steel cooker) on low flame.",
                "Add bay leaf, cinnamon, clove, and sauté for 30 seconds.",
                "Add onion and sauté until it turns light brown or for approx. 2 minutes.",
                "Add chopped tomato, green peas, french beans and carrot. ",
                "Stir-fry them for approx. 2 minutes.",
                "Add soaked (drained) rice, garam masala powder, turmeric powder, red chilli powder and salt.",
                "Stir-fry them for approx. 2 minutes. Add 1 cup water and mix well.",
                "Close the lid and cook over medium flame for 2 whistles.",
                "When 1st whistle is completed, reduce the flame to low and cook until another whistle. Turn off flame.",
                "Let it cool at room temperature until pressure inside cooker comes down naturally.",
                "Open the lid carefully and fluff the rice with a fork.",
                "Transfer it to a serving bowl and garnish with fresh coriander leaves."
            ],
            "recipeId": "mLOOgMlI"
        }
    },
*/

app.get(baseUrl+'/recipeView/:recipeId', control.oneRecipeDisplay);

/**
* @api {get} /api/v1/foods/recipeView/:recipeId Single Recipe Display
* @apiversion 0.0.1
* @apiGroup Single Recipe Dispaly
*
*@apiParam {String} recipeId id of the recipe passed as route parameter

*
* @apiSuccessExample {json} Success-Response:
        *{
            "error": false,
            "message": "One Recipe found successfully",
            "status": 200,
            "data": {
                "name": " ",
                "author": "Author",
                "description": " ",
                "image": " ",
                "ingredients": [
                    " "
                ],
                "instructions": [
                    " "
                ],
                "recipeId": "tMCHYQah"
            }
        }
*/


app.post(baseUrl+'/create', control.createRecipe);

/**
* @api {post} /api/v1/foods/create Create Blog
* @apiversion 0.0.1
* @apiGroup create
*
*@apiParam {String} title title of the recipe passed as body parameter
*@apiParam {String} author name of person who crated the recipe passed as body parameter
*@apiParam {String} description description of the recipe passed as body parameter
*@apiParam {String} imageurl url of recipeimage passed as body parameter
*@apiParam {String} ingredients ingredients of the recipe passed as body parameter
*@apiParam {String} instructions instruction of the recipe passed as body parameter
*
* @apiSuccessExample {json} Success-Response:
    *{
        {
        "error": false,
        "message": "Recipe created successfully",
        "status": 200,
        "data": {
            "name": "test",
            "author": "Ajay",
            "description": "testing",
            "image": "images",
            "ingredients": [
            "ingredients"
            ],
            "instructions": [
            "instructions"
            ],
            "_id": "5e27522c88d91e40ecdb208e",
            "recipeId": "jHEuZT0y",
            "__v": 0
        }
    }
@apiErrorExample {json} Error-Response:
*
* {
    "error": true,
    "message": "Error Occured",
    "status": 500,
    "data": null
  }

*/

app.get('/split/name', (req, res) => {
    let name = req.query;
    
    let splitName;
    
    splitName = name.fullName.split(" ");
    

    let output = {
        "firstName": splitName[0],
        "lastName": splitName[1]
    }; 
    
    res.send(output);

    
});// end split name

app.get('/calculate/age', (req, res) => {

    let today = new Date();
    let dob=req.query.dob;
    
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    let output = {
        "age": age,
    }
    res.send(output);


});


}//end of setRouter function

module.exports = {

    setRouter:setRouter

}