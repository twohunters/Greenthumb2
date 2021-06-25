
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/plants', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const plantSeed  [{
    "name": "Tomato",
    "description": "Edible beryy of the tomato plant. Originated in western South America and Central America. Significant source of unami flavor commonly used as a vegetable or side dish.",
    "plant_habit": "Vine",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "1-2 inches a week",
    "uses": "water once every four to five days",
    "edible_parts": "Fruit",
    "time_to_fruit": 40
},
{
    "name": "Lettuce",
    "description": "Lettuce is most often grown as a leaf vegetable but sometimes for its stem and seed. Lettuce was originally farmed by the Egyptians where it travled to Greece Rome and England. Lettuce is a rich source of vitamin K and vitamin A.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Annual",
    "sun_req": "Full Sun",
    "water_req": "water once every four to five days",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Leaves",
    "time_to_fruit": 30
},
{
    "name": "Kale",
    "description": "Kale belongs to a group of cabbage grown for their edible leaves. Kale originated in the eastern Mediterranean around 2000BC. Kale has a large amount of vitamin K and vitamin A.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Biennials",
    "sun_req": "Full Sun to partial shade",
    "water_req": "1-2 inches a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Leaves",
    "time_to_fruit": 35
},
{
    "name": "Potato",
    "description": "The potato is a root vegetable that belongs to the nightshade family. Potatoes are native to both of the Americas and were introduced to Europe during the 16th century. Potatoes have a large amount of vitamin B6 and vitamin C.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "1-2 inches a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Stem",
    "time_to_fruit": 30
},
{
    "name": "Jalapeno",
    "description": " Commonly picked and consumed while still green it is occasionally allowed to fully ripen where the fruit is milder. First to be cultivated by the Aztecs prior to the Spanish conquest. Jalapenoes have a high source of vitamin C vitamin B6 and vitamin E.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "1-2 inches a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Fruit",
    "time_to_fruit": 70
},
{
    "name": "Rosemary",
    "description": "Rosemary is a shrub with needle-like leaves and is native to the Mediterranean region. Rosemary is part of the mint family and is used for its culinary cosmedic and  medical purposes.",
    "plant_habit": "Shrub",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "2+ inches every 2-4 weeks",
    "uses": "Used as a cuilnary spice",
    "edible_parts": "Leaves",
    "time_to_fruit": 40
},
{
    "name": "Thyme",
    "description": "Thyme is an herb that is part of the mint family. They are most commonly cultivated for their culinary purpose but thyme also has medical and ornamental purposes.",
    "plant_habit": "Shrub",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun to partial shade",
    "water_req": "1 inch every 10-15 days",
    "uses": "Used as a cuilnary spice",
    "edible_parts": "Leaves",
    "time_to_fruit": 30
},
{
    "name": "Beet",
    "description": "The beetroot is the taproot portion of the beet plant. Beets were domesticated in the Middle East. Beetroot has been used as a treament for a variuety of conditions relating to digestion.",
    "plant_habit": "Shrub",
    "life_cycle": "Biennial",
    "sun_req": "Full Sun",
    "water_req": "1 inch per week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Root",
    "time_to_fruit": 45
},
{
    "name": "Eggplant",
    "description": "Is part of the nightshade family. It was first cultivated in Southern Asia. Eggplant are a low source of macro and micro nutrients, but are capable to absorbs oils and flavors into its flesh.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "1 inch per week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Fruit",
    "time_to_fruit": 80
},
{
    "name": "Mint",
    "description": "24 species make up the mint family. Mint is fast growing, one plant of mint will provide more than enough for a single house. Mint is also used a medical plant to help with stomach and chest pains.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun to partial shade",
    "water_req": "1 inch per week",
    "uses": "Used as a cuilnary spice",
    "edible_parts": "Leaves",
    "time_to_fruit": 30
},
{
    "name": "Artichoke",
    "description": "Artichoke is part of the thistle family that is cultivated before the flower is in bloom. Artichoke is native to the Mediterranean area.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "2+ inches 2-3 times a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Flower",
    "time_to_fruit": 90
},
{
    "name": "Cabbage",
    "description": "Cabbage was most commonly domesticated in Europe before 1000BC. Cabbage is a close relative to broccoli, cauilflower and brussels sprouts.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Biennial",
    "sun_req": "Full Sun to partial shade",
    "water_req": "1-2 inches a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Leaves",
    "time_to_fruit": 80
},
{
    "name": "Cauliflower",
    "description": "Cauliflower is part of the mustard family. Most commonly domesticated in Europe before 100AD. Cailiflower has a large amount of vitamin C and B vitamins.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Biennial",
    "sun_req": "Full Sun",
    "water_req": "2 inches of water a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Flower",
    "time_to_fruit": 100
},
{
    "name": "Corn",
    "description": "Corn requires most water during the early reproductive growth stages.",
    "plant_habit": "Grass",
    "life_cycle": "Biennial",
    "sun_req": "Full Sun",
    "water_req": "20-30 inches a year.",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Fruit",
    "time_to_fruit": 25
},
{
    "name": "Zucchini",
    "description": "The zucchini is a summer squash whose fruit are harvested when their immature seeds are still soft and edible. Zucchinis orignated in Mesoamerica but where domesticated in northern Italy in the early 1900s",
    "plant_habit": "Vine",
    "life_cycle": "Annual",
    "sun_req": "Full Sun",
    "water_req": "1 inch of water a week",
    "uses": "Used as a cuilnary squash",
    "edible_parts": "Fruit",
    "time_to_fruit": 55
},
{
    "name": "Spaghetti Squash",
    "description": "Spaghetti squash comes in a variety of shapes, sizes, and colours, including ivory, yellow, and orange, with orange having the most carotene. When cooked the meat of the fruit falls from the flash in ribbons that liik like spaghetti.",
    "plant_habit": "Vine",
    "life_cycle": "Annual",
    "sun_req": "Full Sun",
    "water_req": "1-2 inches a week",
    "uses": "Used as a cuilnary squash",
    "edible_parts": "Fruit",
    "time_to_fruit": 100
},
{
    "name": "Garlic",
    "description": "Garlic is a species in the onion genus. Garlic is native to Central Asia. China produces 80% of the world's supply of garlic.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun",
    "water_req": "1/2 inch of water a week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Fruit",
    "time_to_fruit": 120
},
{
    "name": "Pumpkin",
    "description": "The pumpkin is a winter squash that is native to North America",
    "plant_habit": "Vine",
    "life_cycle": "Annual",
    "sun_req": "Full Sun",
    "water_req": "1 inch per week",
    "uses": "Used as a cuilnary squash",
    "edible_parts": "Fruit",
    "time_to_fruit": 120
},
{
    "name": "Blueberry",
    "description": "Blueberries are related to cranberries and huckleberries. They are native to North America and where introduced into Europe during the 1930s. Blueberries have a large amount of manganese, vitamin K and fiber.",
    "plant_habit": "Shrub",
    "life_cycle": "Perennial",
    "sun_req": "Full Sun to partial shade",
    "water_req": "1 inch a week",
    "uses": "Used as a cuilnary fruit",
    "edible_parts": "Fruit",
    "time_to_fruit": 1000
},
{
    "name": "Arugula",
    "description": "Arugula is an edible plant used as a leaf vegetable for its bitter and peppery flavor.First cultivated by the Romans before 100BC.",
    "plant_habit": "Herb/Forb",
    "life_cycle": "Annual",
    "sun_req": "Full Sun to partial shade",
    "water_req": "1 inch per week",
    "uses": "Used as a cuilnary vegetable",
    "edible_parts": "Fruit",
    "time_to_fruit": 40
}
]