import {Form, Button} from 'react-bootstrap';

/**
 * @component
 * @description This component renders a form where reviews for a movies are submitted in a text box that
 * others are able to see. This includes a button to submit the review with.
 * 
 * @param {string} defaultValue - prop for the default value of the text area.
 * @param {function} handleSubmit - prop for the function that handles the submission of the review.
 * @param {object} revText - prop for the ref object of the written review input within the text area.
 * @param {string} labelText - prop for the label text of the text area.
 * 
 * @returns {JSX.Element} The rendered ReviewForm component.
 */
const ReviewForm = ({defaultValue, handleSubmit, revText, labelText}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default ReviewForm