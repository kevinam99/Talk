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

            if(userMsg == ''){
                document.getElementById('empty-text').innerHTML = "Min length of message has to be 2 chars."
            }

            else {
                channel.push('shout', {name: username, body: userMsg})
                document.getElementById('empty-text').innerHTML = ""
                document.getElementById('user-msg').value = ''
            }
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