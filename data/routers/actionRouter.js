const router = require("express").Router();
const Actions = require("../helpers/actionModel");

//GET
router.get("/", (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//GET /:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Actions.get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//POST
router.post("/", (req, res) => {
  const newAction = req.body;
  Actions.insert(newAction)
    .then(() => {
      res.status(201).json(newAction);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//PUT /:id
router.put("/:id", (req, res) => {
  const UpdateAction = req.body;
  const { id } = req.params;
  Actions.update(id, UpdateAction)
    .then(UpdateAction => {
      res.status(200).json(UpdateAction);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//DELETE /:id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Actions.remove(id)
            .then(deleteAction => {
                res.status(200).json(deleteAction)
            })
            .catch(err => {
                res.status(500).json({
                    errorMessage: `this is an error ${err}`
                })
            })
})

module.exports = router;
