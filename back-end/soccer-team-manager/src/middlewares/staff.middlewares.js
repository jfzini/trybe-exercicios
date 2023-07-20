const validateUUID = (req, res, next) => {
  const regex = /^([0-9a-f]){8}-(([0-9a-f]){4}-){3}([0-9a-f]){12}$/i;
  const { id } = req.params;
  const pathID = req.path.split('/')[1];

  if (id && regex.test(id)) {
    next();
  } else if (pathID && regex.test(pathID)) {
    next();
  } else {
    res.status(400).json({ message: 'O ID informado precisa ser um UUID' });
  }
};


const validatePostFields = (req, res, next) => {
  const { name, position, email, phone, status } = req.body;
  if (!name || !position || !email || !phone || !status) {
    res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }
  else {
    next();
  }
};


module.exports = { validateUUID, validatePostFields };