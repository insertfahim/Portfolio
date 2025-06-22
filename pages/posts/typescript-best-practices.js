import {
  Container,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  OrderedList,
  Image,
  Code,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Post = () => (
  <Layout title="TypeScript Best Practices: Writing Maintainable Code">
    <Container>
      <Heading as="h1" fontSize={24} mb={4}>
        TypeScript Best Practices: Writing Maintainable Code
      </Heading>
      <Text color="gray.500" fontSize="sm" mb={8}>
        July 1, 2025 • 14 min read
      </Text>
      <Image
        src="/images/TypeScript Best Practices Writing Maintainable Code.png"
        alt="TypeScript Best Practices"
        borderRadius="lg"
        w="full"
        mb={6}
      />
      <P>
        TypeScript has become the standard for building large-scale JavaScript
        applications. Its type system helps catch errors early, improves
        developer experience, and makes code more maintainable. However,
        writing good TypeScript code requires understanding best practices
        and avoiding common pitfalls. This guide covers essential patterns
        and techniques for writing clean, maintainable TypeScript code.
      </P>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Type System Fundamentals
      </Heading>
      <P>
        Understanding TypeScript&apos;s type system is crucial for writing
        effective code. Let&apos;s start with the fundamentals.
      </P>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Prefer Interfaces Over Type Aliases
      </Heading>
      <P>
        For object shapes, prefer interfaces over type aliases. Interfaces
        are more extensible and provide better error messages.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Good - Interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Extending interfaces
interface AdminUser extends User {
  permissions: string[];
}

// Bad - Type alias for object shapes
type User = {
  id: number;
  name: string;
  email: string;
};

// Good - Type alias for unions, primitives, or complex types
type Status = 'loading' | 'success' | 'error';
type ID = string | number;
type Callback<T> = (data: T) => void;`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Use Strict Type Checking
      </Heading>
      <P>
        Enable strict mode in your TypeScript configuration for better type
        safety.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Function and Method Design
      </Heading>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Explicit Return Types
      </Heading>
      <P>
        Use explicit return types for public APIs and complex functions to
        improve code clarity and catch errors early.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Good - Explicit return type
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Good - Async functions
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

// Good - Complex return types
function processData<T>(data: T[]): { result: T[]; count: number } {
  return {
    result: data.filter(item => item !== null),
    count: data.length
  };
}`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Function Overloading
      </Heading>
      <P>
        Use function overloading to provide multiple signatures for the same
        function.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Function overloading
function createElement(tag: 'div'): HTMLDivElement;
function createElement(tag: 'span'): HTMLSpanElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag) as HTMLElement;
}

// Usage
const div = createElement('div'); // Type: HTMLDivElement
const span = createElement('span'); // Type: HTMLSpanElement`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Advanced Type Patterns
      </Heading>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Generic Types
      </Heading>
      <P>
        Use generics to create reusable, type-safe components and functions.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic class
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

// Usage
const stringContainer = new Container<string>('hello');
const numberContainer = new Container<number>(42);`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Conditional Types
      </Heading>
      <P>
        Use conditional types to create dynamic type relationships.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Conditional type
type NonNullable<T> = T extends null | undefined ? never : T;

// Mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Utility types
type UserWithoutId = Omit<User, 'id'>;
type UserOptional = Partial<User>;
type UserReadonly = Readonly<User>;`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Error Handling and Validation
      </Heading>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Result Types
      </Heading>
      <P>
        Use result types to handle errors in a type-safe way.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Result type pattern
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

// Usage
function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { success: false, error: 'Division by zero' };
  }
  return { success: true, data: a / b };
}

// Handling results
function handleDivision(a: number, b: number): void {
  const result = divide(a, b);
  if (result.success) {
    console.log('Result:', result.data);
  } else {
    console.error('Error:', result.error);
  }
}`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Input Validation
      </Heading>
      <P>
        Use type guards and validation functions to ensure data integrity.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Type guards
function isUser(obj: any): obj is User {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string'
  );
}

// Validation function
function validateUser(user: unknown): User {
  if (!isUser(user)) {
    throw new Error('Invalid user data');
  }
  return user;
}

// Usage
function processUserData(data: unknown): void {
  try {
    const user = validateUser(data);
    // user is now typed as User
    console.log(user.name);
  } catch (error) {
    console.error('Invalid user data:', error);
  }
}`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        React and TypeScript
      </Heading>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Component Props
      </Heading>
      <P>
        Define clear, reusable prop types for React components.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Component props interface
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

// Functional component
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Generic component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Custom Hooks
      </Heading>
      <P>
        Create type-safe custom hooks with proper return types.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Custom hook with proper typing
interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function useCounter(initialValue: number = 0): UseCounterReturn {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

// Async hook
interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

function useApi<T>(url: string): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Common Anti-Patterns to Avoid
      </Heading>
      <Alert status="warning" mb={6}>
        <AlertIcon />
        <Box>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            These patterns might seem convenient but can lead to type safety
            issues and maintenance problems.
          </AlertDescription>
        </Box>
      </Alert>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Using any:</Text> Avoid the any type as it
          defeats the purpose of TypeScript
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Type Assertions:</Text> Use type guards
          instead of type assertions when possible
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Optional Chaining Everywhere:</Text> Design
          your types to be explicit about what can be undefined
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Complex Union Types:</Text> Break down
          complex unions into smaller, more manageable types
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Ignoring Compiler Errors:</Text> Fix type
          errors instead of using type assertions or any
        </ListItem>
      </UnorderedList>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Bad - Using any
function processData(data: any): any {
  return data.map(item => item.value);
}

// Good - Proper typing
function processData<T extends { value: unknown }>(data: T[]): T['value'][] {
  return data.map(item => item.value);
}

// Bad - Type assertion
const user = response.data as User;

// Good - Type guard
if (isUser(response.data)) {
  const user = response.data; // Properly typed
}`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Configuration and Tooling
      </Heading>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        ESLint and Prettier
      </Heading>
      <P>
        Configure ESLint and Prettier for consistent code style and catch
        potential issues.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    '@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-interface': 'error'
  }
};

// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}`}
      </Code>
      <Heading as="h3" fontSize={16} mt={6} mb={3}>
        Path Mapping
      </Heading>
      <P>
        Use path mapping to create cleaner imports and better project
        organization.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"],
      "@/types/*": ["src/types/*"]
    }
  }
}

// Usage
import { Button } from '@/components/Button';
import { formatDate } from '@/utils/date';
import { User } from '@/types/user';`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Testing with TypeScript
      </Heading>
      <P>
        Write type-safe tests using Jest and TypeScript.
      </P>
      <Code p={4} bg="whiteAlpha.200" borderRadius="md" display="block" mb={6}>
        {`// Test utilities
interface TestUser {
  id: number;
  name: string;
  email: string;
}

const createTestUser = (overrides: Partial<TestUser> = {}): TestUser => ({
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
  ...overrides
});

// Test with proper typing
describe('UserService', () => {
  it('should create a user', async () => {
    const userData = createTestUser({ name: 'John Doe' });
    const result = await createUser(userData);
    
    expect(result).toMatchObject(userData);
    expect(result.id).toBeDefined();
  });
});

// Mock functions with proper types
const mockFetch = jest.fn<Promise<Response>, [string]>();

beforeEach(() => {
  mockFetch.mockClear();
});`}
      </Code>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Performance Considerations
      </Heading>
      <P>
        TypeScript can impact build performance. Here are some optimization
        tips:
      </P>
      <UnorderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Incremental Compilation:</Text> Enable
          incremental compilation for faster rebuilds
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Project References:</Text> Use project
          references to split large codebases
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Skip Lib Check:</Text> Skip library
          checking in development for faster builds
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Exclude Files:</Text> Exclude unnecessary
          files from compilation
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Best Practices Summary
      </Heading>
      <OrderedList mb={6} pl={6}>
        <ListItem>
          <Text fontWeight="bold">Use Strict Mode:</Text> Enable strict
          TypeScript configuration
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Prefer Interfaces:</Text> Use interfaces
          for object shapes, types for unions and primitives
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Explicit Return Types:</Text> Define
          return types for public APIs
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Avoid any:</Text> Use proper types
          instead of any
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Use Generics:</Text> Create reusable,
          type-safe components
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Type Guards:</Text> Use type guards for
          runtime type checking
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Error Handling:</Text> Use result types
          for type-safe error handling
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Consistent Naming:</Text> Use consistent
          naming conventions for types
        </ListItem>
      </OrderedList>
      <Heading as="h2" fontSize={20} mt={8} mb={4}>
        Conclusion
      </Heading>
      <P>
        TypeScript is a powerful tool that can significantly improve code
        quality and developer experience when used correctly. By following
        these best practices, you can write more maintainable, type-safe
        code that scales with your application.
      </P>
      <P>
        Remember that TypeScript is a tool to help you write better code,
        not a replacement for good software engineering practices. Use it
        thoughtfully and always consider the trade-offs between type safety
        and code complexity.
      </P>
      <Alert status="info" mb={6}>
        <AlertIcon />
        <Box>
          <AlertTitle>Key Takeaway</AlertTitle>
          <AlertDescription>
            Start with strict TypeScript configuration and gradually adopt
            these patterns as your project grows. The investment in proper
            typing pays off in reduced bugs and better maintainability.
          </AlertDescription>
        </Box>
      </Alert>
    </Container>
  </Layout>
)

export default Post 