0.4.0 (2020-09-30)

Documentation

- Changed file system to fit angularjs architecture to allow for a component based design and stateful routing
- Implemented ProjectModel service
- Added Parse implementation
- Added a build system (gulp.js)

Contributors

- Juan Perret
- Chris Shafer

0.5.0 (2020-10-14)

Documentation

- Fixed 'resolve' issue by doing UI routing correctly
- Fully integrated createProject with parse so that we can submit projects from web app
- Created auth component and subcomponents (login and register).
- Create AuthService to create new users via Parse for the website and give protect the 'app' rout from viewing when not in session.

Contributors

- Juan Perret
- Chris Shafer