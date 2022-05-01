import tsconfig from './tsconfig.json'
import tsconfigPathsJest from 'tsconfig-paths-jest'

const moduleNameMapper = tsconfigPathsJest(tsconfig)


export default {
  testRegex: '__tests__(.+)\\.test\\.ts$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
