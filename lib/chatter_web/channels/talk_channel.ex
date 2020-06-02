defmodule ChatterWeb.TalkChannel do
  use ChatterWeb, :channel

  alias Chatter.Chats

  @impl true
  def join("talk:lobby", _payload, socket) do
    # if authorized?(payload) do
      {:ok, socket}
    # else
    #   {:error, %{reason: "unauthorized"}}
    # end
  end



  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (talk:lobby).
  @impl true
  def handle_in("shout", payload, socket) do
	Chats.create_message(payload)
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
#   defp authorized?(_payload) do
#     true
#   end
end
