const people = require('../data')

const getPeople =  (req,res) => {
  if(!people) {
    return res.status(404).json({ success:false ,msg:'no person with this id'})
  }

  return res.status(200).json({success :true, people:people})

}

const updatePeople = (req,res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find(person => person.id === Number(id))
  if(!person) {
    return res.status(404).json({ success:false ,msg:'no person with this id'})
  }

  const newPeople = people.map(person => {
    if (person.id === Number(id)) {
       person.name = name 
    }
  })

  return res.status(200).json({success :true, people:newPeople})

}

const deletePeople = (req,res) => {
  const person = people.find(person => person.id === Number(req.params.id))
  if(!person) {
    return res.status(404).json({ success:false ,msg:'no person with this id'})
  }

  const newPeople = people.filter(person => person.id !== Number(req.params.id))
  return res.status(200).json({success :true, people:newPeople})
}

module.exports = {getPeople, updatePeople, deletePeople}