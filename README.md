# promptopia

CRUD app to create posts.\
Using nextAuth for login with google.\

## .env file contents

GOOGLE_ID=\
GOOGLE_CLIENT_SECRET= \
MONGODB_URI=\
NEXTAUTH_URL=http://localhost:3000 \
NEXTAUTH_URL_INTERNAL=http://localhost:3000 \
NEXTAUTH_SECRET= \

<br />

**To create GOOGLE_ID, GOOGLE_CLIENT_SECRET go to https://console.cloud.google.com/  -> API and Services -> OAuth consent screen**
\
\
**For NEXTAUTH_SECRET go to https://www.cryptool.org/en/cto/openssl and run $ openssl rand -base64 32  and use generated string**