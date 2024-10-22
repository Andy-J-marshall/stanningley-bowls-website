import { useState } from 'react';
import { Button, Card, Col, Collapse } from 'react-bootstrap';

// TODO add a link to FB event?
// TODO add type for props
function NewsItem(props) {
    const title = props.title.toUpperCase();
    const text = props.text;
    const imgSrc = props.imgSrc;

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Col>
                <Card bg="light">
                    <Card.Body>
                        <h3>{title}</h3>
                        <Card.Img
                            style={{ width: '100%', height: 'auto' }}
                            variant="top"
                            src={imgSrc}
                        />
                        <br />
                        <br />
                        {!open && (
                            <Button
                                variant="secondary"
                                onClick={() => setOpen(true)}
                            >
                                SHOW MORE...
                            </Button>
                        )}
                        <Collapse in={open}>
                            <Card.Text>{text}</Card.Text>
                        </Collapse>
                        {open && (
                            <Button
                                variant="secondary"
                                onClick={() => setOpen(false)}
                            >
                                HIDE...
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default NewsItem;