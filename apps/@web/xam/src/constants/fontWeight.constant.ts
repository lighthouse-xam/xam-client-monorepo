export const fontWeightUnionList = ['thin', 'light', 'medium', 'semiBold', 'bold'] as const;
export type FontWeightUnion = typeof fontWeightUnionList[number];
// export const fontWeights = {
//   thin: 'spoqaThin', // 100
//   light: 'spoqaLight', // 300
//   medium: 'spoqaRegular', // 400 (default)
//   semiBold: 'spoqaMedium', // 500
//   bold: 'spoqaBold', // 700
// };

export const fontWeights = {
  thin: '100',
  light: '300',
  medium: '400', //  (default)
  semiBold: '500',
  bold: '700',
} as const;
