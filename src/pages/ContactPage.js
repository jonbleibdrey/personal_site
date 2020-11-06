import React, { Component } from 'react'
import Content from '../components/Content';
import HomeText from '../components/HomeText';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ContactPage extends Component {

    constructor(props) {
        super(props);

        this.state ={
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,

        }
    }

    render() {
        return (
            <div>
                <HomeText title={this.props.title}/>

                <Content>
            
                </Content>
                    <Form>

                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg"> Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg"> Email Not Sent</p>}

                    </Form>
           </div>
        )
    }
}

export default ContactPage

