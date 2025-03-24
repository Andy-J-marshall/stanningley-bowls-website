import { Button, Card, Collapse } from 'react-bootstrap';
import { NewsItemProps } from '../../types/interfaces';

function NewsItem(props: NewsItemProps) {
    const title = props.title;
    const imgSrc = props.imgSrc;
    const expanded = props.expanded;
    const openingText = props.openingText;
    const mainText = props.mainText;
    const closingText = props.closingText;
    const link = props.link;
    const linkText = props.linkText;
    const callback = props.callback;

    return (
        <Card bg="light">
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title.toUpperCase()}</Card.Title>
                <Card.Img
                    style={{ paddingBottom: '1rem' }}
                    variant="top"
                    src={imgSrc}
                />
                {!expanded && (
                    <div className="d-flex justify-content-end mt-auto">
                        <Button
                            variant="light"
                            onClick={() => callback()}
                            className="w-100"
                        >
                            READ MORE
                        </Button>
                    </div>
                )}
                <Collapse in={expanded}>
                    <div>
                        <Card.Text>{openingText}</Card.Text>
                        <Card.Text>{mainText}</Card.Text>
                        {closingText && <Card.Text>{closingText}</Card.Text>}
                        {linkText && (
                            <Button
                                style={{
                                    marginBottom: '1rem',
                                    backgroundColor: '#0081a4',
                                }}
                            >
                                <a
                                    className="carousel-link"
                                    href={link}
                                    target="_blank"
                                >
                                    {linkText}
                                </a>
                            </Button>
                        )}
                    </div>
                </Collapse>
                {expanded && (
                    <Button variant="light" onClick={() => callback()}>
                        CLOSE
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default NewsItem;
