module.exports = {
  name: "gp",
  description: "Create a new JS page inside src/pages",
  run: async (toolbox) => {
    const { parameters, createComponent } = toolbox;

    await createComponent("src/pages", parameters.first, "js", "js");
  },
};
