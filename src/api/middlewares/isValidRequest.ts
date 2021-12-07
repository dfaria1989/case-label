const requestIsValid = (req: any, res: any, next: any) => {
  if ((req.body instanceof Object && Object.keys(req.body).length > 0) || req.body instanceof Array) {
    next();
    return;
  }
  return res.status(400).json({ message: 'invalid input type!' });
};

export default requestIsValid;
