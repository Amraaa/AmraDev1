# AmraDev1

A platform for developers to connect. They can create their portofolio by adding their experience, education, skills and other important information of their professional career.

Users can also create small posts and like/dislike and comment on other posts.

![Screenshot (213)](https://user-images.githubusercontent.com/47727396/79884218-2b9a9a80-83f5-11ea-91e5-e69c2ac6f951.png)



# Quick Start 🚀


- Add a default.json file in config folder with the following

{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}

- Install server dependencies

npm install

- Install client dependencies

cd client
npm install

- Run both Express & React from root

npm run dev

- Build for production

cd client
npm run build

- Test production before deploy

NODE_ENV=production node server.js

Check in browser on http://localhost:5000/




