const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const Data = await Category.findAll({
      include: [{model: Product}],
    });
    console.log("Route 1 running")
    res.status(200).json(Data)
  }catch(err){
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const category_raw = await Category.findAll({
      include: [{model: Product}],
    });
    console.log("Route 1 running")
    res.status(200).json(category_raw)
  }catch(err){
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
