import Card from './Card'

function App() {
  return(
    <>
    <Card pay="Free" price="0" userLim="Single User" availPvt={false} availPhn={false} availSub={false} availRep={false}/>
    <Card pay="Plus" price="9" userLim="5 Users" availPvt={true} availPhn={true} availSub={true} availRep={false}/>
    <Card pay="Premium" price="49" userLim="Multiple Users" availPvt={true} availPhn={true} availSub={true} availRep={true}/>
    </>
  );
}

export default App
