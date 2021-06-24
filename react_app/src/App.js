import Form from "@rjsf/bootstrap-4"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"

const schema = {
  "title": "Настройки",
  "type": "object",
  "submit": "Запустить",
  "required": [
    "start"
  ],
  "properties": {
    "swap": {
      "type": "boolean",
      "title": "swap",
      "default": false
    },
    "endian": {
      "type": "string",
      "title": "endian",
      "enum": ["little", "big"],
      "default": "little"
    },
    "period": {
      "type": "number",
      "title": "период обновлений, сек",
      "enum": [1, 5, 10, 15, 30, 60],
      "default": 10,
    },
    "port": {
      "type": "number",
      "title": "порт (0..65533)",
      "minimum": 0,
      "maximum": 65535,
      "default": 502
    },
    "start": {
      "type": "number",
      "title": "стартовый регистр (0..65533)",
      "minimum": 0,
      "maximum": 65533,
      "default": 30001
    }
  }
}

const uiSchema = {
  "start": {
    "ui:autofocus": true
  }
}

const App = () => {
  return <Container fluid>
      <Row>
        <Col xs={5}>
          <h5>Значения</h5>
        </Col>
        <Col xs={5}>
          <h5>Журнал</h5>
        </Col>
        <Col xs={2}>
          <Form schema={schema} uiSchema={uiSchema}>
            <ButtonGroup>
              <Button variant="primary" type="submit">Save</Button>
              <Button variant="success" type="submit">On</Button>
              <Button variant="danger" type="submit">Off</Button>
            </ButtonGroup>
          </Form>
        </Col>
      </Row>
  </Container>
    
}

export default App;
