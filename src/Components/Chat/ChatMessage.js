import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { sendMessage } from './../../Store/Actions/chat';

class ChatMessage extends Component {
    constructor (props) {
        super (props);

        this.inputSendText = this.inputSendText.bind(this);
    }

    inputSendText(evn) {
        if (evn.keyCode === 13 && evn.target.value !== '') {
            console.log(evn.target.value);
            this.props.sendText(evn.target.value);
            evn.target.value = '';
        }
    }

    render() {
        return (
            <div className='chat-message'>
                <hr />
                <InputGroup>
                    <Input onKeyDown={this.inputSendText} placeholder="Digite sua mensagem" />
                    <InputGroupAddon addonType='append'>
                        <Button color='success'>Enviar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendText: (msg) => dispatch(sendMessage(msg))
    }
}

export default connect(null, mapDispatchToProps)(ChatMessage);