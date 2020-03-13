const router = require("express").Router();
const Projects = require("../helpers/projectModel");

//GET
router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
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
  Projects.get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//POST
router.post("/", (req, res) => {
  const newProject = req.body;
  Projects.insert(newProject)
    .then(() => {
      res.status(200).json(newProject);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//PUT /:id
router.put("/:id", (req, res) => {
  const updateProject = req.body;
  const { id } = req.params;
  Projects.update(id, updateProject)
    .then(updateProject => {
      res.status(200).json(updateProject);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//DEL /:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then(deleteProject => {
      res.status(200).json(deleteProject);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//GET /:id/Action
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  Projects.getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

module.exports = router;
