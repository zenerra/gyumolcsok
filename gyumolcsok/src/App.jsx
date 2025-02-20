
import { useState, useEffect } from 'react'
import axios from 'axios'
import MyButton from './components/MyButton'
import './App.css'

function App() {
  
  const [fruits, setFruits] = useState([]);
  const [formData, setFormData] = useState({ id: '', nev: '', mennyiseg: '', egysegar: '' });

  useEffect(() => {
    fetchFruits();
  }, []);

  const fetchFruits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fruits');
      setFruits(response.data);
    } catch (error) {
      console.error('Hiba a gyümölcsök lekérésekor:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addFruit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/fruits', formData);
      fetchFruits();
      setFormData({ id: '', nev: '', mennyiseg: '', egysegar: '' });
    } catch (error) {
      console.error('Hiba a gyümölcs hozzáadásakor:', error);
    }
  };

  const updateFruit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/fruits/${formData.id}`, formData);
      fetchFruits();
      setFormData({ id: '', nev: '', mennyiseg: '', egysegar: '' });
    } catch (error) {
      console.error('Hiba a gyümölcs módosításakor:', error);
    }
  };

  const deleteFruit = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/fruits/${id}`);
      fetchFruits();
    } catch (error) {
      console.error('Hiba a gyümölcs törlésekor:', error);
    }
  };

  const fillForm = (id) => {
    const fruit = fruits.find((f) => f.id === id);
    setFormData(fruit);
  };
  return (
    <>
       <form>
        <fieldset>
          <legend>Gyumolcsok kezelese</legend>
          <input type="hidden" name="id" id="id" />
          <input type="text" name='nev' id='nev' placeholder='gyumolcs neve' />
          <input type="number" name="mennyiseg" id="mennyiseg" placeholder='mennyiseg' />
          <input type="number" name="egysegar" id="egysegar" placeholder='egysegar' />
        </fieldset>
        <MyButton onClick={addFruit}>Küldés</MyButton>
        <MyButton onClick={updateFruit}>Módosítás</MyButton>
        <MyButton onClick={deleteFruit}>Torles</MyButton>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Gyumolcs</th>
            <th>Mennyiseg</th>
            <th>Egysegar</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map(({ id, nev, mennyiseg, egysegar }) => (
            <tr key={id}>
              <td>{nev}</td>
              <td>{mennyiseg}</td>
              <td>{egysegar}</td>
              <td><MyButton onClick={() => fillForm(id)}>Módosít</MyButton></td>
              <td><MyButton onClick={() => deleteFruit(id)}>Törlés</MyButton></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
