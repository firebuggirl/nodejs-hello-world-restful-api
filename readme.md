## Homework # 1 The Node.js Master Class



### Task: create a simple "Hello World" API

1) Return a simple welcome message to Postman when a user posts anything to the `hello` route


2)  Return the payload via the console


    - Test Restful API with Postman via `localhost:7777/hello` route via `POST` request with sample data in body to see :

    - send:

     `  {
          "name":"Jane Dreamer",
          "userMessage":"Gone hiking",
          "phone":"2341232345"
          } `

        - User will receive response message via Postman when hello/user data is sent via `localhost:7777/hello`

        - A new message will be printed to the console each time a new hello/user object is created via POST request

        - `This is a Node.js RESTFUL API` will also be printed out to the console as the result of a successful POST request

## Enable support for https

  - add SSL certificate to initiate SSL handshake

      - use `openSSL`

      -  best practice to `gitignore the cert and pem`!!!


  - The x.509 client authentication allows clients to authenticate to servers with certificates rather than with a username and password.

     - ` mkdir https `

     - ` cd https `

     - ` openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
    `


      - answer prompts :

            `US`

            `State`

            `Locality/City`

            `Organization name` (eg., name of company)

            `Organizational Unit Name`(eg., name of company)

            `Common Name`

                - local dev -> `localhost`

                - prod -> `www.example.com` &/or `example.com`//depends on who you're getting SSL Cert from

            `email`

      - http = `port 80`

      - https = `port 443`


  - Re-factor `createServer` function

        - put all server logic in `unifiedServer` function
