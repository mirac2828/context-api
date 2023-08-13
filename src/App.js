import { useContext } from "react";
import { Button, Col, Container, Row,Card } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { TodoContext } from "./todo-context-provider";
import TodoListPage from "./TodoListPage";


function App() {
  const themeContext=useContext(TodoContext)
  const kerem= ()=>{themeContext.setThemeColor('green');
  themeContext.setColor("white")}
  const defne=()=>{themeContext.setThemeColor("blue");
  themeContext.setColor("orange")}
  const naz=()=>{themeContext.setThemeColor("red")}
  
  return (

   <Container className="d-flex flex-column align-items-center justify-content-center">
    
    <Header/>
    <Card style={{textAlign:"center", width: '18rem'  ,color:`${themeContext.color}`  ,backgroundColor:`${themeContext.themeColor}`}}>
      
      <Card.Body    className="mb-4">
        <Card.Title> </Card.Title>
        <Card.Text>
          tema rengi:{themeContext.themeColor}
        </Card.Text>
       
      </Card.Body>
    </Card>
     <Row className="d-flex  "> 
        <Col    > 
        <Button  className="my-3 " onClick={kerem} style={{backgroundColor:"green"}} > buton1 </Button>  
         
         </Col>
         
       
        <Col   >
        <Button  className="my-3"   onClick={defne}> buton2 </Button>   
        
        </Col>
        <Col    > 
        <Button  className="my-3 " onClick={naz} variant="danger"> buton3 </Button>  
         
         </Col>



      </Row>
    
   
      <Footer/>
      <TodoListPage/>
   
    </Container>
    
  );
}

export default App;
