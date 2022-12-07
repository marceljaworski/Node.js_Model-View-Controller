import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const db = new Low(new JSONFile("./data/db.json"))

export const getAllUser = async (req, res) => {
    await db.read()
    res.status(200).json(db.data.user)
}

export const getUser = async (req, res) => {
    await db.read()
    const value = db.data.user.find(a => a.id === req.params.id)
    res.json(value)
}

export const editUser = async (req, res) => {
    await db.read()

    const index = db.data.user.findIndex(a => a.id === +req.params.id)

    db.data.user[index] = { ...db.data.user[index], ...req.body }

    await db.write()

    res.send(`${req.params.id} updated`);
}

export const deleteUser = async (req, res) => {
    await db.read()
    const index = db.data.user.findIndex(a => a.id === +req.params.id)

    db.data.user.splice(index, 1)

    db.write()

    res.send(`${req.params.id} deleted`)
}
// let id = db.data.user.length;
// let lastId = 0;
// let Id = new Date().toISOString();
export const saveUser = async (req, res) => {
    await db.read()
//    lastId++;
    const nextId = Math.max(...db.data.user.map(a => a.id)) + 1
    
    db.data.user.push({id: nextId, ...req.body})

    db.write()

    res.send(`${nextId}`)
}