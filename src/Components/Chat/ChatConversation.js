import React, { Component } from 'react';
import { Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';

class ChatConversation extends Component {

    renderMessage(msg, autor) {
        return (
            <div>
                {
                    autor === 'user' && <span>
                        <Badge color='primary'>você disse:</Badge>
                        <Alert color='primary'>{msg}</Alert>
                    </span>
                }
                {
                    autor === 'bot' && <span>
                        <Badge color='warning'>chatbot disse:</Badge>
                        <Alert color='warning'>Olá, como posso te ajudar?</Alert>
                    </span>
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.messages.map(key => {
                        return this.renderMessage(key, 'user')
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps, null)(ChatConversation);