
//  webpack.config.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\webpack.config.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\webpack.config.js

   //  [ DEF1: GC_actual_path_public <1>]
   //  [ DEF1: GC_actual_path_dist <1>]

   //  [ DEF1: GC_build_config <1>]
   //    [ if (env === 'production') top1;]
   //    [ if (env === 'development') top1;]


//  yarn run webpack --watch

//  node  webpack.config.js


//  const GC_active_app_folder = "SEC_006_Webpack";
//  const GC_active_app_folder = "SEC_007_3PCmpn";
//  const GC_active_app_folder = "SEC_008_Styling_React";
//  const GC_active_app_folder = "SEC_009_React_Router";
//  const GC_active_app_folder = "SEC_010_Redux";
//  const GC_active_app_folder = "SEC_011_React_with_Redux";
//  const GC_active_app_folder = "SEC_012_Testing_Your_Application";
const GC_active_app_folder = "a01_final_projects";
  //[ GC_active_app_folder ref5;]
  //[ GC_active_app_folder xxx]
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
  const GC_active_app_file = "sec012a_app.jsx";
    //[ GC_active_app_file ref1;]
    //[ GC_active_app_file ref2;]
    //[S07251664|A01_DIrectory_01.txt::GC_active_app_file drc1;]
    //[ GC_active_app_file xxx]

//    entry: GC_actual_source_JSX,
//    entry: GC_redux_playground_JSX,

//  sec010b_L88_destructuring.jsx
//console.log (' ******** GC_active_app_folder is ->' + GC_active_app_folder);
console.log (' ******** GC_active_app_file is ->' + GC_active_app_file);

//  const GC_course_section_path =
//        "K:\\aaa_TransZ_DT201607\\Ralph\\Udemy\\C023_Complete_React_Web_Dev\\Sections\\";
        // "/aaa_TransZ_DT201607/Ralph/Udemy/C023_Complete_React_Web_Dev/Sections/"
  const GC_course_section_path =
//    [   "aaa_TransZ_DT201607", "Ralph", "Udemy", "C023_Complete_React_Web_Dev", "Sections"  ];
//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\webpack.config.js
        ["A01_Udemy", "C023_Complete_React_Web_Dev", "Sections"];
//console.log (' ******** GC_course_section_path is ->', GC_course_section_path);


//const GC_active_project_path = "\\react-course-proj-01\\Indecision-app-01";
//const GC_active_project_path = "/react-course-proj-01/Indecision-app-01";
//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_007_3PCmpn\proj_01\Indecision-app\webpack.config.js
const GC_active_project_path =
//    [   "react-course-proj-01", "Indecision-app-01"   ];
//    [   "proj_01", "Indecision-app"   ];
//    [   "proj_02", "Budget-app"  ];
      [   "proj_02", "Budget-app", "zzz_playground" ];
      //  "K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_010_Redux\proj_02\Budget-app\zzz_playground"
//console.log (' ******** GC_active_project_path is -> ', GC_active_project_path);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin')

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

/*******************************************************************
const xxxGC_actual_source_JSX = './' + GC_active_app_folder
                                  + GC_active_project_path
                                  + '/src/'
                                  + GC_active_app_file;
 *******************************************************************/

       //    [ EXE1: GC_actual_path_dist <1>]

//[ DEF1: GC_actual_path_dist <1>^B]
const GC_actual_path_dist = () =>
{
    return GC_path_dist;
}
console.log ( ' --- GC_actual_path_dist () is ', GC_actual_path_dist());


const GC_path_favicon = GC_mod_path.join (__dirname, 'public','images');
//const GC_path_favicon = "src/images";
const GC_path_favicon_dest = GC_mod_path.join (__dirname, 'images');
//const GC_path_favicon_dest = "images";
console.log ( ' --- GC_path_favicon is ', GC_path_favicon);


const GC_actual_path_styles = GC_mod_path.join (__dirname, 'src', 'styles');

const GC_actual_source_JSX = GC_mod_path.join
                                (__dirname, 'src', GC_active_app_file);
                                               //[ GC_active_app_file ref1;^B]


const GC_index_html_template = GC_mod_path.join (__dirname, 'src', 'index_template.html');
  //[ GC_index_html_template ref1;]
  //[ GC_index_html_template xxx]
console.log ( ' --- GC_index_html_template is ', GC_index_html_template);


//  sec 10 L85
            // GC_course_section_path[3],
            // GC_course_section_path[4],
const GC_redux_playground_JSX =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            //  "./",
            GC_active_app_folder,
        //[ GC_active_app_folder ref5;^B]
            GC_active_project_path[0],
            GC_active_project_path[1],
            GC_active_project_path[2],
            GC_active_app_file
        //[ GC_active_app_file ref2;^B]
        );

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

//  GC_redux_playground_JSX
//    entry: GC_actual_source_JSX,
//    entry: GC_redux_playground_JSX,


//module.exports = {
   //  [S07251664|A01_DIrectory_01.txt::DRC1: GC_build_config <1>]

       //[ DEF1: GC_build_config <1>^B]
function GC_build_config (env)  {

    const LF_loader_with_source_map = (P_loader) =>
    {
        return ( { loader: P_loader, options: { sourceMap: true } } );
    }

    const LF_copy_webpack_plugin = () =>
    {
        return new CopyWebpackPlugin (
                //[ {from:'src/images', to:'images'} ], { copyUnmodified: true }
                [ {from: GC_path_favicon, to: GC_path_favicon_dest} ],
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

    let L_config_obj = {

        entry: GC_actual_source_JSX,
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
            filename: '[name].[chunkhash].js'
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
                   loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
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

            new CleanWebpackPlugin(GC_actual_path_dist ('K:/'), {} ),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
            HtmlWebpackPluginConfig,
        //[ HtmlWebpackPluginConfig ref1;^B]
            new WebpackMd5Hash(),
            LF_copy_webpack_plugin ()
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
                         //[ EXE1: GC_actual_path_dist <1>^B]

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

            //  fall back to index.html whenever there is a 404 (unhandled route).
            historyApiFallback: true,

            //  THIS DID NOT WORK - test data did not load
            //  https://stackoverflow.com/questions/47477255/webpack-dev-server-failed-to-load-resource
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
