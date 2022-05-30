module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extenions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          src: './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
