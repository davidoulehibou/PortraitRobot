const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = 3000

const IMAGE_DIR = path.join(__dirname, 'saved-image')


app.use(cors());

// ... tes routes ici

app.use(express.json({ limit: '10mb' }))

app.get('/api/ping', (req, res) => res.send('pong'));

app.post('/api/save-image', (req, res) => {
  const { imageData, scenario } = req.body

  const base64Data = imageData.replace(/^data:image\/png;base64,/, '')
  const filePath = path.join(__dirname, `/saved-image/${scenario}/${Math.floor(Math.random() * 100000)}.png`)

  fs.writeFile(filePath, base64Data, 'base64', (err) => {
    if (err) {
      console.error('Erreur:', err)
      return res.status(500).send('Erreur serveur')
    }
    res.send('Image enregistrée avec succès !')
  })
})


app.use('/images', express.static(IMAGE_DIR))


// 3. Retourner la liste des images
app.get('/api/list-images', (req, res) => {
    fs.readdir(IMAGE_DIR, { withFileTypes: true }, (err, entries) => {
      if (err) {
        return res.status(500).json({ error: 'Impossible de lire les scénarios' })
      }
  
      const folders = entries.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
  
      const result = {}
  
      folders.forEach(folder => {
        const folderPath = path.join(IMAGE_DIR, folder)
        const files = fs.readdirSync(folderPath)
  
        result[folder] = files.map(file => `http://localhost:${PORT}/images/${folder}/${file}`)
      })
  
      res.json(result)
    })
  })
  

app.listen(PORT, () => {
  console.log(`✅ Backend en écoute sur http://localhost:${PORT}`)
})