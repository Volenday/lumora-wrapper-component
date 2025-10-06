import '@testing-library/jest-dom';

// Mock js-cookie
jest.mock('js-cookie', () => ({
	get: jest.fn(),
	set: jest.fn(),
	remove: jest.fn()
}));

// Mock fetch globally
globalThis.fetch = jest.fn();

// Mock window.location
const mockLocation = {
	href: 'http://localhost:3000',
	assign: jest.fn(),
	replace: jest.fn(),
	reload: jest.fn(),
	origin: 'http://localhost:3000',
	protocol: 'http:',
	host: 'localhost:3000',
	hostname: 'localhost',
	port: '3000',
	pathname: '/',
	search: '',
	hash: ''
};

// Override the href setter to handle relative URLs
Object.defineProperty(mockLocation, 'href', {
	get() {
		return this._href || 'http://localhost:3000';
	},
	set(value) {
		if (value.startsWith('/')) {
			this._href = `http://localhost:3000${value}`;
		} else {
			this._href = value;
		}
	}
});

// Use a different approach to mock location
if (typeof window !== 'undefined') {
	delete (window as any).location;
	(window as any).location = mockLocation;
}

// Mock Response constructor
globalThis.Response = class Response {
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
globalThis.console = {
	...console,
	log: jest.fn(),
	warn: jest.fn(),
	error: jest.fn()
};
