module.exports = {
  name: "gpage",
  description: "Create a new page inside src/pages",
  run: async toolbox => {
    const { parameters, createComponent } = toolbox;

    await createComponent("src/pages", parameters.first);
  }
};
