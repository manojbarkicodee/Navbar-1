// import logo from './logo.svg';
import './App.css';
import Logo from "./components/Logo"
import Button from './components/Button';
import Links from "./components/Links"
import styles from "./components/style.module.css"
function App() {
  let data={
    logo:"LOGOBAKERY",
    links:["Services","Projects","About"],
    button:"Contact"
  }
  return (
    <div className={styles.flex}>
      <Logo logo={data.logo}/>
      <Links  links={data.links}/>
      <Button button={data.button}/>
    </div>
  );
}

export default App;
