const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const data = await Tag.findAll({
      include: [{model: Product}]
    }
    )
    res.status(200).json(data);
  } 
  catch{
    res.status(404).json('Request unsuccessful')
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const data = await Tag.findAll({
      where: {
        id: req.params.id
      },
      include: [{model: Product}]
    }
    )
    res.status(200).json(data);
  } 
  catch{
    res.status(404).json('Request unsuccessful')
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create({ tag_name: req.body.tag_name})
    res.status(200).json(newTag)
  } 
  catch{
    res.status(404).json('Addition unsuccessful')
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    await Tag.create({ tag_name: req.body.tag_name})
    res.status(200).json('Tag successfully updated')
  } 
  catch{
    res.status(404).json('Update unsuccessful')
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json('Tag successfully deleted')
  }
  catch{
    res.status(404).json('Deletion unsuccessful')
  }
});

module.exports = router;
