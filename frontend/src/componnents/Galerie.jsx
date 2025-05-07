
import { SceneCanvas } from 'konva/lib/Canvas';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

function Galerie() {
  const {scenario} = useParams()
  const [images, setImages] = useState({})
  const [scenar, setScenar] = useState(scenario) // par défaut

  useEffect(() => {
    fetch('http://localhost:3001/list-images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Erreur lors du chargement des images', err))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/" ><button>Retour</button></Link>
      <h1>Galerie</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Choisir un scénario : </label>
        <select value={scenar} onChange={e => setScenar(e.target.value)}>
          {Object.keys(images).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {(images[scenar] || []).map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`saved-${index}`}
            style={{ width: 200, borderRadius: 8, boxShadow: '0 0 8px #ccc', backgroundColor:'white'}}
          />
        ))}
      </div>
    </div>
  )
}

export default Galerie
