
//  server_135.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\
//  proj_02\Budget-app\A02_sec013_135_server\server_135.js

//  node A02_sec013_135_server\server_135.js

const GC_express = require('express');
const GC_app = GC_express();
const GC_path = require('path');
const GC_public_path = GC_path.join(__dirname, '..', 'public');
const GC_dist_path = GC_path.join(__dirname, '..', 'dist');
const GC_default_path = GC_path.join(GC_public_path, 'index.html');
//const GC_default_path = GC_path.join(GC_dist_path, 'index.html');

//const GC_port = process.env.port || 3000;
const GC_port = process.env.PORT || 3000;
const GC_port_set_from_env = !! process.env.PORT;

const webpack = require("webpack");

//import webpackMiddleware from 'webpack-dev-middleware';
//import webpackConfig from '../webpack.config.js';
// const webpackMiddleware = require ('webpack-dev-middleware');
// const webpackConfig = require ('../webpack.config.js');

/**********************************************************/

const webpackConfig = require ('../webpack.config.js');

//------------------------------------------------------------------
//    The following was lifted from the webpack node API docs

//  https://webpack.js.org/api/node/
//  https://webpack.js.org/api/node/#error-handling

const config_obj =  webpackConfig ('production');

webpack(
  // Configuration Object
  config_obj,
 (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  // Log result...
});

/**********************************************************/

//  use the middleware GC_express.static(GC_public_path)
//GC_app.use(GC_express.static(GC_public_path));
GC_app.use(GC_express.static(GC_dist_path));
//  GC_app.use(webpackMiddleware(webpack(webpackConfig('production'))));


function GF_unhandled_requests (req, res)
{
    res.sendFile(GC_default_path);
}

            //  fall back to index.html whenever there is a 404 (unhandled route).

//  match all unmatched routes --- *
GC_app.get ('*', GF_unhandled_requests);
//  path

function listen_handler ()
{
    console.log (`server is up --- port is ${GC_port} --- port_set_from_env ${GC_port_set_from_env}`);
}

GC_app.listen(GC_port, listen_handler);
  //[S07251664|A01_DIrectory_01.txt::GC_app.listen drc1;^B]
