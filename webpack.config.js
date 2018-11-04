
//  webpack.config.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\webpack.config.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\webpack.config.js

//  [S07251664|A01_DIrectory_01.txt::webpack.config.js drc1;^B]

   //  [ DEF1: GC_actual_path_public <1>]
   //  [ DEF1: GC_actual_path_dist <1>]

  //  [ GC_actual_source_JSX top1;]

   //  [ DEF1: GC_build_config <1>]
   //    [ if (env === 'production') top1;]
   //    [ if (env === 'development') top1;]

/* eslint-disable no-console */
/* eslint-disable no-unexpected-multiline */

//  const GC_src_dir = "src";
  const GC_src_dir = "src";
//  const GC_src_dir = "zzz_playground";
    //[ GC_src_dir ref1;]
    //[ GC_src_dir ref2;]

//  yarn run webpack --watch

//  node  webpack.config.js


//  const GC_active_app_file = "sec006c_app.jsx";
//  const GC_active_app_file = "sec007a_app.jsx";
//  const GC_active_app_file = "sec008a_app.jsx";
//  const GC_active_app_file = "sec009a_app.jsx";
//  const GC_active_app_file = "sec010a_app.jsx";
//  sec 10 L85
//  const GC_active_app_file = "sec010a_Redux_101.jsx";
//  sec 10 L88
//  sec010a_Redux_101
//  const GC_active_app_file = "sec010b_L88_destructuring.jsx";
//  sec 10 L90
//  const GC_active_app_file = "sec010a_Redux_101.jsx";
//  sec 10 L91
//  const GC_active_app_file = "sec010b_Redux_101.jsx";
//  const GC_active_app_file = "sec010b_xpr2_Redux_101.jsx";
//  const GC_active_app_file = "sec010b_xpr3_Redux_101.jsx";
//  const GC_active_app_file = "sec010c_L91_Redux_expensify.jsx";
//  const GC_active_app_file = "sec011a_app.jsx";
//  SEC_011 --- 100. The Higher Order Component 15:30
//  const GC_active_app_file = "sec011b_L100_hoc.jsx";
//  const GC_active_app_file = "sec011a_app.jsx";
//  const GC_active_app_file = "sec012a_app.jsx";
  const GC_active_app_file = "sec012a_app.jsx";
//  const GC_active_app_file = "sec010c_L91_Redux_expensify.jsx";
    //[ GC_active_app_file ref1;]
    //[S07251664|A01_DIrectory_01.txt::GC_active_app_file drc1;]
    //[ GC_active_app_file xxx]


//  sec010b_L88_destructuring.jsx
console.log (' ******** GC_active_app_file is ->' + GC_active_app_file);

