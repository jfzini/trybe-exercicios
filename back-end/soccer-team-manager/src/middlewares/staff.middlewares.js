const validateUUID = (req, res, next) => {
  const regex = /^([0-9a-f]){8}-(([0-9a-f]){4}-){3}([0-9a-f]){12}$/i;
  const { id } = req.params;
  const pathID = req.path.split('/')[1];

  if (id && regex.test(id)) return next();
  if (pathID && regex.test(pathID)) return next();
  return res.status(400).json({ message: 'O ID informado precisa ser um UUID' });
};

const validatePostFields = (req, res, next) => {
  const fields = ['name', 'position', 'email', 'phone', 'status'];
  if (!fields.every((field) => field in req.body)) {
    res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  } else {
    next();
  }
};

module.exports = { validateUUID, validatePostFields };
