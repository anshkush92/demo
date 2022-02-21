<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/anshkush92college/demo">
    <img src="https://res.cloudinary.com/dicbnntfh/image/upload/v1644667999/keber_xhkq6u.png" alt="Logo">
  </a>

<h3 align="center">KEBER</h3>

  <p align="center">
    Asymetric Key based Result Viewing/Verifying Sytem
    <!-- <br />
    <a href="https://github.com/anshkush92college/demo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/anshkush92college/demo">View Demo</a>
    ·
    <a href="https://github.com/anshkush92college/demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/anshkush92college/demo/issues">Request Feature</a> -->
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://keber-as-dp-pk.herokuapp.com/)

A website for Result Viewing / Verifying
<br/>
KEBER allows you to have different roles such as Admin, Student or Verifier

### Admin

- Uploads results of the students

### Student

- View/Download the result

### Verifier

- Verify the authencity of the result
  <br/>

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `anshkush92college`, `demo`, `twitter_handle`, `linkedin_username`, `email`, `email_client`, `KEBER`, `Asymetric Key based Result Viewing/Verifying Sytem` -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

## Technologies Used 
### FrontEnd

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Forms
- [EJS](https://ejs.co/)
  - Template Engine for reusing HTML
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Responsive Design 
  - Grids, Flexbox
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Everything :) 
- [Scroll Magic](https://scrollmagic.io/)
  - Split Screen Parallax
- [FontAwesome](https://fontawesome.com/)
  - Icons 

### BackEnd

- [NodeJS](https://nodejs.dev/)
  - Creating own server side code
- [Express](https://expressjs.com/)
  - Enhancing NodeJS
- [Multer](https://www.npmjs.com/package/multer)
  - File Upload / Serving 
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
  - Sending Emails
- [MySQL](https://www.npmjs.com/package/mysql2)
  - Storing the data

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->
## Screenshots
- The screenshots can be found here [Keber-screenshots](https://drive.google.com/drive/folders/1MfWsUIiWpXJkPbgfvBpsFc7bgEx9q3Ku?usp=sharing)

## Thoughts behind the project
- After the failed attempt to get started with Web - Devlopment during Web Month, we decided to give it another try and add Web Development as anothe r skill in our skillsket 

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

The softwares that must be present on users PC to efficiently run this project

- NodeJS

  ```sh
  https://nodejs.dev/download
  ```

- MySQL
  ```sh
  https://dev.mysql.com/downloads/mysql/
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/anshkush92college/demo.git
   ```
2. Go to [Elephant SQL](https://customer.elephantsql.com/instance/create?plan=turtle) and create your database there
    ```sh
    CREATE TABLE newsletter 
    (
        emails VARCHAR(255) PRIMARY KEY
    );

    CREATE TABLE contact_us 
    (
        name varchar(255), 
        email varchar(255), 
        phone_number varchar(11), 
        subject varchar(1000), 
        message varchar(2000)
    );

    CREATE TABLE admin_login (
        email varchar(255) PRIMARY KEY,
        password varchar(255)
    );

    CREATE TABLE admin_upload
    (
        semester_number int, 
        roll_number varchar(11), 
        file_path varchar(2000),
        PRIMARY KEY (semester_number, roll_number)
    );

    CREATE TABLE student_sign_up 
    (
      email varchar(255), 
      roll_number varchar(11),
      PRIMARY KEY (email, roll_number)
    );

    CREATE TABLE student_view_result 
    (
      semester_number int, 
      roll_number varchar(11), 
      file_path varchar(2000),
      PRIMARY KEY (semester_number, roll_number)
    );

    CREATE TABLE verifier_verify_result 
    (
      semester_number int, 
      roll_number varchar(11),
      file_path varchar(2000),
      PRIMARY KEY (semester_number, roll_number)
    );
    ```

3. Navigate to `demo/Backend` in your cloned folder then in there create an `.env` file

   ```sh
    email="sender's_email"
    password="sender's_password"
    database_url="your_elephant_sql_URL"
   ```
   You may run into [this](https://bit.ly/nodemailer-gmail-problem) error when sending emails via nodemailer

4. After creating the `.env` file with all configuration, now open the terminal and in that navigate to `demo/Backend`

   ```sh
   cd "path/demo/Backend"
   ```

5. After navigating to `demo/Backend` on terminal, now run
   ```sh
   npm install
   ```
   to install all dependencies and then run 
   ```sh
   npm start
   ```
   to start the server and then on your browser open
   ```sh
   localhost:3000/
   ```

  <br>

## What's Next 
- [ ] Implement the Authentication and Authorization
- [ ] Use the Concept of Asymetric Key to view and verify the result
- [ ] 2 Factor Authentication for Students 
- [ ] Prevent SQL Injection as no Authentication and Authorization is implemented yet

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

<br>

## Team Members

- [Ansh Singh](https://github.com/anshkush92college) 2020IMT-013
- [Devanshu Patidar](https://github.com/deadmanbmk6) 2020IMT-026
- [Prakhar Kumar Sinha](https://github.com/PkSinha7) 2020IMT-070

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

[contributors-shield]: https://img.shields.io/github/contributors/anshkush92college/demo.svg?style=for-the-badge
[contributors-url]: https://github.com/anshkush92college/demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/anshkush92college/demo.svg?style=for-the-badge
[forks-url]: https://github.com/anshkush92college/demo/network/members
[stars-shield]: https://img.shields.io/github/stars/anshkush92college/demo.svg?style=for-the-badge
[stars-url]: https://github.com/anshkush92college/demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/anshkush92college/demo.svg?style=for-the-badge
[issues-url]: https://github.com/anshkush92college/demo/issues
[license-shield]: https://img.shields.io/github/license/anshkush92college/demo.svg?style=for-the-badge
[license-url]: https://github.com/anshkush92college/demo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: https://res.cloudinary.com/dicbnntfh/image/upload/v1645355300/1_qcivvo.png
