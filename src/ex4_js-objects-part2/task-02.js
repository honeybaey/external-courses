const createWithoutProto = () => {
  let obj = {};
  return (obj = Object.create(null));
};

module.exports = createWithoutProto;
