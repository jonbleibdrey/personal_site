import React, { Component } from 'react'
import Content from '../components/Content';
import HomeText from '../components/HomeText';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_gbek2ba', e.target, 'user_Uy05AImF3eY3v66Dqkz6e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        this.setState({
            disabled: true
        });
    }

    render() {
        return (
            <div>
                <HomeText title={this.props.title}/>
                <Content>
                </Content>
                    <Row className="justify-content-center py-5">
                        <Col xs="7">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group >
                                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                        <Form.Control className="shadow-sm p-3 bg-white rounded rounded-pill"  id="full-name" name="name" type="text" placeholder="Enter full name" value={this.state.name} onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control className="shadow-sm p-3 bg-white rounded rounded-pill" id="email" name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor="message">Message</Form.Label>
                                        <Form.Control className="shadow-sm p-3  bg-white rounded" id="message" name="message" as="textarea" rows="4" placeholder="Leave a message" value={this.state.message} onChange={this.handleChange}/>
                                </Form.Group>

                                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                     Send
                                </Button>
                                    {this.state.emailSent === true && <p className="d-inline success-msg"> Email Sent</p>}
                                    {this.state.emailSent === false && <p className="d-inline err-msg"> Email Not Sent</p>}
                            </Form>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default ContactPage

