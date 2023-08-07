const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const data = await Category.findAll({
      include: [{model: Product}]
    }
    )
    res.json(data);
  } 
  catch{
    res.status(404).json('Request unsuccessful')
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      where: {
        id: req.params.id
      },
      include: [{model: Product}]
    }
    )
    res.json(data);
  } 
  catch{
    res.status(404).json('Request unsuccessful')
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    await Category.create({ category_name: req.body.category_name})
    res.json('Category successfully added')
  } 
  catch{
    res.status(404).json('Addition unsuccessful')
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    await Category.update({category_name: req.body.category_name},{
      where: {
        id: req.params.id
      }
    })
    res.json('Category successfully updated')
  }
  catch{
    res.status(404).json('Update unsuccessful')
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json('Category successfully deleted')
  }
  catch{
    res.status(404).json('Deletion unsuccessful')
  }
});

module.exports = router;
