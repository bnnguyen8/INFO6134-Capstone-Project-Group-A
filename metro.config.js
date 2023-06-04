const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');
module.exports = defaultConfig;

// const { getDefaultConfig } = require('metro-config');
// module.exports = (async () => {
//     const {
//         resolver: { sourceExts }
//     } = await getDefaultConfig();
//     return {
//         transformer: {
//             getTransformOptions: async () => ({
//                 transform: {
//                     experimentalImportSupport: false,
//                     inlineRequires: false
//                 }
//             })
//         },
//         resolver: {
//             sourceExts: [...sourceExts, 'cjs']
//         }
//     };
// })();