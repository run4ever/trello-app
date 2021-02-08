// // module.exports = (env) => ({
// //    settings: {
// //       cors: {
// //          enabled: true, // tried true and false
// //          origin: ['*'], //allow all origins
// //          headers: ['*'], //allow all headers
// //       },
// //    },
// // });
// module.exports = {
//    load: {
//       before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
//       order: [
//          "Define the middlewares' load order by putting their name in this array is the right order",
//       ],
//       after: ['parser', 'router'],
//    },
//    settings: {
//       cors: {
//          enabled: true, // tried true and false
//          origin: ['*'], //allow all origins
//          headers: ['*'], //allow all headers
//       },
//       timer: {
//          enabled: true,
//       },
//    },
// };