const express = require('express')
//const foods = require('./../../foods');
const shortid = require('shortid')

const mongoose=require('mongoose');
const response = require('./../libs/responseLib')
const check = require('./../libs/checkLib');

const logger = require('./../libs/loggerLib');

//Importing the model

const RecipeModel = require('./../models/Recipe')


let allRecipeDisplay = (req, res) => {

    RecipeModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(`Error Occured:${err}, 'Database`, 10)
                let apiResponse = response.generate(true, "Error Occured", 500, null);
                res.send(apiResponse);
            }else if ( check.isEmpty(result)) {
                logger.error("No such Recipe Found", "FoodController:AllRecipeDisplay", 5)
                let apiResponse = response.generate(true, "No recipe found", 404, null);
                res.send(apiResponse);
            }else {
                logger.info('All Recipe Found Successfully',"FoodController:AllRecipeDisplay", 1)
                let apiResponse = response.generate(false, "All Recipe Details Found", 200, result);
                res.send(apiResponse);
            }
        })
}// end of getAllRecipe


let oneRecipeDisplay = (req,res) => {
    
    RecipeModel.findOne({'recipeId':req.params.recipeId}, (err, result) => {

        if(err) {
            logger.error(`Error Occured:${err}, 'Database`, 10)
            let apiResponse = response.generate(true, "Error Occured", 500, null);
            res.send(apiResponse);
        }else if (check.isEmpty(result)) {
            logger.error("No such Recipe Found", "FoodController:OneRecipeDisplay", 5)
            let apiResponse = response.generate(true, "No recipe found", 404, null);
            res.send(apiResponse);
        } else {
            logger.info('Recipe Found Successfully',"FoodController:OneRecipeDisplay", 1)
            let apiResponse = response.generate(false, "One Recipe found successfully", 200, result);
            res.send(apiResponse);
        }
    }).select('-_id -__v')
}// end of getting one recipe

let createRecipe = (req,res)=>{
    let recipeId = shortid.generate();

    let newRecipe = new RecipeModel({
        recipeId:recipeId,
        name:req.body.name,
        author:req.body.author,
        description:req.body.description,
        image:req.body.image,
        ingredients:req.body.ingredients,
        instructions:req.body.instructions
    })
   

   newRecipe.save((err, result)=>{
       if(err) {
          logger.error(`Error Occured! Unable to create :${err}`, 'FoodController:CreateRecipe', 10)
           let apiResponse = response.generate(true, "Error Occured!! Unable to save", 500, null);
           res.send(apiResponse);
       } else {
        logger.info('New Recipe Created Successfully',"FoodController:CreateRecipe", 1)
        let apiResponse = response.generate(false, "Recipe created successfully", 200, result);
        res.send(apiResponse);
       }
   })
    
}

module.exports = {
    allRecipeDisplay:allRecipeDisplay,
    oneRecipeDisplay:oneRecipeDisplay,
    createRecipe:createRecipe
}