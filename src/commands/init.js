module.exports = {
  name: "init",
  description: "Init project with express",
  run: async toolbox => {
    const {
      system,
      parameters,
      createFile,
      filesystem,
      print: { error }
    } = toolbox;

    const name = parameters.first;

    if (!name) {
      error("Project name must be specified");
      return;
    }

    await system.run(`mkdir ${name}`);

    await system.run(`cd ${name} & yarn init -y`);

    await system.run(
      `cd ${name} & yarn add eslint prettier eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier sucrase nodemon -D`
    );
    await system.run(`cd ${name} & yarn add axios express cors dotenv`);

    await createFile(name, ".eslintrc.js");
    await createFile(name, ".prettierrc");
    await createFile(name, "nodemon.json");
    await createFile(name, ".env");
    await createFile(name, ".env.example");
    await createFile(name, ".gitignore");
    await createFile(name, ".editorconfig");

    await createFile(`${name}/src`, "server.js");
    await createFile(`${name}/src`, "app.js");

    let package = await filesystem.read(`${name}/package.json`, "json");
    const scripts = {
      dev: "nodemon src/server.js",
      build: "sucrase ./src -d ./dist --transforms imports",
      start: "node dist/server.js"
    };
    await filesystem.write(`${name}/package.json`, { ...package, scripts });
  }
};
