/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	transform: {
		'^.+.tsx?$': ['ts-jest', {}]
	}
}
