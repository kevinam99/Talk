# Chatter

Chatter is a robust web chat application backed by the scalability and fault tolerance provided by Elixir. For now, Chatter supports only group chats and text messages. 

## Stack
- Elixir
- Phoenix
- HTML, CSS, JavaScript
- Postgres DB

### To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

### To do:
1. Revamp UI.
2. Add user authentication.
3. Add timestamp to messages.
4. Extend application to one-to-one chats.
5. Add support for multimedia messages (images, videos)