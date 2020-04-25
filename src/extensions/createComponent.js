module.exports = (toolbox) => {
  const {
    filesystem,
    template,
    print: { success, error },
  } = toolbox;

  async function isReactNative() {
    const package = await filesystem.read("package.json", "json");

    return !!package.dependencies["react-native"];
  }

  async function createComponent(folder, name, indexExt, stylesExt) {
    if (!name) {
      error("Name must be specified");
      return;
    }

    await template.generate({
      template:
        indexExt === "tsx" ? "typescriptComponent.tsx.ejs" : "component.js.ejs",
      target: `${folder}/${name}/index.${indexExt}`,
      props: { name },
    });

    await template.generate({
      template: (await isReactNative())
        ? "styles-native.js.ejs"
        : "styles.js.ejs",
      target: `${folder}/${name}/styles.${stylesExt}`,
    });

    success(`Generated ${folder}/${name}.`);
  }

  toolbox.createComponent = createComponent;
};
