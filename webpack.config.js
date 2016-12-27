module.exports = {
    entry: './src/index.js',
    output: {
        path: './',
        filename: '/public/bundle.js'
    },
    devServer: {
        inline: true,
        port: 8001
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                        presets: ['es2015', 'react']
                }
            },
	        {
                test: /\.svg(\?v=\d+.\d+.\d+)?$/,
                loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['file']
	    }
        ]
    }

}
