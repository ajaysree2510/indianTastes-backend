define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/foods/food-display",
    "title": "All Recipe Display",
    "version": "0.0.1",
    "group": "All_Recipe_Dispaly",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"error\": false,\n    \"message\": \"All Recipe Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"name\": \"Biriyani\",\n            \"description\": \"finely cooked meat with long grain rice\",\n            \"image\": \"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\",\n            \"ingredients\": [\n                \"750 grams chicken, cut into 1 inch pieces on bone\",\n                \"1½ cups Daawat Biryani Basmati Rice\",\n                \"½ cup yogurt\",\n                \"Salt to taste\",\n                \"1½ tablespoons ginger-garlic paste\",\n                \"1 teaspoon green chilli paste\",\n                \"1 teaspoon red chilli powder\",\n                \"1 bay leaf\",\n                \"1 black cardamom\",\n                \"5 green cardamoms\",\n                \"1 inch cinnamon\",\n                \"12-16 cloves\",\n                \"3 tablespoons oil\",\n                \"1 teaspoon caraway seeds (shahi jeera)\",\n                \"1 medium onion, sliced\",\n                \"1 tablespoon coriander powder\",\n                \"1 tablespoon cumin (jeera) powder\",\n                \"½ cup fried onions + for garnishing\",\n                \"Few fresh mint leaves\",\n                \"1 inch ginger, cut into strips\",\n                \"1 tablespoon saffron milk\",\n                \"Ghee for drizzling\",\n                \"Garam masala powder for sprinkling\",\n                \"Whole wheat flour (atta) dough for sealing\",\n                \"Fresh mint sprig for garnishing\"\n            ],\n            \"instructions\": [\n                \"Put chicken pieces in a bowl. \",\n                \"Add yogurt, salt, 1 tablespoon ginger-garlic paste, green chilli paste and chilli powder, mix well and set aside to marinate for 1 hour.\",\n                \"Soak Daawat Biryani Basmati Rice in sufficient water for 30 minutes.\",\n                \"Heat 3 cups water in a deep non-stick pan.\",\n                \"Add bay leaf, black cardamom, green cardamoms, cinnamon, cloves, salt and drained Daawat Biryani Basmati Rice\",\n                \"cover and cook till 3/4th done.\",\n                \"Heat oil in another deep non-stick pan. Add caraway seeds and onion and sauté.\",\n                \"Add remaining ginger-garlic paste, coriander powder and cumin powder, mix well and sauté for a minute.\",\n                \"Add marinated chicken pieces, mix well, cover and cook for 2-3 minutes.\",\n                \"Strain the Daawat Biryani Basmati Rice in a colander and set aside.\",\n                \"Transfer half the chicken to another deep non-stick pan on heat. Spread half the strained\",\n                \"Daawat Biryani Basmati Rice on top. Add ¼ cup fried onions, mint leaves and half the ginger strips.\",\n                \"Drizzle ½ tablespoon saffron milk, some ghee and sprinkle some garam masala powder.\",\n                \"Spread the remaining chicken on top and layer with the remaining strained Daawat Biryani\",\n                \"Basmati Rice. Top with remaining fried onions, some mint leaves, drizzle some ghee, remaining saffron milk and sprinkle some garam masala powder.\",\n                \"Add remaining ginger strips and cover.\",\n                \"Place the pan on a hot non-stick tawa, seal the edges of the pan with wheat flour dough and cook on low heat for 15-20 minutes.\",\n                \"Garnish with fried onions and mint sprig and serve hot.`\"\n            ],\n            \"recipeId\": \"Ijd79j62\"\n        },\n        {\n            \"name\": \"Pulao\",\n            \"description\": \"finely cooked vegetables with long grain rice\",\n            \"image\": \"https://image.shutterstock.com/image-photo/indian-food-tawa-pulao-rice-260nw-1261881601.jpg\",\n            \"ingredients\": [\n                \"1/2 cup Basmati Rice (long grained rice),\",\n                \"1 medium Onion, finely chopped\",\n                \"1 small Tomato, finely chopped\",\n                \"1/4 cup Green Peas (mutter), fresh or frozen\",\n                \"3 tablespoons finely chopped French Beans\",\n                \"1/4 cup finely chopped Carrot\",\n                \"1 small piece of Bay Leaf\",\n                \"1-inch piece of Cinnamon\",\n                \"2 Cloves\",\n                \"1/4 teaspoon Garam Masala Powder\",\n                \"1/8 teaspoon Turmeric Powder\",\n                \"1/2 teaspoon Red Chilli Powder\",\n                \"2 tablespoons finely chopped Coriander Leaves\",\n                \"2 tablespoons Oil\",\n                \"1 teaspoon Ghee\",\n                \"1 cup Water\",\n                \"Salt to taste\"\n            ],\n            \"instructions\": [\n                \"Wash rice and soak it in water for 15-20 minutes.\",\n                \"Drain and keep aside until needed.\",\n                \"Heat ghee and oil together in a pressure cooker (2-liter capacity, stainless steel cooker) on low flame.\",\n                \"Add bay leaf, cinnamon, clove, and sauté for 30 seconds.\",\n                \"Add onion and sauté until it turns light brown or for approx. 2 minutes.\",\n                \"Add chopped tomato, green peas, french beans and carrot. \",\n                \"Stir-fry them for approx. 2 minutes.\",\n                \"Add soaked (drained) rice, garam masala powder, turmeric powder, red chilli powder and salt.\",\n                \"Stir-fry them for approx. 2 minutes. Add 1 cup water and mix well.\",\n                \"Close the lid and cook over medium flame for 2 whistles.\",\n                \"When 1st whistle is completed, reduce the flame to low and cook until another whistle. Turn off flame.\",\n                \"Let it cool at room temperature until pressure inside cooker comes down naturally.\",\n                \"Open the lid carefully and fluff the rice with a fork.\",\n                \"Transfer it to a serving bowl and garnish with fresh coriander leaves.\"\n            ],\n            \"recipeId\": \"mLOOgMlI\"\n        }\n    },",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routing.js",
    "groupTitle": "All_Recipe_Dispaly",
    "name": "GetApiV1FoodsFoodDisplay"
  },
  {
    "type": "get",
    "url": "/api/v1/foods/recipeView/:recipeId",
    "title": "Single Recipe Display",
    "version": "0.0.1",
    "group": "Single_Recipe_Dispaly",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipeId",
            "description": "<p>id of the recipe passed as route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"One Recipe found successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"name\": \" \",\n                \"author\": \"Author\",\n                \"description\": \" \",\n                \"image\": \" \",\n                \"ingredients\": [\n                    \" \"\n                ],\n                \"instructions\": [\n                    \" \"\n                ],\n                \"recipeId\": \"tMCHYQah\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routing.js",
    "groupTitle": "Single_Recipe_Dispaly",
    "name": "GetApiV1FoodsRecipeviewRecipeid"
  },
  {
    "type": "post",
    "url": "/api/v1/foods/create",
    "title": "Create Blog",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the recipe passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>name of person who crated the recipe passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the recipe passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageurl",
            "description": "<p>url of recipeimage passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredients",
            "description": "<p>ingredients of the recipe passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>instruction of the recipe passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        {\n        \"error\": false,\n        \"message\": \"Recipe created successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"name\": \"test\",\n            \"author\": \"Ajay\",\n            \"description\": \"testing\",\n            \"image\": \"images\",\n            \"ingredients\": [\n            \"ingredients\"\n            ],\n            \"instructions\": [\n            \"instructions\"\n            ],\n            \"_id\": \"5e27522c88d91e40ecdb208e\",\n            \"recipeId\": \"jHEuZT0y\",\n            \"__v\": 0\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routing.js",
    "groupTitle": "create",
    "name": "PostApiV1FoodsCreate"
  }
] });
