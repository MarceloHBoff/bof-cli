module.exports = toolbox => {
  const { template } = toolbox;

  async function createFile(path, name) {
    await template.generate({
      template: `${name}.ejs`,
      target: `${path}/${name}`,
    });
  }

  toolbox.createFile = createFile;
};
