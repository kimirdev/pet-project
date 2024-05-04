import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { buildPlugins } from "./config/buildPlugins";
import { buildLoaders } from "./config/buildLoaders";
import { buildResolvers } from "./config/buildResolvers";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/types/config";
// const path = require("path");

// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
