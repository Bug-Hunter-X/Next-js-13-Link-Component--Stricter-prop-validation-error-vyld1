```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href={{ pathname: '/about' }}>
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```