import { RenderRoutes, ROUTES } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
