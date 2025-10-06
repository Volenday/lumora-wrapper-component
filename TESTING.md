# Testing Guide for NovaWrapper Component

This document provides comprehensive information about testing the NovaWrapper component using Jest and React Testing Library.

## Test Setup

The project uses the following testing stack:

- **Jest** - JavaScript testing framework
- **React Testing Library** - Simple and complete testing utilities for React components
- **jsdom** - DOM implementation for Node.js (Jest environment)
- **ts-jest** - TypeScript preprocessor for Jest

## Test Files Structure

```
src/lib/components/__tests__/
├── NovaWrapper.test.tsx              # Main comprehensive test suite
├── NovaWrapper.simple.test.tsx       # Simplified test suite (working)
├── NovaWrapper.responsive.test.tsx   # Responsive behavior tests
├── NovaWrapper.tokenRefresh.test.tsx # Token refresh logic tests
├── NovaWrapper.accessibility.test.tsx # Accessibility tests
└── testUtils.tsx                     # Test utilities and helpers
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Run Specific Test File

```bash
npm test NovaWrapper.simple.test.tsx
```

## Test Categories

### 1. Basic Rendering Tests

- Component renders with default props
- Children are rendered correctly
- Custom styles are applied

### 2. Header Functionality Tests

- Header renders when `showHeader` is true
- Header is hidden when `showHeader` is false
- App logo renders when provided
- Header title renders when provided
- Custom header styles are applied

### 3. Sidebar Functionality Tests

- Sidebar renders when `showSidebar` is true
- Sidebar is hidden when `showSidebar` is false
- Sidebar links render with correct paths and icons
- Empty sidebar links array is handled gracefully
- Custom sidebar styles are applied

### 4. Content Area Tests

- Correct margin applied when header is shown
- No margin when header is hidden
- Custom content styles are applied

### 5. Token Refresh Logic Tests

- Token validation and refresh logic
- Error handling for failed token refresh
- Cookie management
- Redirect behavior on token expiry

### 6. Responsive Behavior Tests

- Mobile vs desktop drawer behavior
- Content width adjustments
- Responsive styling

### 7. Accessibility Tests

- Proper ARIA roles and attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Test Utilities

### `testUtils.tsx`

Contains helper functions and mock data:

- `render()` - Custom render function with theme provider
- `mockSidebarLinks` - Sample sidebar navigation data
- `mockAppLogo` - Sample app logo component
- `createTestProps()` - Helper to create test props
- `mockTokenExpiry()` - Helper to mock token expiry times

## Mocking

### js-cookie

```javascript
jest.mock("js-cookie", () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));
```

### fetch API

```javascript
global.fetch = jest.fn();
```

### window.location

```javascript
Object.defineProperty(window, "location", {
  value: {
    href: "http://localhost:3000",
    assign: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
  },
  writable: true,
});
```

## Common Test Patterns

### Testing Component Rendering

```javascript
it("renders component correctly", () => {
  renderWithTheme({ prop: "value" });
  expect(screen.getByTestId("element")).toBeInTheDocument();
});
```

### Testing Conditional Rendering

```javascript
it("renders when condition is true", () => {
  renderWithTheme({ showHeader: true });
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

it("does not render when condition is false", () => {
  renderWithTheme({ showHeader: false });
  expect(screen.queryByRole("banner")).not.toBeInTheDocument();
});
```

### Testing User Interactions

```javascript
it("handles user interaction", async () => {
  renderWithTheme();
  const button = screen.getByRole("button");
  await user.click(button);
  expect(mockFunction).toHaveBeenCalled();
});
```

### Testing Async Operations

```javascript
it("handles async operations", async () => {
  renderWithTheme();
  await waitFor(() => {
    expect(screen.getByText("Loaded content")).toBeInTheDocument();
  });
});
```

## Troubleshooting

### Common Issues

1. **Window.location navigation errors**: These are expected in jsdom and don't affect test functionality
2. **Style assertions failing**: MUI uses CSS-in-JS which can cause style assertion issues
3. **Missing children props**: Ensure all NovaWrapper components in tests have children

### Debugging Tips

1. Use `screen.debug()` to see the rendered DOM
2. Use `--verbose` flag for detailed test output
3. Check console warnings for potential issues
4. Use `waitFor` for async operations

## Coverage Goals

The test suite aims for:

- **Statements**: >90%
- **Branches**: >85%
- **Functions**: >90%
- **Lines**: >90%

## Best Practices

1. **Test behavior, not implementation**: Focus on what the component does, not how it does it
2. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Keep tests simple**: One assertion per test when possible
4. **Use descriptive test names**: Make it clear what each test verifies
5. **Mock external dependencies**: Don't rely on real API calls or external services
6. **Clean up after tests**: Use `beforeEach` and `afterEach` for setup and cleanup

## Contributing

When adding new tests:

1. Follow the existing naming conventions
2. Add appropriate test categories
3. Update this documentation if needed
4. Ensure tests are deterministic and don't rely on external state
5. Add comments for complex test logic
