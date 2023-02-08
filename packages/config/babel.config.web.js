module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@hooks': './src/hooks',
          '@helpers': './src/helpers',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@fileManager': './src/fileManager',
          '@queryClient': './src/queryClient',
          '@styles': './src/styles',
          '@mmvk': './src/mmvk',
          // "@[FOLDER_NAME]": "./src/[FOLDER_NAME]",
        },
      },
    ],
  ],
};
