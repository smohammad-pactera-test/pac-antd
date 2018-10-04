const path = require("path");
const AntdScssThemePlugin = require('antd-scss-theme-plugin')

module.exports = (storybookBaseConfig, configType) => {
    storybookBaseConfig.plugins.push(
        new AntdScssThemePlugin(path.join(__dirname, '../src', 'theme.scss'))
    )
    storybookBaseConfig.module.rules.push(    
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        //sourceMap: configType !== 'PRODUCTION',
                    },
                },

                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                       // sourceMap: configType !== 'PRODUCTION',
                    },
                },
                AntdScssThemePlugin.themify({loader: 'less-loader', options:{javascriptEnabled: true}})
            ],
        },
            {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                }
            ]
        },
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader',
                options: {
                 // sourceMap: configType !== 'PRODUCTION',
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                 // sourceMap:configType !== 'PRODUCTION',
                  modules: true,
                  camelCase: true,
                  localIdentName: '[name]-[local]-[hash:base64:5]',
                },
              },
              AntdScssThemePlugin.themify({
                loader: 'sass-loader',
                options: {
                 // sourceMap: configType !== 'PRODUCTION',
                },
              }),
            ]
        }
    );

    return storybookBaseConfig;
};