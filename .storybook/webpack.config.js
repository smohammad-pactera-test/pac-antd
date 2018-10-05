const path = require("path");
const AntdScssThemePlugin = require('antd-scss-theme-plugin')

module.exports = (storybookBaseConfig, configType) => {
    storybookBaseConfig.plugins.push(
        new AntdScssThemePlugin(path.join(__dirname, '../src', 'theme.scss'))
    )
    storybookBaseConfig.module.rules.push(
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                AntdScssThemePlugin.themify({
                    loader: "sass-loader", // compiles Sass to CSS,
                    options: {
                        sourceMap: configType !== 'PRODUCTION',
                    }
                })
            ]
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        sourceMap: configType !== 'PRODUCTION',
                    },
                },

                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: configType !== 'PRODUCTION',
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
        }
    );

    return storybookBaseConfig;
};