# Card

```javascript
import { Card } from 'Card';

(
<Card { ...props.githubUser } />
);
```

| Option         | Default              |  Type              |  Description               |
| :------------- | :-------------       | :-------------     | :-------------             |
| avatar_url     | `''`                 | `String`           | Image src url              |
| name           | `''`                 | `String`           | Github user's name         |
| login          | `''`                 | `String`           | Github user's display name |
| public_repos   | `[]`                 | `Array`           | List of public repos        |
