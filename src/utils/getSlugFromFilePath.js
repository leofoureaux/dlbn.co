const getSlugFromFilePath = (filePath) => {
  const pathArr = filePath.split("/");
  return pathArr[pathArr.length - 2];
};

module.exports = getSlugFromFilePath;
