# CQRS
## Description

CQRS (Command Query Responsibility Segregation) is a software architectural pattern that separates the concerns of reading data (queries) from modifying data (commands) in an application. It promotes a clear separation between the models and mechanisms used for reading data and those used for writing data.

## System Process
```
BackEnd --> Command: CreateOrderNeko
         |
         v
     CreateOrderNekoCommand
         |
         +--> Command: updateNekoStock
         +--> Command: pushOrderNekoToCashier
         +--> Command: sendMailToCustomer
```

Result
```
Creating order...
Order created.
Begin pushing to: OrderNekoCreatedEvent
Mail: sending in 3s
Stock: updating in 2s
Cashier: updating in 4s
Stock: updated in 2s
Mail: sent in 3s
Cashier: updated in 4s
```

## Installation

```bash
$ npm install
```
## Database

```bash

# init database
$ npm run db:migrate

# validate schema.prisma
$ npm run db:validate

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Man Nguyen](https://www.linkedin.com/in/ly-minh-man-nguyen-204039147/)

## License

Nest is [MIT licensed](LICENSE).