/*

//const GC_active_project_path = "\\react-course-proj-01\\Indecision-app-01";
//const GC_active_project_path = "/react-course-proj-01/Indecision-app-01";
//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_007_3PCmpn\proj_01\Indecision-app\webpack.config.js
const GC_active_project_path =
                //[ GC_active_project_path ]
//    [   "react-course-proj-01", "Indecision-app-01"   ];
//    [   "proj_01", "Indecision-app"   ];
//    [   "proj_02", "Budget-app"  ];
      [   "proj_02", "Budget-app", "zzz_playground" ];
      //  "K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_010_Redux\proj_02\Budget-app\zzz_playground"
//console.log (' ******** GC_active_project_path is -> ', GC_active_project_path);

 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');


//  SEC_017 --- 180. Babel Polyfill 4:55
//import "@babel/polyfill";

//  SEC_015 --- 155. Creating a Separate Test Database 21:15
const webpack = require('webpack');

//  SEC_015 --- 155. Creating a Separate Test Database 21:15
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test")
  require('dotenv').config( { path: '.env.test' } );
else if (process.env.NODE_ENV === "development")
  require('dotenv').config( { path: '.env.development' } );

const GF_env_is_test_or_development = () => {
  return (
             (process.env.NODE_ENV === "test")
          || (process.env.NODE_ENV === "development")
    );
};

//  SEC_015 --- 155. Creating a Separate Test Database 21:15
console.log (` ******** process.env.NODE_ENV = "${process.env.NODE_ENV}"`);
console.log (` ******** process.env.FIREBASE_AUTH_DOMAIN = "${process.env.FIREBASE_AUTH_DOMAIN}"`);
console.log (` ******** process.env.FIREBASE_DATABASE_URL = "${process.env.FIREBASE_DATABASE_URL}"`);
console.log (` ******** process.env.FIREBASE_PROJECT_ID = "${process.env.FIREBASE_PROJECT_ID}"`);
console.log (` ******** process.env.FIREBASE_STORAGE_BUCKET = "${process.env.FIREBASE_STORAGE_BUCKET}"`);
console.log (` ******** process.env.FIREBASE_MESSAGING_SENDER_ID = "${process.env.FIREBASE_MESSAGING_SENDER_ID}"`);

//  see LF_new_webpack_define_plugin below ...

//  Turn these on as needed.
//  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const GC_mod_path = require ('path');
const GC_webpack = require ('webpack');

const GC_path_public = GC_mod_path.join (__dirname, 'public');
const GC_path_dist = GC_mod_path.join (__dirname, 'dist');


console.log (' --- path is ', __dirname);
console.log ( ' --- public path is ', GC_path_public);


       //    [ EXE1: GC_actual_path_public <1>]
       //    [ EXE2: GC_actual_path_public <1>]
       //    [ EXE3x: GC_actual_path_public <1>]

//[ DEF1: GC_actual_path_public <1>^B]
const GC_actual_path_public = () =>
{
    return GC_path_public;
}

console.log ( ' --- GC_actual_path_public() is ', GC_actual_path_public());



//  entry point -> output


       //    [ EXE1: GC_actual_path_dist <1>]
       //    [ EXE2: GC_actual_path_dist <1>]

//[ DEF1: GC_actual_path_dist <1>^B]
const GC_actual_path_dist = () =>
{
    return GC_path_dist;
}
console.log ( ' --- GC_actual_path_dist () is ', GC_actual_path_dist());


const GC_path_favicon = GC_mod_path.join (__dirname, 'public','images');
            //[ GC_path_favicon a1;]
            //[ GC_path_favicon xxx]
//const GC_path_favicon = "src/images";
const GC_path_favicon_dest = (GF_env_is_test_or_development ()) ?
                             GC_mod_path.join (__dirname, 'images')
                           : GC_mod_path.join (__dirname, 'dist', 'images');
            //[ GC_path_favicon_dest a1;]
            //[ GC_path_favicon_dest xxx]
//const GC_path_favicon_dest = "images";
console.log ( ' --- GC_path_favicon is ', GC_path_favicon);


//const GC_actual_path_styles = GC_mod_path.join (__dirname, GC_src_dir, 'styles');
                                                       //[ GC_src_dir ref1;^B]

const GC_actual_source_JSX = GC_mod_path.join
  //[ GC_actual_source_JSX top1;^B]
  //[ GC_actual_source_JSX ref1;]
                                (__dirname, GC_src_dir, GC_active_app_file);
                                        //[ GC_src_dir ref2;^B]
                                                    //[ GC_active_app_file ref1;^B]
//  sec 10 L85
//  sec 10 L91


//const GC_index_html_template = GC_mod_path.join (__dirname, 'src', 'index_template.html');
const GC_index_html_template = GC_mod_path.join (__dirname, 'src', 'index.html');
  //[ GC_index_html_template ref1;]
  //[ GC_index_html_template xxx]
console.log ( ' --- GC_index_html_template is ', GC_index_html_template);


//    entry: './SEC_006_Webpack/react-course-proj-01/Indecision-app-01/src/sec006b_app.js',
//        path: GC_actual_path_public ('K:/'),


//  SEC_006 --- 54. Setting up Babel with Webpack 9:27

console.log ( ' --- GC_actual_source_JSX is ', GC_actual_source_JSX);
console.log ( ' --- GC_actual_source_JSX is ', GC_mod_path.parse (GC_actual_source_JSX) );


//  SEC_009 --- 77. React-Router 101 20:13
//    devServer:
//    {
//        contentBase: GC_actual_path_public ('K:/'),
//        historyApiFallback: true
//    }

//  SEC_006 --- 56. Source Maps with Webpack 5:16
//    devtool: 'cheap-module-eval-source-map'


//module.exports = {
   //  [S07251664|A01_DIrectory_01.txt::DRC1: GC_build_config <1>]

       //[ DEF1: GC_build_config <1>^B]
function GC_build_config (env)  {

    const LF_loader_with_source_map = (P_loader) =>
    {
        return ( { loader: P_loader, options: { sourceMap: true } } );
    }

    const LF_copy_webpack_plugin = () =>
      //[ LF_copy_webpack_plugin ref1;]
    {
        return new CopyWebpackPlugin (
                //[ {from:'src/images', to:'images'} ], { copyUnmodified: true }
                [ {from: GC_path_favicon, to: GC_path_favicon_dest} ],
                     //[ GC_path_favicon a1;^B]
                                          //[ GC_path_favicon_dest a1;^B]
                { copyUnmodified: true }
            );
    }

    const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      //[ HtmlWebpackPluginConfig ref1;]
      //[ HtmlWebpackPluginConfig xxx]
                  inject: 'body',
                  hash: true,
                  template: GC_index_html_template,
                        //[ GC_index_html_template ref1;^B]
                  filename: 'index.html'
            });


//  SEC_015 --- 155. Creating a Separate Test Database 21:15
    const LF_new_webpack_define_plugin = () => {
      //[ LF_new_webpack_define_plugin ref1;]
            //[S07251664|A01_DIrectory_01.txt::webpack.DefinePlugin drc1;^B]
            return new webpack.DefinePlugin ( {
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            } );
    }


    let L_config_obj = {

//  SEC_017 --- 180. Babel Polyfill 4:55
//        entry: GC_actual_source_JSX,
        entry: [ 'babel-polyfill', GC_actual_source_JSX ],
           //[ GC_actual_source_JSX ref1;^B]
        // entry:
        // {
        //     app: [ GC_actual_source_JSX ],
        //     // vendor: [
        //     //     //'react', 'lodash', 'moment'
        //     //     'moment'
        //     // ],
        // },
        output:
        {
            //path: GC_actual_path_public(),
        //[ EXE3x: GC_actual_path_public <1>^B]
            //  filename: 'bundle.js'
            //filename: '[name].[chunkhash].js'
            filename: '[name].[hash].js'
        },
        module:
        {
            rules :
            [
              {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                //include: APP_DIR,
                exclude: /node_modules/,
                // query  : {
                // presets:['react','es2015']
                //   }
              },
              // {
              //   test: /\.s?css$/,

            // use :
            // [
            //     'style-loader',
            //     'css-loader',
            //     'sass-loader'
            // ]

                {
                    test: /\.s?css$/,
                    use:
                    [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        LF_loader_with_source_map('css-loader'),
                        LF_loader_with_source_map('postcss-loader'),
                        LF_loader_with_source_map('sass-loader')
                    ]
                },
                {
                    test: /\.(jpg|jpeg|gif|png|ico)$/,
                    exclude: /node_modules/,
                    //  loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
                    use: [
                        {
                            loader:'file-loader',
                            options: {
                                //name:"img/[path][name].[ext]"
                                name:"[path][name].[ext]",
                                //context:"./public/images"
                                context:"./"
                            }
                        }
                    ]
                }
            ]
        },
          optimization: {
            // minimizer: [new UglifyJsPlugin()]
          },
          plugins: [

            //  https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
            // load `moment/locale/ja.js` and `moment/locale/it.js`
            new GC_webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

            // Ignore all locale files of moment.js
            new GC_webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

            new CleanWebpackPlugin(GC_actual_path_dist (), {} ),
                         //[ EXE1: GC_actual_path_dist <1>^B]
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
            HtmlWebpackPluginConfig,
        //[ HtmlWebpackPluginConfig ref1;^B]
            new WebpackMd5Hash(),

            LF_copy_webpack_plugin (),
        //[ LF_copy_webpack_plugin ref1;^B]

//  SEC_015 --- 155. Creating a Separate Test Database 21:15
            LF_new_webpack_define_plugin ()
        //[ LF_new_webpack_define_plugin ref1;^B]
        ]
    };


    console.log (`env --- ${env}`)

//    mode: "development",
//    mode: "production",
//    mode: "none",

//[ if (env === 'production') top1;^B]
    if (env === 'production')
    {
        L_config_obj.devtool = 'source-map';
        L_config_obj.mode = "production";
        L_config_obj.output.path = GC_actual_path_dist ();
                         //[ EXE2: GC_actual_path_dist <1>^B]

        L_config_obj.optimization.splitChunks =
        {
              // include all types of chunks
            chunks: 'all'
        }

 //  https://www.npmjs.com/package/webpack-bundle-analyzer

        // L_config_obj.plugins.push(new BundleAnalyzerPlugin());

        // L_config_obj.plugins.push(new BundleAnalyzerPlugin(
        // {
        //     analyzerMode: "disabled",
        //     generateStatsFile: true,
        //     statsFilename: "BundleAnalyzer_01.json",
        //     defaultSizes: "parsed"
        // }
        //     ) );
    }
    else
//[ if (env === 'development') top1;^B]
    if (env === 'development')
    {
        //L_config_obj.devtool = 'cheap-module-eval-source-map';
        L_config_obj.devtool = 'inline-source-map';
        L_config_obj.mode = "development";
        L_config_obj.output.path = GC_actual_path_public();
        //L_config_obj.output.path = GC_actual_path_dist();
                         //[ EXE1: GC_actual_path_public <1>^B]

        //  NOTES in
        //  K:\A01_Udemy\Z01_General_Notes\webpack_optimization_01.txt

        L_config_obj.devServer = {
            //contentBase: GC_dist_path,
            contentBase: GC_actual_path_public(),
               //[ EXE2: GC_actual_path_public <1>^B]
            host: "0.0.0.0",
            port: 9900,

            watchContentBase: true,
            hot: true,
            //  fall back to index.html whenever there is a 404 (unhandled route).
            historyApiFallback: true,

            //  THIS DID NOT WORK - test data did not load
            //  https://stackoverflow.com/questions/47477255/webpack-dev-server-failed-to-load-resource
            //  publicPath: give the path from the folder "public".
            //publicPath: "/dist/"
            //publicPath: GC_actual_path_dist('/') + "/"
            //publicPath: GC_actual_path_public('/') + "/"
        };
    }
    else
        console.log (`   *** BAD PARAMETER for env: ${env}`)

    return L_config_obj;
};


module.exports = GC_build_config;
