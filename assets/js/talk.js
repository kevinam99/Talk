let talk = {
    init(socket) {
        let channel = socket.channel('talk:lobby', {})
        channel.join()
        this.listenForChats(channel)
    },

    listenForChats(channel) {
        document.getElementById('chat-form').addEventListener('submit', function(e){
            e.preventDefault()

            let username = document.getElementById('user-name').value
            let userMsg = document.getElementById('user-msg').value

            channel.push('shout', {name: username, body: userMsg})
            
            userMsg = ''
        })
    
        channel.on('shout', payload => {
            let chatbox = document.querySelector('#chat-box')
            let msgBlock = document.createElement('p')

            msgBlock.insertAdjacentHTML('beforeend', `<b>${payload.name}: </b> ${payload.body} `)
            chatbox.appendChild(msgBlock)
        })
    }
}

export default talk