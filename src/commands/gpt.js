module.exports = {
  name: "gpt",
  description: "Create a new typescript page inside src/pages",
  run: async (toolbox) => {
    const { parameters, createComponent } = toolbox;

    await createComponent("src/pages", parameters.first, "tsx", "ts");
  },
};
