# Teamnest API Support Document

## Overview

The **Teamnest API** is a RESTful service designed to provide seamless integration with the Teamnest platform. It allows developers to interact with Teamnest's core features, such as user management, project tracking, task management, and reporting.

This document provides guidance on setting up, using, and troubleshooting the Teamnest API.

## Table of Contents

- [Teamnest API Support Document](#teamnest-api-support-document)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Authentication](#authentication)
  - [API Endpoints](#api-endpoints)
    - [User Management](#user-management)
    - [Project Management](#project-management)
    - [Task Management](#task-management)
  - [Examples](#examples)
    - [Create a User](#create-a-user)
    - [Fetch Projects](#fetch-projects)
  - [Error Handling](#error-handling)
  - [Rate Limiting](#rate-limiting)
  - [Support](#support)
    - [FAQs](#faqs)
    - [Contact Us](#contact-us)
  - [Contributing](#contributing)

## Getting Started

### Prerequisites

Before using the Teamnest API, ensure you have the following:

- An active Teamnest account.
- An API key (contact your administrator or generate one from the Teamnest dashboard).
- A working knowledge of RESTful APIs and HTTP methods.

### Installation

The Teamnest API is accessible via HTTP requests. No additional software installation is required. You can use tools like `curl`, [Postman](https://www.postman.com/), or any HTTP client in your preferred programming language.

### Authentication

All requests to the Teamnest API must include an API key for authentication. Include the API key in the `Authorization` header of your requests:

```http
Authorization: Bearer YOUR_API_KEY
```

## API Endpoints

### User Management

- Create a User: `POST /api/v1/users`
- Get User Details: `GET /api/v1/users/{userId}`
- Update User: `PUT /api/v1/users/{userId}`
- Delete User: `DELETE /api/v1/users/{userId}`

### Project Management

- Create a Project: `POST /api/v1/projects`
- List Projects: `GET /api/v1/projects`
- Get Project Details: `GET /api/v1/projects/{projectId}`
- Update Project: `PUT /api/v1/projects/{projectId}`
- Delete Project: `DELETE /api/v1/projects/{projectId}`

### Task Management

- Create a Task: `POST /api/v1/tasks`
- List Tasks: `GET /api/v1/tasks`
- Get Task Details: `GET /api/v1/tasks/{taskId}`
- Update Task: `PUT /api/v1/tasks/{taskId}`
- Delete Task: `DELETE /api/v1/tasks/{taskId}`

## Examples

### Create a User

```http
POST /api/v1/users
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "developer"
}
```

### Fetch Projects

```http
GET /api/v1/projects
Authorization: Bearer YOUR_API_KEY
```

## Error Handling

The Teamnest API uses standard HTTP status codes to indicate success of failure:

- `200 OK`: Request succeeded.
- `400 Bad Request`: Invalid input or missing parameters.
- `401 Unauthorized`: Missing or invalid API key.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Server side error.

Errors include a JSON response with details:

```json
{
  "error": "Invalid input",
  "message": "The email field is required."
}
```

## Rate Limiting

To ensure fair usage, the Teamnest API enforces rate limits:

- **100 requests per minute** per API key.
- Exceeding the limit will result in a `429 Too Many Requests` response.

## Support

### FAQs

1. **How do I get an API key?**
   1. API keys can be generated from the Teamnest dashboard under **Settings > API Keys**.
2. **What should I do if a get a `401 Unauthorized` error?**
   1. Ensure your API key is correct and included in the `Authorization` header.
3. **Where can I find the API documentation?**
   1. The full API documentation is available at [https://api.teamnest.com/docs](https://api.teamnest.com/docs).

### Contact Us

For additional support, contact the Teamnest support team:

- Email: [hellostephenwm@gmail.com](mailto:hellostephenwm@gmail.com)

## Contributing

If you'd like to contribute to the Teamnest API project, please read our [Contributing Guidelines](./CONTRIBUTING.md).

---

Thank you for using the Teamnest API! We're happy to help you succeed! 👌
