module.exports = {
  name: "gct",
  description: "Create a new typescript component inside src/components",
  run: async (toolbox) => {
    const { parameters, createComponent } = toolbox;

    await createComponent("src/components", parameters.first, "tsx", "ts");
  },
};
