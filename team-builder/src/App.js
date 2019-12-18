import React, {useState} from 'react';
import MemberCard from './MemberCard';
import MemberForm from './Form';
import './App.css';

function App() {
 
  const [teamMember, setNewMember] = useState([
    {
      id:"1",
      name:"Lance",
      email:"lance.email",
      role:"React Dev"
    },
    {
      id:"2",
      name:"Ance",
      email:"ance email",
      role:"Beact Dev"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: `${teamMember.length+1}`,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setNewMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <div>
        <MemberForm setNewMember={addNewMember}/>
      </div>
      <div className="w-50 m-auto">
        {teamMember.map(e => ( 
        <MemberCard key={e.id} name={e.name} email={e.email} role={e.role}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
