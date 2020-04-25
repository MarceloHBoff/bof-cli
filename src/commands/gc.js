module.exports = {
  name: "gc",
  description: "Create a new JS component inside src/components",
  run: async (toolbox) => {
    const { parameters, createComponent } = toolbox;

    await createComponent("src/components", parameters.first, "js", "js");
  },
};
