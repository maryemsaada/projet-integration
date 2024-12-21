import './App.css';
import {Route , Routes} from 'react-router-dom'
import Login from "./Components/Auth/Login"
import DashboardRh from "./Components/Users/RH/DashboardRh"
import DashboardGCommande from './Components/Users/G_commande/DashboardGCommande';
import AddCommande from './Components/Users/G_commande/AddCommande';
import AddFournisseur from './Components/Users/G_Fournisseur/AddFournisseur';
import ModifierFournisseur from './Components/Users/G_Fournisseur/ModifierFournisseur';
import ModifierCommande from './Components/Users/G_commande/ModifierCommande';
import DashboardGTranche from './Components/Users/G_commande/DashboardGTranche';
import DashboardGStock from './Components/Users/G_stock/DashboardGStock';
import AddProduit from './Components/Users/G_stock/AddProduit';
import ModifierProduit from './Components/Users/G_stock/ModifierProduit';
import DashboardGFournisseur from './Components/Users/G_Fournisseur/DashboardGFournisseur';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route extact path="/" element={<Login />}/>
      <Route path="/Dashboard-RH" element={<DashboardRh />}/>
      <Route path ="/Dashboard-commande" element= {<DashboardGCommande/>}/>
      <Route path ="/Add-commande" element= {<AddCommande/>}/>
      <Route path ="/tranche" element= {<DashboardGTranche/>}/>
      <Route path="/Add-fournisseur" element= {<AddFournisseur/>}/>
      <Route path ="/Modifier-fournisseur/:id" element= {<ModifierFournisseur/>}/>
      <Route path ="/Modifier-commande" element= {<ModifierCommande/>}/>
      <Route path= "/Dashboard-Fournisseur" element ={<DashboardGFournisseur/>}/>
      <Route path= "/Dashboard-stock" element ={<DashboardGStock/>}/>
      <Route path="/Add-produit" element= {<AddProduit/>}/>
      <Route path="/Modifier-produit/:id" element= {<ModifierProduit/>}/>

    </Routes>
    </div>
  );
}

export default App;
