# Messages


1. Error Message
```javascript
import { ErrorMessage } from 'Mesages';

(
<ErrorMessage { ...props.githubUser } />
);
```

| Option         | Default              |  Type              |  Description               |
| :------------- | :-------------       | :-------------     | :-------------             |
| message        | `''`                 | `String`           | Error message text         |
| onClick        | `fn => ()`           | `Function`         | Function to run after being clicked on |
