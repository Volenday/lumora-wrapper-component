import '@testing-library/jest-dom';

// Mock js-cookie
jest.mock('js-cookie', () => ({
	get: jest.fn(),
	set: jest.fn(),
	remove: jest.fn()
}));

// Mock fetch globally
global.fetch = jest.fn();

// Mock window.location.href
(window as any).location = {
	href: 'http://localhost:3000',
	assign: jest.fn(),
	replace: jest.fn(),
	reload: jest.fn()
};

// Mock Response constructor
global.Response = class Response {
	ok: boolean;
	status: number;
	statusText: string;
	json: () => Promise<any>;

	constructor(body?: any, init?: ResponseInit) {
		this.ok = init?.status ? init.status >= 200 && init.status < 300 : true;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || 'OK';
		this.json = () => Promise.resolve(body);
	}
} as any;

// Mock console methods to avoid noise in tests
global.console = {
	...console,
	log: jest.fn(),
	warn: jest.fn(),
	error: jest.fn()
};
