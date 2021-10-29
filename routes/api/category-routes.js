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
    const Data = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    console.log("Route 1 running")
    res.status(200).json(Data)
  }catch(err){
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const Data = await Category.create(req.body);
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const Data = await Category.update(req.body, {
      where:{
        id:req.params.id,
      },
    })
    res.status(200).json(Data)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    console.log('delete route running')
    const Data = await Category.destroy({
      where:{
        id:req.params.id,
      },
    })
    res.status(200).json(Data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
