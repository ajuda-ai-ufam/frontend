## :woman_technologist: Technologies

 <p align="center">

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />

</p>

# About
Repository of the Super Monitoria project developed at IComp with the support of SUPER.

# Prerequisites

Make sure you have the following dependencies installed:
- [Node JS](https://nodejs.org/pt-br)
- [Yarn](https://yarnpkg.com)


## :tada: How to run

```bash
# Clone this repo
$ git clone https://github.com/ajuda-ai-ufam/frontend.git

# change to project directory
$ cd frontend

# Install the dependencies
$ yarn install -f

# Create a .env file, at the root of the project, with the content:
# obs: end with a '/' at the end of the path 
# backend_path_example=http://localhost:3003/
$ REACT_APP_API_BASE_URL={your_backend_path_here}/

# To run
$ yarn start


# Ready! your frontend is running on http://localhost:3000
```

## Available Scripts

Within the project you can execute the commands:


```bash 
# Run the tests with jest.

yarn test

# To build your project to deploy.

yarn build
```

See the section about [deploy](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Additional Information

Before contributing to the project, you are advised to read the following material:

- [Commit pattern](docs/commit-rules.md)
