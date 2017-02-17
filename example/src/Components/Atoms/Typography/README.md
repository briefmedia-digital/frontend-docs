# Typography

## Table of Contents

1. [Headers](#headers)

## Headers

1. MainHeader

```javascript
import { MainHeader } from 'Headers';

(
<MainHeader title="Site Title" subtitle="Site Subtitle" />
);
```

| Option         | Default              |  Type              |  Description               |
| :------------- | :-------------       | :-------------     | :-------------             |
| title          | `''`                 | `String`           | Top header, in Script font |
| subtitle       | `''`                 | `String`           | Subtitle, sans-serif font  |


2. ProfileHeader

```javascript
import { ProfileHeader } from 'Headers';

(
<ProfileHeader> Hello World </ProfileHeader>
);
```

| Option         | Default              |  Type              |  Description               |
| :------------- | :-------------       | :-------------     | :-------------             |
| children       | None                 | `String`           | Text that the component is wrapped around   |


3. SectionHeader

```javascript
import { SectionHeader } from 'Headers';

(
<SectionHeader> Hello World </SectionHeader>
);
```

| Option         | Default              |  Type              |  Description               |
| :------------- | :-------------       | :-------------     | :-------------             |
| children       | None                 | `String`           | Text that the component is wrapped around   |
