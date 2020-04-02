module.export = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("assets", resolve("./src/assets"))
      .set("network", resolve("./src/network"));
  }
};
